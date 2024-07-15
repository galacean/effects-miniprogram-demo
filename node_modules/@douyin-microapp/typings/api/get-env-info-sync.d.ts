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
 * 获取版本信息和环境变量。
 *
 * @description 整合 tt.env 和 getAppInfoSync, plugin 为预留字段
 */
export const getEnvInfoSync: SyncAPI<
  [],
  {
    /** 小程序信息 */
    microapp: {
      /** 小程序版本号 */
      mpVersion: string;
      /** 小程序环境 */
      envType: string;
      /** 小程序appId */
      appId: string;
    };
    /** 插件信息 */
    plugin: Record<string, unknown>;
    /** 通用参数 */
    common: {
      /** 用户数据存储的路径 */
      USER_DATA_PATH: string;
      /** 校验白名单属性中的appInfoLaunchFrom后返回额外信息 */
      location: string | undefined;
      launchFrom: string | undefined;
      schema: string | undefined;
    };
  }
>;
