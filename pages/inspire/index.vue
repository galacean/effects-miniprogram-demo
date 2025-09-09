<template>
<view class="container">
	<view class="center">
		<canvas type="webgl"
				class="canvas"
				id="J-webglCanvas"
				disable-scroll="{{ true }}"
				@touchcancel="touchCancel"
				@touchend="touchEnd"
				@touchmove="touchMove"
				@touchstart="touchStart">
		</canvas>
	</view>
	<view class="operation">
		<scroll-view scroll-y="true"
					 class="section">
			<radio-group class="radio-group"
					   @change="onRadioChange">
				<label class="radio"
					   v-for="(item, index) in items"
					   :key="index">
					<radio :value="index"
						 :checked="'checked' in item ? item.checked : false" />
					<text class="radio-text">{{item.name}}</text>
				</label>
			</radio-group>
		</scroll-view>
		<view class="btn-section">
			<button size="mini"
				  @tap="handlePlay"
				  type="ghost"
				  loading="{{sceneLoading}}">恢复</button>
			<button size="mini"
				  @tap="handlePause"
				  type="primary"
				  loading="{{sceneLoading}}">暂停</button>
			<button size="mini"
				  @tap="handleRestart"
				  type="default"
				  loading="{{sceneLoading}}">重播</button>
		</view>
	</view>
</view>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
import { dispatchTouchCancel, dispatchTouchEnd, dispatchTouchMove, dispatchTouchStart, registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player, AbstractPlugin, registerPlugin } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-model/weapp';
import '@galacean/effects-plugin-spine/weapp';
import inspireList from './assets/inspire-list';

const items = inspireList;
const sceneLoading = ref(false);
	
let player: Player = null;

async function playByUrl (url: string, variables = {}) {
	if (!player) {
		console.error('player 暂未初始化');
		return;
	}
	sceneLoading.value = true;
	try {
		player.destroyCurrentCompositions();
		await player.loadScene(url, {
			variables,
		});
	    sceneLoading.value = false;
	} catch (e: any) {
		console.error(`biz error: ${e}`);
		uni.showModal({
			title: '播放出错',
			content: e.message,
		});
	}
}

function onRadioChange (e: any) {
	const key: string = e.detail.value;

	const { url, variables } = inspireList[key];

	playByUrl(url, variables);
}

function touchCancel(e: any) {
	dispatchTouchCancel(e);
}
function touchStart(e: any) {
	dispatchTouchStart(e);
}
function touchMove(e: any) {
	dispatchTouchMove(e);
}
function touchEnd(e: any) {
	dispatchTouchEnd(e);
}
function handlePlay() {
	player?.resume();
}
function handlePause() {
	player?.pause();
}
function handleRestart() {
	player?.gotoAndPlay(0);
}
function onUnload() {
	player?.dispose();
}

onMounted(async () => {
	try {
		const canvas = await registerCanvas({ id: '#J-webglCanvas' });

		player = new Player({
			canvas,
			renderFramework: 'webgl',
			interactive: true,
		});
		player.on('click', e => {
			console.log(`item ${e.name} has been clicked`);
		});

		playByUrl(inspireList.spring.url);
	} catch (e) {
		uni.showModal({
			content: `创建 player 失败，原因: ${e}`,
		});
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

.container .center {
	width: 100vw;
	height: 70vh;
	position: relative;
}

.container .center .canvas {
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
}

.container .operation {
	height: 30vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.container .operation .section {
	width: 70vw;
	margin: 10px;
	height: 100%;
}

.container .operation .section .radio {
	display: block;
	margin-bottom: 10px;
}

.container .operation .section .radio-text {
	line-height: 2;
}

.container .operation .btn-section {
	width: 30vw;
	margin-right: 10px;
}

.container .operation .btn-section button {
	margin: 10px;
}
</style>
