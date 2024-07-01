import { Player } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-model/alipay';

// 绿色人
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*SERYRaes5S0AAAAAAAAAAAAADlB4AQ';
// 骨骼
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*NPMMTbrZrJAAAAAAAAAAAAAADlB4AQ';

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
