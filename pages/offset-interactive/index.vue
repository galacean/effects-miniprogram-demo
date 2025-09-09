<template>
<view>
	<view style="height: 100px; background-color: #ff0000;"></view>
	<view class="container">
		<canvas type="webgl"
				id="J-webglCanvas"
				style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6);">
		</canvas>
		<view disable-scroll="true"
			  class="cover"
			  @touchcancel="touchCancel" 
			  @touchend="touchEnd" 
			  @touchmove="touchMove" 
			  @touchstart="touchStart">
		</view>
	</view>
</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PubBSpHUbjYAAAAAAAAAAAAADlB4AQ';

let player: Player = null;

function touchCancel (e: any) {
    dispatchTouchCancel(e);
}

function touchStart (e: any) {
    dispatchTouchStart(e);
}

function touchMove (e: any) {
	dispatchTouchMove(e);
}

function touchEnd (e: any) {
	dispatchTouchEnd(e);
}

onMounted(async () => {
	try {
		const canvas = await registerCanvas({ id: '#J-webglCanvas' });

		player = new Player({
			canvas,
			interactive: true,
			renderFramework: 'webgl',
		});
		const composition = await	player.loadScene(json);
		const item = composition.getItemByName('lotteryBtn');

		item?.on('click', e => {
			console.info(`[item click] - item [${e.name}] clicked.`);
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
.container {
	width: 100vw;
	height: 100vh;
}

.cover {
	position: absolute;
	top: 100px;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
