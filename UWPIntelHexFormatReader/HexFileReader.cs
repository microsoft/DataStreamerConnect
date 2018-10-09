/*
    Copyright(c) Microsoft Corp. All rights reserved.
    
    The MIT License(MIT)
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files(the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions :
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using IntelHexFormatReader.Model;
using Windows.Storage;

namespace IntelHexFormatReader
{
    public class HexFileReader
    {
        private IEnumerable<string> hexRecordLines;
        private int memorySize;

        #region Constructors

        public HexFileReader(string fileName, int memorySize)
        {
            var uri = new Uri(fileName);
            var file =  StorageFile.GetFileFromApplicationUriAsync(uri).GetAwaiter().GetResult();
            if (file == null)
            {
                throw new ArgumentException(string.Format("File {0} does not exist!", fileName));
            }
            var stream = file.OpenStreamForReadAsync().GetAwaiter().GetResult();

            List<string> lines = new List<string>();
            using (StreamReader sr = new StreamReader(stream))
            {
                while (sr.Peek() >= 0)
                {
                    string line = sr.ReadLine();
                    lines.Add(line);
                }
            }

            Initialize(lines, memorySize);
        }

        public HexFileReader(IEnumerable<string> hexFileContents, int memorySize)
        {
            Initialize(hexFileContents, memorySize);
        }

        #endregion

        private void Initialize(IEnumerable<string> lines, int memSize)
        {
            var fileContents = lines as IList<string> ?? lines.ToList();
            if (!fileContents.Any()) throw new ArgumentException("Hex file contents can not be empty!");
            if (memSize <= 0) throw new ArgumentException("Memory size must be greater than zero!");
            hexRecordLines = fileContents;
            memorySize = memSize;
        }

        /// <summary>
        /// Parse the currently loaded HEX file contents.
        /// </summary>
        /// <returns>A MemoryBlock representation of the HEX file.</returns>
        public MemoryBlock Parse()
        {
            return ReadHexFile(hexRecordLines, memorySize);
        }

        private static MemoryBlock ReadHexFile(IEnumerable<string> hexRecordLines, int memorySize)
        {
            var result = new MemoryBlock(memorySize);

            var baseAddress = 0;
            var encounteredEndOfFile = false;
            foreach (var hexRecordLine in hexRecordLines)
            {
                var hexRecord = HexFileLineParser.ParseLine(hexRecordLine);
                switch (hexRecord.RecordType)
                {
                    case RecordType.Data:
                        {
                            var nextAddress = hexRecord.Address + baseAddress;
                            for (var i = 0; i < hexRecord.ByteCount; i++)
                            {
                                if (nextAddress + i > memorySize)
                                    throw new IOException(
                                        string.Format("Trying to write to position {0} outside of memory boundaries ({1})!",
                                            nextAddress + i, memorySize));

                                var cell = result.Cells[nextAddress + i];
                                cell.Value = hexRecord.Bytes[i];
                                cell.Modified = true;
                            }
                            break;
                        }
                    case RecordType.EndOfFile:
                        {
                            hexRecord.Assert(rec => rec.Address == 0, "Address should equal zero in EOF.");
                            hexRecord.Assert(rec => rec.ByteCount == 0, "Byte count should be zero in EOF.");
                            hexRecord.Assert(rec => rec.Bytes.Length == 0, "Number of bytes should be zero for EOF.");
                            hexRecord.Assert(rec => rec.CheckSum == 0xff, "Checksum should be 0xff for EOF.");
                            encounteredEndOfFile = true;
                            break;
                        }
                    case RecordType.ExtendedSegmentAddress:
                        {
                            hexRecord.Assert(rec => rec.ByteCount == 2, "Byte count should be 2.");
                            baseAddress = (hexRecord.Bytes[0] << 8 | hexRecord.Bytes[1]) << 4;
                            break;
                        }
                    case RecordType.ExtendedLinearAddress:
                        {
                            hexRecord.Assert(rec => rec.ByteCount == 2, "Byte count should be 2.");
                            baseAddress = (hexRecord.Bytes[0] << 8 | hexRecord.Bytes[1]) << 16;
                            break;
                        }
                    case RecordType.StartSegmentAddress:
                        {
                            hexRecord.Assert(rec => rec.ByteCount == 4, "Byte count should be 4.");
                            hexRecord.Assert(rec => rec.Address == 0, "Address should be zero.");
                            result.CS = (ushort)(hexRecord.Bytes[0] << 8 + hexRecord.Bytes[1]);
                            result.IP = (ushort)(hexRecord.Bytes[2] << 8 + hexRecord.Bytes[3]);
                            break;
                        }
                    case RecordType.StartLinearAddress:
                        hexRecord.Assert(rec => rec.ByteCount == 4, "Byte count should be 4.");
                        hexRecord.Assert(rec => rec.Address == 0, "Address should be zero.");
                        result.EIP =
                            (uint)(hexRecord.Bytes[0] << 24) + (uint)(hexRecord.Bytes[1] << 16)
                            + (uint)(hexRecord.Bytes[2] << 8) + hexRecord.Bytes[3];
                        break;
                }
            }
            if (!encounteredEndOfFile) throw new IOException("No EndOfFile marker found!");
            return result;
        }
    }
}
