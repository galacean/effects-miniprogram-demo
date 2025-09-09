## Galacean Effects 小程序 Demo

> 目前已支持支付宝、淘宝、微信、抖音小程序

## 项目须知

相关示例通过独立分支维护，详情如下：

- [alipay](/../../tree/alipay): 支付宝小程序完整 Demo
- [alipay-js](/../../tree/alipay-js): 通过小程序开发者工具创建的基于原生 js 模版的支付宝小程序 Demo
- [alipay-ts](/../../tree/alipay-ts): 通过小程序开发者工具创建的基于原生 ts 模版的支付宝小程序 Demo
- [wechat](/../../tree/wechat): 微信小程序完整 Demo
- [wechat-js](/../../tree/wechat-js): 通过小程序开发者工具创建的基于原生 js 模版的微信小程序 Demo
- [wechat-ts](/../../tree/wechat-ts): 通过小程序开发者工具创建的基于原生 ts 模版的微信小程序 Demo
- [taobao](/../../tree/taobao): 淘宝小程序完整 Demo
- [taobao-js](/../../tree/taobao-js): 通过小程序开发者工具创建的基于原生 js 模版的淘宝小程序 Demo
- [douyin](/../../tree/douyin): 抖音小程序完整 Demo
- [douyin-ts](/../../tree/douyin-ts): 通过小程序开发者工具创建的基于原生 js 模版的抖音小程序 Demo
- [uni-app](/../../tree/uni-app): 基于 uni-app 的小程序 Demo

## 基于原生 js/ts 模版的小程序

在 **main** 分支下的 `libs` 目录，提供了编译打包原生 js/ts 小程序的库代码，如下：

1. 执行 `npm install` 和 `npm run build` 生成 `.js` 文件
2. 使用编译好的 js 库，即上一步生成的：`mp-alipay-galacean-effects.js`（支付宝/淘宝小程序）和 `mp-weapp-galacean-effects.js`（微信小程序）
3. 放到自己的原生小程序项目中，并在业务代码中引入并使用（如支付宝小程序下）：
``` ts
import { adapter, Player } from '~/libs/mp-alipay-galacean-effects';

// 与完整示例代码不同的是 registerCanvas 要从 adapter 命名空间下获取
const canvas = await adapter.registerCanvas({ id: '#J-webglCanvas' });
```

> 完整示例代码见本仓库的 `**-js/ts` 分支。

## 开发

### 编译 lib 产物

``` bash
# 1. 安装依赖（首次）
npm install
# 2. 构建 lib 产物
npm run build
```
