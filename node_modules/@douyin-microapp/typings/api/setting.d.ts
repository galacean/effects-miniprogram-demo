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

interface AuthSetting {
  /**
   * 是否授权用户信息
   *
   * 对应接口 tt.getUserInfo
   */
  "scope.userInfo"?: boolean;

  /**
   * 是否授权地理位置
   *
   * 对应接口 tt.getLocation
   */
  "scope.userLocation"?: boolean;

  /**
   * 是否授权通讯地址
   *
   * 对应接口 tt.chooseAddress
   */
  "scope.address"?: boolean;

  /**
   * 是否授权录音功能
   *
   * 对应接口: tt.getRecorderManager.start
   */
  "scope.record"?: boolean;

  /**
   * 是否授权保存到相册
   *
   * - tt.saveImageToPhotosAlbum
   * - tt.saveVideoToPhotosAlbum
   */
  "scope.album"?: boolean;

  /** 是否授权摄像头
   *
   * 对应接口:
   * - tt.scanCode
   * - tt.chooseImage
   * - tt.chooseVideo
   */
  "scope.camera"?: boolean;
}

/**
 * ### 获取用户已经授权过的配置
 */
export const getSetting: AsyncAPI<
  {},
  {
    /** 授权结果 */
    authSetting: AuthSetting;
  }
>;

/**
 * ### 打开设置页面, 返回用户设置过的授权结果
 */
export const openSetting: AsyncAPI<
  {},
  {
    /** 授权结果 */
    authSetting: AuthSetting;
  }
>;
