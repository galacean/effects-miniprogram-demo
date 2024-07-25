import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-spine/weapp';

// 找春天
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PHr2S4nmAM8AAAAAAAAAAAAADlB4AQ';
// 818 理财
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*JaLiQYyUqhoAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  player: null,

  async onReady () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      this.player = new Player({
        canvas,
        renderFramework: 'webgl',
      });
      await this.player.loadScene(json);
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  onUnload () {
    this.player?.dispose();
  },
});

