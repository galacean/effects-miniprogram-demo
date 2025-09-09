<template>
	<view>
		
	</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PubBSpHUbjYAAAAAAAAAAAAADlB4AQ';

let player: Player = null;
		
onMounted(async () => {
	try {
		const canvas = await registerCanvas({ id: '#J-webglCanvas' });
	
		player = new Player({
			canvas,
			renderFramework: 'webgl',
		});
		await player.loadScene(json, {
			variables: {
			  image: 'https://mdn.alipayobjects.com/huamei_klifp9/afts/img/A*ySrfRJvfvfQAAAAAAAAAAAAADvV6AQ/.png',
			},
		});
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
