<template>
	<loading :load="loading"></loading>

	<div class="hd" v-if="seller">
		<p class="index_mainVisual">
			<img src="./keyvisual.jpg" alt="あの花の名前">
		</p>

		<div class="index_content">
			<h1>{{seller.name}}</h1>
			<div class="avatar"><img :src="seller.avatar" alt="{{title}}"></div>
			<p class="bulletin">{{seller.bulletin}}</p>

			<ul class="supports">
				<li v-for="item in seller.supports" class="support-{{item.type}}">
					<i>{{item.type}}、</i>{{item.description}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import loading from 'COMPONENT/loading/loading'

	export default {
		data(){
			return {
				loading: true,
				seller: {}
			}
		},
		components: {
			loading
		},
		created(){ 
			this.$http.get('http://localhost:2016/seller').then((res) => {
				this.seller = res.body.result;

				setTimeout(() => {
					this.loading = false;
				},1000);

			});
		},
		route: {
			deactivate(transition) {
				this.loading = true;
				setTimeout(() => {
					transition.next();
				},3000);
			}
		}
	}
</script>

<style lang="sass">
	.hd {
		height: 100%;
	}
	.index_mainVisual {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		img {
			position: absolute;
		    width: 100%;
		    max-width: 1650px;
		    height: 100%;
		    object-fit: cover;
		    left: 0;
		    top: 0;
		}
	}

	.index_content {
		position: relative;
		z-index: 2;
		color: #fff;
		padding: 50px;
		h1 {
			font-size: 20px;
			margin-bottom: 15px;
		}
		.avatar {
			float: left;
			width: 100px;
			height: 100px;
			margin-right: 20px;
			margin-bottom: 20px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}
		.bulletin {
			line-height: 1.6;
			height: 100px;
			margin-bottom: 20px;
		}
		.supports {
			overflow: hidden;
		}
	}

</style>