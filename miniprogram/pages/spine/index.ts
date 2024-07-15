import { Player } from '@galacean/effects/douyin';
import { registerCanvas } from '@galacean/appx-adapter/douyin';
import '@galacean/effects-plugin-spine/douyin';

// 找春天
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PHr2S4nmAM8AAAAAAAAAAAAADlB4AQ';
// 818 理财
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*JaLiQYyUqhoAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  [key: string]: any;
}>({
  onReady: async function () {
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
