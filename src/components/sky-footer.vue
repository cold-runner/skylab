<template>
	<footer>
		<p>
			<span>UI设计：高铮</span>
			|
			<span>前端：梁婧宁
				<a href="https://zzzheng.com/" target="_blank">郑赫</a>
				闫正心
			</span>
			|
			<span>后端：<a href='https://zzzheng.com/' target="_blank">郑赫</a></span>
		</p>
		<p>
			<span>网站贡献者：SKY工作室 全体成员</span>
		</p>
		<p>
			本网站由
			<a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank">
				<img class="upy-logo" src="@/assets/upyun-logo.svg" /> 又拍云
			</a>
			提供 CDN加速 / 云存储服务
		</p>
		<p>
			<span>©{{ new Date().getFullYear() }}</span> | <span>辽宁省沈阳市沈阳师范大学软件学院 SKY工作室</span> |
			<span>
				<a href="https://beian.miit.gov.cn/">
					<img class="upy-logo" src="@/assets/beian-miit.svg" /> 辽ICP备2021011233号-3</a>
			</span>
		</p>
	</footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
$textcolor: #212121;
$transition_time: 0.3s;
$link_hover_color: #00a1d6;

footer {
	padding: 30px 0 0 0;
	font-size: 14px;
	text-align: center;
}

p {
	color: $textcolor;
	height: 20px;
	margin: 5px 0;
}

span {
	padding: 0 2px;
}

.upy-logo {
	width: 1em;
	vertical-align: top;
}

a {
	transition: color $transition_time;
	text-decoration: none;
	color: $textcolor;

	&:hover {
		color: $link_hover_color;
	}
}
</style>