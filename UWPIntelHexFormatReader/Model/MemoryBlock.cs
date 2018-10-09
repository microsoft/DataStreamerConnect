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

namespace IntelHexFormatReader.Model
{
    /// <summary>
    /// Logical representation of a MemoryBlock (an ordered collection of memory cells and registers).
    /// </summary>
    public class MemoryBlock
    {
        // CS & IP registers for 80x86 systems.

        /// <summary>
        /// Code Segment register (16-bit).
        /// </summary>
        public ushort CS { get; set; }

        /// <summary>
        /// Instruction Pointer register (16-bit).
        /// </summary>
        public ushort IP { get; set; }

        // EIP register for 80386 and higher CPU's.

        /// <summary>
        /// Extended Instruction Pointer register (32-bit).
        /// </summary>
        public uint EIP { get; set; }

        /// <summary>
        /// Returns the index of the highest modified cell.
        /// </summary>
        public int HighestModifiedOffset
        {
            get { return Cells.LastIndexOf(cell => cell.Modified); }
        }

        /// <summary>
        /// Returns the size of this memory, in bytes.
        /// </summary>
        public int MemorySize
        {
            get { return Cells.Length; }
        }

        /// <summary>
        /// Memory cells in this memory block.
        /// </summary>
        public MemoryCell[] Cells { get; set; }

        
        /// <summary>
        /// Construct a new MemoryBlock.
        /// </summary>
        /// <param name="memorySize">The size of the MemoryBlock to instantiate.</param>
        /// <param name="fillValue">Default cell initialization / fill value.</param>
        public MemoryBlock(int memorySize, byte fillValue = 0xff)
        {
            Cells = new MemoryCell[memorySize];
            for (var i = 0; i < memorySize; i++)
                Cells[i] = new MemoryCell(i) { Value = fillValue };
        }
    }
}
