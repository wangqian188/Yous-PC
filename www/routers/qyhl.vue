<style lang="less">
/*页面底部的css样式*/
	/* 当展现页面的宽度大于1000px且小于1400px时，的样式。 */
	@media screen and (min-width: 1000px) and (max-width: 1400px) {
		.lagetop{position: absolute;top: 0px;left: 0px;right: 0px;height: 52px;z-index: 12;}/*background-color: #1d1d1d;*/
		.qyhulian{width: 959px;}
		.lttb{width:121px;height:121px;background: url(../resources/images/qyhl/zuyiimg.png) no-repeat;background-size: 100% auto;}
		.zsyh{font-size: 17px;line-height: 17px;color: #333333;margin: 13px 0px 8px;}
		.zxsqy{width: 183px;font-size: 14px;line-height: 22px;color: #959595;}
		.qyzhusyhu p:last-child{margin-left: 24px;}
		.pptg{margin-top: 75px;margin-bottom: 63px;}
		.retou{width:121px;height:121px;background: url(../resources/images/qyhl/tentou.png) no-repeat;background-size: 100% auto;}
		.zhext{width:121px;height:121px;background: url(../resources/images/qyhl/zexiantu.png) no-repeat;background-size: 100% auto;}
		.tubiao{width:121px;height:121px;background: url(../resources/images/qyhl/texiangb.png) no-repeat;background-size: 100% auto;}
	}
	/* 当展现页面的宽度大于1400px时的样式。 */
	@media screen and (min-width: 1400px){
		.lagetop{position: absolute;top: 0px;left: 0px;right: 0px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
		.qyhulian{width: 1108px;}
		.lttb{width:139px;height:139px;background: url(../resources/images/qyhl/zuyiimg.png) no-repeat;background-size: 100% auto;}
		.zsyh{font-size: 20px;line-height: 20px;color: #333333;margin: 15px 0px 10px;}
		.zxsqy{width: 210px;font-size: 16px;line-height: 26px;color: #959595;}
		.qyzhusyhu p:last-child{margin-left: 28px;}
		.pptg{margin-top: 86px;margin-bottom: 72px;}
		.retou{width:139px;height:139px;background: url(../resources/images/qyhl/tentou.png) no-repeat;background-size: 100% auto;}
		.zhext{width:139px;height:139px;background: url(../resources/images/qyhl/zexiantu.png) no-repeat;background-size: 100% auto;}
		.tubiao{width:139px;height:139px;background: url(../resources/images/qyhl/texiangb.png) no-repeat;background-size: 100% auto;}
	}
	
	
	.zuidalage{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;}
	
	.large{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;min-width: 1200px;overflow: auto;background-color: white;}
	.qyhlimg{width: 100%;}
	.gggjdis{display: flex;}
	.gxlsdiscenrt{justify-content: center;}
	
	.diyigediv{justify-content: space-between;width: 100%;}
	
</style>

<template>
	<div class="zuidalage">
		<!--公共的头部-->
		<div class="lagetop">
			<Footertop></Footertop>
		</div>
		<!---->
		<div class="large">
			<div class="qyhlimg">
				<img src="../resources/images/qyhl/qyhlban.png"/>
			</div>
			<div class="qyhlimg">
				<img src="../resources/images/qyhl/hyfl.jpg"/>
			</div>
			<div class="gggjdis gxlsdiscenrt">
				<div class="qyhulian gggjdis">
					<div class="gggjdis diyigediv">
						<div class="qyzhusyhu gggjdis">
							<p class="lttb"></p>
							<p>
								<span class="gggjdis zsyh">专属优惠</span>
								<span class="gggjdis zxsqy">专属享受企业优惠套餐，详情请拨打电话或在微信公众号留言咨询</span>
							</p>
						</div>
						<div class="qyzhusyhu gggjdis">
							<p class="retou"></p>
							<p>
								<span class="gggjdis zsyh">专业管家</span>
								<span class="gggjdis zxsqy">将为您提供全方位服务，专业的企业管家为您处理办公空间烦恼</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="gggjdis gxlsdiscenrt pptg">
				<div class="qyhulian gggjdis">
					<div class="gggjdis diyigediv">
						<div class="qyzhusyhu gggjdis">
							<p class="zhext"></p>
							<p>
								<span class="gggjdis zsyh">品牌推广</span>
								<span class="gggjdis zxsqy">在我们的app内为您的企业建立专属页面，为您提高企业知名度</span>
							</p>
						</div>
						<div class="qyzhusyhu gggjdis">
							<p class="tubiao"></p>
							<p>
								<span class="gggjdis zsyh">需求发布</span>
								<span class="gggjdis zxsqy">可以将闲置资源和需求发布到app上进行免费展示</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="qyhlimg">
				<img src="../resources/images/qyhl/jrhylc.jpg"/>
			</div>
			
			<!--公共的底部-->
			<div class="lagebottom">
				<Footerbottom></Footerbottom>
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

        	}
        },
		created(){

		},
        methods: {
			
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
        }
    }
</script>
