import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player, AssetManager } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-spine/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*GmmoRYoutZ4AAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  player: null,

  async onReady () {
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

