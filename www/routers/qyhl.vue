<style lang="less">
/*页面底部的css样式*/
	/* 当展现页面的宽度大于1000px且小于1400px时，的样式。 */
	@media screen and (min-width: 1000px) and (max-width: 1400px) {
		.lagetop{position: absolute;top: 0px;left: 0px;right: 0px;height: 52px;z-index: 12;}/*background-color: #1d1d1d;*/
		.qyhl{margin-top: 63px;}
		.biaotwid{width: 1150px;}
		.beidi{height: 29px;background-color: #282828;width: 7px;border-radius: 3px;}
		.hyhd{font-size: 26px;line-height: 29px;color: #000000;margin-left: 12px;}
		.rndsh{font-size: 15px;line-height: 21px;color: #323232;height: 21px;margin-left: 24px;}
		.ingyhhdne{margin-top: 29px;flex-wrap: wrap;justify-content: space-between;margin-bottom: 61px;}
		.ingyhhdne p:nth-child(1),.ingyhhdne p:nth-child(2),.ingyhhdne p:nth-child(3),.ingyhhdne p:nth-child(4){margin-bottom: 42px;}
		.lsfyxwid{width: 268px;height: 195px;}
		.hlwyy{height: 50px;line-height: 50px;justify-content: center;}
		.chweyhz{width: 100%;}
		.hyqy{margin-top: 63px;}
		.rjwdtd{width: 1213px;margin-top: 9px;margin-bottom: 44px;}
	}
	/* 当展现页面的宽度大于1400px时的样式。 */
	@media screen and (min-width: 1400px){
		.lagetop{position: absolute;top: 0px;left: 0px;right: 0px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
		.qyhl{margin-top: 72px;}
		.biaotwid{width: 1310px;}
		.beidi{height: 34px;background-color: #282828;width: 8px;border-radius: 3px;}
		.hyhd{font-size: 30px;line-height: 34px;color: #000000;margin-left: 14px;}
		.rndsh{font-size: 18px;line-height: 24px;color: #323232;height: 24px;margin-left: 28px;}
		.ingyhhdne{margin-top: 34px;flex-wrap: wrap;justify-content: space-between;margin-bottom: 70px;}
		.ingyhhdne p:nth-child(1),.ingyhhdne p:nth-child(2),.ingyhhdne p:nth-child(3),.ingyhhdne p:nth-child(4){margin-bottom: 48px;}
		.lsfyxwid{width: 307px;height: 223px;}
		.hlwyy{height: 58px;line-height: 58px;justify-content: center;}
		.chweyhz{width: 100%;}
		.hyqy{margin-top: 72px;}
		.rjwdtd{width: 1384px;margin-top: 10px;margin-bottom: 50px;}
	}
	
	
	.ffdc{align-items: flex-end;}
	
	.ingyhhdne p{background-color: #f8f8f8;}
	
	.lsfyx1{background: url(../resources/images/qyhl/zqjl1.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx2{background: url(../resources/images/qyhl/zqjl2.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx3{background: url(../resources/images/qyhl/zqjl3.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx4{background: url(../resources/images/qyhl/zqjl4.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx5{background: url(../resources/images/qyhl/zqjl5.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx6{background: url(../resources/images/qyhl/zqjl6.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx7{background: url(../resources/images/qyhl/zqjl7.jpg) no-repeat;background-size: 100% auto;}
	.lsfyx8{background: url(../resources/images/qyhl/zqjl8.jpg) no-repeat;background-size: 100% auto;}
	
	
	
	
	
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
		<!--客服窗口-->
		<Kefu></Kefu>
		<!---->
		<div class="large">
			<div class="qyhlimg">
				<img src="../resources/images/qyhl/qyhlban.png"/>
			</div>
			<div class="qyhlimg qyhl">
				<div class="gggjdis gxlsdiscenrt">
					<div class="biaotwid gggjdis ffdc">
						<span class="beidi gggjdis"></span>
						<span class="gggjdis hyhd">会员活动</span>
						<span class="gggjdis rndsh">让您的生活丰富多彩</span>
					</div>
				</div>
			</div>
			
			<div class="gggjdis gxlsdiscenrt">
				<div class="biaotwid gggjdis">
					<div class="ingyhhdne gggjdis">
						<p>
							<span class="lsfyx1 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx2 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx3 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx4 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx5 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx6 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx7 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
						<p>
							<span class="lsfyx8 gggjdis lsfyxwid"></span>
							<span class="hlwyy gggjdis">亮狮商学院：互联网运营</span>
						</p>
					</div>
				</div>
			</div>
			<div class="chweyhz">
				<img src="../resources/images/qyhl/zxzbz.jpg"/>
			</div>
			<div class="gggjdis gxlsdiscenrt">
				<div class="biaotwid gggjdis">
					<div class="hyqy gggjdis ffdc">
						<span class="beidi gggjdis"></span>
						<span class="gggjdis hyhd">会员企业</span>
						<span class="gggjdis rndsh">诚邀您成为我们的一员</span>
					</div>
				</div>
			</div>
			<div class="gggjdis gxlsdiscenrt">
				<div class="rjwdtd gggjdis">
					<img src="../resources/images/qyhl/rjgs.png"/>
				</div>
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
	import Kefu from './kefu.vue'
	
    export default {
    	components: {
		    Footertop,
		    Footerbottom,
		    Kefu
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
