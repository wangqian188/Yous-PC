<style lang="less">
/*页面底部的css样式*/
	/* 当展现页面的宽度大于1000px且小于1400px时，的样式。 */
	@media screen and (min-width: 1000px) and (max-width: 1400px) {
		.yqljer{height: 52px;line-height: 52px;text-align: center;}
		.yqljwenz{font-size: 14px;color: #ffffff;}
		.hytz{font-size: 14px;color: #7e7e7e;}
		.hlzx{font-size: 14px;color: #7e7e7e;}
		.hlfc{font-size: 14px;color: #7e7e7e;}
		.yszs{font-size: 14px;color: #7e7e7e;}
		.bjlsw{border-top: 1px solid #434343;border-bottom: 1px solid #434343;width: 1150px;display: flex;justify-content: space-between;padding-right: 5px;}
		.lswkejysgs{margin-top: 39px;font-size: 14px;line-height: 14px;color: #d6d6d6;}
		.bjlslarg{padding-bottom: 39px;}
		.dianuhua{margin-top: 20px;}
		.dainhutubiao{display: flex;width: 16px;height: 16px;background: url(../resources/images/shouye/dianhua.png) no-repeat;background-size: 100% auto;}
		.shiujha{font-size: 12px;line-height: 12px;color: #d6d6d6;margin-left: 15px;align-items: center;}
		.gsjj{margin-top: 20px;}
		.gsjjzt{font-size: 12px;line-height: 12px;color: #7b7b7b;}
		.gsjjhgs{margin-left: 12px;margin-right: 12px;}
		.gsdz{margin-top: 21px;}
		.erweimaerji p:first-child{margin-right: 38px;}
		.erweimaimg{width: 96px;height: 96px;background: url(../resources/images/ywzhuweit/erwmaapp.png) no-repeat;background-size: 100% auto;}
		.lsgzhimg{width: 96px;height: 96px;background: url(../resources/images/ywzhuweit/lswwem.jpg) no-repeat;background-size: 100% auto;}
		.lsapp{width: 96px;font-size: 12px;line-height: 12px;color: #ffffff;margin-top: 10px;justify-content: center;}
		.lsicp{margin-top: 18px;margin-bottom: 37px;width: 1150px;}
	}
	/* 当展现页面的宽度大于1400px时的样式。 */
	@media screen and (min-width: 1400px){
		.yqljer{height: 60px;line-height: 60px;text-align: center;}
		.yqljwenz{font-size: 16px;color: #ffffff;}
		.hytz{font-size: 16px;color: #7e7e7e;}
		.hlzx{font-size: 16px;color: #7e7e7e;}
		.hlfc{font-size: 16px;color: #7e7e7e;}
		.yszs{font-size: 16px;color: #7e7e7e;}
		.bjlsw{border-top: 1px solid #434343;border-bottom: 1px solid #434343;width: 1310px;display: flex;justify-content: space-between;padding-right: 6px;}
		.lswkejysgs{margin-top: 44px;font-size: 16px;line-height: 16px;color: #d6d6d6;}
		.bjlslarg{padding-bottom: 44px;}
		.dianuhua{margin-top: 22px;}
		.dainhutubiao{display: flex;width: 19px;height: 19px;background: url(../resources/images/shouye/dianhua.png) no-repeat;background-size: 100% auto;}
		.shiujha{font-size: 14px;line-height: 14px;color: #d6d6d6;margin-left: 17px;align-items: center;}
		.gsjj{margin-top: 22px;}
		.gsjjzt{font-size: 14px;line-height: 14px;color: #7b7b7b;}
		.gsjjhgs{margin-left: 14px;margin-right: 14px;}
		.gsdz{margin-top: 24px;}
		.erweimaerji p:first-child{margin-right: 43px;}
		.erweimaimg{width: 110px;height: 110px;background: url(../resources/images/ywzhuweit/erwmaapp.png) no-repeat;background-size: 100% auto;}
		.lsgzhimg{width: 110px;height: 110px;background: url(../resources/images/ywzhuweit/lswwem.jpg) no-repeat;background-size: 100% auto;}
		.lsapp{width: 110px;font-size: 14px;line-height: 14px;color: #ffffff;margin-top: 10px;justify-content: center;}
		.lsicp{margin-top: 20px;margin-bottom: 42px;width: 1310px;}
	}
	.pointer{cursor:pointer;}/*鼠标变成小手*/
	.yqlj{background-color: #1d1d1d;}
	
	.erweima{display: flex;align-items: center;}
	
	
</style>

<template>
	<div class="yqlj">
		<div class="yqljer">
			<span class="yqljwenz">友情链接：</span>
			<span class="hytz pointer" @click="diandhytz">/ 航远投资 </span>
			<span class="hlzx pointer" @click="diandhlzx">/ 华亮致新 </span>
			<span class="hlfc pointer" @click="diandhlfc">/ 华亮房产 </span>
			<span class="yszs pointer" @click="diandyszs">/ 幼狮装饰</span>
		</div>
		<div class="kjdz ggdis">
			<div class="bjlsw">
				<div class="bjlslarg">
					<div class="lswkejysgs pointer">北京亮狮企服科技有限公司</div>
					<div class="dianuhua ggdis">
						<span class="dainhutubiao"></span>
						<span class="shiujha ggdis">400-078-8800</span>
					</div>
					<div class="gsjj">
						<span class="gsjjzt pointer" @click="diandgsjq">公司简介</span>
						<span class="gsjjzt gsjjhgs">-</span>
						<span class="gsjjzt pointer" @click="diandzxns">招贤纳士</span>
						<span class="gsjjzt gsjjhgs">-</span>
						<span class="gsjjzt pointer" @click="diandlxwm">联系我们</span>
					</div>
					<div class="gsdz gsjjzt">北京市朝阳区东三环中路39号建外SOHO东区A座2902</div>
				</div>
				<div class="erweima">
					<div class="erweimaerji ggdis">
						<p>
							<span class="erweimaimg ggdis"></span>
							<span class="lsapp ggdis">亮狮APP</span>
						</p>
						<p>
							<span class="lsgzhimg ggdis"></span>
							<span class="lsapp ggdis">亮狮公众号</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="kjdz ggdis">
			<div class="gsjjzt lsicp">北京亮狮企服科技有限公司保留一切权利  京ICP备15046508号-1</div>
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
			 diandhytz(){
			 	window.open("http://www.ursdream.com/");
			 },
			 diandhlzx(){
			 	window.open("http://www.ursbest.com/");
			 },
			 diandhlfc(){
			 	window.open("http://www.hualiangchina.com/");
			 },
			 diandyszs(){
			 	window.open("http://www.ursspace.cn/");
			 },
			 diandgsjq(){
			 	if(this.$route.query.type == 7){
			 		this.$router.push({ path: '/blanks',query:{qytype:1}});
			 	}else{
			 		this.$router.push({ path: '/gxls',query:{qytype:1,type:7}});
			 	}
			 	
			 },
			 diandzxns(){
			 	if(this.$route.query.type == 7){
			 		this.$router.push({ path: '/blanks',query:{qytype:2}});
			 	}else{
			 		this.$router.push({ path: '/gxls',query:{qytype:2,type:7}});
			 	}
			 	
			 },
			 diandlxwm(){
			 	if(this.$route.query.type == 7){
			 		this.$router.push({ path: '/blanks',query:{qytype:3}});
			 	}else{
			 		this.$router.push({ path: '/gxls',query:{qytype:3,type:7}});
			 	}
			 	
			 }
        },

        mounted: function () {
        	
        }
    }
</script>
