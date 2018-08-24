<style lang="less">
    @import "../../src/styles/index.less";
    @import "../resources/css/index/index.less";
    @import "../resources/css/popup/popup.less";
    /*弹窗*/
	
	.zuidalage{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;}
	.lagetop{position: absolute;top: 0px;left: 0px;right: 18px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
	.large{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;min-width: 1200px;overflow: auto;background-color: white;}
	.lagebottom{background-color: #1d1d1d;padding: 0px;}
	.banner{width:100%;height: auto;}
	.banner img{
		width: 100%;
		max-height: 610px;
		height: auto;
	}
	.laingx{margin-top: 72px;max-height: 234px;width: 100%;min-width: 1200px;}
	.quanian{font-size: 30px;color: #333333;text-align: center;line-height: 30px;}
	.tgzsfw{font-size: 22px;color: #333333;text-align: center;line-height: 22px;margin-top: 20px;}
	.kjdz{justify-content: center;}
	.kjdz img{width: 80px;height: 80px;}
	.ggdis{display: flex;}
	.gexgxq{margin-left: 16px;}
	.kjdzdier{width: 1310px;justify-content: center;margin-top: 54px;}
	.kjdzdier p{margin-left: 58px;}
	.kjdzdier p:first-child{margin-left: 0px;}
	.gskh{width: 196px;font-size: 14px;color: #959595;line-height: 19px;margin-top: 14px;}
	.kjwenzi{font-size: 18px;line-height: 18px;color: #333333;}
	.remlp{height: auto;margin-top: 76px;background-color: #f2f4f5;}
	.remlpiwenzi{margin-top: 52px;width: 1310px;}
	.remloupziti{font-size: 30px;color: #333333;line-height: 30px;}
	.morremlpip{font-size: 14px;color: #666666;line-height: 14px;justify-content: flex-end;}
	.jvremlpu{font-size: 18px;color: #666666;line-height: 18px;}
	.lpimglager{margin-top: 34px;width: 1310px;display: flex;justify-content: space-between;}
	/*.lpimgdierss p{margin-right: 46px;}
	.lpimgdierss p:nth-child(4){margin-right: 0;}*/
	.remlpidisan{justify-content: center;}
	.lping{width: 292px;height: 220px;}
	.lping img{width: 292px;height: 220px;}
	.remmlpdenneirong{padding-bottom: 72px;}
	.lpmignchlarge{padding-left: 22px;display: inline-block;background-color: white;width: 100%;padding-bottom: 16px;}
	.lpmignch{font-size: 22px;color: #333333;line-height: 48px;}
	.cbdhxqq{font-size: 14px;color: #666666;line-height: 14px;}
	.xysx{width: 100%;min-width: 1200px;max-height: 524px;}
	.yzhans{background-color: #f2f4f5;padding-bottom: 112px;}
	.yizhabang{margin-top: 50px;font-size: 30px;color: #333333;line-height: 30px;width: 1310px;}
	.caigou{margin-top: 20px;color: #666666;line-height: 18px;font-size: 18px;width: 1310px;}
	.gozhuce{margin-top: 32px;width: 1310px;}
	.gozhuce p{margin-left: 44px;}
	.gozhuce p:first-child{margin-left: 0px;}
	.gszcimgla{height:478px;width:408px;background: url(../resources/images/shouye/zhusit.png) no-repeat;background-size: 100% auto;}
	.bangjv{background-color: #ffffff;height:478px;width:408px;padding: 30px 18px;}
	.bgjjimg{width: 366px;height: 186px;background: url(../resources/images/shouye/bgjj.png) no-repeat;background-size: 100% auto;}
	.bgypimg{width:170px;height:210px;background: url(../resources/images/shouye/bguyp.png) no-repeat;background-size: 100% auto;}
	.kgbximg{width:170px;height:210px;margin-left:25px;background: url(../resources/images/shouye/kdbx.png) no-repeat;background-size: 100% auto;}
	.gngypspa{margin-top: 24px;}
	.lzfu{width: 366px;height: 186px;background: url(../resources/images/shouye/lzfw.png) no-repeat;background-size: 100% auto;}
	.qyys{width:170px;height:210px;background: url(../resources/images/shouye/qyys.png) no-repeat;background-size: 100% auto;}
	.qybj{width:170px;height:210px;margin-left:25px;background: url(../resources/images/shouye/qybj.png) no-repeat;background-size: 100% auto;}
	.cyy{padding-top: 125px;padding-bottom: 136px;}
	.chyimg{width:612px;height:348px;background: url(../resources/images/shouye/cxy.png) no-repeat;background-size: 100% auto}
	.gwanjiawen{margin-left: 110px;display:flex;align-items: center;}
	.gjfuw{font-size: 40px;color: #f15a5a;line-height: 40px;}
	.lsfjxjfw{font-size: 24px;color: #333333;line-height: 24px;margin-top: 18px;}
	.lswzif{font-size: 14px;color: #959595;line-height: 14px;width: 438px;margin-top: 20px;}
	.ckgd{font-size: 14px;color: #f15a5a;line-height: 14px;margin-top: 20px;}
	
	

</style>

<template>
	<div class="zuidalage">
		<!--公共的头部-->
		<div class="lagetop">
			<Footertop></Footertop>
		</div>
		<!---->
		<div class="large">
	    	<div class="banner">
				<swiper :options="swiperOption">
					<swiper-slide v-for="idx in imgdata">
						<img :src="$api_jtimg + idx" alt="">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-prev">></div>
	    			<div class="swiper-button-next"><</div>
				</swiper>
			</div>
			<div class="laingx">
				<div class="quanian">领先的全面企业服务提供商</div>
				<div class="tgzsfw">提供专属服务</div>
				<div class="kjdz ggdis">
					<div class="kjdzdier ggdis">
						<p class="ggdis">
							<span id="">
								<img src="../resources/images/shouye/kj.png"/>
							</span>
							<span class="gexgxq">
								<span class="ggdis kjwenzi">空间定制</span>
								<span class="gskh ggdis">满足客户个性化需求，提供可 定制的楼盘项目、租售房源、 根据您的办公、投资需求精准 核算，保证利益最大化。</span>
							</span>
						</p>
						<p class="ggdis">
							<span id="">
								<img src="../resources/images/shouye/fwdz.png"/>
							</span>
							<span class="gexgxq">
								<span class="ggdis kjwenzi">服务定制</span>
								<span class="gskh ggdis">提供企业形象和供需展示平台 解决企业进阶中对资金、市场 人才、风险控制的需求，给予 投资平台以及财法税配套支持。</span>
							</span>
						</p>
						<p class="ggdis">
							<span id="">
								<img src="../resources/images/shouye/hy.png"/>
							</span>
							<span class="gexgxq">
								<span class="ggdis kjwenzi">会员定制</span>
								<span class="gskh ggdis">遴选优质办公商品及服务，为 会员企业提供高性价比的采购 服务；企业互联打通企业间的 通道，促进企业互通互助。</span>
							</span>
						</p>
						<p class="ggdis">
							<span id="">
								<img src="../resources/images/shouye/zx.png"/>
							</span>
							<span class="gexgxq">
								<span class="ggdis kjwenzi">装修定制</span>
								<span class="gskh ggdis">设计团队量身定制设计方案， 满足您的一切需求；高性价比 办公家具及装饰节省您的每一 分钱，为您打造专属办公空间。</span>
							</span>
						</p>
					</div>
				</div>
				<div class="remlp">
					<div class="ggdis remlpidisan">
						<div class="remlpiwenzi">
							<span class="remloupziti ggdis">热门楼盘</span>
							<span class="morremlpip ggdis">更多热门楼盘</span>
							<span class="jvremlpu ggdis">聚热门楼盘  享优质配套</span>
						</div>
					</div>
					<div class="ggdis remlpidisan remmlpdenneirong">
						<div class="lpimglager ggdis">
							<div class="lpimgdierss" v-for="item in lpdata">
								<p>
									<span class="lping ggdis"><img :src="$api_img_url + item.pic"/></span>
									<span class="lpmignchlarge">
										<span class="lpmignch ggdis">{{item.topic}}</span>
										<span class="cbdhxqq">CBD核心区，高性价比商业之选</span>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="xysx"><img src="http://omc.urskongjian.com:81/guangwan/qxsq.png"/></div>
				<div class="yzhans">
					<div class="kjdz ggdis">
						<div class="yizhabang">一站式企业办公服务</div>
					</div>
					<div class="kjdz ggdis">
						<div class="caigou">采购省时 省心 更无忧</div>
					</div>
					<div class="kjdz ggdis">
						<div class="gozhuce ggdis">
							<p class="gszcimgla">
								<span class="gszcimg" @click="diajissc"></span>
								<span class="zszximg" @click="diajissc"></span>
							</p>
							<p class="bangjv">
								<span class="bgjjimg ggdis" @click="diajissc"></span>
								<span class="gngypspa ggdis">
									<span class="bgypimg ggdis" @click="diajissc"></span>
									<span class="kgbximg ggdis" @click="diajissc"></span>
								</span>
							</p>
							<p class="bangjv">
								<span class="lzfu ggdis" @click="diajissc"></span>
								<span class="gngypspa ggdis">
									<span class="qyys ggdis" @click="diajissc"></span>
									<span class="qybj ggdis" @click="diajissc"></span>
								</span>
							</p>
						</div>
					</div>
				</div>
				<div class="cyy">
					<div class="kjdz ggdis">
						<p class="chyimg"></p>
						<p class="gwanjiawen">
							<span class="">
								<span class="gjfuw ggdis">管家服务</span>
								<span class="lsfjxjfw ggdis">亮狮管家“星”级服务</span>
								<span class="lswzif ggdis">亮狮网自成立以来一直致力于为商业地产投资者、持有者和运营者提供 全新的空间一站式管家服务，包括提供空间招商、物业对接、装饰装修亮狮网自成立以来一直致力于为商业地产投资者、持有者和运营者提供 全新的空间一站式管家服务，包括提供空间招商、物业对接、装饰装修</span>
								<span class="ckgd ggdis">查看更多</span>
							</span>
							
						</p>
					</div>
				</div>
				
				<!--公共的底部-->
				<div class="lagebottom">
					<Footerbottom></Footerbottom>
				</div>
				
			</div>
	    </div>
	</div>
    
</template>
<script>
	import Footertop from './header.vue'
	import Footerbottom from './dibubotom.vue'
    export default {
    	components: {
		    Footertop,
		    Footerbottom
		 },
        data () {
            return {
				swiperOption: {//轮播图配置
					pagination: '.swiper-pagination',//
					paginationClickable: true,//
					autoplay: {
					    delay: 3000,
					    stopOnLastSlide: false,
					    disableOnInteraction: true
				   	},
					autoplayDisableOnInteraction: false,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets'
					},
					parallax : true,
				},
				imgdata:["shiye1.jpg","shiye2.jpg","shiye3.jpg","shiye4.jpg","shiye5.jpg"],
				lpdata:[],
			}
        },
		created(){

		},
        methods: {
			min(){
			 	this.$http.post(
			 	/*"http://116.62.68.26:8080/yhcms/web/jcsj/getHotBuilding.do",*/
          		this.$api_ysapi + "/yhcms/web/jcsj/getHotBuilding.do",
				).then(function (res) {
			        var result = JSON.parse(res.bodyText);
			        /*Indicator.close();*/
			        if (result.success){
			            this.lpdata = result.data;
			            /*_this.floors = data.zglc || '暂无数据';
			            _this.topic = result.data[0].topic;*/
			        }
		        })
			},
			diajissc(){
			 	window.open("http://beta.ursbest.com");
			}
        },

        mounted: function(){
        	//滚动条滚动的时候，改变底色
        	$(".large").scroll(function(){
        		var top_height = $(".large").scrollTop();
        		if (top_height > 60){
	                $('.lagetop').css("background-color","#1d1d1d");
	            }
	            if (top_height < 60){
	                $('.lagetop').css("background","none");
	            }
        	});
        	this.min();
        }
    }
</script>
