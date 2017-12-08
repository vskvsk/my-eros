module.exports = {
    "appName": "HEYUE",
    "appBoard": "/config/index.js",
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    "androidIsListenHomeBack": "true",
    "version": {
        "android": "1.0.0",
        "iOS": "1.0.0"
    },
    "page": {
        "homePage": "/pages/heyue/index.js",
        "mediatorPage": "/mediator/index.js",
        "navBarColor": "#1b1a20",
        "navItemColor": "#fff"
    },
    "url": {
        "request": "http://app.weex-eros.com",
        "jsServer": "http://app.weex-eros.com",

        "image": "https://lev-inf.benmu-health.com/test/xxx",
        "bundleUpdate": "http://localhosts:3001/app/check"
    },
    "zipFolder": {
        "iOS": "/ios/WeexEros/WeexEros",
        "android": "/android/WeexFrameworkWrapper/app/src/main/assets"
    },
    "getui": {
        "enabled": "false",
        "appId": "",
        "appKey": "",
        "appSecret": ""
    },
    "umeng": {
        "enabled": "false",
        "iOSAppKey": "",
        "androidAppKey": ""
    },
    "wechat": {
        "enabled": "false",
        "appId": "",
        "appSecret": ""
    },
    "amap": {
        "enabled": "true",
        "iOSAppKey": "623c0396a9b879461c971a14baa678fb",
        "androidAppKey": ""
    }
}