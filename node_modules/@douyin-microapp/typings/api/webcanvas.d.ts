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

/** 根据 <canvas> 组件 canvas-id 创建可以控制组件的上下文 CanvasContext 对象 */
export const createCanvasContext: SyncAPI<
  [
    /** 组件的 canvas-id 属性 */
    canvasId: string
  ],
  CanvasContext
>;

/** 把当前画布指定区域的内容导出生成指定大小 png 格式的图片，并返回文件路径。在 CanvasContext.draw 回调里调用该方法才能保证图片导出成功 */
export const canvasToTempFilePath: AsyncAPI<
  {
    /** 画布标识，传入 canvas 组件的 canvas-id 属性 */
    canvasId: string;
    /** 指定的画布区域的左上角横坐标 */
    x?: number;
    /** 指定的画布区域的左上角纵坐标 */
    y?: number;
    /** 指定的画布区域的宽度 */
    width?: number;
    /** 指定的画布区域的高度 */
    height?: number;
    /** 输出的图片的宽度 */
    destWidth?: number;
    /** 输出的图片的高度 */
    destHeight?: number;
  },
  {
    /** 生成文件的临时路径 (本地路径)，图片格式为 png */
    tempFilePath: string;
  }
>;

interface CanvasContext {
  /** 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中 */
  draw: (reserve?: boolean, callback?: CallableFunction) => void;
  /** 开始创建一个新的路径，需要调用 CanvasContext.fill 或者 CanvasContext.stroke 才会使用路径进行填充或描边 */
  beginPath: () => void;
  /** 从原始画布中剪切任意形状和尺寸 */
  clip: () => void;
  /** 增加一个新点，然后创建一条从上次指定点到目标点的线 */
  lineTo: (x: number, y: number) => void;
  /** 设置字体的字号 */
  setFontSize: (fontSize: number) => void;
  /** 设置填充的颜色 */
  setFillStyle: (color?: string) => void;
  /** 创建一个线性的渐变颜色 */
  createLinearGradient: (
    sx: number,
    sy: number,
    dx: number,
    dy: number
  ) => void;
  /** 设置边框颜色 */
  setStrokeStyle: (color?: string) => void;
  /** 设置全局画笔透明度 */
  setGlobalAlpha: (alpha?: number) => void;
  /** 设置阴影的位置和颜色 */
  setShadow: CallableFunction;
  /** 设置线条虚线样式的间距和长度 */
  setLineDash: (pattern: number[], offset: number) => void;
  /** 对当前路径中的内容进行填充。默认的填充色为黑色 */
  fill: CallableFunction;
  /** 用于画出当前路径的边框。默认颜色为黑色 */
  stroke: CallableFunction;
  /** 填充一个矩形。默认颜色为黑色，可通过 CanvasContext.setFillStyle 设置矩形颜色 */
  fillRect: (x: number, y: number, width: number, height: number) => void;
  /** 画一个矩形(非填充) */
  strokeRect: (x: number, y: number, width: number, height: number) => void;
  /** 绘制图像到画布 */
  drawImage: CallableFunction;
  /** 测量文本尺寸信息。目前仅返回文本宽度 */
  measureText: (text: string) => void;
  /** 在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘 */
  scale: (scaleWidth: number, scaleHeight: number) => void;
  /** 以原点为中心顺时针旋转当前坐标轴。多次调用旋转的角度会叠加 */
  rotate: (rotate: number) => void;
  /** 变换当前坐标系的原点 (0, 0) 。默认的坐标系原点为页面左上角 */
  translate: (x: number, y: number) => void;
  /** 保存绘图上下文，保存当前的绘制状态，包括变换矩阵、剪切区域、虚线列表等 */
  save: CallableFunction;
  /** 恢复之前保存的绘图上下文。包括变换矩阵、剪切区域、虚线列表等 */
  restore: CallableFunction;
  /** 清除画布上在该矩形区域内的内容 */
  clearRect: (x: number, y: number, width: number, height: number) => void;
  /** 在画布上填充指定文本 */
  fillText: (text: string, x: number, y: number, maxWidth?: number) => void;
  /** 设置文字的对齐方式 */
  setTextAlign: (align: string) => void;
  /** 设置线条的端点样式 */
  setLineCap: (lineCap: string) => void;
  /** 设置线条的交点样式。不设置时默认为尖角样式 */
  setLineJoin: (lineJoin: string) => void;
  /** 设置线条的宽度。不设置时线条宽度默认为 1px */
  setLineWidth: (lineWidth: number) => void;
  /** 设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离 */
  setMiterLimit: (miterLimit: number) => void;
  /** 设置文字垂直方向的对齐方式。不设置时表现默认为 alphabetic */
  setTextBaseline: (textBaseline: string) => void;
  /** 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述 */
  transform: (
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ) => void;
  /** 将一个新的子路径的起始点移动到指定点，不创建线条 */
  setTransform: (
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ) => void;
  /** 将一个新的子路径的起始点移动到指定点，不创建线条 */
  moveTo: (x: number, y: number) => void;
  /** 创建一个矩形路径 */
  rect: (x: number, y: number, width: number, height: number) => void;
  /** 根据指定方向（默认顺时针）从起始点开始创建一条弧线 */
  arc: CallableFunction;
  /** 创建二次贝塞尔曲线路径。需要 2 个点。 第一个点是控制点，第二个点是终点 */
  quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => void;
  /** 创建三次方贝塞尔曲线路径。该方法需要三个点。 第一、第二个点是控制点，第三个点是结束点 */
  bezierCurveTo: (
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ) => void;
  /** 关闭一个路径。会连接起点和终点 */
  closePath: CallableFunction;
}
