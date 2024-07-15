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
 * ### 保留当前页面, 跳转到应用内的某个页面
 *
 * 但是不能跳转到 tabbar 页面, 使用 tt.navigateBack 可以返回到原页面
 *
 *
 */
export const navigateTo: AsyncAPI<{
  url: string;
}>;

/**
 * ### 关闭当前页面, 返回上一页面或多级页面
 *
 *
 */
export const navigateBack: AsyncAPI<{
  /**
   * 返回的页面数, 如果 delta 大于现有页面数
   *
   * 默认值 1
   */
  delta?: number;
}>;

/**
 * ### 关闭所有页面, 打开到应用内的某个页面
 */
export const reLaunch: AsyncAPI<{
  /**
   * 需要跳转的应用内页面路径
   *
   * 路径后可以带参数, 参数与路径之间使用 `?` 分隔, 参数键与参数值用=相连, 不同参数用 `&` 分隔
   *
   * 如 `path?key=value&key2=value2`, 如果跳转的页面路径是 tabBar 页面则不能带参数
   */
  url: string;
}>;

/**
 * ### 关闭当前页面, 跳转到应用内的某个页面
 *
 * 不能跳转到 tabBar 页面
 *
 *
 */
export const redirectTo: AsyncAPI<{
  /**
   * 需要跳转的应用内页面路径
   *
   * 路径后可以带参数, 参数与路径之间使用 `?` 分隔, 参数键与参数值用=相连, 不同参数用 `&` 分隔
   *
   * 如 `path?key=value&key2=value2`, 如果跳转的页面路径是 tabBar 页面则不能带参数
   */
  url: string;
}>;

/**
 * ### 跳转到 tabBar 页面
 *
 * 并关闭其他所有非 `tabBar` 页面, 将要跳转到的 `tabBar` 页面需要在 `app.json` 中定义
 */
export const switchTab: AsyncAPI<{
  /**
   * 需要跳转的 `tabBar` 页面的路径
   *
   * 需在 `app.json` 的 `tabBar` 字段定义的页面, 路径后不能带参数 */
  url: string;
}>;

/**
 * ### 返回到跳转来的上一个小程序。
 */
export const navigateBackMiniProgram: AsyncAPI<{
  /** 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow 中获取到这份数据 */
  extraData?: Record<string, unknown>;
}>;

/** ### 跳转到另一个小程序 */
export const navigateToMiniProgram: AsyncAPI<{
  /** 要跳转的小程序 id */
  appId: string;
  /** 要跳转的小程序页面路径(不传则默认打开首页), 允许携带 query 参数 */
  path?: string;
  /**
   * 需要传递给目标小程序的数据, 目标小程序可在 App.onLaunch, App.onShow, tt.getLaunchOptionsSync 中获取到这份数据
   */
  extraData?: object;
  /**
   * 要打开的小程序版本
   *
   * 默认值 "current"
   *
   * - current: 线上版
   * - latest: 测试版 (仅在当前小程序为开发版或测试版时此参数有效
   *
   * 如果当前小程序是正式版, 则打开的小程序必定是正式版)
   */
  envVersion?: "current" | "latest";
}>;
