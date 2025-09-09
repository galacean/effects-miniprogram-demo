<template>
<view style="width: 100vw; height: 100vh;">
	<view class="page-section page-section-space">
		<radio-group name="radio" @change="radioChange">
			<label><radio value="" />全部机型</label>
			<label><radio value="B" checked="true" />B（低端机）</label>
			<label><radio value="A" />A（中端机）</label>
			<label><radio value="S" />S（高端机）</label>
		</radio-group>
	</view>
	<canvas type="webgl"
		  id="J-webglCanvas"
		  style="width: 100%; height: 90%; background-color: rgba(0, 0, 0, 0.6);"
		  disable-scroll="{{ true }}">
	</canvas>
</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*GC99RbcyZiMAAAAAAAAAAAAADlB4AQ';

let player: Player = null;

function radioChange (e: any) {
	const renderLevel = e.detail.value;

	player?.getCompositions().forEach(composition => composition.dispose());

	void player?.loadScene(json, {
	  renderLevel,
	});
}

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
