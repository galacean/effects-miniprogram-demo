import { Player } from '@galacean/effects/alipay';
import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/alipay';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*cyyfTavfBscAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  async onCanvasReady () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      this.player = new Player({
        canvas,
        interactive: true,
      });
      await this.player.loadScene(json);
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  onTouchEnd (e) {
    dispatchTouchEnd(e);
  },
  onTouchStart (e) {
    dispatchTouchStart(e);
  },
  onTouchMove (e) {
    dispatchTouchMove(e);
  },
  onTouchCancel (e) {
    dispatchTouchCancel(e);
  },
  onUnload () {
    this.player?.dispose();
  },
});
