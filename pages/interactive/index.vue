<template>
<view style="width: 100vw; height: 100vh;">
	<canvas type="webgl"
			id="J-webglCanvas"
			style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6);"
			disable-scroll="{{ true }}"
			@touchcancel="touchCancel" 
			@touchend="touchEnd" 
			@touchmove="touchMove" 
			@touchstart="touchStart">
	</canvas>
</view>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*cyyfTavfBscAAAAAAAAAAAAADlB4AQ';

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
