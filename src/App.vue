<template>
	<div id="app">
		<!-- 추가된 헤더 컴포넌트 사용 -->
		<Header />
		<SideNav />
		<router-view />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

		<!-- 추가된 풋터 컴포넌트 사용 -->
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header'; //import 헤더 추가
import HelloWorld from './components/HelloWorld.vue';
import Footer from './components/Footer'; //import 풋터 추가
import SideNav from './components/SideNav';

export default {
	name: 'App',
	components: {
		// SideNav,
		Header, //헤더 컴포넌트 추가
		HelloWorld,
		Footer, //풋터 컴포넌트 추가
	},
};
</script>

<style>
html,
body {
	padding: 0;
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin: 0;
	padding: 0;
}
/* 부트스트랩 적용 */
@import '~bootstrap/dist/css/bootstrap.css';
</style>
