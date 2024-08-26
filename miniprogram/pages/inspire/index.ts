import { dispatchTouchCancel, dispatchTouchEnd, dispatchTouchMove, dispatchTouchStart, registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player, AbstractPlugin, registerPlugin } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-model/weapp';
import '@galacean/effects-plugin-spine/weapp';
import inspireList from './assets/inspire-list';

// 假装注册陀螺仪插件，兼容有陀螺仪的合成报错
// @ts-expect-error
registerPlugin('orientation-transformer', AbstractPlugin, AbstractPlugin, false);

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  player: null,
  data: {
    items: inspireList,
    sceneLoading: false,
  },
  async onReady () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      this.player = new Player({
        canvas,
        renderFramework: 'webgl',
        interactive: true,
      });
      this.player.on('click', e => {
        console.log(`item ${e.name} has been clicked`);
      });
      this.playByUrl(inspireList.spring.url);
    } catch (e) {
      wx.showModal({
        content: `创建 player 失败，原因: ${e}`,
      });
    }
  },
  async playByUrl (url: string, variables = {}) {
    if (!this.player) {
      console.error('player 暂未初始化');
      return;
    }
    this.setData({
      sceneLoading: true,
    });
    try {
      this.player.destroyCurrentCompositions();
      await this.player.loadScene(url, {
        variables,
      });
      this.setData({
        sceneLoading: false,
      });
    } catch (e: any) {
      console.error(`biz error: ${e}`);
      wx.showModal({
        title: '播放出错',
        content: e.message,
      });
    }
  },
  onRadioChange (e: any) {
    const key = e.detail.value;
    // @ts-expect-error
    const { url, variables } = inspireList[key];

    this.playByUrl(url, variables);
  },
  touchCancel (e: any) {
    dispatchTouchCancel(e);
  },
  touchStart (e: any) {
    dispatchTouchStart(e);
  },
  touchMove (e: any) {
    dispatchTouchMove(e);
  },
  touchEnd (e: any) {
    dispatchTouchEnd(e);
  },
  handlePlay () {
    this.player?.resume();
  },
  handlePause () {
    this.player?.pause();
  },
  handleRestart () {
    this.player?.gotoAndPlay(0);
  },
  onUnload () {
    this.player?.dispose();
  },
});

