<template>
  <div class="proCont">
      <div class="p_tab">
        <iconBack></iconBack>
        <div class="p_tab_list" >
          <text class="p_tab_item baseLine" >商品</text>
          <text class="p_tab_item">详情</text>
          <text class="p_tab_item">评价</text>
          <text class="p_tab_item">咨询</text>
        </div>
        <text class="p_tab_edit iconfont">&#xe61e;</text>
      </div>
      <slider class="p_slider" interval="5000" auto-play="true">
        <div class="s-frame" v-for="img in imageList">
          <image class="s-image" resize="contain" :src="img.src"></image>
        </div>
        <indicator class="s-indicator"></indicator>
      </slider>
      <div class="p_desc">
        <div class="p_desc_name">
          <text class="c_3 p_desc_name_t1">苹果 MacBook Air MD711CH 双11放价优惠中</text>
          <text class="c_org p_desc_name_t2">超长电池使用时间，强劲性能</text>
        </div>
        <div class="p_desc_price">
          <text class="c_red p_desc_price_t1">￥5800.00</text>
          <text class="c_c p_desc_price_t2">￥6960.00</text>
        </div>
      </div>
      <div class="p_link">
        <a class="p_link_item">
          <text class="p_link_item_l">商品参数</text>
          <div class="p_link_item_r">
            <text class="p_link_item_r_text"></text>
            <text class="p_link_item_r_icon iconfont">&#xe619;</text>
          </div>
        </a>
        <a class="p_link_item">
          <text class="p_link_item_l">商品参数</text>
          <div class="p_link_item_r">
            <text class="p_link_item_r_text"></text>
            <text class="p_link_item_r_icon iconfont">&#xe619;</text>
          </div>
        </a>
      </div>
      <div class="p_tabbar">
        <div class="p_tabbar_l">
          <a class="p_tabbar_l_a" href="index.weex.js">
            <text class="p_tabbar_icon iconfont">&#xe605;</text>
            <text class="p_tabbar_text">首页</text>
          </a>
          <a class="p_tabbar_l_a" href="#">
            <text class="p_tabbar_icon iconfont">&#xe668;</text>
            <text class="p_tabbar_text">店铺</text>
          </a>
          <a class="p_tabbar_l_a" href="#">
            <text class="p_tabbar_icon iconfont">&#xe6c8;</text>
            <text class="p_tabbar_text">收藏</text>
          </a>
        </div>
        <div class="p_tabbar_r">
          <text class="p_tabber_addCar">加入购物车</text>
          <text class="p_tabber_buy">立即购买</text>
        </div>
      </div>
  </div>
