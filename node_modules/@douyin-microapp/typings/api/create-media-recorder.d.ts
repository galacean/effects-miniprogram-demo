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

type Start = SyncAPI<[], {}>;
type Pause = SyncAPI<[], {}>;
type Resume = SyncAPI<[], {}>;
type Stop = SyncAPI<[], {}>;
type Destroy = SyncAPI<[], {}>;
type RequestFrame = SyncAPI<[], {}>;
type OnError = SyncAPI<
  [
    /**
     * err 为返回的错误原因
     */
    (err: Error) => void
  ],
  {}
>;
type OnStart = SyncAPI<[() => void], {}>;
type onStop = SyncAPI<
  [
    (info: {
      /**
       * The file path of the output video.
       */
      filePath: string;
      /**
       * The duration of the output video, in seconds.
       */
      duration: number;
      /**
       * The file size of the output video, in kb.
       */
      fileSize: number;
    }) => void
  ],
  {}
>;

export const createMediaRecorder: SyncAPI<
  [
    canvas: unknown,
    config?: {
      /**
       * The width of the output video.
       * @default 480
       */
      width?: number;
      /**
       * The height of the output video.
       * @default 640
       */
      height?: number;
      /**
       * The bit rate of the output video, in kbps.
       * @default 3000
       */
      videoBitsPerSecond?: number;
      /**
       * The gop(group of pictures) of the output video.
       * @default 12
       */
      gop?: number;
      /**
       * The fps(frame per second) of the outpu video.
       * This value corresponds to the intended frame rate.
       * If you set this to 0, media recorder will enter manual mode.
       * In manual mode, you need to call `requestFrame` to trigger the recording of the canvas.
       * @default 60
       */
      fps?: number;
    }
  ],
  {
    start: Start;
    pause: Pause;
    resume: Resume;
    stop: Stop;
    destroy: Destroy;
    onError: OnError;
    requestFrame: RequestFrame;
  }
>;
