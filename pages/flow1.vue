<template>
  <div>
    <!-- 顶部导航 start -->
    <top-nav></top-nav>
    <!-- 顶部导航 end -->
    
    <div style="clear:both;"></div>
    
    <!-- 页面头部 start -->
    <div class="header w990 bc mt15">
      <div class="logo w990">
        <h2 class="fl"><a href="/"><img src="images/logo.png" alt="畅购商城"></a></h2>
        <div class="flow fr">
          <ul>
            <li class="cur">1.我的购物车</li>
            <li>2.填写核对订单信息</li>
            <li>3.成功提交订单</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 页面头部 end -->
    
    <div style="clear:both;"></div>

    <!-- 主体部分 start -->
    <div class="mycart w990 mt10 bc">
      <h2><span>我的购物车</span></h2>
      <table v-if="cart.length != 0">
        <thead>
          <tr>
            <th class="col0">
              <input type="checkbox" v-model="allChecked" @click="checkAll" >
            </th>
            <th class="col1">商品名称</th>
            <th class="col2">商品信息</th>
            <th class="col3">单价</th>
            <th class="col4">数量</th>	
            <th class="col5">小计</th>
            <th class="col6">操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 购物项列表展示start -->
          <tr v-for="(cartItem,index) in cart" :key="index">
            <td class="col0">
              <input type="checkbox" v-model="cartItem.checked" >
            </td>
            <td class="col1">
              <a href=""><img :src="cartItem.midlogo" alt="" /></a>  
              <strong><a href="">{{cartItem.goods_name}}</a></strong>
            </td>
            <td class="col2">
              <p v-for="(value, key ,si) in JSON.parse(cartItem.spec_info.id_txt)" :key="si">{{key}}:{{value}}</p>
            </td>
            <td class="col3">￥<span>{{cartItem.price / 100}}</span></td>
            <td class="col4"> 
              <a href="javascript:;" class="reduce_num" @click.prevent="reduceCount(cartItem, index)"></a>
              <input type="text" name="amount" value="1" v-model="cartItem.count" class="amount"/>
              <a href="javascript:;" class="add_num" @click.prevent="addCount(cartItem)"></a>
            </td>
            <td class="col5">￥<span>{{cartItem.price * cartItem.count / 100}}</span></td>
            <td class="col6"><a href="" @click.prevent="deleteItem(index)">删除</a></td>
          </tr>
          <!-- 购物项列表展示end -->
        </tbody>
        <tfoot>
          <tr>
            <td colspan="7">购物金额总计： <strong>￥ <span id="total">{{total}}</span></strong></td>
          </tr>
        </tfoot>
      </table>
      <div v-if="cart.length != 0" class="cart_btn w990 bc mt10">
        <a href="" class="continue">继续购物</a>
        <a href="flow2.html" class="checkout" @click.prevent="submit">结 算</a>
      </div>
      <div v-if="cart.length == 0" style="font-size: 25px;text-align: center;">
        购物车为空
      </div>
    </div>
    <!-- 主体部分 end -->

    <div style="clear:both;"></div>
    <!-- 底部版权 start -->
    <Footer></Footer>
    <!-- 底部版权 end -->
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
export default {
  components: { TopNav },
  head: {
    title: '购物车',
    link: [
      {rel:'stylesheet',href: '/style/cart.css'},
    ],
    script: [
      // { type: 'text/javascript', src: '/js/cart1.js' },
    ]
  },
  data() {
    return {
      cart: [],       //购物车数据（购物项的列表）
      allChecked: false,    //全选复选框的默认状态
    }
  },    
  mounted() {
    // 获得购物车
    this.getCart()
  },
  methods: {
    async getCart() {
      // 获得购物车，如果用户登录从后端查询、如果没有登录从localStorage获得
      //1 获得token
      var token = sessionStorage.getItem('token')
      if(token) {
        //2 如果登录
        let { data: baseResult } = await this.$request.getCart()
        this.cart = baseResult.data
      } else {
        //3 没有登录
        var cartStr = localStorage.getItem('cart')
        this.cart = JSON.parse(cartStr)
      }
      // 如果购物车为空
      if(! this.cart) {
        this.cart = []
      }
    },
    reduceCount(cartItem, index) {
      if(cartItem.count <= 1) {
        // 没有操作 or 【删除操作】 等需求
        this.deleteItem(index)
      } else {
        cartItem.count --
      }
    },
    addCount(cartItem) {
      cartItem.count ++
    },
    deleteItem(index) {
      // 询问
      if(window.confirm("您确定要删除么？")){
        this.cart.splice(index, 1)
      }
    },
    checkAll() {
      // 将全选按钮的状态，同步到购物车的购物项中
      this.cart.forEach(cartItem => cartItem.checked = !this.allChecked)
    },
    submit() {
      // 判断是否登录
      let token = sessionStorage.getItem('token')

      if(token) {
        // 如果登录，跳转flow2页面
        this.$router.push('/flow2')
      } else {
        // 如果没有，跳转登录页面（留下回来路径）
        sessionStorage.setItem('returnUrl', '/flow2')
        this.$router.push('/Login')
      }
    }
  },
  computed: {
    total() {
      var sum = 0 ;
      this.cart.forEach(cartItem => {
        sum += (cartItem.price * cartItem.count)
      })
      return sum / 100
    },
  },
  watch: {
    cart: {
      async handler(newValue, oldValue) { //处理函数
        //1 获得token
        let token = sessionStorage.getItem('token')
        //2 如果登录，处理数据 cartItem --> cartVo，并发送ajax
        if(token) {
          // 2.1 处理数据 cartItem --> cartVo
          let cartVoList = newValue.map(({checked,count,skuid}) => {
            return {
              checked,
              count,
              skuid
            }
          })
          // 2.2 发送ajax
          let { data : baseResult } = await this.$request.updateCart(cartVoList)
          // 处理返回结果（暂定）
        } else {
          //3 如果没有登录，将数据保存localStorage中
          localStorage.setItem('cart', JSON.stringify(newValue))
        }
        // 4 修改全选的状态：列表的个数 == 选中的个数
        this.allChecked = (this.cart.length == this.cart.filter(item => item.checked).length )
      },
      deep: true                    //深度监听
    }
  },
}
</script>

<style>

</style>