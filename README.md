## Galacean Effects 微信小程序 Demo

## 使用步骤

### 1、安装依赖

``` bash
# 安装 Galacean Effects 的小程序/小游戏适配器
$ npm i @galacean/appx-adapter --save
# 安装 Galacean Effects
$ npm i @galacean/effects --save
```

### 2、在小程序中使用

``` html
<view style="width: 375px; height: 375px; background-color: black">
  <canvas type="webgl" id="J-webglCanvas" style="width: 100%; height: 100%;"></canvas>
</view>
```

``` ts
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

// 1. 使用 adapter 方法注册 canvas
const canvas = await registerCanvas({ id: '#J-webglCanvas' });
// 2. 通过创建的 canvas 对象实例化一个 Galacean Effects 播放器
const player = new Player({
  transparentBackground: true,
  canvas,
  pixelRatio: 2,
  renderFramework: 'webgl',
});

// 3. 加载资源并执行播放
void this.player.loadScene('url');
```

> 注意：
> - Galacean Effects 对小程序的适配包使用了 `package.json` `exports`，NodeJS v12.7.0 和 Typescript v4.7 及以上才支持，同时 `tsconfig.json` 的 `module` 需配置为 `ESxxx`（如：`ESNext`）。

## 基于原生 js/ts 模版的小程序

1. 直接下载并使用编译好的 js 库（即本仓库下的：`libs/mp-weapp-galacean-effects.js`）
2. 放到自己的项目中，并在业务代码中引入并使用：
``` ts
import { adapter, Player } from '../../libs/mp-weapp-galacean-effects';

// 同上面的示例代码，不同是 registerCanvas 要从 adapter 命名空间下获取
const canvas = await adapter.registerCanvas({ id: '#J-webglCanvas' });
```

> 完整示例代码见本仓库的 [resources](./resources) 目录。

## 开发

### 本地开发

#### 开始开发

``` bash
# 1. 安装依赖（首次）
npm install
# 2. 构建小程序产物
npm run build
```

> Tips
> - `npm run build` 会把 `miniprogram/pages` 下的 `.ts` 编译成 `.js`，然后通过微信开发者工具即可编译或预览
