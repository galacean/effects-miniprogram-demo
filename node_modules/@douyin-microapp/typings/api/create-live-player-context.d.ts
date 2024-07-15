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
 * ### 根据 <live-player /> 组件 id 创建可以控制组件的上下文 LivePlayerContext 对象
 */
export const createLivePlayerContext: SyncAPI<
  | [
      /** <live-player /> 组件的 id */
      id: string,
      /** 在自定义组件下，当前组件实例的 this，以操作组件内 <live-player /> 组件 */
      component: object
    ]
  | [
      /** <live-player /> 组件的 id */
      id: string
    ],
  LivePlayerContext
>;

interface LivePlayerContext {
  /** 用来控制进入全屏时画面朝向 0代表默认值，正常竖向 90代表屏幕逆时针90度 -90代表屏幕顺时针90度 */
  direction: number;
  /** 播放 */
  play: CallableFunction;
  /** 停止 */
  stop: CallableFunction;
  /** 静音 */
  mute: CallableFunction;
  /** 取消静音 */
  unmute: CallableFunction;
  /** 进入全屏 */
  requestFullScreen: CallableFunction;
  /** 退出全屏 */
  exitFullScreen: CallableFunction;
}
