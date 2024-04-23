<template>
    <div :class="[`outside outside-${platform}`]">
      <div v-for="(item,index) in data.list" :key="index" :class="[`item ${item.padding ? 'item-padding' : ''} ${item.top ? 'item-top' : ''} ${item.bottom ? 'item-bottom' : ''}`]">
       <div class="desc">
         <div class="desc-item" v-for="(itemValue,itemIndex) in item.desc" :key="itemIndex">
           <div :class="[`title ${itemValue.special ? 'title-special' : ''}`,{ titleEn: lang === 'en' }]" :style="{color: data.titleColor}" v-html="itemValue.title"></div>
           <div class="intro" :style="{color: data.introColor}" v-html="itemValue.desc"></div>
           <div class="tips" v-if="itemValue.tips" v-html="itemValue.tips"></div>
         </div>
       </div>
        <div class="img">
          <img v-lazy="item.bg" :alt="desc">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  /**
    data: {
      list: [
        {
          top: 'top', // 顶部边距， 没有时可不传
          bottom: 'bottom', // 底部边距，没有时可不传
          desc: [
            {
              title: `标题`,
              desc: `表述`
            }
          ],
          bg: `${this.Resource}文件夹名/文件名` // 背景图片
        }
      ]
    }
   */
  name: "Outside",
  props: {
    platform: {
      type: String,
      default: 'pc'
    },
    data: {
      type: Object,
      default: () =>{}
    }
  },
  filters: {
    removeTag: (val) => {
      return val.replace(/\s+/g,"").replace(/<.*?>/g,"")
    }
  },
  computed: {
    desc: function() {
      let str = ''
      this.data.list.map(item => {
        item.desc.map(i => {
          str+=i.desc.replace(/\s+/g,"").replace(/<.*?>/g,"").toString()
        })
      })
      return str;
    }
  },
  mounted: () => {
    console.log('this',this)
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1024px){
  .outside{
    &-pc{
      background: #FFFFFF;
      .item{
        //box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        box-sizing: border-box;
        padding-left: 60px;
        padding-right: 60px;
        &-padding{
          &::after{ /* 最底部83像素边距*/
            content: "";
            width: 100%;
            height: 83px;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
        &-top{
          padding-top: 50px;
        }
        &-bottom{
          padding-bottom: 50px;
        }
        .desc{
          min-width: 418px;
          max-width: 429px;
          &-item{
            color: #666666;
            text-align: left;
            .title{
              font-size: 24px;
              font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              line-height: 33px;
              padding: 44px 0 20px 0;
              &-special{
                padding: 169px 0 40px 0;
              }
            }
            .titleEn{
              font-size: 32px;
              font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              line-height: 32px;
              padding: 44px 0 20px 0;
              &-special{
                padding: 186px 0 40px 0;
              }
            }
            .intro{
              font-size: 18px;
              font-weight: 300;
              font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
              line-height: 22px;
              box-sizing: content-box;
            }
            .tips{
              font-size: 12px;
              font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
              color: #999999;
              line-height: 17px;
              padding-top: 35px;
            }
          }
        }
        .img{
          width: 1094px;
          img{
            width: 100%;
            vertical-align: bottom;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1023px){
  .outside{
    &-pc{
      background: #FFFFFF;
      .item{
        //box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        box-sizing: border-box;
        padding-left: 60px;
        padding-right: 60px;
        &-padding{
          &::after{ /* 最底部83像素边距*/
            content: "";
            width: 100%;
            height: 83px;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
        &-top{
          padding-top: 50px;
        }
        &-bottom{
          padding-bottom: 50px;
        }
        .desc{
          min-width: 418px;
          max-width: 429px;
          &-item{
            color: #666666;
            text-align: left;
            .title{
              font-size: 24px;
              font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              line-height: 33px;
              padding: 86px 0 40px 0;
              &-special{
                padding: 124px 0 35px 0;
              }
            }
            .titleEn{
              font-size: 36px;
              font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              line-height: 50px;
              padding: 84px 0 40px 0;
              &-special{
                padding: 186px 0 40px 0;
              }
            }
            .intro{
              font-size: 18px;
              font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
              line-height: 30px;
              font-weight: 300;
              box-sizing: content-box;
            }
            .tips{
              font-size: 12px;
              font-family: Alibaba-PuHuiTi-L, Alibaba-PuHuiTi;
              color: #999999;
              line-height: 17px;
              padding-top: 13px;
            }
          }
        }
        .img{
          width: 1094px;
          img{
            width: 100%;
            vertical-align: bottom;
          }
        }
      }
    }
  }
}
</style>
