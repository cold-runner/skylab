<template>
	<main>
		<titleCard :src=titleImg
				   chinese="成就"
				   content="ACHIEVEMENT"
				   color_first="#f09a1f"
				   color_second="#000" />

		<div class="nine-grid">
			<ul>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/1.jpg" />
					<img
						 class="right"
						 src="@/assets/honor/2.jpg" />
					<img
						 class="bottom"
						 src="@/assets/honor/3.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/4.jpg" />
					<img
						 class="right"
						 src="@/assets/honor/5.jpg" />
					<img
						 class="left"
						 src="@/assets/honor/6.jpg" />
					<img
						 class="bottom"
						 src="@/assets/honor/7.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/8.jpg" />
					<img
						 class="left"
						 src="@/assets/honor/9.jpg" />
					<img
						 class="bottom"
						 src="@/assets/honor/10.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/11.jpg" />
					<img
						 class="right"
						 src="@/assets/honor/12.jpg" />
					<img
						 class="top"
						 src="@/assets/honor/13.jpg" />
					<img
						 class="bottom"
						 src="@/assets/honor/14.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/other/ckzj.jpg" />
					<img
						 class="right"
						 src="@/assets/other/czh.png" />
					<img
						 class="left"
						 src="@/assets/other/lyt.jpg" />
					<img
						 class="top"
						 src="@/assets/other/wd.jpg" />
					<img
						 class="bottom"
						 src="@/assets/other/ckbd.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/20.jpg" />
					<img
						 class="left"
						 src="@/assets/honor/21.jpg" />
					<img
						 class="top"
						 src="@/assets/honor/22.jpg" />
					<img
						 class="bottom"
						 src="@/assets/honor/23.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/24.jpg" />
					<img
						 class="right"
						 src="@/assets/honor/25.jpg" />
					<img
						 class="top"
						 src="@/assets/honor/26.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/27.jpg" />
					<img
						 class="right"
						 src="@/assets/honor/15.jpg" />
					<img
						 class="left"
						 src="@/assets/honor/16.jpg" />
					<img
						 class="top"
						 src="@/assets/honor/17.jpg" />
				</li>
				<li>
					<img
						 class="first"
						 src="@/assets/honor/18.jpg" />
					<img
						 class="left"
						 src="@/assets/honor/19.jpg" />
					<img
						 class="top"
						 src="@/assets/honor/233.png" />
				</li>
			</ul>
		</div>

		<img class="star-a4 absolute"
			 src="@/assets/decoration/A4.png"
			 alt="" />

		<img class="cloud-c4 absolute"
			 src="@/assets/decoration/C4.png"
			 alt="" />

		<img class="star-01-a4 absolute"
			 src="@/assets/decoration/A4.png"
			 alt="" />

		<img class="cloud-01-c4 absolute"
			 src="@/assets/decoration/C4.png"
			 alt="" />
		<img class="cloud-02-c4 absolute"
			 src="@/assets/decoration/C4.png"
			 alt="" />
	</main>
</template>

<script setup lang="ts">
	import titleCard from '@/components/title-card.vue'

	let titleImg = new URL('@/assets/decoration/title_yellow.png', import.meta.url).href
</script>

<style scoped lang="scss">
.title {
	text-align: center;
	font-size: 80px;

	font-weight: 700;

	p {
		margin-top: 10px;
	}

	img {
		width: 300px;
		height: 70px;
		display: block;
		margin: 0 auto;
	}
}

main {
	position: relative;
	padding-top: 70px;
}

.absolute {
	position: absolute;
}

p {
	margin: 0
}

ul {
	padding: 0;

	li {
		list-style: none;
	}

	&:last-child {
		&:after {
			content: "";
			display: block;
			height: 0;
			clear: both;
			visibility: hidden;
		}
	}
}

.star-a4 {
	top: 0;
	left: 0;
	width: 270px;
	height: 270px;
}

.cloud-c4 {
	top: -70px;
	right: -70px;
	width: 400px;
	height: 400px;
}

.star-01-a4 {
	top: 400px;
	right: -30px;
	width: 500px;
	height: 500px;
	z-index: -999;
}

.cloud-01-c4 {
	top: 400px;
	left: 0;
	width: 600px;
	z-index: -999;
}

.cloud-02-c4 {
	bottom: -200px;
	left: 200px;
	width: 800px;
	z-index: -999;
}

/* 九宫格 */
.nine-grid {
	width: 900px;
	margin: 70px auto;

	:nth-child(3n) {
		margin-right: 0;
	}

	:nth-child(7),
	:nth-child(8),
	:nth-child(9) {
		margin-bottom: 0;
	}

	li {
		position: relative;
		float: left;
		width: 250px;
		height: 300px;
		margin: 0 75px 30px 0;

		img {
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0;
			width: 100%;
			height: 100%;
			transition: 0.5s;

			&.first {
				opacity: 1;
			}
		}

		&:hover img.right {
			left: 250px;
			z-index: 999;
			opacity: 1;
		}

		&:hover img.left {
			left: -250px;
			z-index: 999;
			opacity: 1;
		}

		&:hover img.bottom {
			top: 300px;
			z-index: 999;
			opacity: 1;
		}

		&:hover img.top {
			top: -300px;
			z-index: 999;
			opacity: 1;
		}
	}
}
</style>