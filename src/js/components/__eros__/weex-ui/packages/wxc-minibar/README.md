# wxc-minibar 

> 顶部导航栏

- 规则
  - 建议优先使用native自带的navigator
     
-----

## [Demo预览](https://h5.m.taobao.com/trip/wxc-minibar/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fwxc-minibar%2Fdemo%2Findex.native-min.js)
<img src="https://img.alicdn.com/tfs/TB1bhPySpXXXXa4XFXXXXXXXXXX-750-1334.png" width="200"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://gtms03.alicdn.com/tfs/TB1EJY_SpXXXXcmXpXXXXXXXXXX-200-200.png" width="160"/>

## 安装

```
npm install weex-ui --save
```

## 使用方法

```
<template>
  <div class="container" :style="{ height: height }">
    <div class="demo">
      <text class="text">配置颜色</text>
      <wxc-minibar title="阿里旅行购物车"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   v-on:minibarLeftButtonClick="minibarLeftButtonClick"
                   v-on:minibarRightButtonClick="minibarRightButtonClick"
                   right-text="更多"></wxc-minibar>
    </div>
  </div>
</template>

<script>

  import { WxcMinibar } from 'weex-ui';
  const modal = weex.requireModule('modal');

  module.exports = {
    components: { WxcMinibar },
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  };
</script>
```

### 可配置参数

| 名称      | 类型     | 默认值   | 备注  |
|-------------|------------|--------|-----|
| title | `String` | '' | `required` |
| right-button | `String` | '' | 右侧button icon |
| right-text | `String` | '' | 右侧button文案优先显示icon |
| left-button | `String` | '返回图标' |  左侧button icon |
| text-color | `String` | '#333333' | 文案颜色 |
| background-color | `String` | '#ffffff' | 背景颜色 |
| use-default-return | `bool` | 'true' | 是否使用默认的返回 |
| show | `bool` | 'true' | 是否显示 |


### 事件回调

```
左侧按钮点击：`v-on:minibarLeftButtonClick="minibarLeftButtonClick"`
右侧点击：`v-on:minibarRightButtonClick="minibarRightButtonClick"`
```

