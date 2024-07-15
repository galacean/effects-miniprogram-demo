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

type InferSync = SyncAPI<
  [
    {
      /**
       * 输入数据的格式
       */
      dataConfig: {
        /**
         * 输入的图像数据
         */
        data: ArrayBuffer;
        /**
         * 输入数据的宽度
         */
        width: number;
        /**
         * 输入数据的高度
         */
        height: number;
        /**
         * 输入数据的通道数
         */
        channel: number;
        /**
         * 输入数据的 batch 数，默认为 1
         */
        batch?: number;
        /**
         * 输入数据的类型
         */
        dataType: string;
        /**
         * 输入数据的格式，NCHW 或 NHWC
         */
        dataFormat: string;
      };
      /**
       * 数据转换的格式
       */
      convertConfig: {
        /**
         * 数据对应的输出通道
         */
        outputChannel: number;
        /**
         * 归一化参数
         */
        normalizeFactor: number;
        /**
         * 归一化后的偏置，默认为 0
         */
        offset?: number;
        /**
         * 输入通道的配置格式
         */
        inputConfig: {
          /**
           * 输入通道的通道名
           */
          inputChannel: number;
          /**
           * 当前通道对应的权重
           */
          weight: number;
        }[];
      }[];
    }
  ],
  {}
>;

interface BytennEngine {
  inferSync: InferSync;
}

type Load = SyncAPI<[], {}>;

type OnLoad = SyncAPI<
  [
    /**
     * res 为返回的 BytennEngine
     */
    (res: BytennEngine) => void
  ],
  {}
>;

type OnError = SyncAPI<
  [
    /**
     * err 为返回的错误原因
     */
    (err: Error) => void
  ],
  {}
>;

/** ### 进行网络加载 */
export const load: Load;

/** ### 设置加载完成回调，会返回加载好的神经网络 */
export const onLoad: OnLoad;

/** ### 设置加载失败回调，会返回加载失败的原因 */
export const onError: OnError;

/** ### 使用神经网络进行同步推理，会直接返回推理结果 */
export const inferSync: InferSync;

/**
 * ### 创建一个 BytennEngineContext
 *
 * 非 IDE 预览环境使用前请申请使用白名单
 */
export const createBytennEngineContext: SyncAPI<
  [
    /**
     * 请求的模型名称
     */
    modelName: string,
    /**
     * 需要初始化的模型配置，numThread 为后台工作线程数，backend 为推理后端类型
     */
    config?: {
      numThread?: number;
      backend?: string;
    }
  ],
  {
    /** 创建好的 bytennEngineContext */
    load: Load;
    onError: OnError;
    onLoad: OnLoad;
  }
>;
