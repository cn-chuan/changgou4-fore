const request = {

  findNews(newsVo) {
    ///web-service/news?current=1&size=3
    return axios.get('/web-service/news', {params: newsVo})
  },
  findCategorys() {
    return axios.get('/web-service/categorys')
  },
  getGoodsInfo(skuId) {
    return axios.get(`/web-service/sku/goods/${skuId}`)
  }
}

var axios = null
export default ({ $axios, redirect, process }, inject) => {
  
    //赋值
    axios = $axios
  
    //4) 将自定义函数交于nuxt
    // 使用方式1：在vue中，this.$request.xxx()
    // 使用方式2：在nuxt的asyncData中，content.app.$requestServer.xxx()
    inject('requestServer', request)
  }
  