<template>
  <div class="index">
    <scroller>
    <slider class="slider" interval="4500" auto-play="true">
      <div class="s-frame" v-for="img in imageList" @click="goWeb">
        <image class="s-image" resize="cover" :src="img.src"></image>
      </div>
      <indicator class="s-indicator"></indicator>
    </slider>
    <div class="theme">
      <div class="item" v-for="item in themeList">
        <a @click="goProList">
          <image class="t-image" resize="cover" :src="item.src"></image>
          <text class="t-text">{{item.title}}</text>
        </a>
      </div>
    </div>
    <div class="topic">
      <div class="tp_list" v-for="tp in topicList">
        <div class="tp_list_top">
          <a @click="goProList">
            <image class="tp_list_top_img" :src="tp.tp_img"></image>
          </a>
        </div>
        <div class="tp_list_bottom">
          <scroller class="tp_list_scroll" scroll-direction="horizontal"  show-scrollbar="false" style="flex-direction: row;">
            <a class="tp_list_bottom_item" v-for="(item,index) in tp.tp_list" @click="goProCont"  :key="index">
              <image class="tp_list_bottom_item_img" :src="item.item_img"></image>
              <text class="tp_list_bottom_itm_title">{{item.item_title}}</text>
              <text class="tp_list_bottom_itm_price">{{item.item_price}}</text>
            </a>
          </scroller>
        </div>
      </div>
    </div>
    </scroller>
    <footerBar></footerBar>
  </div>
</template>
<style>
  .index{
    padding-bottom:100px;
    background-color:#fff;
  }
  .slider {
    width: 750px;
    height: 343px;
  }
  .s-image {
    width: 750px;
    height: 343px;
  }
  .s-frame {
    width: 750px;
    height: 343px;
    position: relative;
  }
  .s-indicator {
    width: 750px;
    height: 343px;
    item-color: #ccc;
    item-selected-color: #b2845b;
    item-size: 20px;
    position: absolute;
    top:150px;
    left: 0px;
  }
  .theme{
    width:750px;
    height:180px;
    background-color:#fff;
    flex-direction: row;
    padding-top:10px;
    padding-bottom:10px;
    text-align:center;
    justify-content:center;
  }
  .item{
    justify-content: center;
    align-items:center;
    width:187.5px;
  }
  .t-image{
    width:120px;
    height:120px;
  }
  .t-text{
    font-size:24px;
    color:#b3855d;
    justify-content:center;
    width:120px;
    text-align:center;
  }
  .tp_list{
    margin-bottom:20px;
  }
  .tp_list_top{
    width:750px;
    height:300px;
  }
  .tp_list_top_img{
    width:750px;
    height:300px;
  }
  .tp_list_bottom{
    flex-direction:row;
    width:750px;
    height:300px;
    background-color:#fff;
  }
  tp_list_scroll{
    width:750px;
    height:300px;
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:10px;
    flex-direction:row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color:#fff;
  }
  .tp_list_bottom_item{
    width:200px;
    height:300px;
    justify-content: center;
    margin-right:25px;
    background-color:#fff;
  }
  .tp_list_bottom_item_img{
    width:200px;
    height:200px;
  }
  .tp_list_bottom_itm_title{
    font-size:18px;
    color:#333;
    padding-top:10px;
  }
  .tp_list_bottom_itm_price{
    font-size:24px;
    color:#e2330b;
    padding-top:10px;
  }
