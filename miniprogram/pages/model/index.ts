import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';
import '@galacean/effects-plugin-model/weapp';

// 绿色人
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*SERYRaes5S0AAAAAAAAAAAAADlB4AQ';
// 骨骼
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*NPMMTbrZrJAAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  player: null,

  async onReady () {
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

