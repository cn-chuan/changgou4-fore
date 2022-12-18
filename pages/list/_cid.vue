<template>
  <div>
    <!-- 顶部导航 start -->
    <TopNav></TopNav>
    <!-- 顶部导航 end -->
    
    <div style="clear:both;"></div>

    <!-- 头部 start -->
    <HeaderSearch :list="categoryList" :isFirst="false"></HeaderSearch>
    <!-- 头部 end-->

    <div style="clear:both;"></div>

    <!-- 列表主体 start -->
    <div class="list w1210 bc mt10">
      <!-- 面包屑导航 start -->
      <div class="breadcrumb">
        <h2>当前位置：<a href="">首页</a> > <a href="">电脑、办公</a></h2>
      </div>
      <!-- 面包屑导航 end -->

      <!-- 左侧内容 start -->
      <div class="list_left fl mt10">
        <!-- 分类列表 start -->
        <div class="catlist">
          <h2>电脑、办公</h2>
          <div class="catlist_wrap">
            <div class="child">
              <h3 class="on"><b></b>电脑整机</h3>
              <ul>
                <li><a href="">笔记本</a></li>
                <li><a href="">超极本</a></li>
                <li><a href="">平板电脑</a></li>
              </ul>
            </div>

            <div class="child">
              <h3><b></b>电脑配件</h3>
              <ul class="none">
                <li><a href="">CPU</a></li>
                <li><a href="">主板</a></li>
                <li><a href="">显卡</a></li>
              </ul>
            </div>

            <div class="child">
              <h3><b></b>办公打印</h3>
              <ul class="none">
                <li><a href="">打印机</a></li>
                <li><a href="">一体机</a></li>
                <li><a href="">投影机</a></li>
              </ul>
            </div>

            <div class="child">
              <h3><b></b>网络产品</h3>
              <ul class="none">
                <li><a href="">路由器</a></li>
                <li><a href="">网卡</a></li>
                <li><a href="">交换机</a></li>
              </ul>
            </div>

            <div class="child">
              <h3><b></b>外设产品</h3>
              <ul class="none">
                <li><a href="">鼠标</a></li>
                <li><a href="">键盘</a></li>
                <li><a href="">U盘</a></li>
              </ul>
            </div>
          </div>
          
          <div style="clear:both; height:1px;"></div>
        </div>
        <!-- 分类列表 end -->
          
        <div style="clear:both;"></div>	

        <!-- 新品推荐 start -->
        <div class="newgoods leftbar mt10">
          <h2><strong>新品推荐</strong></h2>
          <div class="leftbar_wrap">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/list_hot1.jpg" alt="" /></a></dt>
                  <dd><a href="">美即流金丝语悦白美颜新年装4送3</a></dd>
                  <dd><strong>￥777.50</strong></dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt><a href=""><img src="/images/list_hot2.jpg" alt="" /></a></dt>
                  <dd><a href="">领券满399减50 金斯利安多维片</a></dd>
                  <dd><strong>￥239.00</strong></dd>
                </dl>
              </li>

              <li class="last">
                <dl>
                  <dt><a href=""><img src="/images/list_hot3.jpg" alt="" /></a></dt>
                  <dd><a href="">皮尔卡丹pierrecardin 男士长...</a></dd>
                  <dd><strong>￥1240.50</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <!-- 新品推荐 end -->

        <!--热销排行 start -->
        <div class="hotgoods leftbar mt10">
          <h2><strong>热销排行榜</strong></h2>
          <div class="leftbar_wrap">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <!--热销排行 end -->

        <!-- 最近浏览 start -->
        <div class="viewd leftbar mt10">
          <h2><a href="">清空</a><strong>最近浏览过的商品</strong></h2>
          <div class="leftbar_wrap">
            <dl>
              <dt><a href=""><img src="/images/hpG4.jpg" alt="" /></a></dt>
              <dd><a href="">惠普G4-1332TX 14英寸笔记...</a></dd>
            </dl>

            <dl class="last">
              <dt><a href=""><img src="/images/crazy4.jpg" alt="" /></a></dt>
              <dd><a href="">直降200元！TCL正1.5匹空调</a></dd>
            </dl>
          </div>
        </div>
        <!-- 最近浏览 end -->
      </div>
      <!-- 左侧内容 end -->
    
      <!-- 列表内容 start -->
      <div class="list_bd fl ml10 mt10">
        <!-- 热卖、促销 start -->
        <div class="list_top">
          <!-- 热卖推荐 start -->
          <div class="hotsale fl">
            <h2><strong><span class="none">热卖推荐</span></strong></h2>
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/hpG4.jpg" alt="" /></a></dt>
                  <dd class="name"><a href="">惠普G4-1332TX 14英寸笔记本电脑 （i5-2450M 2G 5</a></dd>
                  <dd class="price">特价：<strong>￥2999.00</strong></dd>
                  <dd class="buy"><span>立即抢购</span></dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt><a href=""><img src="/images/list_hot3.jpg" alt="" /></a></dt>
                  <dd class="name"><a href="">ThinkPad E42014英寸笔记本电脑</a></dd>
                  <dd class="price">特价：<strong>￥4199.00</strong></dd>
                  <dd class="buy"><span>立即抢购</span></dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                  <dd class="name"><a href="">宏碁AS4739-382G32Mnkk 14英寸笔记本电脑</a></dd>
                  <dd class="price">特价：<strong>￥2799.00</strong></dd>
                  <dd class="buy"><span>立即抢购</span></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 热卖推荐 end -->

          <!-- 促销活动 start -->
          <div class="promote fl">
            <h2><strong><span class="none">促销活动</span></strong></h2>
            <ul>
              <li><b>.</b><a href="">DIY装机之向雷锋同志学习！</a></li>
              <li><b>.</b><a href="">京东宏碁联合促销送好礼！</a></li>
              <li><b>.</b><a href="">台式机笔记本三月巨惠！</a></li>
              <li><b>.</b><a href="">富勒A53g智能人手识别鼠标</a></li>
              <li><b>.</b><a href="">希捷硬盘白色情人节专场</a></li>
            </ul>

          </div>
          <!-- 促销活动 end -->
        </div>
        <!-- 热卖、促销 end -->
        
        <div style="clear:both;"></div>
        
        <!-- 商品筛选 start -->
        <div class="filter mt10">
          <h2><a href="">重置筛选条件</a> <strong>商品筛选</strong></h2>
          <div class="filter_wrap">
            <dl>
              <dt>品牌：</dt>
              <dd :class=" searchMap.brandId == '' ? 'cur': '' ">
                <a href="" @click.prevent="brandSearch('')">不限</a>
              </dd>
              <!-- 品牌列表 start -->
              <dd v-for="(brand,index) in brandListPart" :key="index" :class=" searchMap.brandId == brand.id ? 'cur': '' ">
                <a href="" @click.prevent="brandSearch(brand.id)">{{brand.brandName}}</a>
              </dd>
              <span @click="moreBrandFn" style="cursor:pointer">{{moreBrandText}}</span>
              <!-- 品牌列表 end -->
            </dl>

            <!-- 规格列表 start -->
            <dl v-for="(spec,si) in specList" :key="si" :class="{'last': si == specList.length - 1 }">
              <dt>{{spec.specName}}：</dt>
              <!-- 规格选项回显方式1：处理没有默认值的情况 -->
              <dd :class="{'cur': spec.selectId == undefined || spec.selectId == ''}">
                <a href="" @click.prevent="specSearch(spec, '' )">不限</a>
              </dd>
              <dd :class="{'cur': spec.selectId == specOption.id}" v-for="(specOption, soi) in spec.options" :key="soi">
                <a href="" @click.prevent="specSearch(spec, specOption)">{{specOption.optionName}}</a>
              </dd>
            </dl>
            <!-- 规格列表 end -->

            <!-- <dl>
              <dt>尺寸：</dt>
              <dd class="cur"><a href="">不限</a></dd>
              <dd><a href="">10.1英寸及以下</a></dd>
              <dd><a href="">11英寸</a></dd>
              <dd><a href="">12英寸</a></dd>
              <dd><a href="">13英寸</a></dd>
              <dd><a href="">14英寸</a></dd>
              <dd><a href="">15英寸</a></dd>
            </dl>

            <dl class="last">
              <dt>处理器：</dt>
              <dd class="cur"><a href="">不限</a></dd>
              <dd><a href="">intel i3</a></dd>
              <dd><a href="">intel i5</a></dd>
              <dd><a href="">intel i7</a></dd>
              <dd><a href="">AMD A6</a></dd>
              <dd><a href="">AMD A8</a></dd>
              <dd><a href="">AMD A10</a></dd>
              <dd><a href="">其它intel平台</a></dd>
            </dl> -->
          </div>
        </div>
        <!-- 商品筛选 end -->
        
        <div style="clear:both;"></div>

        <!-- 排序 start -->
        <div class="sort mt10">
          <dl>
            <dt>排序：</dt>
            <dd :class="{'cur': searchMap.sortBy == 'xl'}">
              <a href="" @click.prevent="sortSearch('xl')">销量</a>
              </dd>
            <dd :class="{'cur': searchMap.sortBy == 'jg'}">
              <a href="" @click.prevent="sortSearch('jg')" style="text-decoration: none;">
                价格 
                <span v-if="searchMap.sortBy == 'jg' && searchMap.sortWay == 'asc'">↑</span> 
                <span v-if="searchMap.sortBy == 'jg' && searchMap.sortWay == 'desc'">↓</span> 
              </a>
              </dd>
            <dd :class="{'cur': searchMap.sortBy == 'pl'}">
              <a href="" @click.prevent="sortSearch('pl')">评论数</a>
              </dd>
            <dd :class="{'cur': searchMap.sortBy == 'sj'}">
              <a href="" @click.prevent="sortSearch('sj')">上架时间</a>
            </dd>
            <dt>价格：</dt>
            <dt>
              <input type="text" style="width: 80px" v-model="searchMap.minPrice"> - 
              <input type="text" style="width: 80px" v-model="searchMap.maxPrice">
              <input type="button" value="搜索" @click.prevent="searchList">
            </dt>
          </dl>
        </div>
        <!-- 排序 end -->
        
        <div style="clear:both;"></div>

        <!-- 商品列表 start-->
        <div class="goodslist mt10">
          <ul>
            <li v-for="(goods,index) in searchResult.list" :key="index">
              <dl>
                <dt><a :href="'/Goods?id='+goods.id"><img :src="goods.midlogo" alt="" /></a></dt>
                <dd><a :href="'/Goods?id='+goods.id">{{goods.goodsName | subStr(42,'...') }}</a></dd>
                <dd><strong>￥{{goods.price | priceHandler }}</strong></dd>
                <dd><a href=""><em>已有{{goods.commentCount}}人评价</em></a></dd>
              </dl>
            </li>

          </ul>
        </div>
        <!-- 商品列表 end-->

        <!-- 分页信息 start -->
        <Pagination :total="searchResult.total" 
        :page_size="searchMap.size" 
        @page_changed="pageSearch"></Pagination>
        <!-- <div class="page mt20">
          <a href="">首页</a>
          <a href="">上一页</a>
          <a href="">1</a>
          <a href="">2</a>
          <a href="" class="cur">3</a>
          <a href="">4</a>
          <a href="">5</a>
          <a href="">下一页</a>
          <a href="">尾页</a>&nbsp;&nbsp; 
          <span>
            <em>共8页&nbsp;&nbsp;到第 <input type="text" class="page_num" value="3"/> 页</em>
            <a class="skipsearch" href="javascript:;">确定</a>
          </span>
        </div> -->
        <!-- 分页信息 end -->

      </div>
      <!-- 列表内容 end -->
    </div>
    <!-- 列表主体 end-->

    <div style="clear:both;"></div>
    <!-- 底部导航 start -->
    <BottomNav></BottomNav>
    <!-- 底部导航 end -->

    <div style="clear:both;"></div>
    <!-- 底部版权 start -->
    <Footer></Footer>
    <!-- 底部版权 end -->
  </div>
