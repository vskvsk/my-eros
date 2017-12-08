# wxc-countdown

> 一个倒计时组件

- 规则
  - 支持传入时间戳，然后用 setTimeout 去倒计时

## [Demo预览](https://h5.m.taobao.com/trip/wxc-countdown/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fwxc-countdown%2Fdemo%2Findex.native-min.js)
<img src="http://gtms04.alicdn.com/tfs/TB15.aPSFXXXXaiXpXXXXXXXXXX-750-1334.gif" width="240"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="http://gtms01.alicdn.com/tfs/TB1Kj1MSFXXXXbMXpXXXXXXXXXX-200-200.png" width="160"/>

## 参数配置

| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`time`** | `Number` | `Y` | `1501200000000` | 倒计时最终时间戳 |
| **`interval`** | `Number` | `N` | `1000` | 倒计时的间隔,单位为"毫秒" |
| ** `tpl`** | `String` | `N` | `{h}:{m}:{s}` | 倒计时展示模板 |
| **`onComplete`** | `Function` | `N` | `()=>()` | 倒计时完成时调用的方法 |
| **`timeWrapStyle`** | `Object` | `N` | `-` | 最外层包裹 style |
| **`timeBoxStyle`** | `Object` | `N` | `-` | 数字盒子 style |
| **`dotBoxStyle`** | `Object` | `N` | `-` | : 盒子Style |
| **`timeTextStyle`** | `Object` | `N` | `-` | 数字文字 Style |
| **`dotTextStyle`** | `Object` | `N` | `-` | : 文字Style |



## 安装

```
npm i weex-ui --save
```

## 使用方法

```
<template>
  <wxc-countdown
      :time="TIME"
    ></wxc-countdown>
</template>
<script>
    import { WxcCountdown } from 'weex-ui'
    export default {
      components: { WxcCountdown },
      data: () => ({
        TIME: new Date().getTime() + 86400000 + ''
      }),
      created () {
        const navigationBar = weex.requireModule('navigationBar')
        if (navigationBar && navigationBar.setTitle) {
          const NOOP = () => {}
          navigationBar.setTitle({
            title: 'wxc-countdown Demo'
          }, NOOP, NOOP)
        }
      }
    }
</script>
```

