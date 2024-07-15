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
 * 创建并返回内部 audio 上下文 innerAudioContext 实例，通过它能够操作音频播放。
 */
export const createInnerAudioContext: SyncAPI<[], InnerAudioContext>;

interface InnerAudioContext {
  /** 音频资源地址 */
  src: string;
  /** 是否自动播放 */
  autoplay: boolean;
  /** 是否自动循环 */
  loop: boolean;
  /** 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音 */
  obeyMuteSwitch: boolean;
  /** 当前音频总时长(单位 s)，只有在当前有合法的 src 时返回，只读 */
  duration: number;
  /** 当前音频进度(单位 s)，只有在当前有合法的 src 时返回，只读 */
  currentTime: number;
  /** 当前音频是否处于暂停状态，只读 */
  paused: boolean;
  /** 当前音频已缓冲部分，单位百分比，仅保证当前播放时间点到此时间点内容已缓冲，只读	*/
  buffered: number;
  /** 当前音量，范围 0 ～ 1，只读 */
  volume: number;
  /** 播放 */
  play: CallableFunction;
  /** 暂停 */
  pause: CallableFunction;
  /** 停止播放。停止后再次播放时从头开始播放 */
  stop: CallableFunction;
  /** 销毁当前实例。销毁后该实例将不存在，如需播放需要再次创建 */
  destroy: CallableFunction;
  /** 跳转到指定位置播放 */
  seek: (
    /** 跳转的时间（单位：s） */
    options: number
  ) => void;
  /** 监听音频进入可以播放状态，但不保证后面可以流畅播放 */
  onCanplay: (callback: () => void) => void;
  /** 监听音频播放事件 */
  onPlay: (callback: () => void) => void;
  /** 监听音频暂停事件 */
  onPause: (callback: () => void) => void;
  /** 监听音频停止事件 */
  onStop: (callback: () => void) => void;
  /** 监听自然播放结束事件 */
  onEnded: (callback: () => void) => void;
  /** 监听音频进度更新事件 */
  onTimeUpdate: (callback: () => void) => void;
  /** 监听音频播放错误事件 */
  onError: (callback: () => void) => void;
  /** 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 */
  onWaiting: (callback: () => void) => void;
  /** 监听音频开始进行 seek 操作的事件 */
  onSeeking: (callback: () => void) => void;
  /** 监听音频完成 seek 操作的事件 */
  onSeeked: (callback: () => void) => void;
  /** 取消监听音频进入可以播放状态 */
  offCanplay: (callback: () => void) => void;
  /** 取消监听音频播放事件 */
  offPlay: (callback: () => void) => void;
  /** 取消监听音频暂停事件 */
  offPause: (callback: () => void) => void;
  /** 取消监听音频停止事件 */
  offStop: (callback: () => void) => void;
  /** 取消监听自然播放结束事件 */
  offEnded: (callback: () => void) => void;
  /** 取消监听音频进度更新事件 */
  offTimeUpdate: (callback: () => void) => void;
  /** 取消监听音频播放错误事件 */
  offError: (callback: () => void) => void;
  /** 取消监听等待事件 */
  offWaiting: (callback: () => void) => void;
  /** 取消监听音频开始进行 seek 操作的事件 */
  offSeeking: (callback: () => void) => void;
  /** 取消监听音频完成 seek 操作的事件 */
  offSeeked: (callback: () => void) => void;
}
