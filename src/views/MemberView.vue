<template>
	<main>
		<titleCard :src=titleImg
				   chinese="成员"
				   content="MEMBER"
				   color_first="#000"
				   color_second="#2e34d3" />

		<div class="buttonBx" @click="index++">
			<img :src="buttonImg" alt="">
		</div>

		<div class="member">
			<section v-for="(memberGroup, index) in allMember" :key="index" ref="mgRefs">
				<template v-for="member in memberGroup" :key="member.avatar">
					<frostedGlass
								  :avatar="member.avatar"
								  :title_first="member.name"
								  :title_second="member.grade + member.major"
								  :content="member.introduction" />
				</template>
			</section>
		</div>
	</main>

</template>

<script setup lang="ts">
	import { ref, watch } from 'vue'
	import { allMember } from '@/hooks/useMember'

	import titleCard from '@/components/title-card.vue'
	import frostedGlass from '@/components/frosted-glass.vue'

	let titleImg = new URL('@/assets/decoration/title_blue.png', import.meta.url).href
	let buttonImg = new URL('@/assets/decoration/button.png', import.meta.url).href

	let index = ref(0)
	let mgRefs = ref<HTMLElement[]>([])

	watch(index, (newIndex, oldIndex) => {
		for (let i = 0; i < allMember.length; i++) {
			let section: HTMLElement = mgRefs.value[i]
			let preCard: HTMLElement = section.children[oldIndex % section.childElementCount] as HTMLElement
			let currCard: HTMLElement = section.children[newIndex % section.childElementCount] as HTMLElement

			preCard.style.opacity = '0', preCard.style.zIndex = '-1'
			currCard.style.opacity = '1', currCard.style.zIndex = '1'
		}
	})

</script>

<style scoped lang="scss">
main {
	padding-top: 70px;

	.member {
		padding-top: 30px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-evenly;
		align-items: center;
	}
}

.buttonBx {
	width: 200px;
	height: 200px;
	margin: 20px auto 0;
	transition: .7s;

	&:hover {
		cursor: pointer;
		transform: rotate(360deg);
	}

	img {
		width: 100%;
		height: 100%;
	}
}

section {
	display: flex;
	padding-top: 20px;

	>*:nth-child(n+2) {
		opacity: 0;
		z-index: -1;
	}

	>* {
		position: absolute;
	}

	width: 270px;
	height: 500px;

}
</style>