import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import axios from 'axios'
import {Lazyload , Indicator} from 'mint-ui'
import './static/common.css'
import 'mint-ui/lib/style.css'
import App from './app'
import Index from './components/Index'
import News from './components/News'

Vue.use(Router);
Vue.use(Vuex);
Vue.use(Meta);
Vue.use(Lazyload);


const createRouter = () => {
	const router = new Router({
		mode: 'history',
		routes:[
			{
				path:'/',
				name:'home',
				component:Index,
			},{
				path:'/news/:id',
				name:'news',
				component:News
			}
		]
	});
	
	if (process.browser) {
		router.beforeEach((from, to, next) => {
			Indicator.open();
			next()
		});
		router.afterEach(() => {
			setTimeout(() => {
				Indicator.close();
			});
		})
	}
	
	return router
};

const createStore = () => {
	
	return new Vuex.Store({
		state:{
			swiperData:[],
			todayData:[],
			newsData:{}
		},
		mutations:{
			SET_SWIPERDATA(state,payload){
				state.swiperData = payload;
			},
			SET_TODAYDATA(state,payload){
				state.todayData = payload;
			},
			SET_NEWSDATA(state,payload){
				state.newsData = payload;
			}
		},
		actions:{
			async fetchIndexData({state,commit,dispatch},payload){
				const {data} = await axios.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/latest');
				commit('SET_SWIPERDATA',data.top_stories);
				commit('SET_TODAYDATA',data.stories);
			},
			async fetchNewsData({state,commit,dispatch},payload){
				const {data} = await axios.get('http://zhihu-agent.herokuapp.com/get?api=/4/news/' + payload)
				commit('SET_NEWSDATA',data);
			}
		},
		getters:{
			swiperData:(state) => state.swiperData,
			todayData:(state) => state.todayData,
			newsData:(state) => state.newsData
		}
	});
};

export default {
    createRouter,
    createStore,
	App
}

