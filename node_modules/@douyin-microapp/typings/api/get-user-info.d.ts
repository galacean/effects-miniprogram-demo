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

interface UserInfo {
  /** 用户头像 */
  avatarUrl: string;
  /** 用户名 */
  nickName: string;
  /** 用户性别，0: 未知；1:男性；2:女性 */
  gender: number;
  /** 用户城市 */
  city: string;
  /** 用户省份 */
  province: string;
  /** 用户国家 */
  country: string;
  /** 用户语言，目前为空 */
  language: string;
}

/**
 * ### 获取已登录用户的基本信息或特殊信息
 *
 * 首次使用的用户会弹出授权提示窗，若用户同意，则会返回用户的真实数据。
 */
export const getUserInfo: AsyncAPI<
  {
    /** 是否需要返回敏感数据 */
    withCredentials?: boolean;
  },
  {
    /** "getUserInfo:ok" */
    errMsg: string;
    /** userInfo 的 JSON 字符串形式 */
    rawData: string;
    /** 用户信息 */
    userInfo: UserInfo;
    /** 用于校验用户信息是否被篡改，请参考文档 */
    signature?: string;
    /** 包括敏感信息（如 openId）在内的已加密用户数据，如需解密数据请参考文档 */
    encryptedData?: string;
    /** 加密算法参数 */
    iv?: string;
  }
>;
