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
 * ### 获取全局唯一的版本更新管理器，用于管理小程序更新
 */
export const getUpdateManager: SyncAPI<
  [],
  {
    /** 当新版本下载完成，调用该方法会强制当前小程序应用上新版本并重启 */
    applyUpdate: CallableFunction;
    /** 当向字节小程序后台请求完新版本信息，会进行回调 */
    onCheckForUpdate: onCheckForUpdateCallback;
    /** 当新版本下载失败，会进行回调 */
    onUpdateFailed: onUpdateFailedCallback;
    /** 当新版本下载完成，会进行回调 */
    onUpdateReady: CallableFunction;
  }
>;

type onCheckForUpdateCallback = (
  fn: (res: {
    /** 是否有新的版本 */
    hasUpdate: boolean;
  }) => void
) => void;

type onUpdateFailedCallback = (
  fn: (
    /** 版本更新失败原因 */
    err: string
  ) => void
) => void;
