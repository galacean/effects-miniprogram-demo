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
 * 获取全局唯一的背景音频管理器 BackgroundAudioManager。该 api 多次调用时返回的是同一个实例，在多页面使用时，会操作到同一个上下文对象。
 */
export const getBackgroundAudioManager: SyncAPI<[], BackgroundAudioManager>;

interface BackgroundAudioManager {
  /** 音频源地址, 默认为空字符串，当设置了新的 src 时，会自动开始播放，仅支持临时路径（如通过下载到本地的音频地址）、网络地址(需在小程序开发者平台配置域名白名单)，所支持的格式同系统音频播放器 */
  src: string;
  /** 开始播放的位置（单位：s） */
  startTime: number;
  /** 音频标题, 用于原生音频播放器音频标题 */
  title: string;
  /** 专辑名 */
  epname: string;
  /** 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值 */
  singer: string;
  /** 封面图 URL，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图 */
  coverImgUrl: string;
  /** 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值 */
  webUrl: string;
  /** 音频协议。默认值为 http，设置 hls 可以支持播放 HLS 协议的直播音频 */
  protocol: string;
  /** 设置点击悬浮控件/通知栏跳转当前小程序指定页面，数据格式为 {path:"(音乐播放路径)",query:{name:''}} */
  audioPage: {
    path: string;
    query: object;
  };
  /** 当前音频总时长(单位 s)，只读 */
  duration: number;
  /** 当前音频进度(单位 s)，只读 */
  currentTime: number;
  /** 当前音频是否处于暂停状态，只读 */
  paused: boolean;
  /** 当前音频已缓冲部分(单位 s)，只读 */
  buffered: number;
  /** 播放 */
  play: CallableFunction;
  /** 暂停 */
  pause: CallableFunction;
  /** 停止播放。停止后再次播放时从头开始播放 */
  stop: CallableFunction;
  /** 当前音频跳转到指定位置（单位：s），并开始播放 */
  seek: (
    /** 跳转的时间（单位：s） */
    options: number
  ) => void;
  /** 监听音频进入可以播放状态，但不保证后面可以流畅播放 */
  onCanplay: (callback: () => void) => void;
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
}
