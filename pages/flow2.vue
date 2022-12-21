<template>
  <client-only>
  <div>
    <!-- 顶部导航 start -->
    <top-nav></top-nav>
    <!-- 顶部导航 end -->

    <div style="clear:both;"></div>

    <!-- 页面头部 start -->
    <div class="header w990 bc mt15">
      <div class="logo w990">
        <h2 class="fl"><a href="/"><img src="/images/logo.png" alt="畅购商城"></a></h2>
        <div class="flow fr flow2">
          <ul>
            <li>1.我的购物车</li>
            <li class="cur">2.填写核对订单信息</li>
            <li>3.成功提交订单</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 页面头部 end -->

    <div style="clear:both;"></div>

    <!-- 主体部分 start -->
    <div class="fillin w990 bc mt15">
      <div class="fillin_hd">
        <h2>填写并核对订单信息</h2>
      </div>

      <div class="fillin_bd">
        <!-- 收货人信息  start-->
        <div class="address">
          <h3>收货人信息 <a href="javascript:;" id="address_modify">[修改]</a></h3>
          <div class="address_info">
            <p>{{defaultAddress.shr_name}}  {{defaultAddress.shr_mobile}} </p>
            <p>{{defaultAddress.shr_province}} {{defaultAddress.shr_city}}
               {{defaultAddress.shr_area}} {{defaultAddress.shr_address}}
            </p>
          </div>

          <div class="address_select none">
            <ul>
              <!-- 地址列表start -->
              <li :class="{'cur': !showNew && address.id == defaultAddress.id}" v-for="(address,index) in addressList" :key="index">
                <input type="radio" name="address" :checked="address.id == defaultAddress.id" v-model="orderVo.address_id" :value="address.id" @click="clickRadio(address)" />
                {{address.shr_name}} {{address.shr_province}} {{address.shr_city}}
               {{address.shr_area}} {{address.shr_address}} {{address.shr_mobile}}
                <a href="" v-if="address.id != defaultAddress.id">设为默认地址</a>
                <a href="">编辑</a>
                <a href="">删除</a>
              </li>
              {{orderVo}}
              <!-- 地址列表end -->

              <li :class="{'cur': showNew}"><input type="radio" name="address" class="new_address" @click="showNew=true"   />使用新地址</li>
            </ul>
            <form action="" v-show="showNew" name="address_form">
              <ul>
                <li>
                  <label for=""><span>*</span>收 货 人：</label>
                  <input type="text" name="" class="txt" v-model="address.shr_name" />
                </li>
                <li>
                  <label for=""><span>*</span>所在地区：</label>
                  <select name="" id="" v-model="address.shr_province">
                    <option value="">请选择</option>
                    <option value="北京">北京</option>
                    <option value="上海">上海</option>
                    <option value="天津">天津</option>
                    <option value="重庆">重庆</option>
                    <option value="武汉">武汉</option>
                  </select>

                  <select name="" id="" v-model="address.shr_city">
                    <option value="">请选择</option>
                    <option value="朝阳区">朝阳区</option>
                    <option value="东城区">东城区</option>
                    <option value="西城区">西城区</option>
                    <option value="海淀区">海淀区</option>
                    <option value="昌平区">昌平区</option>
                  </select>

                  <select name="" id="" v-model="address.shr_area">
                    <option value="">请选择</option>
                    <option value="西二旗">西二旗</option>
                    <option value="西三旗">西三旗</option>
                    <option value="三环以内">三环以内</option>
                  </select>
                </li>
                <li>
                  <label for=""><span>*</span>详细地址：</label>
                  <input type="text" name="" class="txt address" v-model="address.shr_address"  />
                </li>
                <li>
                  <label for=""><span>*</span>手机号码：</label>
                  <input type="text" name="" class="txt" v-model="address.shr_mobile" />
                </li>
              </ul>
            </form>
            <a href="" class="confirm_btn" @click.prevent="addAddress"><span>保存收货人信息</span></a>
          </div>
        </div>
        <!-- 收货人信息  end-->

        <!-- 配送方式 start -->
        <div class="delivery">
          <h3>送货方式 <a href="javascript:;" id="delivery_modify">[修改]</a></h3>
          <div class="delivery_info">
            <p>{{defaultDelivery.name}}</p>
            <p>{{defaultDeliveryTime.name}}</p>
          </div>
          <div class="delivery_select none">
            <table>
              <thead>
                <tr>
                  <th class="col1">送货方式</th>
                  <th class="col2">运费</th>
                  <th class="col3">运费标准</th>
                </tr>
              </thead>
              <tbody>
              <tr class="cur" v-for="(delivery,index) in deliveryList" :key="index">
                <td>
                  {{deliveryUser.did}}
                  {{deliveryUser.tid}}

                  <input type="radio" name="did" :value="delivery.id"  v-model="deliveryUser.did" @change="changeDelivery(delivery.id)"/>{{delivery.name}}
                      <select v-if="delivery.list!=null" v-model="deliveryUser.tid" @change="changeDeliveryTime(deliveryUser.tid,delivery.id)">
                        <!--@change="changeDeliveryTime(deliveryTime.id)"-->
                        <option v-for="(deliveryTime,index) in delivery.list" :key="index" :selected="deliveryTime.id ==deliveryUser.tid" :value=deliveryTime.id >{{deliveryTime.name}}</option>
                      </select>
                </td>
                <td>￥{{delivery.price}}</td>
                <td>{{delivery.priceNorm}}</td>
              </tr>

              </tbody>
            </table>
            <a href="" class="confirm_btn" @click.prevent="updateDelivery"><span>确认送货方式</span></a>
          </div>
        </div>
        <!-- 配送方式 end -->

        <!-- 支付方式  start-->
        <div class="pay">
          <h3>支付方式 <a href="javascript:;" id="pay_modify">[修改]</a></h3>
          <div class="pay_info">
            <p>货到付款</p>
          </div>

          <div class="pay_select none">
            <table>
              <tr class="cur">
                <td class="col1"><input type="radio" name="pay" />货到付款</td>
                <td class="col2">送货上门后再收款，支持现金、POS机刷卡、支票支付</td>
              </tr>
              <tr>
                <td class="col1"><input type="radio" name="pay" />在线支付</td>
                <td class="col2">即时到帐，支持绝大数银行借记卡及部分银行信用卡</td>
              </tr>
              <tr>
                <td class="col1"><input type="radio" name="pay" />上门自提</td>
                <td class="col2">自提时付款，支持现金、POS刷卡、支票支付</td>
              </tr>
              <tr>
                <td class="col1"><input type="radio" name="pay" />邮局汇款</td>
                <td class="col2">通过快钱平台收款 汇款后1-3个工作日到账</td>
              </tr>
            </table>
            <a href="" class="confirm_btn"><span>确认支付方式</span></a>
          </div>
        </div>
        <!-- 支付方式  end-->

        <!-- 发票信息 start-->
        <div class="receipt">
          <h3>发票信息 <a href="javascript:;" id="receipt_modify">[修改]</a></h3>
          <div class="receipt_info">
            <p>个人发票</p>
            <p>内容：明细</p>
          </div>

          <div class="receipt_select none">
            <form action="">
              <ul>
                <li>
                  <label for="">发票抬头：</label>
                  <input type="radio" name="type" checked="checked" class="personal" />个人
                  <input type="radio" name="type" class="company"/>单位
                  <input type="text" class="txt company_input" disabled="disabled" />
                </li>
                <li>
                  <label for="">发票内容：</label>
                  <input type="radio" name="content" checked="checked" />明细
                  <input type="radio" name="content" />办公用品
                  <input type="radio" name="content" />体育休闲
                  <input type="radio" name="content" />耗材
                </li>
              </ul>
            </form>
            <a href="" class="confirm_btn"><span>确认发票信息</span></a>
          </div>
        </div>
        <!-- 发票信息 end-->

        <!-- 商品清单 start -->
        <div class="goods">
          <h3>商品清单</h3>
          <table>
            <thead>
              <tr>
                <th class="col1">商品</th>
                <th class="col2">规格</th>
                <th class="col3">价格</th>
                <th class="col4">数量</th>
                <th class="col5">小计</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cartItem,index) in cart" :key="index">
                <td class="col1">
                  <a href=""><img :src="cartItem.midlogo" alt="" /></a>  <strong>
                  <a href="">{{cartItem.goods_name}}</a></strong>
                </td>
                <td class="col2">
                  <p v-for="(value,key,si) in JSON.parse(cartItem.spec_info.id_txt)" :key="si">
                    {{key}} : {{value}}
                  </p>
                </td>
                <td class="col3">￥{{(cartItem.price/100).toFixed(2)}}</td>
                <td class="col4">{{cartItem.count}}</td>
                <td class="col5"><span>￥{{(cartItem.price * cartItem.count / 100).toFixed(2)}}</span></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5">
                  <ul>
                    <li>
                      <span>4 件商品，总商品金额：</span>
                      <em>￥5316.00</em>
                    </li>
                    <li>
                      <span>返现：</span>
                      <em>-￥240.00</em>
                    </li>
                    <li>
                      <span>运费：</span>
                      <em>￥10.00</em>
                    </li>
                    <li>
                      <span>应付总额：</span>
                      <em>￥5076.00</em>
                    </li>
                  </ul>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- 商品清单 end -->

      </div>

      <div class="fillin_ft">
        <a href="" @click.prevent="addOrder"><span>提交订单</span></a>
        <p>应付总额：<strong>￥5076.00元</strong></p>

      </div>
    </div>
    <!-- 主体部分 end -->

    <div style="clear:both;"></div>
    <!-- 底部版权 start -->
    <Footer></Footer>
    <!-- 底部版权 end -->
  </div>
  </client-only>
