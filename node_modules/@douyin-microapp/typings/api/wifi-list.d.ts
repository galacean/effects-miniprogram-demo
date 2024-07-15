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

import { AsyncAPI, SyncAPI } from "./types";

/**
 * ### 请求获取 Wi-Fi 列表（对应打开手机 Wi-Fi 配置可以扫描到的 Wi-Fi 列表）
 * 需配合 tt.onGetWifiList 使用，在 tt.onGetWifiList 注册的回调中返回 wifiList 数据。
 */
export const getWifiList: AsyncAPI;

/**
 * 使用获取 wifi 列表后通过该回调监听获取到 Wi-Fi 列表数据事件
 */
export const onGetWifiList: SyncAPI<
  [
    callback: (
      /** Wi-Fi 列表数据 */
      wifiList: {
        /** Wi-Fi 的 SSID */
        SSID: string;
        /** Wi-Fi 的 BSSID */
        BSSID: string;
        /** Wi-Fi 是否安全（iOS 由于系统原因暂不支持） */
        secure: boolean;
        /** Wi-Fi 信号强度（iOS 由于系统原因暂不支持） */
        signalStrength: number;
      }[]
    ) => void
  ]
>;

/**
 * 取消监听获取到 Wi-Fi 列表数据事件
 */
export const offGetWifiList: SyncAPI<[callback: () => void]>;
