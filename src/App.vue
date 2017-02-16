<template>
	<div>
		<!-- 左边导航栏 -->
		<left-area :sub="submenu"></left-area> 
		
		<!-- router-view 路由出口 -->
		<div id="rightArea">
  			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import leftArea from 'COMPONENT/header/header'

export default {
	data() {
		return {
			submenu: []
		}
	},
	components: {
		'left-area': leftArea
	},
	created() {
		this.$http.get('http://localhost:2016/submenu').then((res) => {
			this.submenu = res.body.result;
			console.log(this.submenu);
		});
	}
}
</script>

<style>
	html, body {
		width:100%; 
		height:100%;
		
		min-width:980px;
	}
	body {
		font: 14px/1.4286 "microsoft yahei",sans-serif;
		background: #ccc;
		color: #333;
	}
	a {
		color: #333;
		text-decoration: none;
	}

	#app {
		width: 100%;
		height: 100%;
		min-width: 980px;
		overflow: hidden;
		position: relative;
		min-height: 760px;
	}

	#rightArea {
		position: absolute;
		left: 296px;
		right: 0;
		top: 0;
		height: 100%;

	}
</style>