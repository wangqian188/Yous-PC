<style lang="less">
/*	页面头部的css样式*/
	/* 当展现页面的宽度大于1000px且小于1400px时，的样式。 */
	@media screen and (min-width: 1000px) and (max-width: 1400px) {
		.topbu_box{
			position: absolute;
			z-index: 99999;
			width: 100%;
			height: 52px;
			min-width: 1200px;
			width: 1150px;
		}
		
		.toplswimg{width: 113px;height: 38px;background: url(../resources/images/shouye/logo.png) no-repeat;background-size: 100% auto;}
		.shouye{font-size: 14px;line-height:14px;color: #ffffff;width: 31px;}
		.xzlcz{width: 78px;font-size: 14px;line-height:14px;color: #ffffff;}
		.fwsc{width: 63px;font-size: 14px;line-height:14px;color: #ffffff;}
		.weixins{width: 20px;height: 34px;background: url(../resources/images/shouye/weixi.png) no-repeat;background-size: 100% auto;}
		.appimg{width: 14px;height: 33px;background: url(../resources/images/shouye/app.png) no-repeat;background-size: 100% auto;}
		.wemaappimg{height: 26px;}
		.ropxsl span{margin-left: 26px;}
		.topbu p:last-child{display: flex;padding-top: 18px;}
		.topbu p:first-child{padding-top: 5px;}
		.weimacss{width: 133px;height: 164px;position: absolute;top: 53px;right: -36px;display: none;}
		#triangle-up{width: 0;height: 0;border-left: 9px solid transparent;border-right: 9px solid transparent;border-bottom: 14px solid #ffffff;margin-left: 86px;}
		.weimaing{width:100%;height: 119px;background: url(../resources/images/ywzhuweit/erwmaapp.png) no-repeat;background-size: auto 100%;background-color: #ffffff;}
		.weerimalae{padding: 7px;background-color: #ffffff;padding-bottom: 2.5px;}
		.fmxaapp{background-color: #ffffff;font-size: 12px;color: #333333;padding-bottom: 6px;text-align: center;}
		.weilaswcss{width: 133px;height: 164px;position: absolute;top: 52px;right: 14px;display: none;}
		.lasdwamass{width:100%;height: 119px;background: url(../resources/images/ywzhuweit/lswwem.jpg) no-repeat;background-size: auto 100%;background-color: #ffffff;}
	}
	/* 当展现页面的宽度大于1400px时的样式。 */
	@media screen and (min-width: 1400px){
		.topbu_box{
			position: absolute;
			z-index: 99999;
			width: 100%;
			height: 60px;
			min-width: 1200px;
			width: 1310px;
		}
		.toplswimg{width: 130px;height: 44px;background: url(../resources/images/shouye/logo.png) no-repeat;background-size: 100% auto;}
		.shouye{font-size: 16px;line-height:16px;color: #ffffff;width: 36px;}
		.xzlcz{width: 90px;font-size: 16px;line-height:16px;color: #ffffff;}
		.fwsc{width: 72px;font-size: 16px;line-height:16px;color: #ffffff;}
		.weixins{width: 22px;height: 38px;background: url(../resources/images/shouye/weixi.png) no-repeat;background-size: 100% auto;}
		.appimg{width: 16px;height: 38px;background: url(../resources/images/shouye/app.png) no-repeat;background-size: 100% auto;}
		.wemaappimg{height: 38px;}
		.ropxsl span{margin-left: 30px;}
		.topbu p:last-child{display: flex;padding-top: 20px;}
		.topbu p:first-child{padding-top: 6px;}
		.weimacss{width: 152px;height: 188px;position: absolute;top: 60px;right: -36px;display: none;}
		#triangle-up{width: 0;height: 0;border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom: 16px solid #ffffff;margin-left: 98px;}
		.weimaing{width:100%;height: 136px;background: url(../resources/images/ywzhuweit/erwmaapp.png) no-repeat;background-size: auto 100%;background-color: #ffffff;}
		.weerimalae{padding: 8px;background-color: #ffffff;padding-bottom: 3px;}
		.fmxaapp{background-color: #ffffff;font-size: 13px;color: #333333;padding-bottom: 6px;text-align: center;}
		.weilaswcss{width: 152px;height: 188px;position: absolute;top: 60px;right: 14px;display: none;}
		.lasdwamass{width:100%;height: 136px;background: url(../resources/images/ywzhuweit/lswwem.jpg) no-repeat;background-size: auto 100%;background-color: #ffffff;}
	}
	.pointer{cursor:pointer;}/*鼠标变成小手*/
	.topbu{display: flex;justify-content: space-between;}
	.topgudis{display: flex;}
	.topbu{justify-content: space-between;}
	
	.dobubk{border-bottom: 1px solid #ffffff;}
	.dobubkdianji{border-bottom: 1px solid #ffffff;}
	
	.ropxsl span:first-child{margin-left: 0px;}
	
</style>

<template>
    <div class="topbu_box">
    	<div class="topbu topgudis">
    		<p>
    			<span @click="diazshoiye" class="toplswimg topgudis pointer"></span>
    		</p>
    		<p class="ropxsl" @mouseout="lswzdout">
    			<span class="wemaappimg dobubkdianji pointer" @click="diazshoiye" @mouseover="tjiacsbot($event)">
    				<span class="shouye topgudis">首页</span>
    			</span>
    			<span class="wemaappimg pointer" @click="xiezilou" @mouseover="tjiacsbot($event)">
    				<span class="xzlcz topgudis">写字楼出租</span>
    			</span>
    			<span class="wemaappimg pointer" @click="diafwsc" @mouseover="tjiacsbot($event)">
    				<span class="fwsc topgudis">服务商城</span>
    			</span>
    			<span class="wemaappimg pointer" @click="yezhuweitui" @mouseover="tjiacsbot($event)">
    				<span class="fwsc topgudis">业主委托</span>
    			</span>
    			<span class="wemaappimg pointer" @click="diaqyhl" @mouseover="tjiacsbot($event)">
    				<span class="fwsc topgudis">企业互联</span>
    			</span>
    			<span class="wemaappimg pointer" @click="diagjfwu" @mouseover="tjiacsbot($event)">
    				<span class="fwsc topgudis">管家服务</span>
    			</span>
    			<span class="wemaappimg pointer" @click="gxlswa" @mouseover="tjiacsbot($event)">
    				<span class="fwsc topgudis">关于亮狮</span>
    			</span>
    			<span class="wemaappimg pointer" @mouseover="laswwem" @mouseout="laswwemout">
    				<span class="weixins topgudis"></span>
    			</span>
    			<span class="wemaappimg pointer" @mouseover="lsapp" @mouseout="laappout">
    				<span class="appimg topgudis"></span>
    			</span>
    		</p>
    	</div>
    	<div class="weimacss">
    		<div id="triangle-up"></div>
    		<div class="weerimalae">
    			<div class="weimaing"></div>
    		</div>
    		<div class="fmxaapp">扫码下载亮狮APP</div>
    	</div>
    	<div class="weilaswcss">
    		<div id="triangle-up"></div>
    		<div class="weerimalae">
    			<div class="lasdwamass"></div>
    		</div>
    		<div class="fmxaapp">扫码关注亮狮公众号</div>
    	</div>
    </div>
</template>
<script>
    export default {
        data () {
        	return {

        	}
        },
		created(){

		},
        methods: {
			diazshoiye(){
				this.$router.push({ path: '/',query:{type:1}});
			},
			xiezilou(){
				this.$router.push({ path: '/list',query:{type:2}});
			},
			diafwsc(){
				window.open("http://beta.ursbest.com");
			},
			yezhuweitui(){
				this.$router.push({ path: '/yezhuweit',query:{type:4}});
			},
			
			lswzdout(){
				var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					$(".wemaappimg:eq("+i+")").removeClass("dobubk");
				}
			},
			diaqyhl(){
				this.$router.push({ path: '/qyhl',query:{type:5}});
			},
			diagjfwu(){
				this.$router.push({ path: '/gjfw',query:{type:6}});
			},
			gxlswa(){
				this.$router.push({ path: '/gxls',query:{type:7}});
			},
			lsapp(){
				$(".weimacss").css("display","block")
			},
			laappout(){
				$(".weimacss").css("display","none")
			},
			laswwem(){
				$(".weilaswcss").css("display","block")
			},
			laswwemout(){
				$(".weilaswcss").css("display","none")
			},
			tjiacsbot(e){
				var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					$(".wemaappimg:eq("+i+")").removeClass("dobubk");
				}
				$(e.target).addClass("dobubk wemaappimg");
			},
        },
        mounted: function() {
        	if(this.$route.query.type == 1){
        		var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					if(i ==0){
						$(".wemaappimg:eq("+i+")").addClass("dobubkdianji");
					}
				}
        	}
        	if(this.$route.query.type == 2){
        		var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					$(".wemaappimg:eq("+i+")").removeClass("dobubkdianji");
					if(i == 1){
						$(".wemaappimg:eq("+i+")").addClass("dobubkdianji");
					}
				}
        	}
        	if(this.$route.query.type == 4){
        		var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					if(i == 0){
						$(".wemaappimg:eq("+i+")").removeClass("dobubkdianji");
					}
					if(i == 3){
						$(".wemaappimg:eq("+i+")").addClass("dobubkdianji");
					}
				}
        	}
        	if(this.$route.query.type == 5){
        		var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					if(i == 0){
						$(".wemaappimg:eq("+i+")").removeClass("dobubkdianji");
					}
					if(i == 4){
						$(".wemaappimg:eq("+i+")").addClass("dobubkdianji");
					}
				}
        	}
        	if(this.$route.query.type == 6){
        		var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					if(i == 0){
						$(".wemaappimg:eq("+i+")").removeClass("dobubkdianji");
					}
					if(i == 5){
						$(".wemaappimg:eq("+i+")").addClass("dobubkdianji");
					}
				}
        	}
        	if(this.$route.query.type == 7){
        		var obj = $(".wemaappimg");
				for(var i=0;i<obj.length;i++){
					if(i == 0){
						$(".wemaappimg:eq("+i+")").removeClass("dobubkdianji");
					}
					if(i == 6){
						$(".wemaappimg:eq("+i+")").addClass("dobubkdianji");
					}
				}
        	}
        }
    }
</script>
