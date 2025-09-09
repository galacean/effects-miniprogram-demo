<template>
<view style="width: 100vw; height: 100vh;">
	<canvas type="webgl"
		  id="J-webglCanvas"
		  style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6);">
	</canvas>
</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = '/static/assets/qixi/index.json';

let player: Player = null;
		
onMounted(async () => {
	try {
		const canvas = await registerCanvas({ id: '#J-webglCanvas' });
	
		player = new Player({
			canvas,
			renderFramework: 'webgl',
		});
		await player.loadScene(json);
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
