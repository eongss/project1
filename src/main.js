import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 뷰 인스턴스에 라우터 추가
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
