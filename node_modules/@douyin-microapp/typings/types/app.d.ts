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

import { AnyObject } from "./helper";

interface ShowParams {
  /**
   * 启动页面
   * @version 1.12.0
   */
  path: string;
  /**
   * 启动参数
   * @version 1.12.0
   */
  query: object;
  /**
   * 来源信息。从另一个小程序进入小程序时返回。
   * @version 1.12.0
   */
  referrerInfo: object;
  /**
   * 场景值
   * @version 1.12.0
   */
  scene: string;
  /**
   * 唤起小程序页面的来源方式，10 表示用户点击小程序入口 schema，0 表示其它方式，比如前后台切换
   * @version 1.12.0
   */
  showFrom: number;
}

interface LaunchParams {
  /**
   * 小程序启动页面路径
   * @version 1.12.0
   */
  path: string;
  /**
   * 小程序启动场景值
   * @version 1.12.0
   */
  scene: string;
  /**
   * 小程序启动参数
   * @version 1.12.0
   */
  query: object;
  /**
   * 来源信息。从另一个小程序进入小程序时返回。否则返回 {}。
   * @version 1.15.0
   */
  referrerInfo: {
    /** 来源小程序的 appId */
    appId: string;
    /** 来源小程序传过来的数据，场景值为 011009 或 011010 时支持。 */
    extraData: object;
  };
  /**
   * 唤起小程序页面的来源方式，10 表示用户点击小程序入口 schema，0 表示其它方式，比如前后台切换
   * @version 1.90.0
   */
  showFrom: number;
}

interface pageNotFoundParams {
  /**
   * 不存在页面的路径
   * @version 1.89.0
   */
  path: string;
  /**
   * 打开不存在页面的 query
   * @version 1.89.0
   */
  query: object;
  /**
   * 是否本次启动的首个页面
   * @version 1.89.0
   */
  isEntryPage: boolean;
}

interface AppOptions {
  /**
   * 生命周期回调—监听小程序显示
   * 小程序启动，或从后台进入前台显示时
   */
  onShow?: (options: ShowParams) => void;
  /**
   * 生命周期回调—监听小程序隐藏
   * 小程序从前台进入后台时
   */
  onHide?: () => void;
  /**
   * 生命周期回调—监听小程序初始化
   * 小程序初始化完成时触发，全局只触发一次
   */
  onLaunch?: (options: LaunchParams) => void;
  /**
   * 错误监听函数
   * 小程序发生脚本错误，或者 api
   */
  onError?: (message: string) => void;
  /**
   * 页面不存在监听函数
   * 小程序要打开的页面不存在时触发，会带上页面信息回调该函数
   */
  onPageNotFound?: (options: pageNotFoundParams) => void;
  /**
   * 监听未处理的 Promise 拒绝事件。该事件与 App.onUnhandledRejection 的回调时机与参数一致。
   */
  onUnhandledRejection?: (options: {
    reason: string;
    promise: Promise<unknown>;
  }) => void;
}

type AppInstance<T extends AnyObject> = AppOptions &
  T &
  ThisType<T & AppOptions>;

export type GetApp = <T extends AnyObject>() => AppInstance<T>;

export type AppConstructor = <T extends AnyObject>(
  options: AppInstance<T>
) => void;