</template>
<style scoped>
.c_9{color:#999;}
.c_gold{color:#b3845b;}
.t_right{text-align:right;}
.t_left{text-align:left;}
.j_l{justify-content: left;}
.j_c{justify-content: center;}
.j_r{justify-content: right;}
.j_b{justify-content:space-between;}
.j_a{justify-content: space-around;}
.fd_r{flex-direction:row;}
.fd_c{flex-direction:column;}
.a_c{align-items:center;}
.bg_red{background-color:#ff1313; padding-top:1px; padding-bottom:1px; padding-left:15px; padding-right:15px; border-radius:25px; color:#fff;}
.iconfont{font-family:iconfont;}
.c_3{color:#333;}
.c_org{color:#ff7121; lines:2;}
.c_red{color:#d81907;}
.c_c{color:#ccc;}

.p_tabbar{
  height:96px;
  background-color:white;
  position:fixed;
  bottom:0px;
  left:0px;
  flex-direction:row;
  width:750px;
  box-shadow:0px 0px 5px #ccc;
}
.p_tabbar_l{
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width:312px;
}

.p_tabbar_l_a{
  width:104px;
  padding:15px;
  text-align:center;
}

.p_tabbar_r{
  width:438px;
  flex-direction:row;
  justify-content: center;
  align-items:center;
}

.p_tabber_addCar{
  font-size:28px;
  color:#fff;
  background-color:#e9ba77;
  height:92px;
  line-height:92px;
  width:219px;
  text-align:center;
}
.p_tabber_buy{
  font-size:28px;
  color:#fff;
  background-color:#b2845b;
  height:92px;
  line-height:92px;
  width:219px;
  text-align:center;
}

.p_tabbar_icon{
  font-size:40px;
  text-align:center;
  color:#666;
}

.p_tabbar_text{
  font-size:18px;
  text-align:center;
  color:#666;
  padding-top:8px;
}

.proCont{
  background-color:#fafafa;
  padding-bottom:96px;
}
.p_tab{
  height:88px;
  background-color:#fff;
  border-bottom-width:1px;
  border-color:#ebebeb;
  border-style:solid;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
}
.p_tab_list{
  width:560px;
  flex-direction: row;
  justify-content: space-between;
}
.p_tab_item{
  height:88px;
  width:124px;
  text-align:center;
  line-height:88px;
  color:#595959;
}
.baseLine{
  border-bottom-width:4px;
  border-style:solid;
  border-color:#b2845b;
}
.p_tab_edit{
  font-size:40px;
  color:#b2845b;
  padding-right:10px;
  padding-left:10px;
}
.p_slider{
  height:600px;
  width:750px;
  margin-top:10px;
  padding-top:10px;
  padding-bottom:10px;
  background-color:#fff;
}
.s-frame{
  height:600px;
  width:750px;
  text-align:center;
  justify-content: center;
  align-items: center;
}
.s-image{
  width:600px;
  height:600px;
}

.s-indicator {
  width: 750px;
  height: 600px;
  item-color: #ccc;
  item-selected-color: #b2845b;
  item-size: 20px;
  position: absolute;
  top:280px;
  left: 0px;
}

.p_desc{
  padding:20px;
  background-color:#fff;
}
.p_desc_name{
  flex-direction:column;
  lines:2;
  line-height:60px;
}
.p_desc_name_t1{
  font-size:28px;
  line-height:40px;
}
.p_desc_name_t2{
  font-size:28px;
  line-height:40px;
}
.p_desc_price{
  flex-direction:row;
  padding-top:10px;
  align-items:flex-end;
}
.p_desc_price_t1{
  font-size:28px;
}
.p_desc_price_t2{
  font-size:20px;
  text-decoration: line-through;
  padding-left:10px;
}
.p_link{
  background-color:#fff;
  border-top-width:1px;
  border-color:#ebebeb;
  border-style:solid;
  margin-top:10px;
}
.p_link_item{
  height:80px;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  border-bottom-width:1px;
  border-color:#ebebeb;
  border-style:solid;
}
.p_link_item_l{
  font-size:28px;
  color:#595959;
  padding-left:20px;
}
.p_link_item_r{
  font-size:28px;
  color:#595959;
  padding-left:20px;
  flex-direction: row;
}
.p_link_item_r_icon{
  font-size:22px;
  color:#666;
  padding-right:30px;
}
</style>
<script>
    const modal = weex.requireModule("modal");
    import iconBack from './components/iconBack.vue';
    export default{
        data(){
            return {
                imageList: [
                    { title: 'item A', src: 'http://static.heyuego.com/upload/image/201710/f49517c8-6ad4-432c-8d8d-3f33357b09bd_medium.jpg'},
                    { title: 'item B', src: 'http://static.heyuego.com/upload/image/201710/a523637c-346c-4889-a8eb-25f34757287d_medium.jpg'},
                    { title: 'item C', src: 'http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg'}
                ]
            }
        },
        created(){
        },
        methods:{

        },
        components:{iconBack},
        beforeCreate:function () {
            var domModule=weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                'src':"url(\'http://at.alicdn.com/t/font_304664_662d9y9xpa2a9k9.ttf\')"
            })
        }
    }
</script>