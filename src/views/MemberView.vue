<template>
	<div class="container">
		<titleCard :src=titleImg
				   chinese="成员"
				   content="MEMBER"
				   color_first="#000"
				   color_second="#2e34d3" />

		<div class="buttonBx" @click="change">
			<img :src="buttonImg" alt="">
		</div>

		<div class="member">
			<template v-for="(memberGroup, index) in allMember" :key="index">
				<section ref="memberGroups">

					<frostedGlass v-for="member in memberGroup" :key="member.avatar"
								  :avatar="member.avatar"
								  :title_first="member.name"
								  :title_second="member.grade + member.major"
								  :content="member.introduction" />

				</section>
			</template>
		</div>
	</div>

</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue'
	import { allMember } from '@/hooks/useMember'

	import titleCard from '@/components/title-card.vue'
	import frostedGlass from '@/components/frosted-glass.vue'

	let titleImg = new URL('@/assets/decoration/title_blue.png', import.meta.url).href
	let buttonImg = new URL('@/assets/decoration/button.png', import.meta.url).href

	let memberGroups = ref()

	class MembersWithIndex {
		member: HTMLElement[]
		currIndex: number

		constructor(member: []) {
			this.member = member
			this.currIndex = 0
		}
	}

	let membersWithIndex: MembersWithIndex[] = new Array()

	onMounted(() => {
		let mems = memberGroups.value
		for (let idx in mems) {
			membersWithIndex.push(new MembersWithIndex(mems[idx].children))
			mems[idx].children[0].style.zIndex = '100'
		}
	})

	let change = () => {
		for (let idx in membersWithIndex) {
			let currMemberGroup = membersWithIndex[idx].member
			let currIdx: number = membersWithIndex[idx].currIndex

			currMemberGroup[currIdx].style.opacity = '0'
			currMemberGroup[currIdx].style.zIndex = '-100'

			currMemberGroup[(currIdx + 1) % currMemberGroup.length].style.opacity = '1'
			currMemberGroup[(currIdx + 1) % currMemberGroup.length].style.zIndex = '100'

			membersWithIndex[idx].currIndex = (currIdx + 1) % membersWithIndex[idx].member.length
		}
	}
</script>

<style scoped lang="scss">
.container {
	padding-top: 70px;

	button {
		margin: auto;
		display: block;
		width: 50px;
		height: 50px;
	}

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
		transform: rotate(180deg);
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
	}

	>* {
		position: absolute;
	}

	width: 270px;
	height: 500px;

}
</style>