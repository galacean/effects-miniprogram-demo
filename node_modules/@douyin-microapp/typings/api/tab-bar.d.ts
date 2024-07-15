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
 * ### 显示 tabBar
 *
 * tabBar 显示时仅页面可视范围缩小，页面 screenHeight 无变化。
 */
export const showTabBar: AsyncAPI<{
  /** 是否需要动画效果, 默认值 false */
  animation?: boolean;
}>;

/**
 * ### 隐藏 tabBar。
 */
export const hideTabBar: AsyncAPI<{
  /** 是否需要动画效果, 默认值 false */
  animation?: boolean;
}>;

/**
 * ### 为 tabBar 某一项的右上角添加文本，可以利用此功能进行提示。
 */
export const setTabBarBadge: AsyncAPI<{
  /** tabBar 的哪一项，从左边算起，左起第一个为 0 */
  index: number;
  /** 右上角上的文字 */
  text: string;
}>;

/**
 * ### 移除 tabBar 某一项右上角的文本
 */
export const removeTabBarBadge: AsyncAPI<{
  /** tabBar 的哪一项，从左边算起，左起第一个为 0 */
  index: number;
}>;

/**
 * ### 显示 tabBar 某一项的右上角的红点，可以使用底部标签栏红点给予用户提示
 */
export const showTabBarRedDot: AsyncAPI<{
  /** tabBar 的哪一项，从左边算起，第一个为 0 */
  index: number;
}>;

/**
 * ### 隐藏 Tab 右上角的红点
 */
export const hideTabBarRedDot: AsyncAPI<{
  /** tabBar 的哪一项，从左边算起，第一个为 0 */
  index: number;
}>;

/*** 动态设置 tabBar 某一项的内容 */
export const setTabBarItem: AsyncAPI<{
  /** tabBar 的哪一项，从左边算起，左起第一个为 0 */
  index: number;
  /** Tab 上的文字 */
  text?: string;
  /** 图片路径，仅支持包内路径 */
  iconPath?: string;
  /** 选中时的图片路径，仅支持包内路径 */
  selectedIconPath?: string;
}>;

/**
 * ### 动态设置 tabBar 的整体样式
 *
 * 底部标签栏位于小程序底部，方便用户在不同功能模块之间进行快速切换
 */
export const setTabBarStyle: AsyncAPI<{
  /** 文字默认颜色，6 位 HexColor 例如"#ff3377" */
  color?: string;
  /** 文字选中时的颜色，6 位 HexColor 例如"#ff3377" */
  selectedColor?: string;
  /** 背景颜色 */
  backgroundColor?: string;
  /** 上边框的颜色， 仅支持 "black" | "white" */
  borderStyle?: "black" | "white";
}>;
