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

export const createAnimation: SyncAPI<
  [
    | {
        /**
         * 指定一个动画周期的时长, 单位 ms
         *
         * 默认值 400
         */
        duration?: number;
        /**
         * 定义动画在每一动画周期中执行的节奏, [参考文档](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
         *
         * 默认值 "linear"
         */
        timingFunction?: string;
        /**
         * 定义动画于何时开始
         *
         * 默认值 0
         */
        delay?: number;
        /**
         * 指定元素变形的原点
         *
         * 默认值 "50% 50% 0"
         */
        transformOrigin?: string;
      }
    | undefined
  ],
  Animation
>;

interface Animation {
  /** 透明度 */
  opacity: (value: number) => Animation;
  /** 背景色 */
  backgroundColor: (value: string) => Animation;
  /** 宽度 */
  width: (value: number) => Animation;
  /** 高度 */
  height: (value: number) => Animation;
  /** 顶部距离 */
  top: (value: number) => Animation;
  /** 底部距离 */
  bottom: (value: number) => Animation;
  /** 左侧距离 */
  left: (value: number) => Animation;
  /** 右侧距离 */
  right: (value: number) => Animation;

  /** 旋转, 等效 rotateZ */
  rotate: (value: number) => Animation;
  /** X 轴旋转 */
  rotateX: (x: number) => Animation;
  /** Y 轴旋转 */
  rotateY: (y: number) => Animation;
  /** Z 轴旋转 */
  rotateZ: (z: number) => Animation;
  /**
   * 从 固定轴 顺时针旋转一个角度
   *
   * @param x 描述旋转轴向量的x坐标
   * @param y 描述旋转轴向量的y坐标
   * @param z 描述旋转轴向量的z坐标
   * @param a 代表旋转的角度. 正角度表示顺时针旋转, 负角度表示逆时针旋转
   */
  rotate3d: (x: number, y: number, z: number, a: number) => Animation;

  /** XY 缩放 */
  scale: (s: number) => Animation;
  /** X 轴缩放 */
  scaleX: (x: number) => Animation;
  /** Y 轴缩放 */
  scaleY: (y: number) => Animation;
  /** Z 轴缩放 */
  scaleZ: (z: number) => Animation;
  /** XYZ 轴缩放 */
  scale3d: (x: number, y: number, z: number) => Animation;

  /** XY 轴平移 */
  translate: (x: number, y: number) => Animation;
  /** X 轴平移 */
  translateX: (x: number) => Animation;
  /** Y 轴平移 */
  translateY: (y: number) => Animation;
  /** Z 轴平移 */
  translateZ: (z: number) => Animation;
  /** XYZ 轴平移 */
  translate3d: (x: number, y: number, z: number) => Animation;

  /** XY 轴倾斜 */
  skew: (x: number, y: number) => Animation;
  /** X 轴倾斜 */
  skewX: (x: number) => Animation;
  /** Y 轴倾斜 */
  skewY: (y: number) => Animation;

  /**
   * CSS 函数 matrix() 指定了一个由指定的 6 个值组成的 2D 变换矩阵
   *
   * 这种矩阵的常量值是隐含的，而不是由参数传递的, 其他的参数是以列优先的顺序描述的
   *
   * `matrix(a, b, c, d, tx, ty)` 是 `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)` 的简写
   */
  matrix: (
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ) => Animation;

  /**
   * CSS 函数 matrix3d() 以 4x4 齐次矩阵的形式定义一个3D转换
   * 其结果是一个 [transform-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function) 数据类型。
   */
  matrix3d: (
    a1: number,
    b1: number,
    c1: number,
    d1: number,
    a2: number,
    b2: number,
    c2: number,
    d2: number,
    a3: number,
    b3: number,
    c3: number,
    d3: number,
    a4: number,
    b4: number,
    c4: number,
    d4: number
  ) => Animation;
}
