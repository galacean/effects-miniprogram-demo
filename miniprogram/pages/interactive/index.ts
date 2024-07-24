import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*cyyfTavfBscAAAAAAAAAAAAADlB4AQ';

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
        interactive: true,
        renderFramework: 'webgl',
      });
      await this.player.loadScene(json);
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  touchCancel (e: any) {
    dispatchTouchCancel(e);
  },
  touchStart (e: any) {
    dispatchTouchStart(e);
  },
  touchMove (e: any) {
    dispatchTouchMove(e);
  },
  touchEnd (e: any) {
    dispatchTouchEnd(e);
  },
  onUnload () {
    this.player?.dispose();
  },
});

