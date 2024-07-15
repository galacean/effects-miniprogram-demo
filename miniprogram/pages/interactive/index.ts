import { Player } from '@galacean/effects/douyin';
import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/douyin';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*cyyfTavfBscAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  [key: string]: any;
}>({
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
  onTouchEnd (e: any) {
    dispatchTouchEnd(e);
  },
  onTouchStart (e: any) {
    dispatchTouchStart(e);
  },
  onTouchMove (e: any) {
    dispatchTouchMove(e);
  },
  onTouchCancel (e: any) {
    dispatchTouchCancel(e);
  },
  onUnload () {
    this.player?.dispose();
  },
});
