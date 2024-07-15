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

import { AsyncAPI, AsyncAPIWithHandler } from "./types";

interface SocketTask {
  /**
   * 表示 Socket 连接状态 code
   * 若由于参数错误导致未创建连接, 则为 undefined
   */
  readonly readyState?: 0 | 1 | 2 | 3;
  /** 表示 Socket 正在连接的常量 */
  readonly CONNECTING: 0;
  /** 表示 Socket 连接已经打开的常量 */
  readonly OPEN: 1;
  /** 表示 Socket 连接关闭中的常量 */
  readonly CLOSING: 2;
  /** 表示 Socket 连接已关闭的常量 */
  readonly CLOSED: 3;

  /**
   * ### WebSocket 发送给服务端数据的方法
   */
  send: AsyncAPI<{
    /** 发送的数据内容 */
    data: string | ArrayBuffer;
  }>;

  /** ### 关闭 WebSocket 连接的方法。 */
  close: AsyncAPI<{
    /** 关闭连接状态码 */
    code?: number;
    /** 连接被关闭的原因 */
    reason?: string;
  }>;

  /**
   * ### 监听 WebSocket 连接服务器成功的事件
   * 表示 WebSocket 的状态变成 open，可以发送数据给服务器。
   */
  onOpen: (
    callback: (res: {
      /** 连接服务器返回的 Response Header */
      header: Record<string, unknown>;
      /** 使用的网络传输层协议 */
      protocolType: string;
      /** websocket 类型 */
      socketType: "ttnet" | "tradition";
    }) => void
  ) => void;

  /** 监听 WebSocket 与服务器的连接断开的事件 */
  onClose: (
    callback: (res: {
      /** 使用的网络传输层协议 */
      protocolType: string;
      /** websocket 类型 */
      socketType: string;
      /** 错误信息 */
      errMsg: string;
      /** 关闭原因 */
      reason: string;
      /** 关闭 code */
      code: string | number;
    }) => void
  ) => void;

  /** ### 监听 WebSocket 接收到服务器发送信息的事件。 */
  onMessage: (
    callback: (res: {
      /** 接收到的服务器消息 */
      data: string | ArrayBuffer;
      /** websocket 使用的协议 */
      protocolType: string;
      /** websocket 类型 */
      socketType: "ttnet" | "tradition";
    }) => void
  ) => void;

  /** ### 监听 WebSocket 发生错误的事件 */
  onError: (
    callback: (res: {
      /** 错误信息 */
      errMsg: string;
    }) => void
  ) => void;
}

/**
 * ### 创建一个 WebSocket 连接实例
 *
 * 并通过返回的socketTask操作该连接
 *
 * 网络相关的 API 在使用前需要配置域名白名单
 *
 * 请参考[网络请求使用说明](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/api/other/network-request-reference/)
 */
export const connectSocket: AsyncAPIWithHandler<
  {
    /** Socket 连接地址 */
    url: string;
    header?: Record<string, string>;
    protocols?: string[];
  },
  {
    /** 当前创建的 sockTask 的序号 */
    socketTaskId: number;
  },
  SocketTask
>;
