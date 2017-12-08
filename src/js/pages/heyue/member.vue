<template>
  <div class="member">
    <scroller>
      <div class="m_top">
        <image class="m_top_bg" src="http://heyuego.com/resources/mobile/shop/images/usercenter_bg.jpg" resize="cover"></image>
        <image class="m_top_img" src="http://heyuego.com/resources/mobile/base/images/pro_cla_img5.jpg"></image>
        <text class="m_top_name">Ranindrops</text>
        <div class="m_top_text_ed">
          <text class="f_24 t_left">可用信用额度</text>
          <text class="f_30 t_left">￥37000.5</text>
        </div>
        <div class="m_top_text_jf">
          <text class="f_24 t_right">当前积分</text>
          <text class="f_30 t_right">6000</text>
        </div>
      </div>
      <div class="m_cont">
        <div class="section">
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c j_l">
              <text class="s_tit_icon">&#xe623;</text>
              <text class="s_tit_text">分期消费</text>
            </div>
          </div>
          <div class="s_cont s_cont_fq">
           <div class="fd_r j_l a_c">
             <text class="fq_text c_9">最近一月待还</text>
             <text class="fq_money c_gold">￥300</text>
           </div>
            <a href="#" class="t_right right_link">
              <text class="link_text">查看详情</text>
              <text class="link_icon iconfont">&#xe619;</text>
            </a>
          </div>
        </div>

        <div class="section">
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c">
              <text class="s_tit_icon">&#xe9a6;</text>
              <text class="s_tit_text">我的订单</text>
            </div>
            <div class="t_right right_link">
              <text class="link_text">查看详情</text>
              <text class="link_icon iconfont">&#xe619;</text>
            </div>
          </div>
          <div class="s_cont fd_r j_b">
            <div class="order_iconItem">
              <text class="order_icon iconfont">&#xe608;</text>
              <text class="order_text">待付款</text>
            </div>
            <div class="order_iconItem">
              <text class="order_icon iconfont">&#xe863;</text>
              <text class="order_text">待发货</text>
            </div>
            <div class="order_iconItem">
              <text class="order_icon iconfont">&#xe669;</text>
              <text class="order_text">待收货</text>
            </div>
            <div class="order_iconItem">
              <text class="order_icon iconfont">&#xe64f;</text>
              <text class="order_text">退货/售后</text>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c">
              <text class="s_tit_icon">&#xe665;</text>
              <text class="s_tit_text">我的优惠券</text>
            </div>
            <div class="t_right right_link">
              <text class="link_text">还剩0张优惠券</text>
              <text class="link_icon iconfont">&#xe619;</text>
            </div>
          </div>
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c">
              <text class="s_tit_icon">&#xe60c;</text>
              <text class="s_tit_text">我的收藏</text>
            </div>
            <div class="t_right right_link">
              <text class="link_text bg_red">0</text>
              <text class="link_icon iconfont">&#xe619;</text>
            </div>
          </div>
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c">
              <text class="s_tit_icon">&#xe62e;</text>
              <text class="s_tit_text">我的咨询</text>
            </div>
            <div class="t_right right_link">
              <text class="link_icon iconfont">&#xe619;</text>
            </div>
          </div>
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c">
              <text class="s_tit_icon">&#xe6d6;</text>
              <text class="s_tit_text">我的收货地址</text>
            </div>
            <div class="t_right right_link">
              <text class="link_icon iconfont">&#xe619;</text>
            </div>
          </div>
          <div class="s_tit">
            <div class="s_tit_left fd_r a_c">
              <text class="s_tit_icon">&#xe63c;</text>
              <text class="s_tit_text">个人资料</text>
            </div>
            <div class="t_right right_link">
              <text class="link_icon iconfont">&#xe619;</text>
            </div>
          </div>
        </div>
      </div>
      <footerBar></footerBar>
    </scroller>
  </div>
</template>
<style scoped>
.c_9{color:#999;}
.c_gold{color:#b3845b;}
.iconfont{font-family:iconfont;}
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

.order_iconItem{
  padding-top:20px;
  padding-bottom:10px;
  flex-direction:column;
  justify-content: space-around;
  text-align:center;
  width:140px;
}

.order_icon{
  font-size:50px;
  color:#666;
  text-align:center;
}

.order_text{
  font-size:22px;
  color:#999999;
  padding-top:10px;
  text-align:center;
}

.fq_money{font-size:24px;}
.s_cont_fq{
  padding-top:40px;
  padding-bottom:40px;
  padding-left:48px;
}
.fq_text{
  font-size:24px;
  padding-right:10px;
}
.s_cont{
  padding:10px;
  flex-direction: row;
  justify-content: space-between;
  font-size:24px;
}
.right_link{
  width:220px;
  flex-direction: row;
  justify-content: flex-end;
}
.link_text{
  color:#999999;
  font-size:24px;
}
.link_icon{
  color:#ccc;
  font-size:24px;
}
.member{
  background-color:#fafafa;
  padding-bottom:100px;
}
.section{
  background-color:white;
  border-top:1px;
  border-bottom:1px;
  border-width:1px;
  border-color:#ebebeb;
  border-style:solid;
  padding-left:15px;
  padding-right:15px;
  margin-top:15px;
}
.s_tit{
  height:80px;
  align-items:center;
  border-bottom-width:1px;
  border-style:solid;
  border-color:#ebebeb;
  flex-direction: row;
  justify-content: space-between;
  padding-left:10px;
  padding-right:10px;
}
.s_tit_icon{
  font-size:42px;
  width:50px;
  padding-right:30px;
  color:#b88c66;
  font-family:iconfont;
}

.s_tit_text{
  font-size:28px;
  color:#595959;
}


.member{
  width:750px;
}
.m_top{
  width:750px;
  height:380px;
  position:relative;
  text-align:center;
  flex-direction:column;
  align-items: center;
}
.m_top_bg{
  width:750px;
  height:380px;
  position:absolute;
  top:0px;
  left:0px;
}
.m_top_img{
  width:140px;
  height:140px;
  border-radius:140px;
  border-width:4px;
  border-style:solid;
  border-color:#ffffff;
  margin-top:60px;
}
.m_top_name{
  font-size:28px;
  color:#595959;
  padding-top:20px;
  text-align:center;
}
.m_top_text_ed{
  width:300px;
  padding-left:45px;
  padding-bottom:15px;
  padding-top:10px;
  position:absolute;
  bottom:0px;
  left:0px;
  color:#fff;
}
.m_top_text_jf{
  width:300px;
  padding-right:45px;
  padding-bottom:15px;
  padding-top:10px;
  position:absolute;
  bottom:0px;
  right:0px;
  color:#fff;
}
.f_24{
  font-size:24px;
  color:#fff;
}
.f_30{
  font-size:30px;
  color:#fff;
  padding-top:5px;
}
.t_left{
  text-align:left;
}
.t_right{
  text-align:right;
}
</style>
<script>
    import footerBar from './components/footerBar.vue';
    export default{
        data(){
            return {
                tabbarList:[
                    {title:"首页11",href:"index.weex.js",icon:"&#xe618;" },
                    {title:"分类",href:"classify.weex.js",icon:"&#xe617;"},
                    {title:"购物车",href:"list_test.weex.js",icon:"&#xe60b;"},
                    {title:"会员中心",href:"web.weex.js",icon:"&#xe61c;"}
                ]
            }
        },
        created(){

        },
        components:{footerBar},
        beforeCreate:function () {
            var domModule=weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                'src':"url(\'http://at.alicdn.com/t/font_304664_3bd357gsxbfq1tt9.ttf\')"
            })
        }
    }
</script>