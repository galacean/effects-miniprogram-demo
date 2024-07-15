import { Player } from '@galacean/effects/douyin';
import { registerCanvas } from '@galacean/appx-adapter/douyin';
// import '@galacean/effects-plugin-model/douyin';

// 绿色人
const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*SERYRaes5S0AAAAAAAAAAAAADlB4AQ';
// 骨骼
// const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*NPMMTbrZrJAAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  [key: string]: any;
}>({
  onReady: async function () {
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
