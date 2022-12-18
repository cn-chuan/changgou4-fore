<template>
  <div>
    
    <!-- 顶部导航 start -->
    <TopNav></TopNav>
    <!-- 顶部导航 end -->

    <div style="clear:both;"></div>

    <!-- 头部 start -->
    <HeaderSearch :list="categoryList"></HeaderSearch>
    <!-- 头部 end-->

    <div style="clear:both;"></div>

    <!-- 综合区域 start 包括幻灯展示，商城快报 -->
    <div class="colligate w1210 bc mt10">
      <!-- 幻灯区域 start -->
      <div class="slide fl">
        <div class="area">
          <div class="slide_items">
            <ul>
              <li><a href=""><img src="/images/index_slide1.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/index_slide2.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/index_slide3.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/index_slide4.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/index_slide5.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/index_slide6.jpg" alt="" /></a></li>
            </ul>
          </div>
          <div class="slide_controls">
            <ul>
              <li class="on">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 幻灯区域 end-->

      <!-- 快报区域 start-->
      <div class="coll_right fl ml10">
        <div class="ad"><a href=""><img src="/images/ad.jpg" alt="" /></a></div>

        <div class="news mt10">
          <h2><a href="">更多快报&nbsp;></a><strong>网站快报</strong></h2>
          <ul>
            <li v-for="(news,index) in newsList" :key="index" :class="{'odd': index % 2 == 0}">
              <a href="" :title="news.title">{{news.title}}</a>
            </li>
          </ul>

        </div>

        <div class="service mt10">
          <h2>
            <span class="title1 on"><a href="">话费</a></span>
            <span><a href="">旅行</a></span>
            <span><a href="">彩票</a></span>
            <span class="title4"><a href="">游戏</a></span>
          </h2>
          <div class="service_wrap">
            <!-- 话费 start -->
            <div class="fare">
              <form action="">
                <ul>
                  <li>
                    <label for="">手机号：</label>
                    <input type="text" name="phone" value="请输入手机号" class="phone" />
                    <p class="msg">支持移动、联通、电信</p>
                  </li>
                  <li>
                    <label for="">面值：</label>
                    <select name="" id="">
                      <option value="">10元</option>
                      <option value="">20元</option>
                      <option value="">30元</option>
                      <option value="">50元</option>
                      <option value="" selected>100元</option>
                      <option value="">200元</option>
                      <option value="">300元</option>
                      <option value="">400元</option>
                      <option value="">500元</option>
                    </select>
                    <strong>98.60-99.60</strong>
                  </li>
                  <li>
                    <label for="">&nbsp;</label>
                    <input type="submit" value="点击充值" class="fare_btn" /> <span><a href="">北京青春怒放独家套票</a></span>
                  </li>
                </ul>
              </form>
            </div>
            <!-- 话费 start -->

            <!-- 旅行 start -->
            <div class="travel none">
              <ul>
                <li>
                  <a href=""><img src="/images/holiday.jpg" alt="" /></a>
                  <a href="" class="button">度假查询</a>
                </li>
                <li>
                  <a href=""><img src="/images/scenic.jpg" alt="" /></a>
                  <a href="" class="button">景点查询</a>
                </li>
              </ul>
            </div>
            <!-- 旅行 end -->

            <!-- 彩票 start -->
            <div class="lottery none">
              <p><img src="/images/lottery.jpg" alt="" /></p>
            </div>
            <!-- 彩票 end -->

            <!-- 游戏 start -->
            <div class="game none">
              <ul>
                <li><a href=""><img src="/images/sanguo.jpg" alt="" /></a></li>
                <li><a href=""><img src="/images/taohua.jpg" alt="" /></a></li>
                <li><a href=""><img src="/images/wulin.jpg" alt="" /></a></li>
              </ul>
            </div>
            <!-- 游戏 end -->
          </div>
        </div>

      </div>
      <!-- 快报区域 end-->
    </div>
    <!-- -综合区域 end -->

    <div style="clear:both;"></div>

    <!-- 导购区域 start -->
    <div class="guide w1210 bc mt15">
      <!-- 导购左边区域 start -->
      <div class="guide_content fl">
        <h2>
          <span class="on">疯狂抢购</span>
          <span>热卖商品</span>
          <span>推荐商品</span>
          <span>新品上架</span>
          <span class="last">猜您喜欢</span>
        </h2>

        <div class="guide_wrap">
          <!-- 疯狂抢购 start-->
          <div class="crazy">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/crazy1.jpg" alt="" /></a></dt>
                  <dd><a href="">惠普G4-1332TX 14英寸</a></dd>
                  <dd><span>售价：</span><strong> ￥2999.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/crazy2.jpg" alt="" /></a></dt>
                  <dd><a href="">直降100元！TCL118升冰箱</a></dd>
                  <dd><span>售价：</span><strong> ￥800.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/crazy3.jpg" alt="" /></a></dt>
                  <dd><a href="">康佳液晶37寸电视机</a></dd>
                  <dd><span>售价：</span><strong> ￥2799.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/crazy4.jpg" alt="" /></a></dt>
                  <dd><a href="">梨子平板电脑7.9寸</a></dd>
                  <dd><span>售价：</span><strong> ￥1999.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/crazy5.jpg" alt="" /></a></dt>
                  <dd><a href="">好声音耳机</a></dd>
                  <dd><span>售价：</span><strong> ￥199.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 疯狂抢购 end-->

          <!-- 热卖商品 start -->
          <div class="hot none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/hot1.jpg" alt="" /></a></dt>
                  <dd><a href="">索尼双核五英寸四核手机！</a></dd>
                  <dd><span>售价：</span><strong> ￥1386.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/hot2.jpg" alt="" /></a></dt>
                  <dd><a href="">华为通话平板仅需969元！</a></dd>
                  <dd><span>售价：</span><strong> ￥969.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/hot3.jpg" alt="" /></a></dt>
                  <dd><a href="">卡姿兰明星单品7件彩妆套装</a></dd>
                  <dd><span>售价：</span><strong> ￥169.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 热卖商品 end -->

          <!-- 推荐商品 atart -->
          <div class="recommend none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/recommend1.jpg" alt="" /></a></dt>
                  <dd><a href="">黄飞红麻辣花生整箱特惠装</a></dd>
                  <dd><span>售价：</span><strong> ￥139.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/recommend2.jpg" alt="" /></a></dt>
                  <dd><a href="">戴尔IN1940MW 19英寸LE</a></dd>
                  <dd><span>售价：</span><strong> ￥679.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/recommend3.jpg" alt="" /></a></dt>
                  <dd><a href="">罗辑思维音频车载CD</a></dd>
                  <dd><span>售价：</span><strong> ￥24.80</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 推荐商品 end -->

          <!-- 新品上架 start-->
          <div class="new none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/new1.jpg" alt="" /></a></dt>
                  <dd><a href="">E路航T70超薄GPS 7寸大屏！</a></dd>
                  <dd><span>售价：</span><strong> ￥369.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/new2.jpg" alt="" /></a></dt>
                  <dd><a href="">乐和居 爆品 特价疯狂抢</a></dd>
                  <dd><span>售价：</span><strong> ￥2799.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/new3.jpg" alt="" /></a></dt>
                  <dd><a href="">北欧 套装 抄底再续最后几小时</a></dd>
                  <dd><span>售价：</span><strong> ￥999.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 新品上架 end-->

          <!-- 猜您喜欢 start -->
          <div class="guess none">
            <ul>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/guess1.jpg" alt="" /></a></dt>
                  <dd><a href="">Thinkpad USB光电鼠标</a></dd>
                  <dd><span>售价：</span><strong> ￥39.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/guess2.jpg" alt="" /></a></dt>
                  <dd><a href="">宜客莱（ECOLA）电脑散热器</a></dd>
                  <dd><span>售价：</span><strong> ￥89.00</strong></dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><a href=""><img src="/images/guess3.jpg" alt="" /></a></dt>
                  <dd><a href="">巴黎欧莱雅男士洁面膏 100ml</a></dd>
                  <dd><span>售价：</span><strong> ￥30.00</strong></dd>
                </dl>
              </li>
            </ul>
          </div>
          <!-- 猜您喜欢 end -->

        </div>

      </div>
      <!-- 导购左边区域 end -->

      <!-- 侧栏 网站首发 start-->
      <div class="sidebar fl ml10">
        <h2><strong>网站首发</strong></h2>
        <div class="sidebar_wrap">
          <dl class="first">
            <dt class="fl"><a href=""><img src="/images/viewsonic.jpg" alt="" /></a></dt>
            <dd><strong><a href="">ViewSonic优派N710 </a></strong> <em>首发</em></dd>
            <dd>苹果iphone 5免费送！攀高作为全球智能语音血压计领导品牌，新推出的黑金刚高端智能电子血压计，改变传统测量方式让血压测量迈入一体化时代。</dd>
          </dl>

          <dl>
            <dt class="fr"><a href=""><img src="/images/samsung.jpg" alt="" /></a></dt>
            <dd><strong><a href="">Samsung三星Galaxy</a></strong> <em>首发</em></dd>
            <dd>电视百科全书，360°无死角操控，感受智能新体验！双核CPU+双核GPU+MEMC运动防抖，58寸大屏打造全新视听盛宴！</dd>
          </dl>
        </div>


      </div>
      <!-- 侧栏 网站首发 end -->

    </div>
    <!-- 导购区域 end -->

    <div style="clear:both;"></div>

    <!--1F 电脑办公 start -->
    <div class="floor1 floor w1210 bc mt10">
      <!-- 1F 左侧 start -->
      <div class="floor_left fl">
        <!-- 商品分类信息 start-->
        <div class="cate fl">
          <h2>电脑、办公</h2>
          <div class="cate_wrap">
            <ul>
              <li><a href=""><b>.</b>外设产品</a></li>
              <li><a href=""><b>.</b>鼠标</a></li>
              <li><a href=""><b>.</b>笔记本</a></li>
              <li><a href=""><b>.</b>超极本</a></li>
              <li><a href=""><b>.</b>平板电脑</a></li>
              <li><a href=""><b>.</b>主板</a></li>
              <li><a href=""><b>.</b>显卡</a></li>
              <li><a href=""><b>.</b>打印机</a></li>
              <li><a href=""><b>.</b>一体机</a></li>
              <li><a href=""><b>.</b>投影机</a></li>
              <li><a href=""><b>.</b>路由器</a></li>
              <li><a href=""><b>.</b>网卡</a></li>
              <li><a href=""><b>.</b>交换机</a></li>
            </ul>
            <p><a href=""><img src="/images/notebook.jpg" alt="" /></a></p>
          </div>


        </div>
        <!-- 商品分类信息 end-->

        <!-- 商品列表信息 start-->
        <div class="goodslist fl">
          <h2>
            <span class="on">推荐商品</span>
            <span>电脑整机</span>
            <span>电脑配件</span>
            <span>办公打印</span>
            <span>网络产品</span>
          </h2>
          <div class="goodslist_wrap">
            <div>
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/hpG4.jpg" alt="" /></a></dt>
                    <dd><a href="">惠普G4-1332TX 14英寸笔</a></dd>
                    <dd><span>售价：</span> <strong>￥2999.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/thinkpad e420.jpg" alt="" /></a></dt>
                    <dd><a href="">ThinkPad E42014英寸笔..</a></dd>
                    <dd><span>售价：</span> <strong>￥4199.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                    <dd><a href="">宏碁AS4739-382G32Mnk</a></dd>
                    <dd><span>售价：</span> <strong>￥2799.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/samsung6800.jpg" alt="" /></a></dt>
                    <dd><a href="">三星Galaxy Tab P6800.</a></dd>
                    <dd><span>售价：</span> <strong>￥4699.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/lh531.jpg" alt="" /></a></dt>
                    <dd><a href="">富士通LH531 14.1英寸笔记</a></dd>
                    <dd><span>售价：</span> <strong>￥2189.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/qinghuax2.jpg" alt="" /></a></dt>
                    <dd><a href="">清华同方精锐X2笔记本 </a></dd>
                    <dd><span>售价：</span> <strong>￥2499.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/hpG4.jpg" alt="" /></a></dt>
                    <dd><a href="">惠普G4-1332TX 14英寸笔</a></dd>
                    <dd><span>售价：</span> <strong>￥2999.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/qinghuax2.jpg" alt="" /></a></dt>
                    <dd><a href="">清华同方精锐X2笔记本 </a></dd>
                    <dd><span>售价：</span> <strong>￥2499.00</strong></dd>
                  </dl>
                </li>

              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/thinkpad e420.jpg" alt="" /></a></dt>
                    <dd><a href="">ThinkPad E42014英寸笔..</a></dd>
                    <dd><span>售价：</span> <strong>￥4199.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                    <dd><a href="">宏碁AS4739-382G32Mnk</a></dd>
                    <dd><span>售价：</span> <strong>￥2799.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                    <dd><a href="">宏碁AS4739-382G32Mnk</a></dd>
                    <dd><span>售价：</span> <strong>￥2799.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/samsung6800.jpg" alt="" /></a></dt>
                    <dd><a href="">三星Galaxy Tab P6800.</a></dd>
                    <dd><span>售价：</span> <strong>￥4699.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/samsung6800.jpg" alt="" /></a></dt>
                    <dd><a href="">三星Galaxy Tab P6800.</a></dd>
                    <dd><span>售价：</span> <strong>￥4699.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/lh531.jpg" alt="" /></a></dt>
                    <dd><a href="">富士通LH531 14.1英寸笔记</a></dd>
                    <dd><span>售价：</span> <strong>￥2189.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- 商品列表信息 end-->
      </div>
      <!-- 1F 左侧 end -->

      <!-- 右侧 start -->
      <div class="sidebar fl ml10">
        <!-- 品牌旗舰店 start -->
        <div class="brand">
          <h2><a href="">更多品牌&nbsp;></a><strong>品牌旗舰店</strong></h2>
          <div class="sidebar_wrap">
            <ul>
              <li><a href=""><img src="/images/dell.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/acer.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/fujitsu.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/hp.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/lenove.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/samsung.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/dlink.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/seagate.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/intel.jpg" alt="" /></a></li>
            </ul>
          </div>
        </div>
        <!-- 品牌旗舰店 end -->

        <!-- 分类资讯 start -->
        <div class="info mt10">
          <h2><strong>分类资讯</strong></h2>
          <div class="sidebar_wrap">
            <ul>
              <li><a href=""><b>.</b>iphone 5s土豪金大量到货</a></li>
              <li><a href=""><b>.</b>三星note 3低价促销</a></li>
              <li><a href=""><b>.</b>thinkpad x240即将上市</a></li>
              <li><a href=""><b>.</b>双十一来临，众商家血拼</a></li>
            </ul>
          </div>

        </div>
        <!-- 分类资讯 end -->

        <!-- 广告 start -->
        <div class="ads mt10">
          <a href=""><img src="/images/canon.jpg" alt="" /></a>
        </div>
        <!-- 广告 end -->
      </div>
      <!-- 右侧 end -->

    </div>
    <!--1F 电脑办公 start -->

      <!--1F 电脑办公 start -->
    <div class="floor1 floor w1210 bc mt10">
      <!-- 1F 左侧 start -->
      <div class="floor_left fl">
        <!-- 商品分类信息 start-->
        <div class="cate fl">
          <h2>电脑、办公</h2>
          <div class="cate_wrap">
            <ul>
              <li><a href=""><b>.</b>外设产品</a></li>
              <li><a href=""><b>.</b>鼠标</a></li>
              <li><a href=""><b>.</b>笔记本</a></li>
              <li><a href=""><b>.</b>超极本</a></li>
              <li><a href=""><b>.</b>平板电脑</a></li>
              <li><a href=""><b>.</b>主板</a></li>
              <li><a href=""><b>.</b>显卡</a></li>
              <li><a href=""><b>.</b>打印机</a></li>
              <li><a href=""><b>.</b>一体机</a></li>
              <li><a href=""><b>.</b>投影机</a></li>
              <li><a href=""><b>.</b>路由器</a></li>
              <li><a href=""><b>.</b>网卡</a></li>
              <li><a href=""><b>.</b>交换机</a></li>
            </ul>
            <p><a href=""><img src="/images/notebook.jpg" alt="" /></a></p>
          </div>


        </div>
        <!-- 商品分类信息 end-->

        <!-- 商品列表信息 start-->
        <div class="goodslist fl">
          <h2>
            <span class="on">推荐商品</span>
            <span>电脑整机</span>
            <span>电脑配件</span>
            <span>办公打印</span>
            <span>网络产品</span>
          </h2>
          <div class="goodslist_wrap">
            <div>
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/hpG4.jpg" alt="" /></a></dt>
                    <dd><a href="">惠普G4-1332TX 14英寸笔</a></dd>
                    <dd><span>售价：</span> <strong>￥2999.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/thinkpad e420.jpg" alt="" /></a></dt>
                    <dd><a href="">ThinkPad E42014英寸笔..</a></dd>
                    <dd><span>售价：</span> <strong>￥4199.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                    <dd><a href="">宏碁AS4739-382G32Mnk</a></dd>
                    <dd><span>售价：</span> <strong>￥2799.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/samsung6800.jpg" alt="" /></a></dt>
                    <dd><a href="">三星Galaxy Tab P6800.</a></dd>
                    <dd><span>售价：</span> <strong>￥4699.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/lh531.jpg" alt="" /></a></dt>
                    <dd><a href="">富士通LH531 14.1英寸笔记</a></dd>
                    <dd><span>售价：</span> <strong>￥2189.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/qinghuax2.jpg" alt="" /></a></dt>
                    <dd><a href="">清华同方精锐X2笔记本 </a></dd>
                    <dd><span>售价：</span> <strong>￥2499.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/hpG4.jpg" alt="" /></a></dt>
                    <dd><a href="">惠普G4-1332TX 14英寸笔</a></dd>
                    <dd><span>售价：</span> <strong>￥2999.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/qinghuax2.jpg" alt="" /></a></dt>
                    <dd><a href="">清华同方精锐X2笔记本 </a></dd>
                    <dd><span>售价：</span> <strong>￥2499.00</strong></dd>
                  </dl>
                </li>

              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/thinkpad e420.jpg" alt="" /></a></dt>
                    <dd><a href="">ThinkPad E42014英寸笔..</a></dd>
                    <dd><span>售价：</span> <strong>￥4199.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                    <dd><a href="">宏碁AS4739-382G32Mnk</a></dd>
                    <dd><span>售价：</span> <strong>￥2799.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/acer4739.jpg" alt="" /></a></dt>
                    <dd><a href="">宏碁AS4739-382G32Mnk</a></dd>
                    <dd><span>售价：</span> <strong>￥2799.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/samsung6800.jpg" alt="" /></a></dt>
                    <dd><a href="">三星Galaxy Tab P6800.</a></dd>
                    <dd><span>售价：</span> <strong>￥4699.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

            <div class="none">
              <ul>
                <li>
                  <dl>
                    <dt><a href=""><img src="/images/samsung6800.jpg" alt="" /></a></dt>
                    <dd><a href="">三星Galaxy Tab P6800.</a></dd>
                    <dd><span>售价：</span> <strong>￥4699.00</strong></dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt><a href=""><img src="/images/lh531.jpg" alt="" /></a></dt>
                    <dd><a href="">富士通LH531 14.1英寸笔记</a></dd>
                    <dd><span>售价：</span> <strong>￥2189.00</strong></dd>
                  </dl>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- 商品列表信息 end-->
      </div>
      <!-- 1F 左侧 end -->

      <!-- 右侧 start -->
      <div class="sidebar fl ml10">
        <!-- 品牌旗舰店 start -->
        <div class="brand">
          <h2><a href="">更多品牌&nbsp;></a><strong>品牌旗舰店</strong></h2>
          <div class="sidebar_wrap">
            <ul>
              <li><a href=""><img src="/images/dell.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/acer.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/fujitsu.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/hp.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/lenove.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/samsung.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/dlink.gif" alt="" /></a></li>
              <li><a href=""><img src="/images/seagate.jpg" alt="" /></a></li>
              <li><a href=""><img src="/images/intel.jpg" alt="" /></a></li>
            </ul>
          </div>
        </div>
        <!-- 品牌旗舰店 end -->

        <!-- 分类资讯 start -->
        <div class="info mt10">
          <h2><strong>分类资讯</strong></h2>
          <div class="sidebar_wrap">
            <ul>
              <li><a href=""><b>.</b>iphone 5s土豪金大量到货</a></li>
              <li><a href=""><b>.</b>三星note 3低价促销</a></li>
              <li><a href=""><b>.</b>thinkpad x240即将上市</a></li>
              <li><a href=""><b>.</b>双十一来临，众商家血拼</a></li>
            </ul>
          </div>

        </div>
        <!-- 分类资讯 end -->

        <!-- 广告 start -->
        <div class="ads mt10">
          <a href=""><img src="/images/canon.jpg" alt="" /></a>
        </div>
        <!-- 广告 end -->
      </div>
      <!-- 右侧 end -->

    </div>
    <!--1F 电脑办公 start -->


    <div style="clear:both;"></div>

    <!-- 底部导航 start -->
    <BottomNav></BottomNav>
    <!-- 底部导航 end -->

    <div style="clear:both;"></div>
    <!-- 底部版权 start -->
    <Footer/>
    <!-- 底部版权 end -->

  </div>
