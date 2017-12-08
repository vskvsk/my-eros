<template>
  <div class="wrapper">
    <web src="http://www.uf-club.com/static/yybg/yybg201711_wap.html" class="web" @pagestart="start" @pagefinish="finish"></web>
  </div>
</template>
<style scoped>
  .wrapper{
    flex-direction:column;
    justify-content:center;
  }
  .web{
    width:750px;
    height:1334px;
  }
</style>
<script>
    const modal = weex.requireModule("modal");
    export default{
        data(){
            return{
                src:"http://heyuego.com/activity/luckeyTurntable"
            }
        },
        methods:{
            start(){
                modal.toast({"message":"pageStart"});
            },
            finish(){
                modal.toast({"message":"pageFinish"});
            }
        }
    }
</script>
