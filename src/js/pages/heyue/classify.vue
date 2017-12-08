<template>
  <div class="classify">
    <list class="list">
      <header class="header">
        <scroller scroll-direction="horizontal" show-scrollbar="false" class="header_list">
          <text v-for="(tap,index) in clist" class="h_text" @click="jumpTo(index)" ref="tap" >{{tap.title}}</text>
          <div class="h_line" ref="h_line"></div>
        </scroller>
      </header>
      <cell class="cell" v-for="(item,index) in clist" ref="cell" :id="'item'+index">
        <div class="c_list_item">
          <div class="c_list_tit">
            <text class="ch">-{{item.title}}-</text>
            <text class="eng">{{item.eng}}</text>
          </div>
          <div class="c_list_l">
            <div class="ibox" v-for="ibox in item.list">
              <a class="ibox_a" @click="goProList">
                <image class="ibox_img" :src="ibox.limg"></image>
                <text class="ibox_text">{{ibox.name}}</text>
              </a>
            </div>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>
<style scoped>
.header{
  width:750px;
  position:sticky;
  top:0px;
  left:0px;
  border-bottom-width:1px;
  border-color:#ebebeb;
  border-style:solid;
  background-color:white;
  flex-direction:row;
  height:80px;
}
.header_list{
  flex-direction: row;
  justify-content: flex-start;
  height:80px;
  position:relative;
}
.h_text{
  flex-direction: row;
  height:80px;
  font-size:24px;
  color:#999999;
  padding-right:40px;
  padding-left:40px;
  line-height:80px;
  align-items:center;
  background-color:white;
}
.h_line{
  position:absolute;
  bottom:0px;
  left:0px;
  height:80px;
  border-bottom-width:2px;
  border-color:#b2845b;
  border-style:solid;
  width:130px;
}
.classify{
  background-color:#f5f5f5;
}
.c_list_item{
  width:750px;
  background-color:#fff;
  padding:20px;
  border-top-width:1px;
  border-bottom-width:1px;
  border-color:#ebebeb;
  border-style:solid;
  margin-top:20px;
  justify-content:center;

}
.c_list_tit{
  justify-content: center;
  height:70px;
}
.ch{
  font-size:24px;
  color:#363636;
  text-align:center;
}
.eng{
  padding-top:5px;
  font-size:16px;
  color:#cccccc;
  text-align:center;
  text-transform:uppercase;
}
.c_list_l{
  flex-direction:row;
  justify-content:flex-start;
  flex-wrap:wrap;
  width:730px;
}
.ibox{
  width:182.5px;
  padding-left:10px;
  padding-right:10px;
  text-align:center;
}
.ibox_a{
  justify-content: center;
}
.ibox_img{
  width:162.5px;
  height:162.5px;
  justify-content:center;
}
.ibox_text{
  font-size:20px;
  color:#808080;
  padding-top:18px;
  justify-content:center;
  text-align:center;
}
</style>
<script>
    const animation = weex.requireModule('animation')
    const dom = weex.requireModule('dom');
    const modal = weex.requireModule("modal");
    export default{
        data(){
            return {
              clist:[
                  {
                      title:"服装",
                      eng:"clothing",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img4.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img1.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img2.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img3.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
                  {
                      title:"家居",
                      eng:"Household",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img5.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img6.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img7.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
                  {
                      title:"箱包",
                      eng:"Leather bags",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img8.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img9.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img10.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img11.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img12.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img13.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img14.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
                  {
                      title:"鞋类",
                      eng:"shoes",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img15.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img16.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img17.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img18.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
                  {
                      title:"妆品",
                      eng:"makeup",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img19.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img20.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
                  {
                      title:"钟表",
                      eng:"WAtCH",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img21.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img22.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img23.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
                  {
                      title:"饰品",
                      eng:"Accessory",
                      list:[
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img24.jpg",
                              name:"男装",
                              link:"proList.js"
                          },
                          {
                              limg:"http://heyuego.com//resources/mobile/base/images/pro_cla_img25.jpg",
                              name:"男装",
                              link:"proList.js"
                          }
                      ]
                  },
              ]
            }
        },
        created(){

        },
        methods:{
            jumpTo(index){
                const el = this.$refs.cell[index];
                const tapAll = this.$refs.tap;
                const tapObj = tapAll[index];
                dom.getComponentRect(tapObj, option => {
                    if(option.result==1){
                        const moveLeft = index*option.size.width+'px';
                        console.log(option);
                        animation.transition(this.$refs.h_line, {
                            styles: {
                                transform: 'translateX('+moveLeft+')',
                            },
                            duration: 500, //ms
                            delay:0,
                            timingFunction:"ease-out"
                        }, function () {
                            //modal.toast({ message: 'animation finished.' })
                        })
                    }
                })
                dom.scrollToElement(el, {offset:-55});
            },
            goProList(){
                this.$router.open({
                    name: 'heyue.proList'
                })
            }
        }
    }
</script>