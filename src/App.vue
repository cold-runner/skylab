<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import SkyFooter from '@/components/sky-footer.vue'
	import SkyHeader from '@/components/sky-header.vue'
</script>

<template>
	<SkyHeader />
	<RouterView />
	<SkyFooter />
</template>
