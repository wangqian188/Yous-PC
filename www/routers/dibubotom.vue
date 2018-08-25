<style lang="less">
/*页面底部的css样式*/
	.pointer{cursor:pointer;}/*鼠标变成小手*/
	.yqlj{background-color: #1d1d1d;}
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
	.erweima{display: flex;align-items: center;}
	.erweimaerji p:first-child{margin-right: 43px;}
	.erweimaimg{width: 110px;height: 110px;background: url(../resources/images/shouye/lsapp.png) no-repeat;background-size: 100% auto;}
	.lsapp{width: 110px;font-size: 14px;line-height: 14px;color: #ffffff;margin-top: 10px;justify-content: center;}
	.lsicp{margin-top: 20px;margin-bottom: 42px;width: 1310px;}
	
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
							<span class="erweimaimg ggdis"></span>
							<span class="lsapp ggdis">亮狮公众号</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="kjdz ggdis">
			<div class="gsjjzt lsicp">北京亮狮企服科技有限公司保留一切权利  京ICP备170293</div>
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
