<template>
	<div class="card">
		<div class="content">
			<div class="imgBx">
				<img :src="props.avatar" />
			</div>
			<h2>{{ props.title_first }}</h2>
			<h3>{{ props.title_second.slice(0, 4) + " " + props.title_second.slice(4) }}</h3>
			<p>{{ props.content }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import VanillaTilt from 'vanilla-tilt'
	import { onMounted } from 'vue'

	let props = defineProps({
		avatar: {
			type: String,
			required: true
		},
		title_first: {
			type: String,
			required: true
		},
		title_second: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		}
	})

	onMounted(() => {
		let cards = document.querySelectorAll('.card') as any
		VanillaTilt.init(cards, {
			max: 20,
			speed: 400,
			glare: true,
			reverse: true,
			"max-glare": 1,
		})
	})


</script>

<style scoped lang="scss">
.card {
	width: 270px;
	height: 500px;
	overflow: hidden;
	border-radius: 15px;
	border-top: 1px solid rgba($color: #d1d5db, $alpha: 0.5);
	border-left: 1px solid rgba($color: #d1d5db, $alpha: 0.5);
	backdrop-filter: blur(16px) saturate(200%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);

	background-image: linear-gradient(135deg, #bfb6ff 10%, #78adfb 100%);
	color: #f3f4f5;
	transition: opacity .7s;
	text-align: center;

	.content {
		padding: 40px 20px 0 20px;
	}

	$side_length: 120px;

	.imgBx {
		width: $side_length;
		height: $side_length;
		margin: auto;
		overflow: hidden;
		border-radius: 50%;

		img {
			width: 100%;
			height: 100%;
		}
	}

	h3 {
		z-index: 1;
	}


	p {
		font-size: 1em;
		font-weight: 300;

	}


}
</style>
