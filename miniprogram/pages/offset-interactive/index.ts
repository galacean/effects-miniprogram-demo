import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/weapp';
import { Player } from '@galacean/effects/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*2rNdR76aFvMAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  player: null,

  async onReady () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      // 实例化一个播放器
      this.player = new Player({
        canvas,
        interactive: true,
        renderFramework: 'webgl',
      });

      const composition = await this.player.loadScene(json);
      const item = composition.getItemByName('lotteryBtn');

      item?.on('click', e => {
        console.info(`[item click] - item [${e.name}] clicked.`);
      });
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

