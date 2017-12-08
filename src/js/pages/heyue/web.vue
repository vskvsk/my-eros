<template>
  <div class="wrapper">
    <web src="http://m.ctrip.com/html5/" class="web" @pagestart="start" @pagefinish="finish"></web>
  </div>
</template>
<style scoped>
  .wrapper{
    flex-direction:column;
    justify-content:center;
  }
  .web{
    width:740px;
    height:1000px;
    border-width:2px;
    border-color:#0088fb;
    border-style:solid;
  }
</style>
<script>
    const modal = weex.requireModule("modal");
    export default{
        data(){
            return{
                src:"https://sina.cn/"
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
