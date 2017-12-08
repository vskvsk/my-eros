<template>
  <a @click="back"><text class="iconfont s_back">&#xe657;</text></a>
</template>
<style scoped>
  .iconfont{font-family:iconfont;}
  .s_back{
    font-size:42px;
    color:#999;
    padding-left:10px;
    padding-right:10px;
  }
</style>
<script>
    const navigator = weex.requireModule("navigator");
    export default {
        beforeCreate:function () {
            var domModule=weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                'src':"url(\'http://at.alicdn.com/t/font_304664_662d9y9xpa2a9k9.ttf\')"
            })
        },
        methods:{
            back(){
                navigator.pop();
            }
        },
        computed:{

        }
    }
</script>