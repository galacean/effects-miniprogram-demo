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
********************************************************************************/

import { AsyncAPI } from "../types";

interface LiveUserInfo {
  /** 用户的open UID */
  openUID: string;
  /** 用户的加密后昵称 */
  secNickname: string;
  /** 用户的加密后头像URL */
  secAvatarURL: string;
  /** 用户身份，anchor - 主播，audience - 观众 */
  role: string;
}

/**
 * ### 获取直播房间信息
 */
export const getLiveUserInfo: AsyncAPI<
  {},
  {
    /** "getLiveUserInfo:ok" */
    errMsg: string;
    /** 房间信息 */
    userInfo: LiveUserInfo;
  }
>;
