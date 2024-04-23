<template>
  <div class="financial">
    <div class="banner" v-lazy:background-image="bg">
      <p>金融服务</p>
    </div>
    <div class="calculator">
      <p class="title">车型选择</p>
      <div class="vehicle">
        <div class="vehicle-left common">
          <div class="model">
            <div v-for="(item, index) in vehicles" :key="index" :class="[`model-item ${currentVehicleIndex === index ? 'model-item-active' : ''}`]" @click="checkVehicle('currentVehicleIndex', index)">
              <img :src="[currentVehicleIndex === index ? item.active : item.default]" alt="">
            </div>
          </div>
          <div class="price">
            <div v-for="(item,index) in vehicles[currentVehicleIndex].details" :key="index" :class="[`price-item ${currentTypeIndex === index ? 'price-item-active' : ''}`]" @click="checkVehicle('currentTypeIndex', index)">
              <div class="name">{{item.name}}</div>
              <div class="live">{{item.live}}</div>
              <div class="sell">
                <span>综合补贴后售价:</span>
                <span>￥{{numberToDecimal(item.price)}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="vehicle-right common">
          <img :src="vehicles[currentVehicleIndex].carImg" alt="">
        </div>
      </div>
      <div class="plan">
        <div class="plan-left common">
          <p class="title">方案选择</p>
          <div class="plan-container">
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">定额贷</p>
                <p class="item-left-title">10万元定额贷24/36期0费率</p>
              </div>
              <div class="item-right" @click="onFinancialType('1')">
                <img :src="[this.financialType === '1' ? icon.checked : icon.check]" alt="">
              </div>
            </div>
            <div v-if="currentVehicleIndex===0" class="item">
              <div class="item-left">
                <p class="item-left-headline">定额贷</p>
                <p class="item-left-title">14万元定额贷24/36期低费率</p>
              </div>
              <div class="item-right" @click="onFinancialType('3')">
                <img :src="[this.financialType === '3' ? icon.checked : icon.check]" alt="">
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">随心贷</p>
                <p class="item-left-title">首付10%起,12-60期低费率</p>
              </div>
              <div class="item-right" @click="onFinancialType('2')">
                <img :src="[this.financialType === '2' ? icon.checked : icon.check]" alt="">
              </div>
            </div>
            <div class="item none-border">
              <div class="item-left">
                <p class="item-left-headline">首付金额</p>
                <p class="item-left-title">电商平台下单支付的定金可抵扣首付款</p>
              </div>
              <div class="item-right">
                ￥{{numberToDecimal(plan.firstPay)}}
              </div>
            </div>
            <div class="pay-scale no-border" id="pay-scale">
              <div class="currentPercent">
                <span :style="{'paddingLeft': left + '%'}">{{`${downPayment}%`}}</span>
              </div>
              <input width="100%" v-model="downPayment" type="range" min="10" max="70" step="5" @change="onPayPercent"></input>
              <div class="scale">
                <div class="scale-item" v-for="(item,index) in scale" :key="index"><p>{{ item }}</p></div>
              </div>
            </div>
            <div class="time special">
              <div v-for="(item, index) in installment" :key="index" :class="[currentInstallmentIndex === index ? 'active' : '']" @click="checkVehicle('currentInstallmentIndex', index)">{{`${item}期`}}</div>
            </div>
            <div class="item" id="item" v-if="financialType === '2'">
              <div class="item-left">
                <p>年化费率</p>
              </div>
              <div class="item-right">
                {{rate}}%
              </div>
            </div>
            <div class="item none-border">
              <div class="item-left">
                <p>尾款比例</p>
              </div>
              <div class="item-right">
                0.00%
              </div>
            </div>
          </div>
        </div>
        <div class="plan-middle"></div>
        <div class="plan-right common">
          <div class="title">方案明细</div>
          <div class="plan-container">
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">综合补贴后售价</p>
              </div>
              <div class="item-right">
                ￥{{numberToDecimal(plan.price)}}
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">首付金额</p>
              </div>
              <div class="item-right">
                ￥{{numberToDecimal(plan.firstPay)}}
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">贷款金额</p>
              </div>
              <div class="item-right">
                ￥{{ numberToDecimal(plan.price - plan.firstPay) }}
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">贷款期限</p>
              </div>
              <div class="item-right">
                {{ `${installment[currentInstallmentIndex]}期`}}
              </div>
            </div>
            <div class="item">
              <div class="item-left">
                <p class="item-left-headline">客户利息</p>
              </div>
              <div class="item-right">
                ￥{{numberToDecimal(interest)}}
              </div>
            </div>
            <div class="item none-border">
              <div class="item-left">
                <p class="item-left-headline">月供金额</p>
              </div>
              <div class="item-right item-right-red">
                ￥{{numberToDecimal(monthPay)}}
              </div>
            </div>
          </div>
          <p class="tips">
            <ul>
              <li>上述信息仅用于分期方案试算，实际成交价格、月供金额、分期参与条件及方式等均请咨询当地威马智行合伙人；</li>
              <li>金融计算器结果仅供参考，不作为任何有效的购车凭证，具体以审批结果为准。</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "pc",
  data() {
    return {
      downPayment: 10, /* 首付比例*/
      marks: {
        0: '10',
        100: '70'
      },
      currentVehicleIndex: Number(this.$route.query.index) || 0, /* 当前车型index*/
      currentTypeIndex: 0, /* 当前车型版本index*/
      currentInstallmentIndex: 0, /* 当前选择分期时间*/
      bg: `${this.Resource}FinancialCalculator/financialBanner.png`,
      vehicles: [
        {
          name: 'W6',
          rate: [0.88,1.88,2.88,3.68],
          rate1: [1.08,1.08,1.08,1.08],
          default: `${this.Resource}TEST-DRIVE/W6-d.svg`,
          active: `${this.Resource}TEST-DRIVE/W6-a.svg`,
          carImg: `${this.Resource}FinancialCalculator/W6.png`,
          details: [
            {
              name: 'W6 NEX 探索版',
              live: '520km电池包',
              price: 193800
            },
            {
              name: 'W6 PRO 全能版',
              live: '520km电池包',
              price: 213800
            },
            {
              name: 'W6 ACE 极智版',
              live: '520km电池包',
              price: 233800
            }
          ]
        },
        {
          name: 'EX5-Z',
          default: `${this.Resource}TEST-DRIVE/EX5-Z-d.svg`,
          active: `${this.Resource}TEST-DRIVE/EX5-Z-a.svg`,
          carImg: `${this.Resource}FinancialCalculator/EX5.png`,
          rate: [1.08,1.68,2.08,3.68],
          details: [
            // {
            //   name: 'EX5-Z NEX 探索版',
            //   live: '403km电池包',
            //   price: 169800
            // },
            {
              name: 'EX5-Z NEX 探索版 400',
              live: '403km电池包',
              price: 169800
            },
            {
              name: 'EX5-Z NEX 探索版 460',
              live: '460km电池包',
              price: 179800
            },
            // {
            //   name: 'EX5-Z LEAD 创领版',
            //   live: '403km电池包',
            //   price: 189800
            // }
          ]
        }
      ],
      icon: {
        check: `${this.Resource}commonIcon/check.png`,
        checked: `${this.Resource}commonIcon/checked.png`,
      },
      installment: [24, 36],
      scale: ['10%','','','','','','','','','','','70%',],
      financialType: '1', /* 金融方案 1：定额贷 2：随心贷 3：14万定额*/
    }
  },
  computed: {
    left: function() {
      return 100 / 12 * (this.downPayment - 10) / 5
    },
    plan: function() {
      if(this.financialType === '1') {
      // 定额贷
        return {
          price: this.vehicles[this.currentVehicleIndex].details[this.currentTypeIndex].price,
          firstPay: this.vehicles[this.currentVehicleIndex].details[this.currentTypeIndex].price - 100000
        }
      } else if(this.financialType === '3') {
      // 定额贷 14万元
        return {
          price: this.vehicles[this.currentVehicleIndex].details[this.currentTypeIndex].price,
          firstPay: this.vehicles[this.currentVehicleIndex].details[this.currentTypeIndex].price - 140000
        }
      } else {
      // 随心贷
        return {
          price: this.vehicles[this.currentVehicleIndex].details[this.currentTypeIndex].price,
          firstPay: this.vehicles[this.currentVehicleIndex].details[this.currentTypeIndex].price * this.downPayment * 0.01
        }
      }
    },
    rate: function() {
      console.log('费率', this.vehicles[this.currentVehicleIndex].rate[this.currentInstallmentIndex])
      if (this.financialType === '3') {
        // 定额贷14万
        return this.vehicles[this.currentVehicleIndex].rate1[this.currentInstallmentIndex]
      } else {
        return this.vehicles[this.currentVehicleIndex].rate[this.currentInstallmentIndex]
      }
    },
    //客户利息
    interest: function() {
      console.log('利息')
      if(this.financialType === '1') {
        return 0
      } else if (this.financialType === '3') {
        return Math.ceil((this.plan.price - this.plan.firstPay) * this.rate * 0.01 * this.installment[this.currentInstallmentIndex] / 12)
      } else{
        return Math.ceil((this.plan.price - this.plan.firstPay) * this.rate * 0.01 * this.installment[this.currentInstallmentIndex] / 12)
      }
    },
    //月供
    monthPay: function() {
      console.log('月供, ',Math.ceil((this.plan.price - this.plan.firstPay + this.interest)  / this.installment[this.currentInstallmentIndex]))
      return Math.ceil((this.plan.price - this.plan.firstPay + this.interest)  / this.installment[this.currentInstallmentIndex])
    }
  },
  created() {
  },
  methods: {
    // 数字转金额格式
    numberToDecimal(v) {
      return String(v).replace(/(?!^)(?=(\d{3})+(?:$|\.))/g, ',')
    },
    // 车型切换
    checkVehicle(type, e) {
      if(type === 'currentVehicleIndex') {
        console.log('111', e)
        this.currentVehicleIndex = e
        this.currentTypeIndex = 0
        this.financialType = '1'
      } else if(type === 'currentTypeIndex'){
        this.currentTypeIndex = e
      } else if(type === 'currentInstallmentIndex') {
        this.currentInstallmentIndex = e
      }
    },
    // 金融方案切换
    onFinancialType(type) {
      this.financialType = type
      if(type === '2') {
        $("#pay-scale").slideDown()
        $("#item").slideDown()
        this.installment = [12,24,36,60]
      } else{
        this.installment = [24,36]
        $("#pay-scale").slideUp()
        $("#item").slideUp()
      }
    },
    // 首付比例切换
    onPayPercent(e) {
      console.log(this.downPayment)
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px){
  .financial{
    .banner{
      width: 100%;
      height: 380px;
      background-size: 100% 100%;
      position: relative;
      p{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #FFFFFF;
        line-height: 55px;
        position: absolute;
        z-index: 2;
        left: 122px;
        bottom: 111px;
      }
    }
    .calculator{
      width: 1430px;
      margin: auto;
      padding-top: 80px;
      .title{
        text-align: left;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #666666;
        line-height: 24px;
      }
      .vehicle{
        display: flex;
        justify-content: space-between;
        &-left{
          width: 660px;
          .model{
            @include row;
            border-bottom: solid 1px #DCDCDC;
            &-item{
              width: 100%;
              @include flex-start;
              padding-top: 43px;
              padding-bottom: 17px;
              box-sizing: border-box;
              padding-left: 20px;
              &-active{
                position: relative;
                &::after{
                  content: "";
                  width: 100%;
                  height: 2px;
                  background: #30b489;
                  position: absolute;
                  left: 0;
                  bottom: -1px;
                }
              }
              img{
                width: auto;
                height: 19px;
                cursor: pointer;
              }
            }
          }
          .price{
            margin-top: 40px;
            margin-bottom: 40px;
            @include space-between;
            justify-content: flex-start;
            flex-flow: row wrap;
            &-item{
              width: 216px;
              //height: 113px;
              border-radius: 6px;
              border: 1px solid #E5E5E5;
              box-sizing: border-box;
              padding-left: 12px;
              padding-right: 12px;
              text-align: left;
              cursor: pointer;
              margin-bottom: 10px;
              margin-right: 4px;
              &-active{
                background: rgba(48, 180, 137, 0.05);
                //border: 2px solid #30B489;
                //border: none;
                box-shadow: 0 0 0 2px #30B489;
              }
              .name{
                font-size: 16px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                color: #666666;
                line-height: 16px;
                padding-top: 15px;
              }
              .live{
                font-size: 14px;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                color: #666666;
                line-height: 14px;
                padding-top: 11px;
                padding-bottom: 15px;
                border-bottom: solid 1px #EDEDED;
              }
              .sell{
                padding-top: 12px;
                padding-bottom: 13px;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                color: #999999;
                display: flex;
                flex-direction: row;
                align-items: center;
                span:first-child{
                  font-size: 16px;
                  white-space: nowrap;
                  zoom: 0.7;
                }
                span:last-child{
                  font-size: 16px;
                  font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                  color: #666666;
                  line-height: 16px;
                }
              }
            }
          }
        }
        &-right{
          width: 660px;
          >img{
            width: 100%;
          }
        }
      }
      .plan{
        display: flex;
        justify-content: space-between;
        .common{
          .title{
            margin-bottom: 30px;
          }
          .plan-container{
            width: 660px;
            background: #F7F8F9;
            box-sizing: border-box;
            padding: 0 28px;
            .item{
              @include space-between;
              height: 78px;
              box-sizing: border-box;
              border-bottom: solid 1px #DCDCDC;
              &-left{
                text-align: left;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                font-size: 16px;
                color: #666666;
                &-headline{
                  font-size: 16px;
                  color: #666666;
                  line-height: 16px;
                }
                &-title{
                  font-size: 12px;
                  color: #999999;
                  line-height: 12px;
                  padding-top: 10px;
                }
              }
              &-right{
                font-size: 16px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                font-weight: 600;
                color: #333333;
                img{
                  cursor: pointer;
                }
                &-red{
                  color: #EF4151;
                }
              }
            }
            .pay-scale{
              display: none;
              padding: 30px 0;
              .currentPercent{
                box-sizing: border-box;
                margin-left: 10px;
                margin-right: 10px;
                text-align: left;
                margin-bottom: 5px;
                span{
                  margin-left: -12px;
                  color: #30B489;
                  font-size: 18px;
                  font-weight: bold;
                }
              }
              input[type='range']{
                width: 100%;
                -webkit-appearance: none;
                outline: none;
                height: 8px;
                border-radius: 4px;
                background: linear-gradient(196deg, #B3DAE3 0%, #D9E9E9 100%);
                &::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
                &::-moz-range-thumb {
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
                &::-ms-thumb {
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
              }
              .scale{
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 0 10px;
                margin-top: 6px;
                &-item{
                  width: calc(100% / 7);
                  height: 9px;
                  border-left: solid 1px #D0D4D8;
                  text-align: left;
                  position: relative;
                  font-size: 16px;
                  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                  //background: #3dbe94;
                  p{
                    position: absolute;
                    //background: #3dbe94;
                    top: 15px;
                    left: 0;
                    transform: translateX(-45%);
                  }
                  &:last-child{
                    border-right: solid 1px #D0D4D8;
                    position: relative;
                    p{
                      position: absolute;
                      //background: #2c3e50;
                      top: 15px;
                      left: 100%;
                    }
                  }
                }
              }
            }
            .time{
              position: relative;
              padding-top: 36px;
              margin-top: 30px;
              //background: #95a1a9;
              &::before{
                content: '贷款期限';
                position: absolute;
                top: 0;
                left: 0;
                font-size: 16px;
                line-height: 16px;
                color: #666666;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              }
            }
            .special{
              border: none;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              div{
                width: 121px;
                height: 34px;
                border-radius: 2px;
                border: 1px solid #B2B2B2;
                @include center;
                cursor: pointer;
                font-size: 16px;
              }
              .active{
                background: rgba(48, 180, 137, 0.05);
                border: 1px solid #30B489;
              }
              div:nth-child(n+2){
                margin-left: 40px;
              }
            }
            .none-border{
              border: none;
            }
          }
        }
        &-left{
          width: 660px;
          border-radius: 8px;
        }
        &-middle{
          width: 1px;
          height: 543px;
          background: #DCDCDC;
        }
        &-right{
          width: 660px;
          border-radius: 8px;
          .tips{
            padding-top: 30px;
            text-align: left;
            font-size: 12px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
            color: #999999;
            line-height: 17px;
            padding-bottom: 83px;
            ul{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1200px){
  .financial{
    .banner{
      width: 100%;
      height: 380px;
      background-size: 100% 100%;
      position: relative;
      p{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #FFFFFF;
        line-height: 55px;
        position: absolute;
        z-index: 2;
        left: 122px;
        bottom: 111px;
      }
    }
    .calculator{
      width: 1430px;
      margin: auto;
      padding-top: 80px;
      .title{
        text-align: left;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #666666;
        line-height: 24px;
      }
      .vehicle{
        display: flex;
        justify-content: space-between;
        &-left{
          width: 660px;
          .model{
            @include row;
            border-bottom: solid 1px #DCDCDC;
            &-item{
              width: 100%;
              @include flex-start;
              padding-top: 43px;
              padding-bottom: 17px;
              box-sizing: border-box;
              padding-left: 20px;
              &-active{
                position: relative;
                &::after{
                  content: "";
                  width: 100%;
                  height: 2px;
                  background: #30b489;
                  position: absolute;
                  left: 0;
                  bottom: -1px;
                }
              }
              img{
                width: auto;
                height: 19px;
                cursor: pointer;
              }
            }
          }
          .price{
            margin-top: 40px;
            margin-bottom: 40px;
            @include space-between;
            flex-flow: row wrap;
            &-item{
              width: 216px;
              //height: 113px;
              border-radius: 6px;
              border: 1px solid #E5E5E5;
              box-sizing: border-box;
              padding-left: 12px;
              padding-right: 12px;
              text-align: left;
              cursor: pointer;
              margin-bottom: 10px;
              &-active{
                background: rgba(48, 180, 137, 0.05);
                //border: 2px solid #30B489;
                //border: none;
                box-shadow: 0 0 0 2px #30B489;
              }
              .name{
                font-size: 16px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                color: #666666;
                line-height: 16px;
                padding-top: 15px;
              }
              .live{
                font-size: 14px;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                color: #666666;
                line-height: 14px;
                padding-top: 11px;
                padding-bottom: 15px;
                border-bottom: solid 1px #EDEDED;
              }
              .sell{
                padding-top: 12px;
                padding-bottom: 13px;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                color: #999999;
                display: flex;
                flex-direction: row;
                align-items: center;
                span:first-child{
                  font-size: 16px;
                  white-space: nowrap;
                  zoom: 0.75;
                }
                span:last-child{
                  font-size: 16px;
                  font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                  color: #666666;
                  line-height: 16px;
                  padding-top: 5px;
                  zoom: 0.7;
                }
              }
            }
          }
        }
        &-right{
          width: 660px;
          >img{
            width: 100%;
          }
        }
      }
      .plan{
        display: flex;
        justify-content: space-between;
        .common{
          .title{
            margin-bottom: 30px;
          }
          .plan-container{
            width: 660px;
            background: #F7F8F9;
            box-sizing: border-box;
            padding: 0 28px;
            .item{
              @include space-between;
              height: 78px;
              box-sizing: border-box;
              border-bottom: solid 1px #DCDCDC;
              &-left{
                text-align: left;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                font-size: 16px;
                color: #666666;
                &-headline{
                  font-size: 16px;
                  color: #666666;
                  line-height: 16px;
                }
                &-title{
                  font-size: 12px;
                  color: #999999;
                  line-height: 12px;
                  padding-top: 10px;
                }
              }
              &-right{
                font-size: 16px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                font-weight: 600;
                color: #333333;
                img{
                  cursor: pointer;
                }
                &-red{
                  color: #EF4151;
                }
              }
            }
            .pay-scale{
              display: none;
              padding: 30px 0;
              .currentPercent{
                box-sizing: border-box;
                margin-left: 10px;
                margin-right: 10px;
                text-align: left;
                margin-bottom: 5px;
                span{
                  margin-left: -12px;
                  color: #30B489;
                  font-size: 18px;
                  font-weight: bold;
                }
              }
              input[type='range']{
                width: 100%;
                -webkit-appearance: none;
                outline: none;
                height: 8px;
                border-radius: 4px;
                background: linear-gradient(196deg, #B3DAE3 0%, #D9E9E9 100%);
                &::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
                &::-moz-range-thumb {
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
                &::-ms-thumb {
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
              }
              .scale{
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 0 10px;
                margin-top: 6px;
                &-item{
                  width: calc(100% / 7);
                  height: 9px;
                  border-left: solid 1px #D0D4D8;
                  text-align: left;
                  position: relative;
                  font-size: 16px;
                  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                  //background: #3dbe94;
                  p{
                    position: absolute;
                    //background: #3dbe94;
                    top: 15px;
                    left: 0;
                    transform: translateX(-45%);
                  }
                  &:last-child{
                    border-right: solid 1px #D0D4D8;
                    position: relative;
                    p{
                      position: absolute;
                      //background: #2c3e50;
                      top: 15px;
                      left: 100%;
                    }
                  }
                }
              }
            }
            .time{
              position: relative;
              padding-top: 36px;
              margin-top: 30px;
              //background: #95a1a9;
              &::before{
                content: '贷款期限';
                position: absolute;
                top: 0;
                left: 0;
                font-size: 16px;
                line-height: 16px;
                color: #666666;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              }
            }
            .special{
              border: none;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              div{
                width: 121px;
                height: 34px;
                border-radius: 2px;
                border: 1px solid #B2B2B2;
                @include center;
                cursor: pointer;
              }
              .active{
                background: rgba(48, 180, 137, 0.05);
                border: 1px solid #30B489;
              }
              div:nth-child(n+2){
                margin-left: 40px;
              }
            }
            .none-border{
              border: none;
            }
          }
        }
        &-left{
          width: 660px;
          border-radius: 8px;
        }
        &-middle{
          width: 1px;
          height: 543px;
          background: #DCDCDC;
        }
        &-right{
          width: 660px;
          border-radius: 8px;
          .tips{
            padding-top: 30px;
            text-align: left;
            font-size: 12px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
            color: #999999;
            line-height: 30px;
            padding-bottom: 83px;
            ul{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px){
  .financial{
    .banner{
      width: 100%;
      height: 380px;
      background-size: 100% 100%;
      position: relative;
      p{
        font-size: 40px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #FFFFFF;
        line-height: 55px;
        position: absolute;
        z-index: 2;
        left: 122px;
        bottom: 111px;
      }
    }
    .calculator{
      width: 88vw;
      //background: #30B489;
      margin: auto;
      padding-top: 80px;
      .title{
        text-align: left;
        font-size: 24px;
        font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
        color: #666666;
        line-height: 24px;
      }
      .vehicle{
        display: flex;
        justify-content: space-between;
        &-left{
          width: 40vw;
          .model{
            @include row;
            border-bottom: solid 1px #DCDCDC;
            &-item{
              width: 100%;
              @include flex-start;
              padding-top: 43px;
              padding-bottom: 17px;
              box-sizing: border-box;
              padding-left: 20px;
              &-active{
                position: relative;
                &::after{
                  content: "";
                  width: 100%;
                  height: 2px;
                  background: #30b489;
                  position: absolute;
                  left: 0;
                  bottom: -1px;
                }
              }
              img{
                width: auto;
                height: 19px;
                cursor: pointer;
              }
            }
          }
          .price{
            margin-top: 40px;
            margin-bottom: 40px;
            @include space-between;
            flex-flow: row wrap;
            &-item{
              width: calc(39vw / 2);
              border-radius: 6px;
              border: 1px solid #E5E5E5;
              box-sizing: border-box;
              padding-left: 12px;
              padding-right: 12px;
              text-align: left;
              cursor: pointer;
              margin-bottom: 10px;
              &-active{
                background: rgba(48, 180, 137, 0.05);
                box-shadow: 0 0 0 2px #30B489;
              }
              .name{
                //font-size: 28px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                color: #666666;
                line-height: 22px;
                padding-top: 15px;
              }
              .live{
                font-size: 14px;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                color: #666666;
                line-height: 18px;
                padding-top: 11px;
                padding-bottom: 15px;
                border-bottom: solid 1px #EDEDED;
              }
              .sell{
                padding-top: 12px;
                padding-bottom: 13px;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                color: #999999;
                display: flex;
                flex-direction: row;
                align-items: center;
                span:first-child{
                  font-size: 16px;
                  white-space: nowrap;
                  zoom: 0.75;
                }
                span:last-child{
                  font-size: 16px;
                  font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                  color: #666666;
                  line-height: 16px;
                  zoom: 0.75;
                }
              }
            }
          }
        }
        &-right{
          width: 40vw;
          >img{
            width: 100%;
          }
        }
      }
      .plan{
        display: flex;
        justify-content: space-between;
        .common{
          .title{
            margin-bottom: 30px;
          }
          .plan-container{
            width: 40vw;
            background: #F7F8F9;
            box-sizing: border-box;
            padding: 0 28px;
            .item{
              @include space-between;
              height: 120px;
              box-sizing: border-box;
              border-bottom: solid 1px #DCDCDC;
              &-left{
                text-align: left;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                font-size: 16px;
                color: #666666;
                &-headline{
                  font-size: 16px;
                  color: #666666;
                  line-height: 20px;
                }
                &-title{
                  font-size: 12px;
                  color: #999999;
                  line-height: 16px;
                  padding-top: 10px;
                }
              }
              &-right{
                font-size: 16px;
                font-family: Alibaba-PuHuiTi-M, Alibaba-PuHuiTi;
                font-weight: 600;
                color: #333333;
                img{
                  cursor: pointer;
                }
                &-red{
                  color: #EF4151;
                }
              }
            }
            .pay-scale{
              display: none;
              padding: 30px 0;
              .currentPercent{
                box-sizing: border-box;
                margin-left: 10px;
                margin-right: 10px;
                text-align: left;
                margin-bottom: 5px;
                span{
                  margin-left: -12px;
                  color: #30B489;
                  font-size: 18px;
                  font-weight: bold;
                }
              }
              input[type='range']{
                width: 100%;
                -webkit-appearance: none;
                outline: none;
                height: 8px;
                border-radius: 4px;
                background: linear-gradient(196deg, #B3DAE3 0%, #D9E9E9 100%);
                &::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
                &::-moz-range-thumb {
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
                &::-ms-thumb {
                  border: 2px solid #30B489;
                  height: 20px;
                  width: 20px;
                  border-radius: 50%;
                  background: #ffffff;
                  cursor: pointer;
                }
              }
              .scale{
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 0 10px;
                margin-top: 6px;
                &-item{
                  width: calc(100% / 7);
                  height: 9px;
                  border-left: solid 1px #D0D4D8;
                  text-align: left;
                  position: relative;
                  font-size: 16px;
                  font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
                  //background: #3dbe94;
                  p{
                    position: absolute;
                    //background: #3dbe94;
                    top: 15px;
                    left: 0;
                    transform: translateX(-45%);
                  }
                  &:last-child{
                    border-right: solid 1px #D0D4D8;
                    position: relative;
                    p{
                      position: absolute;
                      //background: #2c3e50;
                      top: 15px;
                      left: 100%;
                    }
                  }
                }
              }
            }
            .time{
              position: relative;
              padding-top: 36px;
              margin-top: 30px;
              //background: #95a1a9;
              &::before{
                content: '贷款期限';
                position: absolute;
                top: 0;
                left: 0;
                font-size: 16px;
                line-height: 16px;
                color: #666666;
                font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
              }
            }
            .special{
              border: none;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              div{
                width: 121px;
                height: 34px;
                border-radius: 2px;
                border: 1px solid #B2B2B2;
                @include center;
                cursor: pointer;
                font-size: 16px;
              }
              .active{
                background: rgba(48, 180, 137, 0.05);
                border: 1px solid #30B489;
              }
              div:nth-child(n+2){
                margin-left: 40px;
              }
            }
            .none-border{
              border: none;
            }
          }
        }
        &-left{
          width: 40vw;
          border-radius: 8px;
        }
        &-middle{
          width: 1px;
          height: 543px;
          background: #DCDCDC;
        }
        &-right{
          width: 40vw;
          border-radius: 8px;
          .tips{
            padding-top: 30px;
            text-align: left;
            font-size: 12px;
            font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
            color: #999999;
            line-height: 30px;
            padding-bottom: 83px;
            ul{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