</template>

<script>
export default {
  head: {
    title: '搜索页面',
    link: [
      {rel:'stylesheet',href: '/style/list.css'},
      {rel:'stylesheet',href: '/style/common.css'},
      {rel:'stylesheet',href: '/style/bottomnav.css'}
    ],
    script: [
      { type: 'text/javascript', src: '/js/header.js' },
      { type: 'text/javascript', src: '/js/list.js' }
    ]
  },
  async asyncData( context ) {
    // let {data: categoryBaseResult} = await context.$axios.get('/web-service/categorys')
    let {data: categoryBaseResult} = await context.$requestServer.findCategorys()
    return {
      categoryList: categoryBaseResult.data
    }
  },
  data() {
    return {
      searchMap: {            //搜索条件
        catId: '',            //分类id
        brandId: '',          //品牌id
        current: 1,           //分页：第几页
        size: 4 ,             //分页：每页显示条数
        sortBy: 'jg',         //排序字段
        sortWay: 'asc',       //排序方式
        specList: {},         //规格参数
      },
      brandList: [],          //品牌列表
      moreBrandText: '更多',  //更多品牌文本变量
      moreBrand: false,       //更多品牌控制变量
      brandListPart: [],      //品牌部分列表
      specList: [],           //所有规格
      searchResult: {},       //搜索结果：total/list
    }
  },
  methods: {
    async findAllBrand() {
      let { data: baseResult } = await this.$request.findAllBrand( this.searchMap.catId )
      this.brandList = baseResult.data
      // 处理部分数据
      this.handlerMoreBrand()
    },
    brandSearch(bid) {
      // 品牌参数
      this.searchMap.brandId = bid
      // 查询
      this.searchList()
    },
    moreBrandFn() {
      if(this.moreBrand) {
        // true, 显示部分
        this.moreBrandText = '更多'
        this.moreBrand = false
        // 显示不是数据
        this.handlerMoreBrand()
      } else {
        // false , 显示出更多
        this.moreBrandText = '收起'
        this.moreBrand = true
        // 将所有的结果填充到部分中
        this.brandListPart = this.brandList
      }
    },
    handlerMoreBrand() {
      this.brandListPart = this.brandList.slice(0,24)
    },
    async findAllSpec() {
      let { data: baseResult } = await this.$request.findAllSpec( this.searchMap.catId )
      this.specList = baseResult.data
      //规格选项回显方式2： 处理数据，设置每一个spec的selectId的默认值
      // this.specList.forEach(spec => this.$set(spec,'selectId', '') )
      

    },
    specSearch(spec, specOption) {
      // 将选中规格选项id保存到 spec对象的 selectId 自定义属性中
      this.$set(spec, 'selectId', specOption == '' ? '' : specOption.id )
      // 设置规格参数
      this.searchMap.specList[spec.specName] = specOption.optionName
      // 查询
      this.searchList()
    },
    async searchList() {
      let { data: baseResult } = await this.$request.search( this.searchMap )
      this.searchResult = baseResult.data
    },
    sortSearch(sortBy) {
      // 第二次点击相同的排序字段
      if(this.searchMap.sortBy == sortBy) {
        // 更改排序方式
        this.searchMap.sortWay = (this.searchMap.sortWay == 'asc') ? 'desc' : 'asc'
      } else {
        // 设置排序字段
        this.searchMap.sortBy = sortBy
        // 默认排序方式
        this.searchMap.sortWay = 'asc'
      }

      // 查询
      this.searchList()
    },
    pageSearch(num) {
      //设置第几页
      this.searchMap.current = num
      //查询
      this.searchList()
    }
  },
  mounted() {
    // 获得分类id
    this.searchMap.catId = this.$route.params.cid
    // 查询所有品牌
    this.findAllBrand()
    // 查询所有的规格
    this.findAllSpec()
    // 查询商品
    this.searchList()
  },
  filters: {
    priceHandler(value) {
      return (Number(value) / 100).toFixed(2)
    },
    subStr(value, len , suffix) {
      return (value.length < len) ? value : value.substring(0,len) + suffix
    }
  },
  watch: {
    '$store.state.keyword'(newValue, oldValue) {
      // 设置关键字
      this.searchMap.keyword = newValue
      // 查询
      this.searchList()
    },
  },

}
</script>

<style>

</style>