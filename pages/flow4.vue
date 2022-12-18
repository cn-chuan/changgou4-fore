<template>
  <div>
    <!-- 顶部导航 start -->
    <top-nav></top-nav>
    <!-- 顶部导航 end -->

    <div style="clear:both;"></div>

    <!-- 页面头部 start -->
    <div class="header w990 bc mt15">
      <div class="logo w990">
        <h2 class="fl"><a href="index.html"><img src="images/logo.png" alt="畅购商城"></a></h2>
        <div class="flow fr flow3">
          <ul>
            <li>1.我的购物车</li>
            <li>2.填写核对订单信息</li>
            <li class="cur">3.成功提交订单</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 页面头部 end -->

    <div style="clear:both;"></div>

    <!-- 主体部分 start -->
    <div class="success w990 bc mt15">
      <div class="success_hd">
        <h2>订单提交成功</h2>
      </div>
      <div class="success_bd">
        <p><span></span>支付成功</p>
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
export default {
  head: {
    title: '支付成功',
    link: [
      {rel:'stylesheet',href: '/style/success.css'},
    ],
    script: [
      { type: 'text/javascript', src: '/js/qrcode.min.js' },
    ]
  },
}
</script>

<style>
  #qrcode img {
    background-color: #fff;
    padding: 6px;
  }

</style>