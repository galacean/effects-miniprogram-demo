/*! *****************************************************************************
Copyright (c) 2022 Bytedance, Inc. All rights reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*******************************************************************************/

import { SyncAPI } from "./types";

/**
 * 获取左上角logo/返回位置+ 右上角反馈+more+close布局位置信息。坐标信息以屏幕左上角为原点。
 */
export const getCustomButtonBoundingClientRect: SyncAPI<
  [],
  {
    leftIcon: {
      /** 宽度 */
      width: number; // Integer
      /** 高度 */
      height: number; // Integer
      /** 顶部位置 */
      top: number; // Integer
      /** 底部位置 */
      bottom: number; // Integer
      /** 右侧位置 */
      right: number; // Integer
      /** 左侧位置 */
      left: number; // Integer
    };
    capsule: {
      /** 宽度 */
      width: number; // Integer
      /** 高度 */
      height: number; // Integer
      /** 顶部位置 */
      top: number; // Integer
      /** 底部位置 */
      bottom: number; // Integer
      /** 右侧位置 */
      right: number; // Integer
      /** 左侧位置 */
      left: number; // Integer
    };
  }
>;
