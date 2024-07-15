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
 * ### 打开地图选择位置
 *
 * 需要用户授权 scope.userLocation
 *
 * 使用该 API 前可以通过 tt.authorize 提前向用户发起授权请求。
 *
 * ```
 * tt.chooseLocation({
 *   success(res) {
 *     console.log("chooseLocation success: ", res);
 *   },
 *   fail(res) {
 *     console.log("chooseLocation fail: " + res.errMsg);
 *   },
 * });
 * ```
 */
export const chooseLocation: AsyncAPI<
  {
    /** 目标地纬度 */
    latitude?: number;
    /** 目标地经度 */
    longitude?: number;
  },
  {
    /** 位置名称 */
    name: string;
    /** 详细地址 */
    address: string;
    /** 纬度，范围为 -90 ~ 90，正数表示北，负数表示南。使用 gcj02 国测局坐标系。 */
    latitude: number;
    /** 经度，范围为 -180 ~ 180，正数表示东，负数表示西。使用 gcj02 国测局坐标系。 */
    longitude: number;
  }
>;

/**
 * ### 获取设备当前的地理位置
 *
 * ```
 * tt.getLocation({
 *   success(res) {
 *     console.log(`经度${res.longitude}, 纬度${res.latitude}`);
 *   },
 *   fail(res) {
 *     console.log(`getLocation调用失败`);
 *   },
 * });
 * ```
 */
export const getLocation: AsyncAPI<
  {
    /**
     * 指定坐标系类型，可以是 "wgs84" 或 "gcj02"
     *
     * 默认值 "wgs84"
     */
    type?: "wgs84" | "gcj02";
    /**
     * 是否开启高精度定位
     *
     * 默认值 false
     */
    isHighAccuracy?: boolean;
  },
  {
    /** 纬度，范围为-90 ~ 90，正数表示北，负数表示南 */
    latitude: number;
    /** 经度，范围为-180 ~180，正数表示东，负数表示西 */
    longitude: number;
    /** 高度，单位 m */
    altitude: number;
    /** 位置的精确度 */
    accuracy: number;
    /** 垂直精度，单位 m（Android 需要系统 8.0 及以上机型并且开启 GPS，否则返回 0） */
    verticalAccuracy: number;
    /** 水平精度，单位 m */
    horizontalAccuracy: number;
    /** 速度，单位 m/s */
    speed: number;
    /** 定位到的城市信息（iOS 不支持） */
    city: string;
  }
>;

/**
 * ### 使用内置地图查看位置
 */
export const openLocation: AsyncAPI<{
  /** 纬度，范围为 -90 ~ 90，正数表示北，负数表示南 */
  latitude: number;
  /** 经度，范围为 -180 ~ 180，正数表示东，负数表示西 */
  longitude: number;
  /** 缩放比例，范围 5 ~ 18 */
  scale?: number;
  /** 位置名 */
  name?: string;
  /** 地址的详细说明 */
  address?: string;
}>;
