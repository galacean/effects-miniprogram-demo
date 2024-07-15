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
 * ### 开发者可以在小程序中使用激励视频广告获得收入。
 * 具体接入方式可参考[抖音端激励视频广告接入说明](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/functional-plug-in/advertising-component-access-guide/vibrato-end-video-advertising-incentives/)
 */
export const createRewardedVideoAd: SyncAPI<
  [
    {
      /** 广告位 id */
      adUnitId: string;
    }
  ],
  RewardedVideoAd
>;

type Callback = (...args: any[]) => any;

interface RewardedVideoAd {
  /** 广告创建后默认是隐藏的，可以通过该方法显示广告 */
  show: () => Promise<any>;
  /** 当广告素材加载出现错误时，可以通过 load 方法手动加载 */
  load: () => Promise<any>;
  /** 绑定广告 load 事件的监听器 */
  onLoad: (fn: Callback) => void;
  /** 解除绑定 load 事件的监听器 */
  offLoad: (fn: Callback) => void;
  /** 绑定 error 事件的监听器 */
  onError: (fn: (data: { errMsg: string; errCode: number }) => void) => void;
  /** 解除绑定 error 事件的监听器 */
  onClose: (fn: (data: { isEnded: boolean }) => void) => void;
  /** 绑定 close 事件的监听器 */
  offClose: (fn: Callback) => void;
}
