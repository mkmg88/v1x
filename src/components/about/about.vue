<template>
	<loading :load="loading"></loading>
	<div>
		<h1>about</h1>
		<div>{{about}}</div>
	</div>
</template>

<script>
	import loading from 'COMPONENT/loading/loading'

	export default {
		data(){
			return {
				loading: true,
				about: '说明1号'
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
	
</style>