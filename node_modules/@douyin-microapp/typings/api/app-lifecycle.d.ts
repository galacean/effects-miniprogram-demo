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
 * 监听小程序切前台事件。该事件与 App.onShow 的回调参数一致。
 */
export const onAppShow: SyncAPI<
  [
    (res: {
      /** 小程序切前台的路径 (代码包路径) */
      path: string;
      /** 小程序切前台的场景值 */
      scene: number;
      /** 小程序切前台的 query 参数 */
      query: object;
      /** 来源信息，从另一个小程序或 App 进入小程序时返回，否则返回 {}。 */
      referrerInfo: {
        /** 来源小程序的 appId */
        appId: string;
        /** 来源小程序传过来的数据 */
        extraData: object;
      };
    }) => void
  ]
>;

/**
 * 取消监听小程序进前台事件。
 */
export const offAppShow: SyncAPI<[CallableFunction]>;

/**
 * 监听小程序切后台事件。该事件与 App.onHide 的回调时机一致。
 */
export const onAppHide: SyncAPI<[CallableFunction]>;

/**
 * 取消监听小程序切后台事件。
 */
export const offAppHide: SyncAPI<[CallableFunction]>;

/**
 * 监听小程序错误事件，如脚本错误或 API 调用报错等。该事件与 App.onError 的回调时机与参数一致。
 */
export const onError: SyncAPI<
  [
    (
      /** 错误信息 */
      error: string
    ) => void
  ]
>;

/**
 * 取消监听小程序错误事件。
 */
export const offError: SyncAPI<[callback?: CallableFunction]>;

/**
 * 取消监听小程序页面不存在。
 */
export const onPageNotFound: SyncAPI<
  [
    (res: {
      /** 小程序启动的不存在页面的路径 (代码包路径) */
      path: string;
      /** 是否本次启动的首个页面 */
      isEntryPage: boolean;
      /** 小程序启动的不存在页面的 query 参数 */
      query: object;
    }) => void
  ]
>;

/**
 * 取消监听小程序页面不存在事件。
 */
export const offPageNotFound: SyncAPI<[CallableFunction]>;
