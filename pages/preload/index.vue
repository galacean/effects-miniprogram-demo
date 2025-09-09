<template>
<view style="width: 100vw; height: 100vh;">
	<canvas type="webgl"
		  id="J-webglCanvas"
		  style="width: 100%; height: 90%; background-color: rgba(0, 0, 0, 1);"
		  disable-scroll="{{ true }}">
	</canvas>
	<button @tap="handlePlay"
		  type="ghost">播放</button>
</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player, AssetManager } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-spine/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*GmmoRYoutZ4AAAAAAAAAAAAADlB4AQ';

let player: Player = null;

function handlePlay () {
	player?.play();
}

onMounted(async () => {
	try {
		const canvas = await registerCanvas({ id: '#J-webglCanvas' });
	    const assetManager = new AssetManager();
	    const scene = await assetManager.loadScene(json);

		player = new Player({
			canvas,
			renderFramework: 'webgl',
		});
		await player.loadScene(scene, { autoplay: false });
	} catch (e) {
		console.error(`biz error: ${e}`);
	}
})

onBeforeUnmount(() => {
	player?.dispose();
})
</script>

<style>

</style>
