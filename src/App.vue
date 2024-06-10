<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import SkyFooter from '@/components/sky-footer.vue'
	import SkyHeader from '@/components/sky-header.vue'
</script>

<template>
	<header>
		<SkyHeader />
	</header>
	<main>
		<RouterView />
	</main>
	<footer>
		<SkyFooter />
	</footer>
</template>

<style scoped lang="scss">
header {
	font-size: 14px;
	position: relative;

	&:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
}

main {
	position: relative;
}

footer {
	padding: 30px 0 0 0;
	font-size: 14px;
	text-align: center;
}
</style>