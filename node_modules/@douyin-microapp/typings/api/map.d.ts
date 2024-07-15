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

export const createMapContext: SyncAPI<
  [
    /** <map /> 组件的 id */
    mapId: string,
    /** 在自定义组件下，当前组件实例的 this，以操作组件内 <map /> 组件 */
    component?: object
  ],
  MapContext
>;

interface MapContext {
  /** 获取地图中心位置 */
  getCenterLocation: AsyncAPI<
    {},
    {
      /** 经度 */
      longitude: number;
      /** 纬度 */
      latitude: number;
    }
  >;
  /** 获取地图视野范围 */
  getRegion: AsyncAPI<
    {},
    {
      /** 西南角经纬度 */
      southwest: {
        /** 经度 */
        longitude: number;
        /** 纬度 */
        latitude: number;
      };
      /** 东北角经纬度 */
      northeast: {
        /** 经度 */
        longitude: number;
        /** 纬度 */
        latitude: number;
      };
    }
  >;
  /** 将地图中心移置当前定位点。地图能力基于 gcj02 坐标系，请注意入参经纬度信息的转换 */
  moveToLocation: AsyncAPI<
    {
      /** 经度 */
      longitude: number;
      /** 纬度 */
      latitude: number;
    },
    {}
  >;
  /** 获取地图缩放值 */
  getScale: AsyncAPI<
    {},
    {
      /** 缩放值 */
      scale: number;
    }
  >;
  /** 调整可视区域以包含所有给定的坐标点 */
  includePoints: AsyncAPI<
    {
      /** 要显示在可视区域内的坐标点列表 */
      point: {
        /** 经度 */
        longitude: number;
        /** 纬度 */
        latitude: number;
      }[];
      /** 坐标点形成的矩形边缘到地图边缘的距离，单位: 像素。格式为[上,右,下,左] */
      padding?: [number, number, number, number];
    },
    {}
  >;
  /** 平移 marker，带动画 */
  translateMarker: AsyncAPI<
    {
      /** 指定标记物的 id */
      markerId: number;
      /** 指定 marker 移动到的目标点 */
      destination: {
        /** 经度 */
        longitude: number;
        /** 纬度 */
        latitude: number;
      };
      /** 移动过程中是否自动旋转 marker */
      autoRotate?: boolean;
      /** marker 的旋转角度 */
      rotate?: number;
      /** 平移和旋转同时进行 */
      moveWithRotate?: boolean;
      /** 动画持续时长，单位为毫秒，平移与旋转分别计算 */
      duration?: number;
      /** 动画结束回调函数 */
      animationEnd?: () => void;
    },
    {}
  >;
  /** 沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断 */
  moveAlong: AsyncAPI<
    {
      /** 指定 marker 的 id */
      markerId: number;
      /** 移动路径的经纬度数组 */
      path: {
        /** 经度 */
        longitude: number;
        /** 纬度 */
        latitude: number;
      }[];
      /** 根据路径方向自动改变 marker 的旋转角度 */
      autoRotate?: boolean;
      /** 平滑移动的时间，单位毫秒 */
      duration?: number;
      /** 动画结束的回调函数 */
      animationEnd?: () => void;
    },
    {}
  >;
  /** 获取当前地图的旋转角 */
  getRotate: AsyncAPI<
    {},
    {
      /** 旋转角 */
      rotate: number;
    }
  >;
  /** 获取当前地图的倾斜角 */
  getSkew: AsyncAPI<
    {},
    {
      /** 倾斜角 */
      skew: number;
    }
  >;
  /** 用于将地图经纬度坐标系转换成屏幕坐标系 */
  mapToScreen: AsyncAPI<
    {
      /** 经度 */
      longitude: number;
      /** 纬度 */
      latitude: number;
    },
    {
      /** 经度在地图容器对应的 x 轴像素值 */
      x: number;
      /** 纬度在地图容器对应的 y 轴像素值 */
      y: number;
    }
  >;
  /** 用于将屏幕坐标系转换成地图经纬度坐标系 */
  screenToMap: AsyncAPI<
    {
      /** 横坐标 */
      x: number;
      /** 纵坐标 */
      y: number;
    },
    {
      /** 地图容器中 x 坐标对应的经度 */
      longitude: number;
      /** 地图容器中 y 坐标对应的纬度 */
      latitude: number;
    }
  >;
}

type Marker = {
  /** 经度 */
  latitude: number;
  /** 纬度 */
  longitude: number;
} & Partial<{
  /** 标记点 id */
  id: number;
  /** 标注点名，点击时显示，不传则点击无反应 */
  title: string;
  /** 图片路径 */
  iconPath: string;
  /** 标注图标宽度，默认根据屏幕 DPI 缩放 */
  width: number;
  /** 标注图标高度，默认根据屏幕 DPI 缩放 */
  height: number;
  /** marker 的显示层级，默认同 marker 插入顺序 */
  zIndex: number;
  /** 标记点上方的气泡窗口，支持的属性见 Callout，可识别换行符。有了 callout 将不显示 title */
  callout: Callout;
  /** 标注的透明度，范围 0-1 */
  alpha: number;
  /** 以标注图标左上角为原点，经纬度锚点相对于标注图标的横向偏移比例，以向右为正向，取值区间为 [0, 1] */
  anchorX: number;
  /** 以标注图标左上角为原点，经纬度锚点相对于标注图标的纵向偏移比例，以向下为正向，取值区间为 [0, 1] */
  anchorY: number;
}>;

type Callout = Partial<{
  /** 气泡上的文本 */
  content: string;
  /** 气泡上文本的颜色，支持 HEX, RGBA, 颜色别名 */
  color: string;
  /** 文字大小，单位为 px */
  fontSize: number;
  /** 边框圆角，单位为 px */
  borderRadius: number;
  /** 文本边缘留白，单位为 px */
  padding: number;
  /** 'BYCLICK':点击显示; 'ALWAYS':常显 */
  display: string;
  /** 文本对齐方式。有效值: left, right, center */
  textAlign: string;
  /** 边框宽度 */
  borderWidth: number;
  /** 边框颜色 */
  borderColor: string;
  /** 背景色 */
  bgColor: string;
  /** 相对于原地位置的横向偏移量，向右为正数 */
  anchorX: number;
  /** 相对于原地位置的纵向偏移量，向下为正数 */
  anchorY: number;
}>;
