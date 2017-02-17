<template>
	<div class="g-loading" v-show="load" transition="fade">
		<span>加载中</span>
	</div>
</template>

<script>
	export default {
		props: {
			load: {
				type: Boolean
			}
		}
	}
</script>

<style lang="sass">
	.g-loading {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 15;
		

		&.fade-transition {
			transition: all 1.28s;
			background: rgba(255,255,255,0.9);
			opacity: 1;
		}
		&.fade-enter {
			background: rgba(255,255,255,0);
			opacity: 0;
		}

		&.fade-leave {
			background: rgba(255,255,255,0);
			opacity: 0;
		} 
	}


</style>