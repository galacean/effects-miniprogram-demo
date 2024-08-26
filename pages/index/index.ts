import { adapter, Player } from '../../libs/mp-alipay-galacean-effects';

Page<{
  SDKVersion?: string,
  useComponent?: boolean,
  useComponent2?: boolean,
}>({
  data: {
    SDKVersion: '',
  },
  async onLoad (query) {
    // 页面加载
  },
  async onReady () {
    // 页面加载完成
    const canvas = await adapter.registerCanvas({ id: '#J-webglCanvas' });
    // 实例化一个播放器
    // @ts-expect-error
    const player = new Player({
      canvas,
    });

    await player.loadScene('https://gw.alipayobjects.com/os/gltf-asset/mars-cli/MNJVBYCSYDWN/1425978492-8d707.json');
  },
  onShow () {
    // 页面显示
    this.setData({
      SDKVersion: my.SDKVersion,
    })
  },
  onUnload () {
    // 页面被关闭
  },
  onTitleClick () {
    // 标题被点击
  },
  onPullDownRefresh () {
    // 页面被下拉
  },
  onReachBottom () {
    // 页面被拉到底部
  },
  onShareAppMessage () {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});