<template>
  <div class="header w1210 bc mt15">
    <!-- 头部上半部分 start 包括 logo、搜索、用户中心和购物车结算 -->
    <div class="logo w1210">
      <h1 class="fl"><a href="/"><img src="/images/logo.png" alt="畅购商城"></a></h1>
      <!-- 头部搜索 start -->
      <div class="search fl">
        <div class="search_form">
          <div class="form_left fl"></div>
          <form action="" name="serarch" method="get" class="fl">
            <input type="text" class="txt" placeholder="请输入商品关键字" v-model="keyword"/>
            <input type="submit" class="btn" value="搜索" @click.prevent="search"/>
          </form>
          <div class="form_right fl"></div>
        </div>

        <div style="clear:both;"></div>

        <div class="hot_search">
          <strong>热门搜索:</strong>
          <a href="">D-Link无线路由</a>
          <a href="">休闲男鞋</a>
          <a href="">TCL空调</a>
          <a href="">耐克篮球鞋</a>
        </div>
      </div>
      <!-- 头部搜索 end -->

      <!-- 用户中心 start-->
      <div class="user fl">
        <dl>
          <dt>
            <em></em>
            <a href="">用户中心</a>
            <b></b>
          </dt>
          <dd>
            <div class="prompt">
              您好，请<a href="">登录</a>
            </div>
            <div class="uclist mt10">
              <ul class="list1 fl">
                <li><a href="user.html">用户信息></a></li>
                <li><a href="">我的订单></a></li>
                <li><a href="">收货地址></a></li>
                <li><a href="">我的收藏></a></li>
              </ul>

              <ul class="fl">
                <li><a href="">我的留言></a></li>
                <li><a href="">我的红包></a></li>
                <li><a href="">我的评论></a></li>
                <li><a href="">资金管理></a></li>
              </ul>

            </div>
            <div style="clear:both;"></div>
            <div class="viewlist mt10">
              <h3>最近浏览的商品：</h3>
              <ul>
                <li><a href=""><img src="/images/view_list1.jpg" alt="" /></a></li>
                <li><a href=""><img src="/images/view_list2.jpg" alt="" /></a></li>
                <li><a href=""><img src="/images/view_list3.jpg" alt="" /></a></li>
              </ul>
            </div>
          </dd>
        </dl>
      </div>
      <!-- 用户中心 end-->

      <!-- 购物车 start -->
      <div class="cart fl">
        <dl>
          <dt>
            <a href="">去购物车结算</a>
            <b></b>
          </dt>
          <dd>
            <div class="prompt">
              购物车中还没有商品，赶紧选购吧！
            </div>
          </dd>
        </dl>
      </div>
      <!-- 购物车 end -->
    </div>
    <!-- 头部上半部分 end -->

    <div style="clear:both;"></div>

    <!-- 导航条部分 start -->
    <div class="nav w1210 bc mt10">
      <!--  商品分类部分 start-->
      <div :class="['category','fl', isFirst?'':'cat1']"> <!-- 非首页，需要添加cat1类 -->
        <div :class="['cat_hd', isFirst?'':'off']">  <!-- 注意，首页在此div上只需要添加cat_hd类，非首页，默认收缩分类时添加上off类，鼠标滑过时展开菜单则将off类换成on类 -->
          <h2>全部商品分类 </h2>
          <em></em>
        </div>

        <div :class="{'cat_bd':true, 'none': !isFirst }">
          <!-- 分类列表start -->
          <div class="cat item1" v-for="(c1,i1) in list" :key="i1">
            <h3><a href="">{{c1.cat_name}}</a> <b></b></h3>
            <div :class="{'cat_detail':true, 'none': !isFirst}">
              <!-- 二级分类start -->
              <dl class="dl_1st" v-for="(c2,i2) in c1.children" :key="i2">
                <dt><a href="">{{c2.cat_name}}</a></dt>
                <dd>
                  <!-- 三级分类 -->
                  <a  v-for="(c3,i3) in c2.children" :key="i3" :href="'/list/' + c3.id">{{c3.cat_name}}</a>
                </dd>
              </dl>
              <!-- 二级分类end -->

            </div>
          </div>
          <!-- 分类列表end -->



        </div>

      </div>
      <!--  商品分类部分 end-->

      <div class="navitems fl">
        <ul class="fl">
          <li class="current"><a href="/">首页</a></li>
          <li><a href="">电脑频道</a></li>
          <li><a href="">家用电器</a></li>
          <li><a href="">品牌大全</a></li>
          <li><a href="">团购</a></li>
          <li><a href="">积分商城</a></li>
          <li><a href="">夺宝奇兵</a></li>
        </ul>
        <div class="right_corner fl"></div>
      </div>
    </div>
    <!-- 导航条部分 end -->
  </div>
</template>

<script>
import  {mapMutations} from 'vuex'
export default {
  props: {
    list: {
      type: Array,      //list属性的类型为数组
      default() {       //list属性的默认值为空数组
        return []
      }
    },
    isFirst: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    ...mapMutations(['setData']),
    search(){
      this.setData({key:'keyword',value: this.keyword})
    }
  }
}
</script>

<style>

</style>
