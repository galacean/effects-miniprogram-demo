import { adapter, Player } from '../../libs/mp-douyin-galacean-effects';

const app = getApp();

Page({
  data: {

  },
  onLoad: async function () {
    const canvas = await adapter.registerCanvas({ id: '#J-webglCanvas' });
    // 实例化一个播放器
    const player = new Player({
      canvas,
      renderFramework: 'webgl',
    });

    void player.loadScene('https://gw.alipayobjects.com/os/gltf-asset/mars-cli/AEFTPXNTAVWO/-79861579-61067.json');
  },
});
