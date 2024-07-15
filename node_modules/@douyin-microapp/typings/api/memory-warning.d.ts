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
 * 监听内存不足的告警事件
 *
 * 当手机内存占用过高时，触发回调函数。该事件不会杀掉小程序, 建议开发者可以在接受到告警后释放不必要的资源
 *
 * Android 下有告警等级划分。
 */
export const onMemoryWarning: SyncAPI<
  [
    callback: (res: {
      /**
       * Android 机器上有此字段
       * - 5 TRIM_MEMORY_RUNNING_MODERATE
       * - 10 TRIM_MEMORY_RUNNING_LOW
       * - 15 TRIM_MEMORY_RUNNING_CRITICAL
       */
      level?: number;
    }) => void
  ]
>;
