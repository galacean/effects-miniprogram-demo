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

type ScopeKey =
  | "video.data"
  | "video.list"
  | "video.search"
  | "video.search.comment"
  | "following.list"
  | "fans.list"
  | "fans.check"
  | "renew_refresh_token"
  | "item.comment"
  | "data.external.user"
  | "data.external.item"
  | "fans.data"
  | "discovery.ent"
  | "star_top_score_display"
  | "star_tops"
  | "star_author_score_display"
  | "hotsearch"
  | "data.external.billboard_game"
  | "data.external.billboard_drama"
  | "data.external.billboard_car"
  | "data.external.billboard_amusement"
  | "data.external.billboard_cospa"
  | "data.external.billboard_food"
  | "data.external.billboard_travel"
  | "data.external.billboard_stars"
  | "data.external.billboard_sport"
  | "data.external.fans_favourite"
  | "data.external.billboard_hot_video"
  | "data.external.fans_source"
  | "data.external.billboard_live"
  | "data.external.billboard_music"
  | "data.external.billboard_prop"
  | "data.external.billboard_topic"
  | "open.get.ticket"
  | "message.once.send"
  | "poi.cps.common"
  | "micapp.is_legal"
  | "market.service.user"
  | "incremental_authorization";

type ScopeValue = 0 | 1 | 2;

/**
 * 小程序获取抖音权限的能力，展示出抖音权限授权弹窗
 */
export const showDouyinOpenAuth: AsyncAPI<
  {
    /**
     * 抖开授权域 https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/open-capacity/basic-capacities/douyin/
     */
    scopes: Record<ScopeKey, ScopeValue>;
  },
  {
    /**
     * 抖开身份验证临时票据，参考 https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/open-interface/authorization/tt-show-douyin-open-auth/
     */
    ticket: string;
    /**
     * 用户授权的权限
     */
    grantPermissions: string[];
  }
>;
