<style lang="less">

</style>

<template>
	
</template>
<script>
	
    export default {
        data () {
        	if(this.$route.query.qytype == 1){
        		this.$router.push({ path: '/gxls',query:{qytype:1,type:7}});
        	}
        	if(this.$route.query.qytype == 2){
        		this.$router.push({ path: '/gxls',query:{qytype:2,type:7}});
        	}
        	if(this.$route.query.qytype == 3){
        		this.$router.push({ path: '/gxls',query:{qytype:3,type:7}});
        	}
        	return {

        	}
        },
		created(){

		},
        methods: {
			
        },

        mounted: function(){
        	
        }
    }
</script>
