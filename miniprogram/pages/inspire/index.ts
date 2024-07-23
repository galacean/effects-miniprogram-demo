import { Player } from '@galacean/effects/alipay';
import {
  registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel,
} from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-orientation-transformer/alipay';
import '@galacean/effects-plugin-spine/alipay';
import inspireList from './assets/inspire-list';

Page<{
  items: Record<string, any>;
  sceneLoading: boolean;
}, {
  player: Player | null;
  [key: string]: any;
}>({
  data: {
    items: inspireList,
    sceneLoading: false,
  },
  async onCanvasReady () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });
      
      this.player = new Player({
        canvas,
        interactive: true,
        env: 'editor',
        onPausedByItem: (data) => {
          console.info('onPausedByItem', data);
        },
        onItemClicked: (data) => {
          console.log(`item ${data.name} has been clicked`);
        },
      });
      this.playByUrl(inspireList.spring.url);
    } catch (e) {
      my.alert({
        content: `创建 player 失败，原因: ${e}`,
      });
    }
  },
  async playByUrl (animationUrl, variables = {}) {
    if (!this.player) {
      console.error('player 暂未初始化');
      return;
    }
    this.setData({
      sceneLoading: true,
    });
    try {
      this.player.destroyCurrentCompositions();
      await this.player.loadScene(animationUrl, {
        variables,
      });
      this.setData({
        sceneLoading: false,
      });
    } catch (e) {
      console.error(`biz error: ${e}`);
      my.alert({
        title: '播放出错',
        content: e,
      });
    }
  },
  onRadioChange (e) {
    this.playByUrl(e.detail.value.url, e.detail.value.variables);
  },
  onTouchEnd (e) {
    dispatchTouchEnd(e);
  },
  onTouchStart (e) {
    dispatchTouchStart(e);
  },
  onTouchMove (e) {
    dispatchTouchMove(e);
  },
  onTouchCancel (e) {
    dispatchTouchCancel(e);
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
