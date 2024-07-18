import { Player } from '@galacean/effects/douyin';
import { registerCanvas } from '@galacean/appx-adapter/douyin';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*LZmYQZ6etZoAAAAAAAAAAAAADlB4AQ';

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

      const compostion = await this.player.loadScene(json);
      const textItem = compostion.getItemByName('text_2');

      textItem?.content.setFontSize(48);
      textItem?.content.setTextColor([255, 0, 0, 1]);
      this.timer = setTimeout(() => {
        textItem?.content.setText('Galacean Effects\n基于 Web\n效果丰富，氛围粒子、陀螺仪特效、3D 模型渲染\n100%还原');
      }, 1500);
      console.log(1);
      
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  onUnload () {
    this.player?.dispose();
    this.timer && clearTimeout(this.timer);
  },
});
