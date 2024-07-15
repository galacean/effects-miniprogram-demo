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

import { AsyncAPI, SyncAPI } from "./types";

/**
 * ### 监听罗盘数据变化事件
 *
 * 接口调用后会自动开始监听，可使用 tt.stopCompass 停止监听
 *
 * 罗盘数据会在用户手机如下操作发生改变(频率 5 次/秒)
 *  - 朝向变化
 *  - 加速前进
 *  - 加速后退
 *  - 摇一摇
 */
export const onCompassChange: SyncAPI<
  [
    (res: {
      /** 方向 */
      direction?: number;
    }) => void
  ]
>;

/**
 * ### 取消监听罗盘数据变化事件
 */
export const offCompassChange: SyncAPI<[(...args: any[]) => void]>;

/**
 * ### 开始监听罗盘数据
 *
 * 罗盘数据会在用户手机如下操作发生改变(频率 5 次/秒)
 *  - 朝向变化
 *  - 加速前进
 *  - 加速后退
 *  - 摇一摇
 */
export const startCompass: AsyncAPI;

/**
 * ### 停止监听罗盘数据
 */
export const stopCompass: AsyncAPI;
