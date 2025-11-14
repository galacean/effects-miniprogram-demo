import { Player, TextComponent } from '@galacean/effects/alipay';
import { registerCanvas } from '@galacean/appx-adapter/alipay';
import '@galacean/effects-plugin-rich-text/alipay';
import { RichTextComponent } from '@galacean/effects-plugin-rich-text/alipay';

const json = 'https://mdn.alipayobjects.com/mars/afts/file/A*LZmYQZ6etZoAAAAAAAAAAAAADlB4AQ';
const richTextJson = 'https://mdn.alipayobjects.com/mars/afts/file/A*trEcQ7My81EAAAAAAAAAAAAADlB4AQ';

Page<{}, {
  player: Player | null;
  [key: string]: any;
}>({
  onCanvasReady: async function () {
    try {
      const canvas = await registerCanvas({ id: '#J-webglCanvas' });

      this.player = new Player({
        canvas,
        renderFramework: 'webgl',
      });

      const compostion = await this.player.loadScene(json);
      const textItem = compostion.getItemByName('text_2');
      const textComponent = textItem?.getComponent(TextComponent);

      textComponent?.setFontSize(48);
      textComponent?.setTextColor([255, 0, 0, 1]);

      const richTextCompostion = await this.player.loadScene(richTextJson, {
        variables: {
          richText_1: '<color=green>Galacean\nEffects\n\n富文232本</color>',
        }
      });
      const richTextItem = richTextCompostion.getItemByName('richText_1');
      const richTextComponent = richTextItem?.getComponent(RichTextComponent);

      this.timer = setTimeout(() => {
        textComponent?.setText('Galacean Effects\n基于 Web\n效果丰富，氛围粒子、陀螺仪特效、3D 模型渲染\n100%还原');
        richTextComponent?.setText('<color=green>Galacean</color>\n<b>Effects</b>\n富文<color=#00ff00ff><i>232</i></color>本')
      }, 1500);
    } catch (e) {
      console.error(`biz error: ${e}`);
    }
  },
  onUnload () {
    this.player?.dispose();
    this.timer && clearTimeout(this.timer);
  },
});
