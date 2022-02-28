import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from "../views/HomeView.vue";
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import Login from '@/views/Login'; //게시판 로그인 컴포넌트 호출
import Join from '@/views/Join'; //게시판 회원가입 컴포넌트 호출
import Admin from '@/views/Admin'; //게시판 관리자 컴포넌트 호출
import Login_Join from '@/views/Login_Join';

Vue.use(VueRouter);

// 각 URL에 맞춰 표시할 컴포넌트 지정
const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/join',
		name: 'join',
		component: Join,
	},
	{
		path: '/admin',
		name: 'admin',
		component: Admin,
	},
	{
		path: '/login_join',
		name: 'login_join',
		component: Login_Join,
	},
	// {
	//   path: "/about",
	//   name: "about",
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () =>
	//     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	// },
];

// 뷰 라우터 정의
const router = new VueRouter({
	mode: 'history', // 라우터 url의 해시값(#)을 없애는 방법
	base: process.env.BASE_URL,
	routes,
});

export default router;
