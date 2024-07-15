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
 * ### 根据 `<video />` 组件 `id` 创建可以控制组件的上下文 `VideoContext` 对象
 */
export const createVideoContext: SyncAPI<
  [id: string, component?: object],
  VideoContext
>;

interface VideoContext {
  /** 播放视频 */
  play: () => void;

  /** 暂停视频 */
  pause: () => void;
  /** 停止视频 */

  stop: () => void;
  /**
   * 视频点播
   *
   * @param position 跳转到指定位置, 单位为秒
   */
  seek: (position: number) => void;

  /** 进入全屏 */
  requestFullScreen: () => void;

  /** 退出全屏 */
  exitFullScreen: () => void;
}
