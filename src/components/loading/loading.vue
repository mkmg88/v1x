<template>
	<div class="g-loading" v-show="load">
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

<style>
	.g-loading {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(255,255,255,0.8);
		left: 0;
		top: 0;
		z-index: 15;
	}
</style>