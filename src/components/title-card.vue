<template>
	<div class="title">
		<img :src="props.src" alt="title.png" />
		<span :style="{ 'color': props.color_first }">{{ props.chinese?.charAt(0) }}</span>
		<span :style="{ 'color': props.color_second }">{{ props.chinese?.charAt(1) }}</span>
		<p>{{ content }}</p>
	</div>
</template>

<script setup lang="ts">
	let props = defineProps({
		src: {
			type: String,
			required: true
		},
		color_first: String,
		color_second: String,
		chinese: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
	})

</script>

<style scoped>
.title {

	text-align: center;
	font-size: 80px;

	font-weight: 700;

	p {
		margin: 10px 0 0 0;
		font-size: 32px;
	}

	img {
		width: 300px;
		height: 70px;
		display: block;
		margin: 0 auto;
	}

	span {
		padding: 0 10px;
	}
}
</style>