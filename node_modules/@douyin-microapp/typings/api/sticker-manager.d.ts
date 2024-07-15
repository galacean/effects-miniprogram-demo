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

export interface WebGLTexture {}
interface StickerProcessor {
  paintToTexture: (
    inputTexture: WebGLTexture,
    outputTexture: WebGLTexture
  ) => void;
}
type Load = SyncAPI<[], {}>;

type OnLoad = SyncAPI<
  [
    /**
     * res 为返回的 StickerProcessor
     */
    (res: StickerProcessor) => void
  ],
  {}
>;

type OnError = SyncAPI<
  [
    /**
     * err 为返回的错误原因
     */
    (err: Error) => void
  ],
  {}
>;

type PaintToTexture = SyncAPI<
  /**
   * 输入纹理和输出纹理对象
   */
  [inputTexture: WebGLTexture, outputTexture: WebGLTexture],
  {}
>;

/** ### 进行网络加载 */
export const load: Load;

/** ### 设置加载完成回调，会返回加载好的贴纸处理器 */
export const onLoad: OnLoad;

/** ### 设置加载失败回调，会返回加载失败的原因 */
export const onError: OnError;

/** ### 将输入纹理通过贴纸处理后绘制到输出纹理上 */
export const paintToTexture: PaintToTexture;

/**
 * ### 创建一个贴纸管理器
 */

export const createStickerManager: SyncAPI<
  [
    /**
     * 请求的贴纸 ID
     */
    stickerId: string
  ],
  {
    load: Load;
    onError: OnError;
    onLoad: OnLoad;
  }
>;
