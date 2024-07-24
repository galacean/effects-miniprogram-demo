import { registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*GC99RbcyZiMAAAAAAAAAAAAADlB4AQ';

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
  radioChange (e: any) {
    const renderLevel = e.detail.value;

    this.player?.getCompositions().forEach(composition => composition.dispose());
    void this.player?.loadScene(json, {
      renderLevel,
    });
  },
  onUnload () {
    this.player?.dispose();
  },
});