</style>
<script>
    import footerBar from './components/footerBar.vue';
    export default {
        data () {
            return {
                imageList: [
                    { title: 'item A', src: 'http://hmtest.oss-cn-shenzhen.aliyuncs.com/upload/image/201709/68d7c4d6-e07e-4f04-8988-5c2f29e54377.jpg'},
                    { title: 'item B', src: 'http://hmtest.oss-cn-shenzhen.aliyuncs.com/upload/image/201708/bc8c894d-33a1-4fbd-a826-810b1393afab.jpg'},
                    { title: 'item C', src: 'http://hmtest.oss-cn-shenzhen.aliyuncs.com/upload/image/201708/34377ad8-42af-42c6-b6da-4d7d962aa55c.jpg'}
                ],
                themeList:[
                    {title:"积分兑换",src:"http://heyuego.com/resources/mobile/shop/images/index_icon_03.jpg",href:"proList.js"},
                    {title:"积分兑换",src:"http://heyuego.com/resources/mobile/shop/images/index_icon_02.jpg",href:"proList.js"},
                    {title:"积分兑换",src:"http://heyuego.com/resources/mobile/shop/images/index_icon_04.jpg",href:"proList.js"},
                    {title:"积分兑换",src:"http://heyuego.com/resources/mobile/shop/images/index_icon_05.jpg",href:"proList.js"}
                ],
                topicList:[
                    {
                        tp_img:"http://heyuegou.oss-cn-shenzhen.aliyuncs.com/upload/image/201706/cb48ba51-8613-418f-a088-53f22f1b65df.jpg",
                        tp_href:"proList.js",
                        tp_list:[
                            {
                                item_img:"http://hmtest.oss-cn-shenzhen.aliyuncs.com/upload/image/201708/9934b76e-4cf8-41db-8c90-4014a4602f62.jpg",
                                item_href:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://image.zoshow.com/upload/goods20170516/82264271/822642710001/g1_402_536.jpg",
                                item_href:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://static.heyuego.com/upload/image/201710/3c8fefec-73ed-4374-ab86-808cfe193a6c_medium.jpg",
                                item_href:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://static.heyuego.com/upload/image/201711/e7eb4d51-361c-4f90-9bfc-7c1a29cfea97_medium.jpg",
                                item_href:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },

                        ]
                    },
                    {
                        tp_img:"http://heyuegou.oss-cn-shenzhen.aliyuncs.com/upload/image/201706/340e04dd-fc75-48d2-90df-294c75409323.jpg",
                        tp_href:"proList.js",
                        tp_list:[
                            {
                                item_img:"http://static.heyuego.com/upload/image/201711/e7eb4d51-361c-4f90-9bfc-7c1a29cfea97_medium.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://image.zoshow.com/upload/goods20170516/82264271/822642710001/g1_402_536.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://image.zoshow.com/upload/goods20170516/82264306/822643060001/g1_402_536.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://image.zoshow.com/upload/goods20170516/82264266/822642660001/g1_402_536.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },

                        ]
                    },
                    {
                        tp_img:"http://heyuegou.oss-cn-shenzhen.aliyuncs.com/upload/image/201706/bd9eb14a-48ba-4e39-82a2-09974add582d.jpg",
                        tp_href:"proList.js",
                        tp_list:[
                            {
                                item_img:"http://hmtest.oss-cn-shenzhen.aliyuncs.com/upload/image/201708/9934b76e-4cf8-41db-8c90-4014a4602f62.jpg",
                                item_src:"#",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://image.zoshow.com/upload/goods20170516/82264271/822642710001/g1_402_536.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://static.heyuego.com/upload/image/201711/e7eb4d51-361c-4f90-9bfc-7c1a29cfea97_medium.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },
                            {
                                item_img:"http://image.zoshow.com/upload/goods20170516/82264266/822642660001/g1_402_536.jpg",
                                item_src:"proCont.js",
                                item_price:"￥100.00",
                                item_title:"Salvatore Ferragamo【品牌直供】"
                            },

                        ]
                    }
                ]
            }
        },
        components:{footerBar},
        methods:{
            goProList(){
                this.$router.open({
                    name: 'heyue.proList'
                })
            },
            goProCont(){
                this.$router.open({
                    name:"heyue.proCont"
                })
            },
            goWeb(){
                this.$router.open({
                    name:"heyue.web"
                });
            }
        }
    }
</script>