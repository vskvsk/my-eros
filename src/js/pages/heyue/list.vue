<template>
  <div>
    <list>
      <cell v-for="news in lists">
        <div class="panel">
          <text class="text">{{news.newsTitle}}</text>
          <text class="content">{{news.newsContent}}</text>
        </div>
      </cell>

    </list>
  </div>
</template>
<style scoped>
  .panel {
    width: 650px;
    height: 250px;
    margin-left: 50px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    padding-top:15px;
    padding-left:10px;
    padding-right:10px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2)

  }

  .text {
    font-size: 36px;
    text-align: center;
    color: #41B883;
  }


  .content{
    lines:3;
    font-size: 28px;
  }
</style>
<script>
    const modal = weex.requireModule('modal')
    const stream = weex.requireModule('stream');
    export default {
        data() {
            return {
                lists: [],
            }
        },
        created(){
            let url='http://www.jspang.com/DemoApi/newsApi.php';
            this.getNews(url,res=>{
                modal.toast({message:'请求成功',duration:1});
                this.lists=res.data;
                console.log(res.data);
            });
        },
        methods: {
            getNews(url,callback){
                return stream.fetch({
                    method:'GET',
                    type:'json',
                    url:url
                },callback);
            }
        }
    }
</script>
