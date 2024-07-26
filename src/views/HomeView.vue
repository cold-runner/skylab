<script setup lang="ts">
let history = new Date().getFullYear() - 2004
</script>

<template>
	<main>
		<div class="box1">
			<div class="left">
				<div class="little-star star-0-ud">
					<img src="@/assets/decoration/A4.png" alt="" title="" style="">
				</div>
				<h1>这是我们的工作室</h1>
				<p>
					具有 {{ history }} 年历史，拥有教学丰富、完善的培养机制，专业老师带领，对学生进行阶梯式培养让人欲罢不能的自学模式，颠覆你的想象。
				</p>
				<p>
					这里卧虎藏龙，充满着青春和自律的的味道。独立的学习空间，让你的学习更有效率，工作室拥有百兆宽带，晚自习在工作室进行，可以使用电脑，学习更广泛。
				</p>
			</div>
			<div class="right">
				<img src="@/assets/other/gzs.jpg" alt="" />
			</div>
		</div>
		<!--<div class="box2">
		<div class="yellow-bar"></div>
		<div class="decoration">
			<img src="@/assets/decoration/A4-a.png" alt="" class="star-1-ud">
		</div>
		<div class="top">
			<img src="@/assets/other/family.jpg" alt="" />
		</div>

	</div>-->
		<!--<div class="bottom">
		<div class="study-card" style="width: 390px">
			<h1>这是我们的传承活动</h1>
			<p>
				学长、学姐带你解答大学困惑，无论是技术、学习、生活方面，学长学姐亲自讲述，答疑解惑。每周不落的定期例会，每个人集一周所学与大家分享本周所感所得。一个人卷太寂寞，别怕，这里有志同道合的一群人，一起玩、一起卷，归属感，自豪感在这里你一定会感受的淋漓尽致！
			</p>
		</div>
		<div class="right">
			<div><img src="@/assets/other/zh.jpg" alt="" /></div>
			<div><img src="@/assets/other/xyj.jpg" alt="" /></div>
			<div><img src="@/assets/other/hy.jpg" alt="" /></div>
			<div><img src="@/assets/other/tl.jpg" alt="" /></div>
		</div>
	</div>-->
		<div class="box3">
		</div>
		<div class="box4">
			<!-- 前端介绍 -->
			<div class="frontend">
				<div class="tech-logo" style="margin-right: 75px">
					<div class="h5-spin">
						<img src="@/assets/other/h5.png" alt="" />
					</div>
					<div class="css-spin">
						<img src="@/assets/other/css.png" alt="" />
					</div>
					<div class="js-spin">
						<img src="@/assets/other/javascript.png" alt="" />
					</div>
					<div class="vue-spin">
						<img src="@/assets/other/vue.png" alt="" />
					</div>
					<div class="react-roll">
						<img src="@/assets/other/react.png" alt="" />
					</div>
					<div class="webpack-roll">
						<img src="@/assets/other/webpack.png" alt="" />
					</div>
				</div>
				<div class="study-card">
					<img
						 src="@/assets/decoration/A4.png"
						 alt=""
						 class="star-0 star-0-ud" />
					<h1>在这里你能学到什么?</h1>
					<p>
						① 前端: 前端开发是创建Web页面或app等前端界面呈现给用户的过程，通过HTML,
						CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互。
					</p>
				</div>
			</div>
			<!-- 后端介绍 -->
			<div class="backend">
				<div class="study-card" style="margin-right: 75px">
					<p>
						② 后端:
						后端负责处理用户数据和业务逻辑，包括服务器架设、操作数据库、在高并发场景中保证服务性能、保证服务安全性、集群管理等，需要开发者至少掌握一种高级语言，并掌握Linux、MySQL、Redis、Kafka、Nginx等技术的使用方法和底层原理。看不到但又被用来为前端提供支持的东西就是后端。
					</p>
				</div>
				<div class="tech-logo">
					<div><img src="@/assets/other/c.png" alt="" /></div>
					<div>
						<img src="@/assets/other/java.png" alt="" />
					</div>
					<div>
						<img src="@/assets/other/go-zero.png" alt="" />
					</div>
					<div>
						<img src="@/assets/other/python.png" alt="" />
					</div>
					<div>
						<img src="@/assets/other/centos.png" alt="" />
					</div>
					<div>
						<img src="@/assets/other/nginx.png" alt="" />
					</div>
				</div>
			</div>
			<!-- UI设计介绍 -->
			<div class="ui" style="margin-bottom: 0px">
				<div class="ui-pic">
					<div><img src="@/assets/decoration/gz.png" alt="" /></div>
					<div style="top: 350px; height: 500px">
						<img src="@/assets/decoration/A2.png" alt="" />
					</div>
				</div>
				<div class="study-card" style="height: 600px; margin-top: 100px">
					<p>
						③ UI设计：
						我们身边的诸多事务都离不开UI，无论是我们浏览的APP、网站，还是现实生活中看到的广告海报，又或是游戏中的人物形象，形形色色的Logo。UI设计，即用户界面。负责使用户与产品间有机、高效地结合。好的UI设计不仅是让软件变得有个性有品位，还要让软件的操作变得舒适简单、自由。充分体现软件的定位和特点
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
p {
	font-size: 22px;
	line-height: 40px;
	text-indent: 2em;
}

