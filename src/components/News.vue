<template>
    <div id="news">
        <link rel="stylesheet" :href="newsData.css">
        <div class="newsImg" :style="{backgroundImage:'url('+newsData.image+')'}">
            <div class="news-title">{{newsData.title}}</div>
            <div class="img-copyright">&copy {{newsData.image_source}}</div>
        </div>
        <div v-html="newsData.body" class="news-content"></div>
    </div>
</template>
<script>
	import { mapGetters } from 'vuex';

	export default{
    	name:'news',
	    preFetch({route,store}){
    		return store.dispatch('fetchNewsData',route.params.id);
        },
        mounted(){
    		document.body.scrollTop = 0;
        },
        computed:mapGetters(['newsData'])
    }
</script>
<style>
    .main-wrap .headline{
        display: none!important;
    }
    .main-wrap .content-inner .question .question-title{
        display: none!important;
    }
    .news-content{
        padding-top: 25px;
    }
    .newsImg{
        position: relative;
        width: 100%;
        height: 230px;
        background-size: cover;
        background-position: center center;
    }
    .newsImg .news-title{
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
    .newsImg .img-copyright{
        font-size: 0.6rem;
        position: absolute;
        left: 2%;
        top: 2%;
        text-shadow: 0 0 1px #000;
        color: #fff;
    }
</style>
