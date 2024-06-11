<template>
	<header>
		<div class="logo">
			<img src="@/assets/decoration/LOGO.png" alt="sky-logo.png" />
		</div>

		<span class="piece"></span>

		<nav>
			<span class="right-line">
				<RouterLink class="l" to="/">主页</RouterLink>
			</span>
			<span class="right-line">
				<RouterLink class="b" to="/member">成员</RouterLink>
			</span>
			<span>
				<RouterLink class="r" to="/achievement">荣誉</RouterLink>
			</span>
		</nav>

		<div class="bottom-box">
			<span>WELCOM</span>
			<span>TO</span>
			<span style="color: #fac830">JOIN</span>
			<span>US</span>
			<span class="box"></span>
			<span class="long-box"></span>
			<span class="box"></span>
		</div>
	</header>
</template>

<script setup lang="ts">
</script>

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

.piece {
	float: right;
	width: 25px;
	height: 40px;
	background-color: #5ea0d8;
	margin: 27px 0 0 20px;
}

// logo
.logo {
	width: 170px;
	height: 150px;
	border-bottom: 2px solid #333;
	box-sizing: border-box;
	float: left;

	img {
		width: 100%;
		height: 100%;
	}
}

// nav
nav {
	float: right;
	margin-top: 30px;
	height: 40px;
	line-height: 40px;

	a {
		width: 100%;
		display: block;
		border-radius: 10px;
		transition: all 0.7s;

		text-decoration: none;
		color: #333;
	}

	span {
		float: left;
		width: 78px;
		padding: 0 15px;
		text-align: center;
	}

	.right-line {
		border-right: 1px #333 solid;
	}

	.y:hover {
		background-color: #ffeea4;
	}

	.b:hover {
		background-color: #87cefa;
	}

	.r:hover {
		background-color: #f2b9b2;
	}

	.l:hover {
		background-color: #8cc269;
	}
}

// bottom-box
.bottom-box {
	position: absolute;
	box-sizing: border-box;
	right: 40px;
	bottom: 0;
	padding-top: 14px;
	// overflow: hidden;

	border-top: 1px black solid;
	font-size: 36px;
	font-weight: 700;
	// BFC
	overflow: hidden;


	span {
		margin-right: 15px;
		float: left;
	}

	:last-child {
		margin-right: 0;
	}

	.long-box {
		height: 35px;
		width: 371px;
		background-image: linear-gradient(to left, #f6c431, #5fa0d8);
	}

	.box {
		width: 35px;
		height: 35px;
		background-image: none;
		display: inline-block;
		background-color: #fac830;
	}

	.box,
	.long-box {
		margin-top: 4.5px;
	}
}
</style>