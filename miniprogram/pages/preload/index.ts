import { Player, AssetManager } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-spine/alipay';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*GmmoRYoutZ4AAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  onCanvasReady: async function () {
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
    this.timer && clearTimeout(this.timer);
  },
});
