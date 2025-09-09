<template>
<canvas type="webgl"
	  id="J-webglCanvas"
	  style="width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.6);"
	  disable-scroll="{{ true }}">
</canvas>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-spine/weapp';

// 找春天
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PHr2S4nmAM8AAAAAAAAAAAAADlB4AQ';
// 818 理财
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*JaLiQYyUqhoAAAAAAAAAAAAADlB4AQ';

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
