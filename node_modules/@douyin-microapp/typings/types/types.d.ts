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

type Prettier<T> = T extends (...args: any) => any
  ? T
  : T extends object
  ? { [K in keyof T]: Prettier<T[K]> }
  : T;

export type AsyncAPI<
  Options extends object = {},
  Response = {},
  Ok = Prettier<
    {
      /** 错误信息 */
      errMsg: string;
    } & Response
  >,
  Err = {
    /** 错误信息 */
    errMsg: string;
    /** 错误码 */
    errNo?: number;
  }
> = (
  options: Prettier<
    Options & {
      /** 成功回调 */
      success?: (res: Ok) => void;
      /** 失败回调 */
      fail?: (res: Err) => void;
      /** 回调函数 */
      complete?: (res: Partial<Ok> & Err) => void;
    }
  >
) => void;

export type AsyncAPIWithHandler<
  Options extends object,
  Response,
  Handler,
  Ok = Prettier<
    {
      /** 错误信息 */
      errMsg: string;
    } & Response
  >,
  Err = {
    /** 错误信息 */
    errMsg: string;
    /** 错误码 */
    errNo?: number;
  }
> = (
  options: Prettier<
    Options & {
      /** 成功回调 */
      success?: (res: Ok) => void;
      /** 失败回调 */
      fail?: (res: Err) => void;
      /** 回调函数 */
      complete?: (res: Partial<Ok> & Err) => void;
    }
  >
) => Handler;

export type SyncAPI<Args extends unknown[] = [], Response = void> = (
  ...args: Args
) => Response;
