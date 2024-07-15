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

import { SyncAPI, AsyncAPI, AsyncAPIWithHandler } from "./types";

export interface CloudID {
  cloudID: string;
}

export interface DeleteFile {
  fileName: string;
  status: number;
  message: string;
}

export interface CloudUploadTask {
  onProgressUpdate: (
    callback: (data: {
      /** 上传进度 */
      progress: number;
      /** 已经上传的数据长度，单位byte */
      totalBytesSent: number;
      /** 预期需要上传的数据总长度，单位byte */
      totalBytesExpectedToSend: number;
    }) => void
  ) => void;
  offProgressUpdate: (
    // eslint-disable-next-line
    callback: (...args: any[]) => void
  ) => void;
}

export interface CloudDownloadTask {
  onProgressUpdate: (
    callback: (data: {
      /** 上传进度 */
      progress: number;
      /** 已经上传的数据长度，单位byte */
      totalBytesWritten: number;
      /** 预期需要上传的数据总长度，单位byte */
      totalBytesExpectedToWrite: number;
    }) => void
  ) => void;
  offProgressUpdate: (
    // eslint-disable-next-line
    callback: (...args: any[]) => void
  ) => void;
}

export interface CloudExtensionManager {
  joinGroup: AsyncAPI<
    {
      groupInfoArray: { groupName: string; groupValue: string }[];
    },
    {
      result: { groupName: string; groupValue: string; status: number }[];
    }
  >;
  exitGroup: AsyncAPI<
    {
      groupInfoArray: { groupName: string; groupValue: string }[];
    },
    {
      result: { groupName: string; groupValue: string; status: number }[];
    }
  >;
}

export interface CloudSocketTask {
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

  getCloudExtensionManager: SyncAPI<[], CloudExtensionManager>;

  /**
   * ### 监听 WebSocket 连接服务器成功的事件
   * 表示 WebSocket 的状态变成 open，可以发送数据给服务器。
   */
  onOpen: (
    callback: (res: {
      /** 连接服务器返回的 Response Header */
      header: Record<string, unknown>;
    }) => void
  ) => void;

  /** 监听 WebSocket 与服务器的连接断开的事件 */
  onClose: (
    callback: (res: {
      /** 错误信息 */
      errMsg?: string;
      /** 关闭原因 */
      reason?: string;
      /** 关闭 code */
      code?: string | number;
    }) => void
  ) => void;

  /** ### 监听 WebSocket 接收到服务器发送信息的事件。 */
  onMessage: (
    callback: (res: {
      /** 接收到的服务器消息 */
      data: string | ArrayBuffer;
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

export interface TempFileURL {
  fileName: string;
  url: string;
  maxAge: number;
  status: number;
  message: string;
}

export interface Cloud {
  envID: string;
  serviceID?: string;
  callContainer: AsyncAPI<
    {
      path: string;
      serviceID?: string;
      init?: {
        method?:
          | "get"
          | "GET"
          | "options"
          | "OPTIONS"
          | "post"
          | "POST"
          | "put"
          | "PUT"
          | "delete"
          | "DELETE"
          | "trace"
          | "TRACE"
          | "patch"
          | "PATCH";
        header?: Record<string, string>;
        body?: object | string | ArrayBuffer;
        timeout?: number;
      };
    },
    {
      statusCode: number;
      header: object;
      data: string;
    }
  >;
  CloudID: SyncAPI<[string], CloudID>;
  uploadFile: AsyncAPIWithHandler<
    {
      cloudPath: string;
      filePath: string;
      timeout?: number;
    },
    {},
    CloudUploadTask
  >;
  downloadFile: AsyncAPIWithHandler<
    {
      cloudPath: string;
      filePath?: string;
      timeout?: number;
    },
    {
      tempFilePath?: string;
      filePath?: string;
    },
    CloudDownloadTask
  >;
  deleteFile: AsyncAPI<
    {
      cloudPaths: string[];
      timeout?: number;
    },
    {
      fileLists: DeleteFile[];
    }
  >;
  getTempFileURL: AsyncAPI<
    {
      cloudPaths: string[];
      timeout?: number;
      maxAge?: number;
    },
    {
      fileLists: TempFileURL[];
    }
  >;
  connectContainer: AsyncAPIWithHandler<
    {
      path: string;
      serviceID?: string;
      header?: Record<string, unknown>;
    },
    {
      socketTaskId: number;
    },
    CloudSocketTask
  >;
}
/**
 * ### 创建托管云实例
 */
export const createCloud: SyncAPI<
  [
    {
      envID: string;
      serviceID?: string;
    }
  ],
  Cloud
>;
