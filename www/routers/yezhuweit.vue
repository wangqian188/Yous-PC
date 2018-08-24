<style lang="less">
/*页面底部的css样式*/
	.pointer{cursor:pointer;}/*鼠标变成小手*/
	.zuidalage{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;}
	.lagetop{position: absolute;top: 0px;left: 0px;right: 18px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
	.large{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;min-width: 1200px;overflow: auto;background-color: white;}
	.banimg{width:100%;}
	.lagebiaot{margin-top: 75px;}
	.gxlsdis{display: flex;}
	.gxlsdiscenrt{justify-content: center;}
	.biaot{width: 1310px;padding: 0px 126px;}
	.ggwid{width: 1310px;}
	.biaot p{margin-left: 100px;}
	.biaot p:first-child{margin-left: 0px;}
	.xiangming{border-bottom:1px solid #e5e5e5;font-size: 14px;line-height:62px;width: 126px;color: #333333;}
	.xminput{border-bottom:1px solid #e5e5e5;width:466px;line-height:62px;}
	.xminput input{width:466px;border:none;font-size: 14px;color: #333333;}
	.sjhinput{border-bottom:1px solid #e5e5e5;width:364px;line-height:62px;}
	.sjhinput input{width:364px;border:none;font-size: 14px;color: #333333;}
	.yazhanma{border-bottom:1px solid #e5e5e5;font-size: 14px;line-height:62px;width: 90px;color: #999999;padding-left: 10px;}
	.fwmsk{width: 590px;height: 174px;}
	.fwmsk textarea{width: 590px;height: 174px;border-bottom: 1px solid #e5e5e5;border-top: 0px solid #e5e5e5;border-left: 1px solid #e5e5e5;border-right: 1px solid #e5e5e5;padding: 20px 16px;font-size: 14px;color: #333333;}
	.anweweit{width: 365px;height: 466px;background: url(../resources/images/ywzhuweit/anweiweitu.png) no-repeat;background-size: 100% auto;margin-top: 28px;}
	.lagetijiao{margin-top: 100px;align-items: center;justify-content: center;}
	.tijiaoweit{width: 192px;height: 56px;border-radius: 5px;font-size: 20px;color: #ffffff;background-color: #3785ba;display: flex;align-items: center;justify-content: center;}
	.weitlc{margin-top: 132px;align-items: center;}
	.xianyi{border-top: 1px solid #e5e5e5;width: 552px;}
	.wetkcwezi{width: 206px;text-align: center;font-size: 20px;line-height: 20px;color: #666666;}
	.wetlcimg{width:100%;height:122px;background: url(../resources/images/ywzhuweit/lctimg.png) no-repeat;background-size: 100% auto;margin-top: 40px;margin-bottom: 100px;}
</style>

<template>
	<div class="zuidalage">
		<!--公共的头部-->
		<div class="lagetop">
			<Footertop></Footertop>
		</div>
		<!---->
		<div class="large">
			<div class="banimg">
				<img src="../resources/images/ywzhuweit/yezwt.png"/>
			</div>
			<div class="lagebiaot">
				<div class="gxlsdis gxlsdiscenrt">
					<div class="biaot gxlsdis">
						<p class="">
							<span class="gxlsdis">
								<span class="xiangming">姓名</span>
								<span class="xminput">
									<input class="" type="text" placeholder="请输入您的姓名" name="" id="" value="" />
								</span>
							</span>
							<span class="gxlsdis">
								<span class="xiangming">手机号</span>
								<span class="sjhinput">
									<input class="" type="text" placeholder="请输入您的姓名" name="" id="" value="" />
								</span>
								<span class="yazhanma">获取验证码</span>
							</span>
							<span class="gxlsdis">
								<span class="xiangming">姓名</span>
								<span class="xminput">
									<input class="" type="text" placeholder="请输入您的姓名" name="" id="" value="" />
								</span>
							</span>
							<span class="gxlsdis">
								<span class="xiangming">姓名</span>
								<span class="xminput">
									<input class="" type="text" placeholder="请输入您的姓名" name="" id="" value="" />
								</span>
							</span>
							<span class="gxlsdis">
								<span class="xiangming">房屋描述</span>
								<span class="xminput"></span>
							</span>
							<span class="fwmsk gxlsdis">
								<textarea placeholder="请描述您的房屋基本信息" name="" rows="" cols=""></textarea>
							</span>
						</p>
						<p>
							<span class="anweweit gxlsdis"></span>
						</p>
					</div>
				</div>
				<div class="lagetijiao gxlsdis">
					<div class="tijiaoweit pointer">提交委托</div>
				</div>
				<div class="gxlsdis gxlsdiscenrt">
					<div class="ggwid gxlsdis">
						<div class="weitlc gxlsdis">
							<p class="xianyi"></p>
							<p class="wetkcwezi">委托流程</p>
							<p class="xianyi"></p>
						</div>
					</div>
				</div>
				<div class="gxlsdis gxlsdiscenrt">
					<div class="ggwid gxlsdis">
						<div class="wetlcimg"></div>
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

        	}
        },
		created(){

		},
        methods: {
			
        },

        mounted: function () {
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
