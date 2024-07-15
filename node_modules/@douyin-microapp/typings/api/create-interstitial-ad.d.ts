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
 * ### 创建插屏广告组件
 *
 * 开发者可以在小程序中使用插屏广告获得收入。具体接入方式可参考 [抖音端插屏广告-接入指南](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/functional-plug-in/advertising-component-access-guide/chaping/)
 */
export const createInterstitialAd: SyncAPI<
  [{ adUnitId: string }],
  InterstitialAd
>;

type Callback = (...args: any[]) => any;

interface InterstitialAd {
  /** 显示插屏广告 */
  show: () => Promise<any>;
  /** 加载插屏广告 */
  load: () => Promise<any>;
  /** 销毁插屏广告实例 */
  destroy: () => Promise<any>;
  /** 监听插屏广告加载事件 */
  onLoad: (fn: Callback) => void;
  /** 取消监听插屏广告加载事件 */
  offLoad: (fn: Callback) => void;
  /** 监听插屏错误事件 */
  onError: (fn: (data: { errMsg: string; errCode: number }) => void) => void;
  /** 取消监听插屏错误事件 */
  offError: (fn: Callback) => void;
  /** 监听插屏广告关闭事件 */
  onClose: (fn: (data: any) => void) => void;
  /** 取消监听插屏广告关闭事件 */
  offClose: (fn: Callback) => void;
}
