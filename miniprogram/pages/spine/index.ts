import { Player } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-spine/alipay';

// 找春天
const json = 'https://g.alicdn.com/ani-assets/aca6ab90807d22390047daf3bcf05c21/0.0.1/mars.json';
// 818 理财
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*JaLiQYyUqhoAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  async onCanvasReady () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      this.player = new Player({
        canvas,
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
