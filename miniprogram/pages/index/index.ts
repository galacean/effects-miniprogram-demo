import { adapter, Player } from '../../libs/mp-weapp-galacean-effects';

Page({
  async onLoad() {
    const canvas = await adapter.registerCanvas({ id: '#J-webglCanvas' });

    // 实例化一个播放器
    const player = new Player({
      transparentBackground: true,
      canvas,
      pixelRatio: 2,
      renderFramework: 'webgl'
    });
    void player.loadScene('https://gw.alipayobjects.com/os/gltf-asset/mars-cli/MNJVBYCSYDWN/1425978492-8d707.json');
  },
})