</template>

<script>
export default {
  head: {
    title: '首页',
    link: [
      {rel:'stylesheet',href: '/style/index.css'},
      {rel:'stylesheet',href: '/style/bottomnav.css'},
    ],
    script: [
      { type: 'text/javascript', src: '/js/header.js' },
      { type: 'text/javascript', src: '/js/index.js' }
    ]
  },
  async asyncData( context ) {
    let newsVo = {
      current: 1,
      size: 8,
      sortWay: 'desc'
    }
    // 发送ajax
    //let { data: newsBaseResult } = await context.$requestServer.findNews( newsVo )
    let ajax1 = context.$requestServer.findNews( newsVo )
    let ajax2 = context.$requestServer.findCategorys( )
    let [{ data: newsBaseResult }, { data: categoryBaseResult }] = await Promise.all([ajax1, ajax2])
    // 返回结果
    return {
      newsList: newsBaseResult.data.records,
      categoryList: categoryBaseResult.data
    }
  }
}
</script>

<style>
  .news li a {
    display: block; /* 当前元素本身是inline的，因此需要设置成block模式 */
    white-space: nowrap; /* 因为设置了block，所以需要设置nowrap来确保不换行 */
    overflow: hidden; /* 超出隐藏结合width使用截取采用效果*/
    text-overflow: ellipsis; /* 本功能的主要功臣，超出部分的剪裁方式 */
    -o-text-overflow: ellipsis; /* 特定浏览器前缀 */
    text-decoration: none; /* 无用 */
  }

</style>