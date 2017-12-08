<template>
  <div class="tabbar">
    <div class="tabbar_item">
      <a @click="goTo('heyue.index')">
        <text class="tabbar_icon">&#xe618;</text>
        <text class="tabbar_text">首页</text>
      </a>
    </div>
    <div class="tabbar_item">
      <a @click="goTo('heyue.classify')">
        <text class="tabbar_icon">&#xe617;</text>
        <text class="tabbar_text">分类</text>
      </a>
    </div>
    <div class="tabbar_item">
      <a @click="goTo('heyue.proList')">
        <text class="tabbar_icon">&#xe60b;</text>
        <text class="tabbar_text">购物车</text>
      </a>
    </div>
    <div class="tabbar_item">
      <a @click="goTo('heyue.member')">
        <text class="tabbar_icon">&#xe61c;</text>
        <text class="tabbar_text">会员中心</text>
      </a>
    </div>
  </div>
</template>
<style scoped>
  .tabbar{
    flex-direction: row;
    position: fixed;
    bottom:0;
    left:0;
    text-align: center;
    width:750px;
    background-color:#fff;
    border-top-color:#ebebeb;
    border-top-width:1px;
    border-style:solid;
  }
  .tabbar_item{
    justify-content: center;
    align-items:center;
    flex:1;
    height:96px;
    padding-top:10px;
    padding-bottom:10px;
    text-align:center;
  }
  .tabbar_icon{
    font-family:heyue_icon;
    font-size:40px;
    padding-bottom:6px;
    align-items:center;
    text-align:center;
    justify-content: center;
    color:#999;
    width:187.5px;
  }
  .tabbar_text{
    font-size:18px;
    color:#666;
    align-items:center;
    text-align:center;
    width:187.5px;
  }
</style>
<script>
    /*var he = require('he');*/
    export default {
        data () {
        },
        methods: {
            goTo(url){
                this.$router.open({
                    name:url
                })
            }
        },
        beforeCreate:function () {
            var domModule=weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily': "heyue_icon",
                'src': "url('bmlocal://iconfont/heyue_icon.ttf')"
            })
        }
    }
</script>