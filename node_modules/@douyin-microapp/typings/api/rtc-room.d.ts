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
 * 根据 AppId 创建 RtcContext
 */
export const createRtcRoomContext: SyncAPI<[appId: string], RtcContext>;
type Callback = (...args: any[]) => any;

interface RtcContext {
  /**
   * 加入房间
   */
  joinRtcRoom: AsyncAPI<
    {
      roomId: string;
      token: string;
      userId: string;
      roomConfig?: {
        autoPublish?: boolean;
        autoSubscribe?: boolean;
      };
    },
    void
  >;
  /**
   * 离开房间
   */
  exitRtcRoom: AsyncAPI<{ roomId: string }, void>;
  /**
   * 切换摄像头
   */
  switchCamera: AsyncAPI<
    {
      camera: "back" | "front";
    },
    void
  >;
  /**
   * 开启关闭视频采集
   */
  changeVideoCapture: AsyncAPI<
    {
      state: 0 | 1;
    },
    void
  >;
  /**
   * 开启关闭音频采集
   */
  changeAudioCapture: AsyncAPI<
    {
      state: 0 | 1;
    },
    void
  >;

  /**
   * 监听实时语音通话成员视频状态变化事件
   */
  onRtcVideoMembersChanged: SyncAPI<
    [callback: (res: { userIdList: string[] }) => void]
  >;
  /**
   * 监听实时语音通话成员在线状态变化事件(有成员加入/退出通话时触发回调)
   */
  onRtcChatMembersChanged: SyncAPI<
    [callback: (res: { userIdList: string[] }) => void]
  >;
  /**
   * 监听实时音视频通话过程状态变化(包括调用 api 是错误信息)
   */
  onRtcStateChange: SyncAPI<
    [callback: (res: { errNo: number; errMsg: string; data: object }) => void]
  >;
  /**
   * 监听实时语音通话成员通话状态变化事件(有成员开始/停止说话时触发回调)
   */
  onRtcChatSpeakersChanged: SyncAPI<
    [callback: (res: { userIdList: string[] }) => void]
  >;
  /**
   * 监听被动断开实时音视频通话事件
   */
  onRtcChatInterrupted: SyncAPI<
    [callback: (res: { errNo: number; errMsg: string }) => void]
  >;
  /**
   * 取消监听实时语音通话成员视频状态变化事件
   */
  offRtcVideoMembersChanged: (callback: Callback) => void;
  /**
   * 取消监听实时语音通话成员在线状态变化事件(有成员加入/退出通话时触发回调)
   */
  offRtcChatMembersChanged: (callback: Callback) => void;
  /**
   * 取消监听实时音视频通话过程状态变化(包括调用 api 是错误信息)
   */
  offRtcStateChange: (callback: Callback) => void;
  /**
   * 取消监听实时语音通话成员通话状态变化事件(有成员开始/停止说话时触发回调)
   */
  offRtcChatSpeakersChanged: (callback: Callback) => void;
  /**
   * 取消监听被动断开实时音视频通话事件
   */
  offRtcChatInterrupted: (callback: Callback) => void;
  /**
   * 监听共享屏幕用户改变事件
   */
  onRtcPublishScreenMembersChanged: SyncAPI<
    [callback: (res: { userIdList: string[] }) => void]
  >;
  /**
   * 取消监听共享屏幕用户改变事件
   */
  offRtcPublishScreenMembersChanged: (callback: Callback) => void;
}
