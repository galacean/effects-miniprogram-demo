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
 * ### 调起字节跳动小程序收银台进行支付
 *
 * 开发接入之前，请先完成商户入驻流程
 *
 */
export const pay: AsyncAPI<
  {
    orderInfo: {
      /** 担保交易服务端订单号 */
      order_id: string;
      /** 担保交易订单号 token */
      order_token: string;
    };
    /**
     * 仅限调试用，上线前去掉该参数
     */
    _debug?: 0 | 1;
    /**
     * 固定值: 5(拉起小程序收银台)
     */
    service: 5;
  },
  {
    /**
     * 只要调起收银台成功，支付状态都会回调 success, 开发者依据返回的 code 值, 进行后续业务逻辑处理
     * - `0`: 支付成功
     * - `1`: 支付超时
     * - `2`: 支付失败
     * - `3`: 支付关闭
     * - `4`: 支付取消
     * - `9`: 订单状态开发者自行获取
     */
    code: number;
  }
>;
