## Galacean Effects uni-app Demo

## 使用步骤

### 1、安装依赖

``` bash
# 安装 Galacean Effects 的小程序/小游戏适配器
$ npm i @galacean/appx-adapter --save
# 安装 Galacean Effects
$ npm i @galacean/effects --save
```

### 2、在 uni-app 中使用

```vue
<template>
<view style="width: 100vw; height: 100vh;">
    <canvas
        type="webgl"
        id="J-webglCanvas"
        style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6);"
        disable-scroll="{{ true }}">
    </canvas>
</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

let player: Player = null;

onMounted(async () => {
    try {
        // 1. 使用 adapter 方法注册 canvas
        const canvas = await registerCanvas({ id: '#J-webglCanvas' });
        // 2. 通过创建的 canvas 对象实例化一个 Galacean Effects 播放器
        player = new Player({
            canvas,
            renderFramework: 'webgl',
        });

        // 3. 加载资源并执行播放
        await player.loadScene('url');
    } catch (e) {
        console.error(`biz error: ${e}`);
    }
})

onBeforeUnmount(() => {
    player?.dispose();
})
</script>

<style>
/* 你的样式 */
</style>
```

> 注意：
> - Galacean Effects 对小程序的适配包使用了 `package.json` `exports`，NodeJS v12.7.0 和 Typescript v4.7 及以上才支持，同时 `tsconfig.json` 的 `module` 需配置为 `ESxxx`（如：`ESNext`）。

## 开发

### 本地开发

#### 开始开发

使用 HBuilderX，Vue 版本 选择 Vue3，安装依赖，Vue2 可以参考 uni-app 说明文档适配