/* box1 */
.box1 {
	display: flex;
	justify-content: space-between;
	margin-top: 100px;

	.left {
		width: 750px;
		padding: 20px 0;
		border-radius: 40px;
		background-color: #fff;
		box-shadow: 1px 1px 10px #bababa;
		transition: all 0.3s;

		&:hover {
			box-shadow: 1px 1px 10px black;
		}

		h1 {
			padding: 15px;
		}

		p {
			text-align: left;
			padding: 0 60px;
		}

		.little-star {
			width: 200px;
		}

		.little-star img {
			transform: rotate(-10deg);
			float: left;
		}
	}

	.right {
		width: 330px;
		border-radius: 40px;
		overflow: hidden;
		box-shadow: 1px 1px 20px #bababa;

		img {
			width: 100%;
			height: 100%;
		}
	}
}

/* box2 */
.box2 {
	position: relative;
	width: 890px;
	margin-top: 200px;

	.yellow-bar {
		float: left;
		height: 950px;
		width: 120px;
		border-radius: 40px;
		background-color: #f6c431;
		z-index: -2;
	}

	.decoration {
		float: right;
		width: 630px;
		height: 630px;
		position: absolute;
		// top: 480px;
		left: -111px;
		transform: rotateZ(-20deg);
		z-index: -1;
	}

	.top {
		float: right;
		height: 518px;
		width: 100%;
		border-radius: 40px;
		background-color: #fff;
		overflow: hidden;
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



.box2 .bottom {
	display: flex;
	justify-content: space-between;
	overflow: visible;
}

.box2 .bottom .right {
	padding-top: 40px;
	width: 460px;
	height: 100%;
}

.box2 .bottom .left p {
	font-size: 22px;
	line-height: 40px;
	padding: 0 50px;
	text-indent: 2em;
}

.box2 .bottom h1 {
	margin-bottom: 20px;
}

.box2 .bottom .right div {
	float: left;
	width: 200px;
	height: 200px;
	margin-left: 25px;
	margin-bottom: 25px;
	overflow: hidden;
	border-radius: 40px;
}

/* box3 */

.box3 {
	position: absolute;
	top: 630px;
	margin-left: 48px;
	margin-top: 100px;
	height: 1132px;
	width: 125px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}



.box3 .bottom {
	height: 125px;
	width: 125px;
	border-radius: 40px;
	background-color: #fff;
}

/* box4 */
.box4 {
	width: 1075px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 150px auto 0px;
}

.frontend,
.backend,
.ui {
	display: flex;
	width: 100%;
	margin-bottom: 150px;
}

.tech-logo {
	width: 600px;
	height: 400px;
}

.tech-logo div {
	width: 200px;
	height: 200px;
	float: left;
	transition: all 0.4s;
}

.study-card {
	position: relative;
	width: 400px;
	border-radius: 40px;
	padding: 50px;
	box-shadow: 1px 1px 20px #bababa;
	transition: all 0.3s;
}

.star-0 {
	width: 244px;
	height: 244px;
	position: absolute;
	top: -140px;
	right: -100px;
	transform: rotateZ(270deg);
}

/* ui设计 */
.ui-pic {
	position: relative;
	width: 675px;
	height: 800px;
}

.ui-pic div {
	position: absolute;
	width: 600px;
	height: 400px;
}


.study-card:hover {
	box-shadow: 1px 1px 10px black;
}

.tech-logo div:hover {
	transform: scale(1.2);
}

* {
	box-sizing: border-box;
}

html {
	height: 100%;
	font-size: 14px;
}

body {
	margin: 0;
	height: 100%;
	color: #333;
	background-color: #f4f4f4;
	min-width: 1240px;
	font: 1em/1.4 "Microsoft Yahei", "PingFang SC", "Avenir", "Segoe UI", "Hiragino Sans GB",
		"STHeiti", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif;
}

ul,
h1,
h3,
h4,
p,
dl,
dd {
	padding: 0;
	margin: 0;
	text-align: center;
}

a {
	text-decoration: none;
	color: #333;
	outline: none;
}

i {
	font-style: normal;
}

/* input[type="text"],
input[type="search"],
input[type="password"],
input[type="checkbox"] {
  padding: 0;
  outline: none;
  border: none;
  -webkit-appearance: none;
}
input[type="text"]::placeholder,
input[type="search"]::placeholder,
input[type="password"]::placeholder,
input[type="checkbox"]::placeholder {
  color: #ccc;
} */
img {
	width: 100%;
	height: 100%;
}

img {
	max-width: 100%;
	max-height: 100%;
	vertical-align: middle;
}

ul {
	list-style: none;
}

li {
	list-style: none;
	padding: 0;
	margin: 0;
}

#app {
	background: #f5f5f5;
	user-select: none;
}

.container {
	width: 1240px;
	margin: 0 auto;
	position: relative;
}

.ellipsis {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.ellipsis-2 {
	word-break: break-all;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.fl {
	float: left;
}

.fr {
	float: right;
}

.clearfix:after {
	content: ".";
	display: block;
	visibility: hidden;
	height: 0;
	line-height: 0;
	clear: both;
}

.fade-leave-active {
	position: absolute;
	width: 100%;
	transition: opacity 0.5s 0.2s;
	z-index: 1;
}

.fade-leave-to {
	opacity: 0;
}

.fade-right-enter-to,
.fade-right-leave-from {
	opacity: 1;
	transform: none;
}

.fade-right-enter-active,
.fade-right-leave-active {
	transition: all 0.5s;
}

.fade-right-enter-from,
.fade-right-leave-to {
	opacity: 0;
	transform: translate3d(20px, 0, 0);
}

@keyframes up-down {
	0% {
		translate: 0px 0px;
	}

	50% {
		translate: 0px 20px;
	}

	100% {
		translate: 0px 0px;
	}
}

@keyframes roll {
	0% {
		transform: rotate(0deg);
	}

	50% {
		transform: rotate(180deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		transform: rotateY(0deg);
	}

	50% {
		transform: rotateY(180deg);
	}

	100% {
		transform: rotateY(360deg);
	}
}

@keyframes spinjs {
	0% {
		transform: rotateY(0deg);
	}

	50% {
		transform: rotateY(45deg);
	}

	100% {
		transform: rotateY(0deg);
	}
}

@keyframes spinh5 {
	0% {
		transform: rotateY(0deg);
	}

	50% {
		transform: rotateY(90deg);
	}

	100% {
		transform: rotateY(0deg);
	}
}

.star-0-ud {
	animation: up-down 5s linear 0s infinite normal;
}

.star-1-ud {
	animation: up-down 3s linear 0s infinite normal;
}

.react-roll {
	animation: roll 6s linear 0s infinite normal;
}

.webpack-roll {
	animation: roll 6s linear 0s infinite normal;
}

.vue-spin {
	animation: spin 6s linear 0s infinite normal;
}

.h5-spin {
	animation: spinh5 3s linear 1s infinite normal;
}

.css-spin {
	animation: spinh5 3s linear 0.5s infinite normal;
}

.js-spin {
	animation: spinjs 3s linear 0s infinite normal;
}
</style>