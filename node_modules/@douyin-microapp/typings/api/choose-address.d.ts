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
 * ### 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，同时，用户在小程序中新增的地址会同步至开发者地址库中共存。
 */
export const chooseAddress: AsyncAPI<
  {},
  {
    /** "chooseAddress:ok" */
    errMsg: string;
    /** 收货人姓名 */
    userName: string;
    /** 国际收货地址第一级地址 */
    provinceName: string;
    /** 国际收货地址第二级地址 */
    cityName: string;
    /** 国际收货地址第三级地址 */
    countyName: string;
    /** 详细收货地址信息 */
    detailInfo: string;
    /** 收货人手机号码 */
    telNumber: string;
  }
>;
