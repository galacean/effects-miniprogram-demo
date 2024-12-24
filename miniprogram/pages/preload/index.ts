import { Player, AssetManager } from '@galacean/effects/douyin';
import { registerCanvas } from '@galacean/appx-adapter/douyin';
import '@galacean/effects-plugin-spine/douyin';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*GmmoRYoutZ4AAAAAAAAAAAAADlB4AQ';

Page<{}, {
  [key: string]: any;
}>({
  onReady: async function () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });
      const assetManager = new AssetManager();
      const scene = await assetManager.loadScene(json);

      this.player = new Player({
        canvas,
        renderFramework: 'webgl',
      });
      await this.player.loadScene(scene, { autoplay: false });
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  handlePlay () {
    this.player?.play();
  },
  onUnload () {
    this.player?.dispose();
  },
});
