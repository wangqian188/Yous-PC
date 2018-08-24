<style lang="less">
/*页面底部的css样式*/
	.zuidalage{position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;}
	.lagetop{border:1px solid red;position: absolute;top: 0px;left: 0px;right: 18px;height: 60px;z-index: 12;}/*background-color: #1d1d1d;*/
	.large{border:1px solid red;position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;min-width: 1200px;overflow: auto;background-color: white;}
	
</style>

<template>
	<div class="zuidalage">
		<!--公共的头部-->
		<div class="lagetop">
			<Footertop></Footertop>
		</div>
		<!---->
		<div class="large">
			企业互联的页面
		</div>
	</div>
</template>
<script>
	import Footertop from './header.vue'
	
    export default {
    	components: {
		    Footertop,
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
