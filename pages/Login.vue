<template>
  <div>
    <!-- 顶部导航 start -->
    <TopNav></TopNav>
    <!-- <top-nav></top-nav> -->
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
    <div class="login w990 bc mt10">
      <div class="login_hd">
        <h2>用户登录</h2>
        <b></b>
      </div>
      <div class="login_bd">
        <div class="login_form fl">
          <form action="" method="post">
            <ul>
              <li>
                <label for="">用户名：</label>
                <input type="text" class="txt" name="username" v-model="user.username" @blur="changeVerifyCode" />
              </li>
              <li>
                <label for="">密码：</label>
                <input type="password" class="txt" name="password" v-model="user.password" />
                <a href="">忘记密码?</a>
              </li>
              <li class="checkcode">
                <label for="">验证码：</label>
                <input type="text"  name="checkcode" v-model="user.code" />
                <img :src="imgSrc" alt="" @click.prevent="changeVerifyCode" style="cursor: pointer;" />
                <span>看不清？<a href="" @click.prevent="changeVerifyCode">换一张</a></span>
              </li>
              <li v-if="errorMsg != ''">
                <span class="error">{{errorMsg}}</span>
              </li>
              <li>
                <label for="">&nbsp;</label>
                <input type="checkbox" class="chb"  /> 保存登录信息
              </li>
              <li>
                <label for="">&nbsp;</label>
                <input type="submit" value="" class="login_btn" @click.prevent="login" />
              </li>
            </ul>
          </form>

          <div class="coagent mt15">
            <dl>
              <dt>使用合作网站登录商城：</dt>
              <dd class="qq"><a href=""><span></span>QQ</a></dd>
              <dd class="weibo"><a href=""><span></span>新浪微博</a></dd>
              <dd class="yi"><a href=""><span></span>网易</a></dd>
              <dd class="renren"><a href=""><span></span>人人</a></dd>
              <dd class="qihu"><a href=""><span></span>奇虎360</a></dd>
              <dd class=""><a href=""><span></span>百度</a></dd>
              <dd class="douban"><a href=""><span></span>豆瓣</a></dd>
            </dl>
          </div>
        </div>
        
        <div class="guide fl">
          <h3>还不是商城用户</h3>
          <p>现在免费注册成为商城用户，便能立刻享受便宜又放心的购物乐趣，心动不如行动，赶紧加入吧!</p>

          <a href="regist.html" class="reg_btn">免费注册 >></a>
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
    title: '登录',
    link: [
      {rel:'stylesheet',href: '/style/login.css'},
    ],
  },
  data() {
    return {
      imgSrc: '',
      user: {

      },
      errorMsg: '',     //错误信息
    }
  },
  methods: {
    changeVerifyCode() {
      console.info(this)
      this.imgSrc = `${this.$axios.defaults.baseURL}/web-service/verifycode?username=${this.user.username}&t=${new Date().getTime()}` 
    },
    async login() {
      let { data:baseResult } = await this.$request.login( this.user )
      // 成功，跳转首页
      if(baseResult.code == 20000) {
        let loginUser = baseResult.other.loginUser
        // 将登录用户信息保存到sessionStorage
        sessionStorage.setItem('loginUser', JSON.stringify(loginUser) )
        // 将token保存
        sessionStorage.setItem('token', baseResult.other.token)
        // 获得跳转页面的路径
        let returnUrl = sessionStorage.getItem('returnUrl')
        if(returnUrl) {
          // 跳转到指定页
          location.href = returnUrl
        } else {
          // 默认跳转首页
          location.href = '/'
        }
      } else {
        // 失败，给出提示
        this.errorMsg = baseResult.message
        // 更新验证码
        this.changeVerifyCode()
      }
      
    }
  },
  watch: {
    user: {
      handler(val, oldVal) {
        this.errorMsg = ''
      },
      deep: true      //深度监测
    }
  },
}
</script>

<style>

</style>