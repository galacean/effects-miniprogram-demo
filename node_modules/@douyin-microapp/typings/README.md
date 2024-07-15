# 字节小程序类型定义文件

字节跳动小程序 API 的 TypeScript 类型定义文件。

## 安装

```shell
npm install @douyin-microapp/typings
```

## 使用

安装后手动进行导入。

- `import '@douyin-microapp/typings';`

也可以直接在项目的 `tsconfig.json` 配置文件中指定。

- `types: ["@douyin-microapp/typings"]`。

或者通过 [三斜杠指令](https://www.tslang.cn/docs/handbook/triple-slash-directives.html) 引用。

- `/// <reference path="node_modules/@douyin-microapp/typings/index.d.ts" />`
