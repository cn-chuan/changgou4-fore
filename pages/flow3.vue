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
        <p><span></span>订单提交成功，我们将及时为您处理</p>
        <div id="qrcode" style="width:256px;margin: 0 auto;"></div>
        <p class="message">完成支付后，你可以 <a href="" @click.prevent="findPayState">查看订单状态</a>  <a href="">继续购物</a> <a href="">问题反馈</a></p>
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
    title: '支付',
    link: [
      {rel:'stylesheet',href: '/style/success.css'},
    ],
    script: [
      { type: 'text/javascript', src: '/js/qrcode.min.js' },
      { type: 'text/javascript', src: '/js/stomp.min.js' },
    ]
  },
  data() {
    return {
      payRequest: {
        sn: ''
      }
    }
  },
  methods: {
    async pay() {
      // 发送ajax
      let { data : baseResult } = await this.$request.pay( this.payRequest )
      // 绘制二维码
      if( baseResult.code == 20000) {
        //new QRCode(位置，内容)
        new QRCode(document.getElementById('qrcode'), baseResult.other.wxurl )
      } else {
        alert(baseResult.message)
      }
    },
    async findPayState() {
      let { data : baseResult } = await this.$request.findPayState( this.payRequest.sn )
      // 已经支付，及其之后的状态，跳转到支付成功
      if( baseResult.code == 20000 ) {
        location.href = '/flow4'
      } else {
        alert( baseResult.message )
      }
    },
    autoChange() {
      //1 创建客户端
      var client = Stomp.client('ws://localhost:15674/ws');
      //2 关闭调试
      client.debug = false

      //3.1 成功回调 (【使用箭头函数】，可以使用vue中的this)
      var on_connect = (x) => {
        client.subscribe("/queue/order_pay_auto", (d) => {
          // 获得当前订单的处理结果，跳转到flow4页面
          if( this.payRequest.sn == d.body ) {
            location.href = '/flow4'
          }
        });
      }
      //3.2 失败回调
      var on_error =  function() {
        console.log('error');
      };
      //3.3 连接
      // client.connect(账号, 密码, 成功回调函数, 失败回调函数, 虚拟主机名);
      client.connect('guest', 'guest', on_connect, on_error, '/');
    }
  },
  mounted() {
    // 获得订单号
    this.payRequest.sn = this.$route.query.sn
    // ajax查询
    this.pay()
    // 自动跳转（与消息推送建立连接，用于检测）
    this.autoChange()
  },
}
</script>

<style>
  #qrcode img {
    background-color: #fff;
    padding: 6px;
  }

</style>