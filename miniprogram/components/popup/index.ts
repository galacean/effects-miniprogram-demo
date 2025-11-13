import { Player } from '@galacean/effects/weapp';
import { registerCanvas, dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd, dispatchTouchCancel } from '@galacean/appx-adapter/weapp';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*u-NFTK_DS0IAAAAAAAAAAAAAelB4AQ';

Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    player: null as Player | null,
  },
  methods: {
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
  },
  observers: {
    visible (visible: boolean) {
      if (!visible) {
        return;
      }

      wx.nextTick(async () => {
        try {
          const query = wx.createSelectorQuery().in(this);
          const nodeCanvas = await new Promise((resolve) => {
            query
              .select('#J-webglCanvas')
              .node()
              .exec((res) => {
                  resolve(res[0].node);
              });
          });

          console.log({ nodeCanvas })

          const canvas = await registerCanvas({ id: nodeCanvas });

          this.data.player = new Player({
            canvas,
            interactive: true,
          });

          const composition = await this.data.player.loadScene(json);
          const lockBtn = composition.getItemByName('CLICK_PRE');

          lockBtn?.on('click', (e: any) => {
            console.log('trigger click: ', e);
            this.triggerEvent('close', { visible: false });
          });
        } catch (e) {
          console.error(`biz error: ${e}`);
        }
      })
    }
  },
  lifetimes: {
    detached () {
      this.data.player?.dispose();
    },
  },
});

