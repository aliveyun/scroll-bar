# @infore/scroll-bar

> macOS 样式的 React 滚动条组件

每个浏览器的滚动条都带有独特的样式，并且宽度也不一致，从而压缩内容区域的展示。现在，我们需要一个漂亮而又简约来自 macOS 样式的滚动条。

- 使用原生浏览器滚动
- 不影响设计布局
- 不占用额外的 DOM 层级
- 自动适应宽高的变化
- 2KB 压缩尺寸
- 支持 Chrome、Firefox >= 64、Microsoft Edge >= 79

**注意** 此组件不兼容 IE11，需要兼容低版本浏览器勿用。

## 安装

```
yarn add @infore/scroll-bar
```

## 示例

### 基本使用

<code src="./demos"></code>

### 全局滚动条

<code src="./demos/global.tsx" pure></code>

## API

### 通用

| Name          | Type             | Description                                                |
| :------------ | :--------------- | :--------------------------------------------------------- |
| theme         | `white` I `dark` | 适应容器的滚动条主题，默认 'white'                         |
| suppressMacOS | boolean          | 设置为 true 时，macOS 的浏览器将使用原生滚动条 默认 `true` |
| minThumbSize  | number           | 最小的拇指条尺寸，默认 20                                  |
| ghost         | boolean          | 滚动条背景是否透明, 默认 `false`                           |

### MacScrollbar

| Name            | Type   | Description                                                |
| :-------------- | :----- | :--------------------------------------------------------- |
| suppressScrollX | number | 设置为 true 时，无论内容宽度如何，X 轴上的滚动条都将不可用 |
| suppressScrollY | number | 设置为 true 时，无论内容高度如何，Y 轴的滚动条都将不可用   |
| as              | string | 自定义元素类型。默认 'div'                                 |
