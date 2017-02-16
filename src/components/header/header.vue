<template>
	<div id="leftArea">
		<h1 class="logo" style="cursor: pointer;">
			<img src="logo.png" alt="劇場版 あの日見た花の名前を僕達はまだ知らない。">
		</h1>

		<ul class="globalMenu">
			<li><a v-link="{path: '/index'}">イントロダクション</a></li>
			<li><a v-link="{path: '/goods'}">商品情報</a></li>
			<li><a v-link="{path: '/about'}">ストーリー</a></li>
		</ul>
		
		<dl class="subMenu" >
			<dt>{{title}}</dt>
			<dd v-for="s in sub">
				{{s}}
			</dd>
		</dl>
	</div>

	
</template>

<script>
	export default {
		data(){
			return {
				title: '特别赞助'
			}
		},
		props: {
			sub: {
				type: Array
			}
		}
	}
</script>

<style lang="sass">
	#leftArea {
		position:absolute;
		left:0px;
		top:0px;
		width:296px;
		height:100%;
		z-index:1000;
		background: #fff;

		.logo {
			position:absolute;
			left:10%;
			top: 2%;
			width: 80%;

			img {
				width: 100%;
			}
		}

		.globalMenu {
			position: absolute;
			left: 10%;
			width: 80%;
			top: 28%;
			li {
	 			a {
	 				display: block;
	 				line-height: 36px;
	 				font-size: 14px;
	 				text-align: center;
	 				border-bottom: 1px solid #EAEAEA;
	 				&:hover {
	 					color: #38B25D;
	 					border-bottom: 1px solid;
	 				}
	 				&.active {
	 					color: #38B25D;
	 					
	 				}
	 			}
			}
		}

		.subMenu {
			width:296px;
			height: 393px;
			position:absolute;
			left:0px;
			bottom:0px;
			text-align: center;

			dt {
				font-size: 16px;
				font-weight: bold;
				line-height: 40px;
				border-bottom: 1px solid #eaeaea;
				margin-bottom: 15px;
			}

			dd {
				width:296px;
				height:31px;
				overflow:hidden;
				position:relative;
				cursor:pointer;
			}
		}

		

	}
</style>