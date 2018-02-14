/*
* MIT License
*
* Copyright (c) 2018 Dimitar Nonov
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

const LinkedList = require('../src/linkedList');
const jasmine = require('jasmine');

describe('LinkedList method', () => {
  it('insert new node', () => {
    let testList = new LinkedList();
    expect(testList.insert(1, 2)).toBe(false);
    testList.insert(1);
    expect(testList.toArray()[0]).toBe(1);
    testList.insert(2, 1);
    expect(testList.toArray()[1]).toBe(2);
    testList.insert(3, 2);
    expect(testList.toArray()[2]).toBe(3);
    expect(testList.insert(1, 78)).toBe(false); 
  });
  
  it('find node', () => {
    let Node = {};
    let testList = new LinkedList();
    testList.insert(1);
    testList.insert(2, 1);
    testList.insert(3, 2);
    expect(testList.GetElement('pig')).toBeUndefined(); 
    expect(testList.GetElement(23)).toBeUndefined(); 
    expect(testList.GetElement(3)).toBe(3);
    expect(testList.GetElement(2)).toBe(2);
    expect(testList.GetElement(1)).toBe(1);
  });
  
  it('returns the LinkedList in form of array', () => {
    let testList = new LinkedList();
    testList.insert(1);
    testList.insert(2, 1);
    testList.insert(3, 2);
    expect(testList.toArray()).toEqual([1, 2, 3]);
  });
  
  it('removes node form the LinkedList', () => {
    let testList = new LinkedList();
    expect(testList.remove(1)).toBe(false);
    testList.insert(1);
    testList.insert(2, 1);
    testList.insert(3, 2);
    testList.remove(1);
    expect(testList.toArray()).toEqual([2, 3]);
  });
});