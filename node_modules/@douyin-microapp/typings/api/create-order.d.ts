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
 * 开放API-创建订单
 */

interface GoodsInfo {
  quantity: number;
  price: number;

  discountAmount?: number; //商品折扣

  goodsName: string; // 商品名
  goodsPhoto: string; // 商品照片
  goodsId: string; // 商品 ID
  goodsType: number; // 商品类型 1 或 2

  goodsSubTitle?: string; // 商品副标题，暂时无需填入
  goodsLabels?: string[]; // 商品标签
  dateRule?: string; // 使用规则

  goodsPage?: {
    path?: string; // 商品详情页路径
    params?: string; // 详情页路径参数
  };
}
export const createOrder: AsyncAPI<
  {
    goodsList: GoodsInfo[];

    payment: {
      totalDiscountAmount?: number;
      totalAmount: number;
    };

    appType?: number;

    contactInfo?: {
      phoneNumber?: string;
      contactName?: string;
    };
    note?: string;
    merchantInfo?: {
      merchantId?: string;
    };

    storeInfo?: {
      storeName?: string;
      storeIcon?: string;
    };

    callbackData?: { [key: string]: unknown };
  },
  {
    orderId: string;
    outOrderNo: string;
  }
>;
