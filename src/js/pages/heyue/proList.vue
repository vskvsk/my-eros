<template>
    <waterfall column-width="auto" :column-count="columnCount" column-gap="10" ref="waterfall" >
        <header class="header">
            <iconBack></iconBack>
            <input class="s_inp" placeholder="请输入搜索关键字" type="text" />
            <text @click="changeColum" class="iconfont s_changeMenu">&#xe695;</text>
        </header>
        <cell class="cell" v-for="(item,index) in wList" :key="index"  >
            <div class="item" @click="goProCont">
                <div class="i_imgWrap">
                    <image :style="imgStyle" class="i_img" :src="item.img"></image>
                </div>
                <div class="i_text">
                    <text class="i_text_name">{{item.name}}</text>
                    <text class="i_text_desc">{{item.desc}}</text>
                    <text class="i_text_price">{{item.price}}</text>
                    <div class="i_text_shop"><text class="s_icon">{{item.shopIcon}}</text><text class="s_name">{{item.shop}}</text></div>
                </div>
            </div>
        </cell>
    </waterfall>
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

.header{
  position:sticky;
  top:0px;
  left:0px;
  background-color:#fff;
  flex-direction:row;
  justify-content:space-between;
  padding:15px;
  align-items:center;
}


.s_inp{
  padding:15px;
  height:60px;
  width:540px;
  font-size: 26px;
  color:#999;
  background-color:#ececec;
  border-radius:10px;
}
.s_back{
  font-size:42px;
  color:#999;
  padding-left:10px;
  padding-right:10px;
}
.s_changeMenu{
  font-size:46px;
  color:#666;
  padding-left:10px;
  padding-right:10px;
}


.cell{
    margin-top:10px;
}

.item {
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
}

.i_imgWrap {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.i_img {
  text-align: center;
}
.i_text {
  padding-top: 20px;
}
.i_text_name{
  color: #666;
  font-size: 22px;
  lines: 2;
}
.i_text_desc {
  color: #7a7a7a;
  font-size: 20px;
  padding-top: 20px;
  lines: 2;
}

.i_text_price {
  font-size: 24px;
  color: #e01515;
  padding-top: 20px;
  lines: 1;
}
.i_text_shop {
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
}
.s_icon {
  color: #fff;
  background-color: #e61f19;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 10px;
  font-size: 18px;
}
.s_name {
  font-size: 22px;
  color: #b8b8b8;
  padding-left: 15px;
}
</style>
<script>
    const modal = weex.requireModule("modal");
    import iconBack from './components/iconBack.vue';
    export default{
        data(){
            return {
              columnCount:2,
              wList:[
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/f49517c8-6ad4-432c-8d8d-3f33357b09bd_medium.jpg",
                      name:"华为荣耀Ascend G7G7一体化设计，尖端工艺",
                      desc:"华为荣耀Ascend",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7华为荣耀Ascend G7华为荣耀Ascend G7",
                      desc:"华为荣耀Ascend G7一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/a523637c-346c-4889-a8eb-25f34757287d_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/a523637c-346c-4889-a8eb-25f34757287d_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/a523637c-346c-4889-a8eb-25f34757287d_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/f49517c8-6ad4-432c-8d8d-3f33357b09bd_medium.jpg",
                      name:"华为荣耀Ascend G7华为荣耀Ascend G7",
                      desc:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/a523637c-346c-4889-a8eb-25f34757287d_medium.jpg",
                      name:"华为荣耀Ascend G7华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/f49517c8-6ad4-432c-8d8d-3f33357b09bd_medium.jpg",
                      name:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      desc:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201710/f49517c8-6ad4-432c-8d8d-3f33357b09bd_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      desc:"华为荣耀Ascend G7一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  },
                  {
                      img:"http://static.heyuego.com/upload/image/201711/38e2f3f0-94fe-4ea9-b1a1-3c9025f029c5_medium.jpg",
                      name:"华为荣耀Ascend G7",
                      desc:"华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺华为荣耀Ascend G7一体化设计，尖端工艺",
                      price:"￥10800.00",
                      shopIcon:"自营",
                      shop:"手机旗舰店"
                  }
              ],
              imgStyle:{width:"300px",height:"300px"}
            }
        },
        created(){

        },
        methods:{
            changeColum:function(){
                var nc = this.columnCount;
                if(nc ==2){
                    this.columnCount = 3;
                    this.imgStyle = {width:"200px",height:"200px"};
                }
                else{
                    this.columnCount = 2;
                    this.imgStyle = {width:"300px",height:"300px"};
                }
            },
            goProCont(){
                this.$router.open({
                    name: 'heyue.proCont'
                })
            }
        },
        beforeCreate:function () {
            var domModule=weex.requireModule("dom");
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                'src':"url(\'http://at.alicdn.com/t/font_304664_662d9y9xpa2a9k9.ttf\')"
            })
        },
        components:{iconBack}
    }
</script>