</template>

<script>
export default {
  head: {
    title: '核对订单信息',
    link: [
      {rel:'stylesheet',href: '/style/fillin.css'},
    ],
    script: [
      { type: 'text/javascript', src: '/js/cart2.js' },
    ]
  },
  data() {
    return {
      deliveryList:[],
      addressList: [],        //所有收获地址
      deliveryTimeList:[],
      defaultAddress: {},     //默认地址
      defaultDelivery: {},     //默认送货地址
      defaultDeliveryTime:{},
      showNew: false,         //是否显示新地址表单
      address: {
        "shr_name": "",
        "shr_province": "",
        "shr_city": "",
        "shr_area": "",
        "shr_address": "",
        "shr_mobile": "",
      },
      cart: [],
      deliveryUser:{
        tid:"",
        did:""
      },
      orderVo: {
        address_id : ''
      }
    }
  },
  methods: {
    async getAddress() {
      // ajax查询所有
      let { data: baseResult } = await this.$request.getAddress()
      this.addressList = baseResult.data
      // 处理数据，获得默认
      let newAddressList = this.addressList.filter(addr => addr.isdefault == 1)
      if(newAddressList.length == 1) {
        this.defaultAddress = newAddressList[0]
        // 记录参数
        this.orderVo.address_id = this.defaultAddress.id
      } else {
        this.defaultAddress = {}
      }

    },
    async getDelivery(){
      let { data: baseResult } = await this.$request.getDelivery();
      this.deliveryList=baseResult.data;
      let newDeliveryList= this.deliveryList.filter(delivery => delivery.isdefault)
      if (newDeliveryList.length==1){
        debugger
        this.defaultDelivery=newDeliveryList[0]
        this.deliveryUser.did=newDeliveryList[0].id;
      }
      if (this.defaultDelivery.list==null){
        this.defaultDeliveryTime={}
      }

      if (this.defaultDelivery.list!=null){
        let newDeliveryTimeList=this.defaultDelivery.list.filter(deliveryTime => deliveryTime.isdefault)
        if (newDeliveryTimeList.length==1){
          this.defaultDeliveryTime=newDeliveryTimeList[0]
          this.deliveryUser.tid=newDeliveryTimeList[0].id;
        }
      }
    },
    clickRadio( address ) {
      // 隐藏表单
      this.showNew = false
    },
    async addAddress() {
      // 表单空值校验【作业】

      // 添加地址
      let { data: baseResult } = await this.$request.addAddress( this.address )
      // 重新查询
      this.getAddress()
      // 隐藏表单
      this.showNew = false
      // 清空表单
      this.address = {
        "shr_province": "",
        "shr_city": "",
        "shr_area": "",
      }
    },
    async getCart() {
      // 查询购物车中的所有内容
      let { data: baseResult } = await this.$request.getCart()
      // 勾选的所有内容
      this.cart = baseResult.data.filter(item=> item.checked)
    },
    async addOrder() {
      // 发送ajax
      let { data: baseResult } = await this.$request.addOrder( this.orderVo )

      // 处理结果
      if(baseResult.code == 20000) {
        // 成功,跳转到支付页面，需要携带订单号
        this.$router.push('/flow3?sn=' + baseResult.other.sn)
      } else {
        // 暂时错误提示
        alert(data.message)
      }
    },
    changeDelivery(did){
      this.deliveryUser.did=did;
      let newDeliveryList= this.deliveryList.filter(delivery => delivery.id==did);
      if (newDeliveryList.length == 1){
        if(newDeliveryList[0].list==null){
          this.deliveryUser.tid=1;
        }
      }
    },
    changeDeliveryTime(tid,did){
      //怎么判断出tid和did有无关系

      let newDeliveryList= this.deliveryList.filter(delivery => delivery.id==did);
      if (newDeliveryList.length == 1){
        if(newDeliveryList[0].list!=null){
          // this.deliveryUser.tid=1;
          let newDeliveryTimeList=  newDeliveryList[0].list.filter(deliveryTime => deliveryTime.id==tid&&deliveryTime.did==did)
          if (newDeliveryTimeList[0]!=null){
            this.deliveryUser.tid=tid;
          }
        }else{
          this.deliveryUser.tid=1;
        }
      }
      this.deliveryUser.did=did;
    },
    async updateDelivery(){

      let { data : baseResult } =await this.$request.updateDelivery(this.deliveryUser.tid,this.deliveryUser.did);
      // await this.getDelivery()
      this.$router.go(0)


    }
  },
  mounted() {
    // 查询所有的地址
    this.getAddress()
    this.getDelivery()
    // 查询购物车
    this.getCart()
  },
}
</script>

<style>

</style>
