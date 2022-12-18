<template>
  <div>
    <!-- 顶部导航 start -->
    <TopNav></TopNav>
    <!-- 顶部导航 end -->

    <div style="clear:both;"></div>

    <!-- 页面头部 start -->
    <div class="header w990 bc mt15">
      <div class="logo w990">
        <h2 class="fl"><a href="index.html"><img src="images/logo.png" alt="畅购商城"></a></h2>
      </div>
    </div>
    <!-- 页面头部 end -->

    <!-- 登录主体部分start -->
    <div class="login w990 bc mt10 regist">
      <div class="login_hd">
        <h2>用户注册</h2>
        <b></b>
      </div>
      <div class="login_bd">
        <div class="login_form fl">
          <form action="" method="post">
            <ul>
              <li>
                <label for="">用户名：</label>
                <input type="text" class="txt" name="username" v-model="user.username" @blur="checkusername" />
                <p>3-20位字符，可由中文、字母、数字和下划线组成</p>
                <p :class="userMsg.usernameData.code == 20000 ? 'success' : 'error'">
                  {{userMsg.usernameData.message}}
                </p>
              </li>
              <li>
                <label for="">密码：</label>
                <input type="password" class="txt" name="password" v-model="user.password"/>
                <p>6-20位字符，可使用字母、数字和符号的组合，不建议使用纯数字、纯字母、纯符号</p>
              </li>
              <li>
                <label for="">确认密码：</label>
                <input type="password" class="txt" name="password_confirm" v-model="user.password_confirm"/>
                <p>请再次输入密码</p>
              </li>
              <li>
                <label for="">手机号码：</label>
                <input type="text" class="txt"  name="mobile" v-model="user.mobile" @blur="checkmobile" />
                <p>请输入手机号码</p>
                <p :class="userMsg.mobileData.code == 20000 ? 'success' : 'error'">
                  {{userMsg.mobileData.message}}
                </p>
              </li>
              <li class="checkcode">
                <label for="">验证码：</label>
                <input type="text"  name="checkcode" v-model="user.code" />
                <button :disabled="btnDisabled" @click.prevent="sendSms" >
                  发送验证码<span v-if="btnDisabled">{{seconds}}秒</span>
                </button>
              </li>
              <li>
                <label for="">&nbsp;</label>
                <input type="checkbox" class="chb" checked="checked" /> 我已阅读并同意《用户注册协议》
              </li>
              <li>
                <p :class="userMsg.smsData.code == 20000 ? 'success' : 'error'">
                  {{userMsg.smsData.message}}
                </p>
              </li>
              <li>
                <label for="">&nbsp;</label>
                <input type="submit" value="" @click.prevent="register" class="login_btn" />
              </li>
            </ul>
          </form>


        </div>

        <div class="mobile fl">
          <h3>手机快速注册</h3>
          <p>中国大陆手机用户，编辑短信 “<strong>XX</strong>”发送到：</p>
          <p><strong>1069099988</strong></p>
        </div>

      </div>
    </div>
    <!-- 登录主体部分end -->

    <div style="clear:both;"></div>
    <!-- 底部版权 start -->
    <Footer></Footer>
    <!-- 底部版权 end -->
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    TopNav,
    Footer,
  },
  head: {
    title: '页面注册',
    link: [
      {rel:'stylesheet', href:'/style/login.css', type: 'text/css'}
    ]
  },
  data() {
    return {
      user: {       //用户封装对象
        username: '',
        mobile: '',
      },
      userMsg: {    //提示信息的封装对象(message)
        usernameData: {},
        mobileData: {},
        smsData: {}
      },
      btnDisabled: false,       //倒计时按钮是否可用的控制变量
      seconds: 5,               //倒计时的默认秒数
      timer: null,               //定时器对象，用于停止
    }
  },
  methods: {
    async checkusername() {
      // 发送ajax
      let { data:baseResult } = await this.$request.checkusername( this.user )
      // 获得结果
      this.userMsg.usernameData = baseResult
    },
    async checkmobile() {
      // 发送ajax
      let { data:baseResult } = await this.$request.checkmobile( this.user.mobile )
      // 获得结果
      this.userMsg.mobileData = baseResult
    },
    async sendSms() {
      // 发送短信的ajax
      let { data: baseResult } = await this.$request.sendSms( this.user )
      // 结果
      this.userMsg.smsData = baseResult
      // 倒计时特效：start
      // 按钮不可用
      this.btnDisabled = true
      // 定时器改变数字
      //setInterval(function(){}, 1000)
      this.timer = setInterval(()=>{
        // 减少秒数
        this.seconds--
        // 停止倒计时，并重置
        if(this.seconds < 1) {
          // 停止定时器
          clearInterval( this.timer )
          // 并重置
          this.seconds = 5
          this.btnDisabled = false
        }
      }, 1000)
      setInterval
      // 倒计时特效：end
    },
    async register() {
      // 先进行前端的表单校验
      if(this.userMsg.usernameData.code != 20000 || this.userMsg.mobileData.code != 20000) {
        return;
      }


      // 注册的ajax
      let { data: baseResult } = await this.$request.register( this.user )
      // 处理
      if(baseResult.code == 20000) {
        // 跳转登录页
        this.$router.push('/Login')
      } else {
        // 错误提示
        this.userMsg.smsData = baseResult
      }
    }
  },
}
</script>

<style>

</style>