import { Player } from '@galacean/effects/alipay';
import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/alipay';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*u-NFTK_DS0IAAAAAAAAAAAAAelB4AQ';

Component({
  data: {},
  props: {
    visible: false,
  },
  didMount () { },
  didUpdate (prevProps, prevData) { },
  methods: {
    async onCanvasReady () {
      try {
        const canvas = await registerCanvas({ id: '#J-webglCanvas' });

        this.player = new Player({
          canvas,
          interactive: true,
        });

        // @ts-expect-error
        const composition = await this.player.loadScene(json);
        const lockBtn = composition.getItemByName('CLICK_PRE');

        lockBtn?.on('click', (e) => {
          console.log('trigger click: ', e);
          this.$page.setData({ visible: false });
        });
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
  },
  didUnmount () {
    // @ts-expect-error
    this.player?.dispose();
  },
});
