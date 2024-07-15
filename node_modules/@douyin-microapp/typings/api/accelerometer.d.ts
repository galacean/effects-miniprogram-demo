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
 * ### 开始监听加速度数据
 * 具体加速度数据通过注册tt.onAccelerometerChange的回调方法来获取
 */
export const startAccelerometer: AsyncAPI;

/**
 * ### 停止监听加速度数据
 */
export const stopAccelerometer: AsyncAPI;

/**
 * ### 监听加速度数据。
 * 回调的频率为 5 次 / 秒，暂不支持设置。接口调用后会开始监听，可通过tt.onStopAccelerometer停止监听。
 */
export const onAccelerometerChange: SyncAPI<
  [
    callback: (res: {
      /** X 轴数据 */
      x: number;
      /** Y 轴数据 */
      y: number;
      /** Z 轴数据 */
      z: number;
    }) => void
  ]
>;
