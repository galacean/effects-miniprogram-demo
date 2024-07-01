import { Player } from '@galacean/effects/alipay';
import { Accelerometer, registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-orientation-transformer/alipay';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*boRsTqJ4QAkAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  async onLoad () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });
      const accelerometer = new Accelerometer();

      this.player = new Player({
        canvas,
      });
      await this.player.loadScene(json);
      accelerometer.startWatch('ui');
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  onUnload () {
    this.player?.dispose();
  },
});
