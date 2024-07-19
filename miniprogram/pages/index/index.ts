import { dispatchTouchCancel, dispatchTouchEnd, dispatchTouchMove, dispatchTouchStart, registerCanvas } from '@galacean/appx-adapter/weapp';
import { Player, AbstractPlugin, registerPlugin } from '@galacean/effects/weapp';
import inspireList from '../../assets/inspire-list';

// 假装注册陀螺仪插件，兼容有陀螺仪的合成报错
// @ts-expect-error
registerPlugin('orientation-transformer', AbstractPlugin, AbstractPlugin, false);

const jsons = Object.values(inspireList);
const downgradeImage = 'https://gw.alipayobjects.com/mdn/lifeNews_f/afts/img/A*_GFMTpUWjwsAAAAAAAAAAAAAARQnAQ';

Page<{}, WechatMiniprogram.Page.CustomOption>({
  canvas: null,
  player: null,
  data: {
    names: Object.values(inspireList).map(item => item.name),
    index: 0,
  },
  async onLoad () {
    const canvas = await registerCanvas({ id: '#J-webglCanvas' });

    this.canvas = canvas;
    // 实例化一个播放器
    this.player = new Player({
      transparentBackground: true,
      canvas,
      pixelRatio: 2,
      renderFramework: 'webgl',
      interactive: true,
    });
    this.playByUrl(inspireList.text.url);
  },
  bindPickerChange (e: WechatMiniprogram.TouchEvent) {
    const index = e.detail.value;

    this.setData({
      index,
    });
    void this.playByUrl(jsons[index].url);
  },
  async playByUrl (url: string) {
    try {
      this.player.destroyCurrentCompositions();
      void this.player.loadScene(url);
    } catch (e) {
      console.error(e);
      this.player.useDowngradeImage(downgradeImage);
    }
  },
  touchCancel(e: TouchEvent) { 
    dispatchTouchCancel(e as any);
  },
  touchStart(e: Event) {
    dispatchTouchStart(e as any);
  },
  touchMove (e: Event) {
    dispatchTouchMove(e as any);
  },
  touchEnd (e: Event) {
    dispatchTouchEnd(e as any);
  }
});

