import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*PubBSpHUbjYAAAAAAAAAAAAADlB4AQ';

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
      await this.player.loadScene(json, {
        variables: {
          image: 'https://mdn.alipayobjects.com/huamei_klifp9/afts/img/A*ySrfRJvfvfQAAAAAAAAAAAAADvV6AQ/original',
        },
      });
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  onUnload () {
    this.player?.dispose();
  },
});

