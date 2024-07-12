## Galacean Effects 支付宝小程序 Demo

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
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import { Player } from '@galacean/effects/alipay';

// 1. 使用 adapter 方法注册 canvas
const canvas = await registerCanvas({ id: '#J-webglCanvas' });
// 2. 通过创建的 canvas 对象实例化一个 Galacean Effects 播放器
const player = new Player({
  canvas,
  renderFramework: 'webgl',
});

// 3. 加载资源并执行播放
void this.player.loadScene('url');
```

> 注意：
> - Galacean Effects 对小程序的适配包使用了 `package.json` `exports`，NodeJS v12.7.0 和 Typescript v4.7 及以上才支持，同时 `tsconfig.json` 的 `module` 需配置为 `ESxxx`（如：`ESNext`）。

## 开发

### 本地开发

#### 开始开发

``` bash
# 1. 安装依赖（首次）
npm install
# 2. 开发调试
npm run dev
# 3. 构建小程序产物
npm run build
```

> Tips
> - `npm run dev/build` 会把 `miniprogram/pages` 下的 `.ts` 编译成 `.js`，然后通过支付宝开发者工具即可编译或预览
