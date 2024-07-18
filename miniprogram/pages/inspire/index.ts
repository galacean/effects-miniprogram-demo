import { Player } from '@galacean/effects/douyin';
import {
  registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel,
} from '@galacean/appx-adapter/douyin';
// import '@galacean/effects-plugin-spine/douyin';
import inspireList from './assets/inspire-list';

Page<{
  items: Record<string, any>;
  sceneLoading: boolean;
}, {
  [key: string]: any;
}>({
  data: {
    items: inspireList,
    sceneLoading: false,
  },
  onReady: async function () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      this.player = new Player({
        canvas,
        renderFramework: 'webgl',
        interactive: true,
        env: 'editor',
        onPausedByItem: (data) => {
          console.info('onPausedByItem', data);
        },
        onItemClicked: (data) => {
          console.log(`item ${data.name} has been clicked`);
        },
      });
      this.playByUrl(inspireList.fireworks.url);
    } catch (e) {
      tt.showModal({
        content: `创建 player 失败，原因: ${e}`,
      });
    }
  },
  async playByUrl (animationUrl: string, variables = {}) {
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
    } catch (e: any) {
      console.error(`biz error: ${e}`);
      tt.showModal({
        title: '播放出错',
        content: e.message,
      });
    }
  },
  onRadioChange (e: any) {
    console.log(e);
    const { value } = e.detail;
    const { url, variables } = this.data.items[value];

    this.playByUrl(url, variables);
  },
  onTouchEnd (e: any) {
    dispatchTouchEnd(e);
  },
  onTouchStart (e: any) {
    dispatchTouchStart(e);
  },
  onTouchMove (e: any) {
    dispatchTouchMove(e);
  },
  onTouchCancel (e: any) {
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
