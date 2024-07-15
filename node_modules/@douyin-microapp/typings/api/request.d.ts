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

interface RequestTask {
  abort: () => void;
}

/**
 * ### 发起一个网络请求
 *
 * 网络相关的 API 在使用前需要配置域名白名单
 */
export const request: AsyncAPIWithHandler<
  {
    /** 请求地址 */
    url: string;
    /**
     * 请求 Header
     *
     * referer 不可设置
     *
     * 默认值 {"content-type": "application/json"} */
    header?: object;
    /** 网络请求方法, 默认值 GET  */
    /** @update 2021.11.29 支持 PATCH  */
    method?: "GET" | "POST" | "OPTIONS" | "PUT" | "HEAD" | "DELETE" | "PATCH";
    /**
     * 请求的参数
     * - POST/PUT/PATCH 请求时, 会附加在 HTTP Entity 里
     * - 非 POST/PUT/PATCH 请求时, 会以 Query 的形式附加在 URL 上
     */
    data?: object | ArrayBuffer;
    /** 期望返回的数据类型, 默认值 json */
    dataType?: string;
    /** 默认值  text */
    responseType?: string;
  },
  {
    /** 返回的 HTTP 状态码 */
    statusCode: number;
    /** 返回的 HTTP Response Header */
    header: Record<string, string>;
    /** 返回的数据，类型取决于 dataType 和 responseType 参数 */
    data: object | string | ArrayBuffer;
  },
  RequestTask
>;
