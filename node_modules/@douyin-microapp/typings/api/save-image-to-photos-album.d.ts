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

/**
 * ### 保存图片到系统相册
 * 该 API 需要用户授权方可调用，详细信息可参考[用户授权](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/other/user-authorization/)，可在 [tt.authorize](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/open-interface/authorization/tt-authorize/) 中查看相关错误码信息。
 */
export const saveImageToPhotosAlbum: AsyncAPI<{
  /** 图片文件路径，可以是临时文件路径(如调用 tt.downloadFile 或 tt.compressImage 等 API 返回的路径）也可以是永久文件路径，不支持网络路径 */
  filePath: string;
}>;
