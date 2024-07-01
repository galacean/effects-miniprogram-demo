import { Player } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-spine/alipay';

// 找春天
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PHr2S4nmAM8AAAAAAAAAAAAADlB4AQ';
// 818 理财
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*JaLiQYyUqhoAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  async onLoad () {
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
