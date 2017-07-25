<template>
    <div id="Index">
        <div>
            <mt-swipe :auto="8000" :show-indicators="false" :speed="800">
                <mt-swipe-item v-for="(item,index) in swiperData" :key="index" :class="{'is-active':index==0}" @click.native="changeRoute(item.id)">
                    <div :style="{backgroundImage:'url('+item.image+')'}" class="swiperItem">
                        <div class="title">
                            {{item.title}}
                    </div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
            <div class="list">
                <div class="listItem" v-for="(item,index) in todayData" :key="index" @click="changeRoute(item.id)">
                    <div class="title" v-html="formatTitle(item.title)"></div>
                    <div class="img">
                        <img v-lazy="item.images[0]">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import { mapGetters } from 'vuex';
	export default{
		name:'Home',
		head:{
			title:'知乎日报'
		},
		components:{
		    [Swipe.name]:Swipe,
            [SwipeItem.name]:SwipeItem
        },
        preFetch({store}){
			return store.dispatch('fetchIndexData');
		},
		methods:{
			formatTitle(title){
				return title.replace(/\n/,'<br>');
			},
            changeRoute(newsid){
				this.$router.push('/news/'+newsid)
            }
		},
        computed:mapGetters(['swiperData','todayData'])

	}
</script>

<style scoped>
    .mint-swipe {
        width: 100%;
        height: 230px;
        background: #e0e0e0;
    }
    .mint-swipe .swiperItem{
        position: relative;
        height: 230px;
        background-size: cover;
        background-position: center center;
    }
    .swiperItem .title{
        line-height: 1.8rem;
        position: absolute;
        right: 5%;
        bottom:8%;
        color: #fff;
        width: 75%;
        text-align: right;
        font-size: 1.25rem;
        text-shadow: 0 0 2px #000;
    }
    .list{
        width: 100%;
        box-sizing: border-box;
        padding: 0 5%;
        font-size: 1rem;
    }
    .list .listItem{
        width: 100%;
        height: 6rem;
        border-bottom: 1px solid #e0e0e0;
        box-sizing: border-box;
        padding: 0.8rem 0;
    }
    .listItem > *{
        float: left;
    }
    .listItem .title{
        width: 72.5%;
        margin-right: 2.5%;
    }
    .listItem .img{
        width: 25%;
        height: 100%;
        overflow: hidden;
    }
    .listItem .img > img{
        width: 100%;
    }
</style>
