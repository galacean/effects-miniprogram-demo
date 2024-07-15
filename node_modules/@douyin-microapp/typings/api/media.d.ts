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

import { AsyncAPI } from "./types";

/** 选择视频或图片 */
export const chooseMedia: AsyncAPI<
  {
    /** 最多可以选择的文件个数 */
    count?: number;
    /** 支持的媒体类型 */
    mediaType?: ("image" | "video")[];
    /** 图片和视频选择的来源 */
    sourceType?: ("album" | "camera")[];
    /** 录制视频的最大时长 */
    maxDuration?: number;
    /** 仅对 mediaType 为 image 时有效，是否压缩所选文件,默认压缩 */
    sizeType?: ("compressed" | "original")[];
    /** 仅在 sourceType 为 camera 时生效，'front' 使用前置摄像头，'back' 使用后置摄像头 */
    camera?: "front" | "back";
  },
  {
    /** 本地临时文件列表 */
    tempFiles: {
      /** 本地临时文件路径 (本地路径) */
      tempFilePath: string;
      /** 本地临时文件大小，单位 B */
      size: number;
      /** 媒体类型 */
      mediaType: string;
      /** 视频的时间长度 */
      duration?: number;
      /** 视频的高度 */
      height?: number;
      /** 视频的宽度 */
      width?: number;
    }[];
  }
>;
