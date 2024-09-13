import { Player } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-model/alipay';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*Q62TQL7Lo0cAAAAAAAAAAAAADlB4AQ';

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
