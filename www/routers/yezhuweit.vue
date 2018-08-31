<style lang="less">
/*页面底部的css样式*/
/* 当展现页面的宽度大于1000px且小于1400px时，的样式。 */
	@media screen and (min-width: 1000px) and (max-width: 1400px) {
		.lagetop{position: absolute;top: 0px;left: 0px;right: 0px;height: 52px;z-index: 12;}/*background-color: #1d1d1d;*/
		.lagebiaot{margin-top: 66px;}
		.biaot{width: 1150px;padding: 0px 110px;}
		.ggwid{width: 1150px;}
		.biaot p{margin-left: 88px;}
		.xiangming{border-bottom:1px solid #e5e5e5;font-size: 12px;line-height:54px;width: 110px;color: #333333;}
		.xminput{border-bottom:1px solid #e5e5e5;width:407px;line-height:54px;}
		.xminput input{width:407px;border:none;font-size: 12px;color: #333333;}
		.sjhinput{border-bottom:1px solid #e5e5e5;width:318px;line-height:54px;}
		.sjhinput input{width:318px;border:none;font-size: 12px;color: #333333;}
		.yazhanma{border-bottom:1px solid #e5e5e5;font-size: 12px;line-height:54px;width: 78px;color: #999999;padding-left: 8px;}
		.fwmsk{width: 516px;height: 152px;}
		.fwmsk textarea{width: 516px;height: 152px;border-bottom: 1px solid #e5e5e5;border-top: 0px solid #e5e5e5;border-left: 1px solid #e5e5e5;border-right: 1px solid #e5e5e5;padding: 17px 14px;font-size: 12px;color: #333333;}
		.anweweit{width: 319px;height: 407px;background: url(../resources/images/ywzhuweit/anweiweitu.png) no-repeat;background-size: 100% auto;margin-top: 24px;}
		.lagetijiao{margin-top: 87px;align-items: center;justify-content: center;}
		.tijiaoweit{width: 168px;height: 49px;border-radius: 5px;font-size: 17px;color: #ffffff;background-color: #2B70D8;display: flex;align-items: center;justify-content: center;}
		.weitlc{margin-top: 115px;align-items: center;}
		.xianyi{border-top: 1px solid #e5e5e5;width: 483px;}
		.wetkcwezi{width: 180px;text-align: center;font-size: 17px;line-height: 17px;color: #666666;}
		.wetlcimg{width:100%;height:106px;background: url(../resources/images/ywzhuweit/lctimg.png) no-repeat;background-size: 100% auto;margin-top: 35px;margin-bottom: 87px;}
	}
	/* 当展现页面的宽度大于1400px时的样式。 */
	@media screen and (min-width: 1400px){
		.lagetop{position: absolute;top: 0px;left: 0px;right: 0px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
		.lagebiaot{margin-top: 75px;}
		.biaot{width: 1310px;padding: 0px 126px;}
		.ggwid{width: 1310px;}
		.biaot p{margin-left: 100px;}
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
		.tijiaoweit{width: 192px;height: 56px;border-radius: 5px;font-size: 20px;color: #ffffff;background-color: #2B70D8;display: flex;align-items: center;justify-content: center;}
		.weitlc{margin-top: 132px;align-items: center;}
		.xianyi{border-top: 1px solid #e5e5e5;width: 552px;}
		.wetkcwezi{width: 206px;text-align: center;font-size: 20px;line-height: 20px;color: #666666;}
		.wetlcimg{width:100%;height:122px;background: url(../resources/images/ywzhuweit/lctimg.png) no-repeat;background-size: 100% auto;margin-top: 40px;margin-bottom: 100px;}
	}
	
	
	.pointer{cursor:pointer;}/*鼠标变成小手*/
	.zuidalage{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;}
	
	.large{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;min-width: 1200px;overflow: auto;background-color: white;}
	.banimg{width:100%;}
	
	.gxlsdis{display: flex;}
	.gxlsdisnone{display: none;}
	.gxlsdiscenrt{justify-content: center;}
	
	.biaot p:first-child{margin-left: 0px;}
	
	
	.shiujitishi{border-bottom: 0px solid red;color: red;}
	.shiujitishigg{border-bottom: 0px solid red;color: red;}
	.zhezhaoceshx{position: fixed;top: 0px;bottom: 0px;left: 0px;right: 0px;background-color: rgba(255,255,255,0.4);z-index:12;display: flex;align-items: center;justify-content: center;}
	.zhahacner{font-size: 22px;color: #000000;}
	.zhezhaoceshxdisf{display: none;}
</style>

<template>
	<div class="zuidalage">
		<div class="zhezhaoceshx zhezhaoceshxdisf">
			<div class="zhahacner">正在提交......</div>
		</div>
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
									<input class="" v-model="name" type="text" placeholder="请输入您的姓名" name="" @blur="sjnames" id="" value="" />
								</span>
							</span>
							
							<span class="gxlsdis gxlsdisnone shiujitishiname">
								<span class="xiangming shiujitishi"></span>
								<span class="xminput shiujitishi shiujitis">请输入姓名</span>
							</span>
							
							<span class="gxlsdis">
								<span class="xiangming">手机号</span>
								<span class="sjhinput">
									<input class="" v-model="code" type="text" placeholder="请输入您的手机号" name="" @blur="sjshjie" id="" value="" />
								</span>
								<span v-if="yanzham" class="yazhanma pointer" @click="jqyzm">获取验证码</span>
								<span v-else class="yazhanma pointer">{{time+'秒后获取'}}</span>
							</span>
							
							<span class="gxlsdis gxlsdisnone shiujitishiss">
								<span class="xiangming shiujitishi"></span>
								<span class="xminput shiujitishi shiujitis">请输入手机号</span>
							</span>
							
							
							<span class="gxlsdis">
								<span class="xiangming">验证码</span>
								<span class="xminput">
									<input class="" v-model="sjyazcode" type="text" placeholder="请输入手机验证码" name="" id="" @blur="sjyazm" value="" />
								</span>
							</span>
							
							<span class="gxlsdis gxlsdisnone shiujitishisjyzm">
								<span class="xiangming shiujitishigg"></span>
								<span class="xminput shiujitishigg shjisjyzmwenzi">请输入手机验证码</span>
							</span>
							
							<span class="gxlsdis">
								<span class="xiangming">房屋信息</span>
								<span class="xminput">
									<input class="" v-model="nfwxx" type="text" placeholder="请输入楼盘名称及所在区域" name="" @blur="sjfwxxs" id="" value="" />
								</span>
							</span>
							<span class="gxlsdis gxlsdisnone shiujitishifwxxx">
								<span class="xiangming shiujitishigg"></span>
								<span class="xminput shiujitishigg">请输入房屋信息</span>
							</span>
							<span class="gxlsdis">
								<span class="xiangming">房屋描述</span>
								<span class="xminput"></span>
							</span>
							<span class="fwmsk gxlsdis">
								<textarea v-model="msfwxx" placeholder="请描述您的房屋基本信息" name="" rows="" cols=""></textarea>
							</span>
						</p>
						<p>
							<span class="anweweit gxlsdis"></span>
						</p>
					</div>
				</div>
				<div class="lagetijiao gxlsdis">
					<div class="tijiaoweit pointer" @click="tiwentui">提交委托</div>
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
	import { Toast } from 'mint-ui'; //toast
	
    export default {
    	components: {
		    Footertop,
		    Footerbottom
		 },
        data () {
        	return {
				code:"",
				yanzham:true,
				time:60,
				sjyazcode:'',
				name:'',
				nfwxx:'',
				msfwxx:'',
        	}
        },
		created(){

		},
        methods: {
        	//姓名的失去焦点事件
        	sjnames(){
        		if(this.name == ""){
					$(".shiujitishiname").removeClass("gxlsdisnone");
				}else{
					$(".shiujitishiname").addClass("gxlsdisnone");
				}
        	},
        	//手机号的失去焦点事件
        	sjshjie(){
        		if(this.code == ""){
					$(".shiujitishiss").removeClass("gxlsdisnone");
					$(".shiujitis").text("请输入手机号");
				}else{
					$(".shiujitishiss").addClass("gxlsdisnone");
				}
        	},
        	//房屋描述的失去焦点事件
        	sjfwxxs(){
        		if(this.nfwxx == ""){
					$(".shiujitishifwxxx").removeClass("gxlsdisnone");
				}else{
					$(".shiujitishifwxxx").addClass("gxlsdisnone");
				}
        	},
        	//获取验证码的点击事件
			jqyzm(){
				if(this.code == ""){
					$(".shiujitishiss").removeClass("gxlsdisnone");
					$(".shiujitis").text("请输入手机号");
				}else{
					//手机号验证
	                var reg = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
	                if (!reg.test(this.code)) {
	                	$(".shiujitishiss").removeClass("gxlsdisnone");
	                	$(".shiujitis").text("手机号格式输入有误,请重新输入！");
	                    this.code = "";
	                    return false;
	                }else{
	                	$(".shiujitishiss").addClass("gxlsdisnone");
	                }
					var cookir = this.getcookit();
					this.$http.post(
	          			this.$api_ysapi + "/yskjApp/appYskj/V1/getServiceCode.do",
	          		{"phone":this.code,"cookie":cookir}
					).then(function (res) {
				        var result = JSON.parse(res.bodyText);
				        if (result.success){
				        	this.yanzham = false;
				        	let me = this;
							let interval = window.setInterval(function() {
			                    if ((me.time--) <= 0) {
			                        me.time = 59;
			                        me.yanzham = true;
			                        window.clearInterval(interval);
			                    }
			                }, 1000);
				        }else{
				        	alert(result.message);
				        }
			        })
				}
				
			},
			//生成cookie
			getcookit(){
				//生成cookie
				var cookyezhi = new Date;
				localStorage.setItem('cookgwyez', JSON.stringify(cookyezhi));
				return cookyezhi;
			},
			//验证码的失去焦点事件
			sjyazm(){
				if(this.sjyazcode == ""){
					$(".shiujitishisjyzm").removeClass("gxlsdisnone");
				}else{
					$(".shiujitishisjyzm").addClass("gxlsdisnone");
				}
				
			},
			//提交委托的点击事件
			tiwentui(){
				if(this.name == ""){
					$(".shiujitishiname").removeClass("gxlsdisnone");
					return false;
				}else{
					$(".shiujitishiname").addClass("gxlsdisnone");
				}
				if(this.code == ""){
					$(".shiujitishiss").removeClass("gxlsdisnone");
					$(".shiujitis").text("请输入手机号");
					return false;
				}else{
					$(".shiujitishiss").addClass("gxlsdisnone");
				}
				if(this.sjyazcode == ""){
					$(".shiujitishisjyzm").removeClass("gxlsdisnone");
					return false;
				}else{
					$(".shiujitishisjyzm").addClass("gxlsdisnone");
				}
				if(this.nfwxx == ""){
					$(".shiujitishifwxxx").removeClass("gxlsdisnone");
					return false;
				}else{
					$(".shiujitishifwxxx").addClass("gxlsdisnone");
				}
				$(".zhezhaoceshx").removeClass("zhezhaoceshxdisf");
				//校验验证码
								var ss = localStorage.getItem("cookgwyez").replace("\"","").replace("\"","");

				this.$http.post(
      				this.$api_ysapi + "/yskjApp/appYskj/V1/compServiceCode.do",
          		{"code":this.sjyazcode,"cookie":ss}
				).then(function (res) {
			        var result = JSON.parse(res.bodyText);
			        if (result.success){
			        	this.$http.post(
		      				this.$api_ysapi + "/yskjApp/webApp/dataInfo/ownerEntrust.do",
		          		{"name":this.name,"phone":this.code,"repairHouse":this.nfwxx,"memo":this.msfwxx,"uid":null}
						).then(function (res) {
					        var result = JSON.parse(res.bodyText);
					        if (result.success){
					        	/*const title = '对话框的标题';
                				const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
                				this.$Modal.error({
		                            title: title,
		                            content: content
		                        });*/
					        	location.reload();
					        }else{
					        	alert(result.message);
					        }
				        });
			        }else{
			        	$(".shjisjyzmwenzi").text("输入的验证码不正确！");
			        	$(".shiujitishisjyzm").removeClass("gxlsdisnone");
			        }
		       });
			},
        },

        mounted: function () {
        	//滚动条滚动的时候，改变底色123
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
