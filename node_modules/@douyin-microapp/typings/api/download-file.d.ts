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
 * ### 客户端直接发起一个 HTTPS GET 请求, 下载网络文件到本地临时目录
 *
 * 单次下载允许的最大文件为 50MB
 *
 * 网络相关的 API 在使用前需要配置域名白名单。请参考网络请求使用说明
 */
export const downloadFile: AsyncAPIWithHandler<
  {
    /** 文件地址 */
    url: string;
    /** 请求 Header */
    header?: Record<string, string>;
  },
  {
    /** 文件本地路径 */
    tempFilePath: string;
    /** 返回 HTTP 状态码 */
    statusCode: number;
  },
  DownloadTask
>;

interface DownloadTask {
  /** 中断下载任务 */
  abort: () => void;

  /** 监听下载任务 */
  onProgressUpdate: (
    callback: (res: {
      /** 下载进度 */
      progress: number;
      /** 已经下载的数据长度，单位byte */
      totalBytesWritten: number;
      /** 预期需要下载的数据总长度，单位byte */
      totalBytesExpectedToWrite: number;
    }) => void
  ) => void;
}
