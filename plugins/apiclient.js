const request = {
  // 所有的ajax功能
  test : ()=> {
    return axios.get('/test')
  },
  checkusername( user ) {
    return axios.post('/web-service/user/checkusername', user)
  },
  checkmobile( mobile ) {
    //return axios.post('/web-service/user/checkmobile', { 'mobile':mobile } )
    return axios.post('/web-service/user/checkmobile', { mobile } )
  },
  // sendSms( user ) {
  //   return axios.post('/web-service/sms', {username: user.username, mobile: user.mobile})
  // },
  sendSms( {username,mobile} ) {  //解构
    return axios.post('/web-service/sms', {username, mobile}) //对象
  },
  register( user ) {
    return axios.post('/web-service/user/register', user )
  },
  login( user ) {
    return axios.post('/auth-service/auth/login', user )
  },
  findAllBrand( categoryId ) {
    return axios.get(`/web-service/brands/category/${categoryId}`)
  },
  findAllSpec( categoryId ) {
    return axios.get(`/web-service/specifications/category/${categoryId}`)
  },
  search( searchVo ) {
    return axios.post(`/search-service/sku/search`, searchVo)
  },
  getComments(spuId, commentVo) {
    // ?current=1&size=2
    return axios.get(`/web-service/comments/spu/${spuId}`, { params : {
        current: commentVo.current,
        size: commentVo.size
      }})
  },
  addCart( cartVo ) {
    return axios.post(`/cart-service/carts`, cartVo)
  },
  getCart() {
    return axios.get(`/cart-service/carts`)
  },
  updateCart(cartVoList) {
    return axios.put(`/cart-service/carts`, cartVoList)
  },
  getAddress() {
    return axios.get(`/order-service/address`)
  },
  addAddress( address ) {
    return axios.post(`/order-service/address`, address)
  },
  addOrder( orderVo ) {
    return axios.post(`/order-service/orders`, orderVo )
  },
  pay( payRequest ) {
    return axios.post(`/order-service/pay`, payRequest)
  },
  findPayState( sn ) {
    return axios.get(`/order-service/pay/${sn}`)
  },
  getDelivery(){
    return axios.get(`/order-service/delivery`)
  },
  updateDelivery(did,tid){
    return axios.post(`/order-service/delivery/${did}/${tid}`)
  }

}

var axios = null
export default ({ $axios, redirect }, inject) => {

  // 增强$axios，每一个请求都携带token
  let token = sessionStorage.getItem("token")
  if(token) {
    // 添加一个固定的请求头 Adds header: `Authorization: 123` to all requests
    $axios.setToken(token)
  }

  // 异常处理： 401
  $axios.onError(error => {
    if(error.response.status === 401) {
      // 重定向
      redirect('/Login')
    }
  })

  //赋值
  axios = $axios

  //4) 将自定义函数交于nuxt
  // 使用方式1：在vue中，this.$request.xxx()
  // 使用方式2：在nuxt的asyncData中，content.app.$request.xxx()
  inject('request', request)
}
