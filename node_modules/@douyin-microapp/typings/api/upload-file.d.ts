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

import { AsyncAPIWithHandler } from "./types";

/**
 * ### 将本地文件上传到网络
 *
 * **在使用前需要配置域名白名单**
 *
 * 客户端发起一个 HTTPS POST 请求，其中 Content-Type 为 `multipart/form-data`
 */
export const uploadFile: AsyncAPIWithHandler<
  {
    /** 目标地址 */
    url: string;
    /** 本地文件路径 */
    filePath: string;
    /** HTTP 请求的文件名 */
    name: string;
    /** 请求 Header ，不能设置 referer 和 user-agent */
    header?: Record<string, string>;
    /** 额外参数 */
    formData?: Record<string, string>;
  },
  {
    /** 返回数据 */
    data: string;
    /** 返回 HTTP 状态码 */
    statusCode: number;
  },
  UpdateTask
>;

interface UpdateTask {
  onProgressUpdate: (
    callback: (data: {
      /** 上传进度 */
      progress: number;
      /** 已经上传的数据长度，单位byte */
      totalBytesSent: number;
      /** 预期需要上传的数据总长度，单位byte */
      totalBytesExpectedToSend: number;
    }) => void
  ) => void;

  /** 中断上传任务 */
  abort: () => void;
}
