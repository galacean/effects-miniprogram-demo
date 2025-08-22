import { Player } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';

const json = 'assets/qixi/index.json';

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
