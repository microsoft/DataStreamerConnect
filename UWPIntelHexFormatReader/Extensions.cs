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
using System.IO;
using System.Linq;
using IntelHexFormatReader.Model;

namespace IntelHexFormatReader
{
    public static class Extensions
    {
        /// <summary>
        /// Verify an assertion about an IntelHexRecord, and throw an IOException if the predicate is not true.
        /// </summary>
        /// <param name="record">The record to verify the assertion for.</param>
        /// <param name="predicate">The assertion to verify.</param>
        /// <param name="message">The message to show in the exception if the assertion fails.</param>
        public static void Assert(this IntelHexRecord record, Func<IntelHexRecord, bool> predicate, string message)
        {
            if (!predicate(record))
                throw new IOException(
                    string.Format("{0} -- record {1}!", message, record));
        }

        /// <summary>
        /// Returns the index of the last item in the list for which a certain predicate is true.
        /// 
        /// Returns -1 when no item is found for which the predicate is true.
        /// </summary>
        /// <param name="source">The list of cells to consider.</param>
        /// <param name="predicate">The predicate to test.</param>
        /// <returns></returns>
        public static int LastIndexOf(this MemoryCell[] source, Func<MemoryCell, bool> predicate)
        {
            var index = source.Length - 1;
            foreach (var item in source.Reverse())
            {
                if (predicate.Invoke(item)) return index;
                index--;
            }
            return -1;
        }
    }
}
