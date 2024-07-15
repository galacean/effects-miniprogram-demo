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
 * ### 判断小程序的 API，回调，参数，组件等是否在当前版本可用。
 * ```
 * // 对象的属性或方法
 * tt.canIUse("UpdateManager");
 * tt.canIUse("Stats.isDirectory");
 *
 * // 接口参数、回调或者返回值
 * tt.canIUse("exitMiniProgram");
 * tt.canIUse("getLaunchOptionsSync.return.path");
 * tt.canIUse("getSystemInfo.success.screenWidth");
 * tt.canIUse("showToast.object.title");
 * tt.canIUse("onCompassChange.callback.direction");
 * tt.canIUse("request.object.method.GET");
 *
 * // 组件的属性
 * tt.canIUse("swiper");
 * tt.canIUse("text.selectable");
 * tt.canIUse("button.open-type.contact");
 * ```
 */
export const canIUse: SyncAPI<[schema: string], boolean>;
