<style lang="less">
/*页面底部的css样式*/
	.pointer{cursor:pointer;}/*鼠标变成小手*/
	.zuidalage{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;}
	.lagetop{position: absolute;top: 0px;left: 0px;right: 18px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
	.large{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;min-width: 1200px;overflow: auto;background-color: white;}
	.lagebottom{background-color: #1d1d1d;padding: 0px;}
	.banimg{width:100%;}
	.gxlsdis{display: flex;}
	.gxlsdisjust{justify-content: center;}
	.gxlswidt{width: 1310px;padding-bottom: 50px;}
	.qyjj{margin-top: 62px;justify-content: center;}
	.qyjj p{width: 1310px;}
	.qyjjziti{font-size: 14px;line-height: 14px;width: 92px;height: 30px;align-items: center;justify-content: center;margin-left: 15px;}
	.qyjj p span:first-child{margin-left: 0px;}
	.gbzihcss{color: #ffffff;background-color: #2b70d8;}
	.lageqyjj{margin-top: 42px;padding-top: 30px;}
	.gylishwang{font-size: 24px;line-height: 24px;color: #2d2d2d;}
	.cheliy{font-size: 16px;line-height: 30px;color: #666666;margin-top: 36px;}
	.lswtt{font-size: 24px;line-height: 24px;color: #2d2d2d;margin-top: 70px;}
	.lswgyssing{width: 100%;margin-top: 40px;margin-bottom: 80px;}
	.zxnslage{background-color: #f2f2f2;}
	.zxnslagedier{background-color: #ffffff;border: 1px solid #efefef;border-radius: 5px;padding: 40px 30px;margin-top: 30px;}
	.zhiwei{font-size: 24px;line-height: 24px;color: #2d2d2d;}
	.neirong{border-top: 1px solid #e4eaec;border-bottom: 1px solid #e4eaec;margin-top: 38px;padding: 20px 15px 50px;}
	.zhuygznr{font-size: 16px;line-height: 16px;color: #666666;}
	.fuwqiy{padding-left: 32px;margin-top: 26px;}
	.gwyq{margin-top: 26px;}
	.neirong ul{margin-top: 12px;padding-left: 40px;}
	.neirong ul{line-height: 40px;font-size: 16px;color: #666666;}
	.qingjijil{padding:30px 16px 0px;font-size: 16px;line-height: 16px;color: #666666;}
	.qingjijil i{font-style: normal;padding-left: 5px;color: #2B70D8;}
	.zxnslagedier:first-child{margin-top: 0px;}
	.badudid{margin-top: 30px;background-color: #fbfdfd;border: 1px solid #e4eaec;}
	.dituimg{width: 640px;padding: 10px;border-right: 1px solid #e4eaec;}
	.dituimg span{width: 474px;height:340px;background: url(../resources/images/gyls/dt.jpg) no-repeat;background-size: 100% auto;}
	.mmrjgs{width: 640px;display: flex;align-items: center;}
	.lagemmgs{margin-left: 10px;}
	.rjgszitti{font-size: 18px;line-height: 18px;color: #333333;}
	.dizhiranj{font-size: 16px;line-height: 16px;color: #2B70D8;margin-top: 18px;}
	.dizhiranj i{font-style: normal;color: #666666;}
	.gxlsdisno{display: none !important;}
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
				<img src="../resources/images/gyls/glwmimg.png"/>
			</div>
			<div class="qyjj gxlsdis">
				<p class="gxlsdis">
					<span class="qyjjziti gxlsdis gbzihcss jajistt pointer" @click="jsqiyejj">企业简介</span>
					<span class="qyjjziti gxlsdis jazxnstt pointer" @click="jszhxins">招贤纳士</span>
					<span class="qyjjziti gxlsdis jalxwmtt pointer" @click="jslswmewo">联系我们</span>
				</p>
			</div>
		<!--	企业简介-->
			<div class="lageqyjj gxlsdis gxlsdisjust jaqyjj">
				<div class="gxlswidt">
					<div class="gylishwang">关于亮狮网</div>
					<div class="cheliy">
						亮狮网成立于2018年7月，发源于2004年1月成立的华亮房产。经过多年的创新和发展，亮狮网已成为集办公空间运营、商业地产投资管理、装修装饰、企业增值服务为
一体的商业地产全产业链服务平台，旗下拥有华亮房产、幼狮科技、幼狮装饰、航远投资、华亮致新五家分公司。亮狮网旨在以空间为载体，以企业升级服务为依托，专注于满足企业进阶中的核心需求，致力于打造高成长性的企业生态圈。
					</div>
					<div class="cheliy">
						目前“亮狮网”在北京各大核心商圈已构建30万㎡办公空间，100多个产品项目，并拥有2000多家入驻企业，未来“亮狮网”将搭建全新的办公生态体系，用更近的距离、更
好的服务，助力每一家亮狮企业更省更快走向强大。
					</div>
					<div class="cheliy">
						亮狮坚持同一个梦想，承载着“为业主解忧，助企业成长”的使命，服务客户，成就他人。以提升企业效率作为企业宗旨， 真正实现三个百分百满意，即：定制服务百分百；
入住服务百分百；售后服务百分百。一直以来亮狮人都秉持着，不怕苦、不服输、不断超越的企业精神不断前行，我们希望用亮狮创造的服务与空间让100万家企业的升级
之路无限延伸。
					</div>
					<div class="lswtt">亮狮网团队</div>
					<div class="cheliy">
						创始人长期专注于地产领域，连续成功创业，对企业运营管理有独立思考和亲身实践。核心团队均有丰富的运营管理和业务拓展经验。亮狮拥有以人为本的创业文化，激
情四射的专业团队，团结有爱的亮狮家人，欢迎有抱负有理想的人加入我们。
					</div>
					<div class="lswgyssing"><img src="../resources/images/gyls/lswgys.png"/></div>
				</div>
				
				
			</div>
			<!--招贤纳士-->
			<div class="lageqyjj gxlsdis gxlsdisjust zxnslage gxlsdisno">
				<div class="gxlswidt">
					<div class="zxnslagedier">
						<div class="zhiwei">HRBP</div>
						<div class="neirong">
							<div class="zhuygznr">岗位职责：</div>
							<div class="fuwqiy zhuygznr">负责业务部门制度流程梳理工作。</div>
							<div class="fuwqiy zhuygznr">负责制作业务部门绩效考核制度及评定标准。</div>
							<div class="fuwqiy zhuygznr">业务部门内员工关系维护，跟踪所辖部门员工动态,协助培养员工。</div>
							<div class="fuwqiy zhuygznr">配合公司人力资源中心推进业务部门内人力资源相关事务性工作。</div>
							<div class="fuwqiy zhuygznr">企业文化与价值观的宣导者，员工与公司的沟通纽带、意见建议的反馈对象。</div>
							<div class="zhuygznr gwyq">任职要求：</div>
							<ul>
								<li class="">大专及以上学历，人力资源相关专业优先。</li>
								<li class="">1-3年HRBP工作经验,有薪酬、组织发展、绩效管理、员工关系工作经验或团队管理等相关经验者优先。</li>
								<li class="">熟练使用常用办公软件，同时具备数据分析能力。</li>
								<li class="">具有良好的团队意识，亲和力强，善于人际沟通，组织协调能力和工作推动力。</li>
								<li class="">踏实认真，正直客观，积极正面。</li>
								<li class="">抗压性强。</li>
							</ul>
						</div>
						<div class="qingjijil">请将简历投递至邮箱<i>Youshikongjianhr@126.com</i></div>
					</div>
					<div class="zxnslagedier">
						<div class="zhiwei">行政专员</div>
						<div class="neirong">
							<div class="zhuygznr">岗位职责：</div>
							<div class="fuwqiy zhuygznr">负责办公室日常办公制度维护、管理。</div>
							<div class="fuwqiy zhuygznr">负责办公室各部门办公后勤保障工作。</div>
							<div class="fuwqiy zhuygznr">协助行政经理处理行政外部事务。</div>
							<div class="fuwqiy zhuygznr">协助公司内部各项定期和不定期集体活动。</div>
							<div class="fuwqiy zhuygznr">按照公司行政管理制度处理其他相关事务。</div>
							<div class="zhuygznr gwyq">任职要求：</div>
							<ul>
								<li class="">1年以上相关工作优先。</li>
								<li class="">具备良好的沟通协调能力。</li>
								<li class="">工作认真负责，工作积极主动。</li>
								<li class="">能吃苦耐劳。</li>
								<li class="">男，有无经验均可。</li>
							</ul>
						</div>
						<div class="qingjijil">请将简历投递至邮箱<i>Youshikongjianhr@126.com</i></div>
					</div>
					<div class="zxnslagedier">
						<div class="zhiwei">管家助理</div>
						<div class="neirong">
							<div class="zhuygznr">岗位职责：</div>
							<div class="fuwqiy zhuygznr">整理客户及业主信息档案。</div>
							<div class="fuwqiy zhuygznr">回访客户、业主结果的记录，更新。</div>
							<div class="fuwqiy zhuygznr">客户、业主诉求的解决进度。</div>
							<div class="fuwqiy zhuygznr">收房、交房。</div>
							<div class="fuwqiy zhuygznr">违约处理部催缴客户房租过程中未联系上房间客户的，管家配合查看房间情况，提供房间现状，客户联系方式等。</div>
							<div class="fuwqiy zhuygznr">客户支付房租后索要收据，管家对接违约处理部后，回复客户。</div>
							<div class="fuwqiy zhuygznr">业主变更房租收款账户的对接（财务有相应的短信确认模板）。</div>
							<div class="fuwqiy zhuygznr">固定项目客户、业主日常关系的维护。</div>
							<div class="fuwqiy zhuygznr">房间客户出门条的配合开具。</div>
							<div class="zhuygznr gwyq">任职要求：</div>
							<ul>
								<li class="">有无经验均可。</li>
								<li class="">统招大专以上学历。</li>
								<li class="">有物业工作经验者优先。</li>
								<li class="">形象好，具有较强的服务意识，有耐心，需要具备一定的沟通能力。</li>
							</ul>
						</div>
						<div class="qingjijil">请将简历投递至邮箱<i>Youshikongjianhr@126.com</i></div>
					</div>
					<div class="zxnslagedier">
						<div class="zhiwei">财务主管</div>
						<div class="neirong">
							<div class="zhuygznr">岗位职责：</div>
							<div class="fuwqiy zhuygznr">审核会计凭证，保证各银行账户资金与账务相符。</div>
							<div class="fuwqiy zhuygznr">月末完成各类计提、摊销表的审核，结转损益。</div>
							<div class="fuwqiy zhuygznr">根据业务部门提供的收购与销售数据，按照已批准的提成制度审核提成。</div>
							<div class="fuwqiy zhuygznr">对押金和租金的挂账进行审核，确保押金和租金挂账金额准确，审核月末租金收入与租金成本的结转。</div>
							<div class="fuwqiy zhuygznr">根据各分公司会计提供的报表编制合并报表，保证数据准确。</div>
							<div class="fuwqiy zhuygznr">辅助财务经理进行财务数据分析，提供相关的数据。</div>
							<div class="fuwqiy zhuygznr">定期查询科目余额情况，提出具体处理方案。</div>
							<div class="fuwqiy zhuygznr">根据会计提供的数据，审核会计对外申报数据，保证数据准确无误。</div>
							<div class="fuwqiy zhuygznr">指导会计和出纳的日常财务核算工作，协助财务经理监督管理会计和出纳的工作。</div>
							<div class="fuwqiy zhuygznr">熟悉税法的最新政策，熟知与公司的财务会计有关的法规和制度。</div>
							<div class="fuwqiy zhuygznr">完成主管领导安排的其他工作。</div>
							<div class="zhuygznr gwyq">任职要求：</div>
							<ul>
								<li class="">会计、审计或相关专业，本科及以上学历。</li>
								<li class="">5年以上会计岗位工作经验；2年以上会计主管工作经验。</li>
								<li class="">具有全面的财务专业知识、账务处理及财务主管经验。</li>
								<li class="">熟悉本行业国家财税法律规范、财税准则及各项规章制度。</li>
								<li class="">人品正直，诚实守信，能够坚持原则，遵守财经法纪。</li>
								<li class="">执行能力强，能够承受工作压力。</li>
							</ul>
						</div>
						<div class="qingjijil">请将简历投递至邮箱<i>Youshikongjianhr@126.com</i></div>
					</div>
					<div class="zxnslagedier">
						<div class="zhiwei">培训经理</div>
						<div class="neirong">
							<div class="zhuygznr">岗位职责：</div>
							<div class="fuwqiy zhuygznr">根据公司的总体战略负责培训体系搭建，包括培训制度、讲师体系、课程体系、考核体系、评估体系等。</div>
							<div class="fuwqiy zhuygznr">制定培训计划并组织实施，监控培训过程，评估培训效果，组织培训考核。</div>
							<div class="fuwqiy zhuygznr">拓展培训渠道和培训资源，积累培训经验和资料，开发培训课题，编制培训教材，编写培训教案。</div>
							<div class="fuwqiy zhuygznr">组织新进员工的入职培训；协助制定员工职业发展规划。</div>
							<div class="fuwqiy zhuygznr">组织开发培训课程及编写培训材料，独立完成部分培训课程的开发及讲授。</div>
							<div class="zhuygznr gwyq">任职要求：</div>
							<ul>
								<li class="">统招本科。</li>
								<li class="">3年以上培训工作经验。</li>
								<li class="">有大型活动策划经验优先。</li>
								<li class="">认同公司的企业文化，具有强烈的责任感和事业心，具有高度的敬业精神。</li>
							</ul>
						</div>
						<div class="qingjijil">请将简历投递至邮箱<i>Youshikongjianhr@126.com</i></div>
					</div>
				</div>
			</div>
			
		<!--	联系我们-->
			<div class="lageqyjj gxlsdis gxlsdisjust jalxwowo gxlsdisno">
				<div class="gxlswidt">
					<div class="badudid gxlsdis">
						<p class="dituimg"><span class="gxlsdis"></span></p>
						<p class="mmrjgs">
							<span class="lagemmgs">
								<span class="rjgszitti gxlsdis">北京幼狮科技有限公司</span>
								<span class="dizhiranj gxlsdis">地址：<i>北京市朝阳区东三环中路39号建外SOHO东区A座2906</i></span>
								<span class="dizhiranj gxlsdis">电话：<i>400-078-8800</i></span>
								<span class="dizhiranj gxlsdis">网址：<i>软件公司软件公司软件公司</i></span>
							</span>
						</p>
					</div>
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
        	//企业简介的点击事件
			jsqiyejj(){
				//显示内容
				$(".jaqyjj").removeClass("gxlsdisno");
				$(".zxnslage").addClass("gxlsdisno");
				$(".jalxwowo").addClass("gxlsdisno");
				//改变样式
				$(".jajistt").addClass("gbzihcss");
				$(".jazxnstt").removeClass("gbzihcss");
				$(".jalxwmtt").removeClass("gbzihcss");
			},
			//企业简介的点击事件
			jszhxins(){
				//显示内容
				$(".jaqyjj").addClass("gxlsdisno");
				$(".zxnslage").removeClass("gxlsdisno");
				$(".jalxwowo").addClass("gxlsdisno");
				//改变样式
				$(".jajistt").removeClass("gbzihcss");
				$(".jazxnstt").addClass("gbzihcss");
				$(".jalxwmtt").removeClass("gbzihcss");
			},
			//企业简介的点击事件
			jslswmewo(){
				//显示内容
				$(".jaqyjj").addClass("gxlsdisno");
				$(".zxnslage").addClass("gxlsdisno");
				$(".jalxwowo").removeClass("gxlsdisno");
				//改变样式
				$(".jajistt").removeClass("gbzihcss");
				$(".jazxnstt").removeClass("gbzihcss");
				$(".jalxwmtt").addClass("gbzihcss");
			},
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
        	
        	if(this.$route.query.qytype == 2){
        		//显示内容
				$(".jaqyjj").addClass("gxlsdisno");
				$(".zxnslage").removeClass("gxlsdisno");
				$(".jalxwowo").addClass("gxlsdisno");
				//改变样式
				$(".jajistt").removeClass("gbzihcss");
				$(".jazxnstt").addClass("gbzihcss");
				$(".jalxwmtt").removeClass("gbzihcss");
        	}
        	if(this.$route.query.qytype == 3){
        		//显示内容
				$(".jaqyjj").addClass("gxlsdisno");
				$(".zxnslage").addClass("gxlsdisno");
				$(".jalxwowo").removeClass("gxlsdisno");
				//改变样式
				$(".jajistt").removeClass("gbzihcss");
				$(".jazxnstt").removeClass("gbzihcss");
				$(".jalxwmtt").addClass("gbzihcss");
        	}
        }
    }
</script>
