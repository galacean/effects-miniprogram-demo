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
        this.data.player?.dispose();
        this.data.player = null;

        return;
      }

      wx.nextTick(async () => {
        try {
          const id = '#J-webglCanvas';
          const query = wx.createSelectorQuery().in(this);
          const nodeCanvas = await new Promise((resolve, reject) => {
            query
              .select(id).node()
              .select(id).boundingClientRect()
              .exec((res) => {
                try {
                  const canvas = res[0].node;
                  const rect = res[1];

                  if (canvas) {
                    canvas.getBoundingClientRect = () => rect;
                    resolve(canvas);
                  } else {
                    reject(`create canvas fail, canvas is ${canvas}`);
                  }
                } catch (e) {
                  reject(`Cannot find canvas by id: ${id}, ${e}`);
                }
              });
          });

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
      this.data.player = null;
    },
  },
});

