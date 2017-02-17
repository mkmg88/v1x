<template>
<loading :load="loading"></loading>
<div>
	<div class="path">{{path}}</div>
	<div>sadsa</div>
</div>
</template>

<script>
	import loading from 'COMPONENT/loading/loading'
	export default {
		data(){
			return {
				loading: true,
				path: '建设路25号'
			}
		},
		components: {
			loading
		},
		created() {
			setTimeout(() => {
				this.loading = false;
			},1000);
		}
	}
</script>

<style>
	.path {
		width: 300px;
		height: 300px;
		background: pink;
	}
</style>