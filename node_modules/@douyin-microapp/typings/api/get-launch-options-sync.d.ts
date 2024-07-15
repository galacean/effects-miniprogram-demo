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
 * ### 获取小程序启动时的参数
 *
 * 其值与 App.onLaunch 方法传入的参数一致，并且不会随着小程序使用而发生变化
 */
export const getLaunchOptionsSync: SyncAPI<
  [],
  {
    /** 小程序启动页面路径 */
    path: string;
    /** 小程序启动场景值 */
    scene: string;
    /** 小程序启动参数 */
    query: Record<string, unknown>;
    /**
     * 来源信息
     * 从另一个小程序进入小程序时返回。否则返回 {}
     */
    referrerInfo: Record<string, unknown>;
    /**
     * 唤起小程序页面的来源方式
     * - 10 表示用户点击小程序入口 schema
     * - 0 表示其它方式，比如前后台切换
     */
    showFrom?: 0 | 10;
  }
>;
