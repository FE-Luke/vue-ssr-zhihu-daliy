<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        name:'app',
	    metaInfo:{
            title: '知乎日报',
            meta:[
                { name: 'referrer', content: 'never' }
            ]
        }
    }
</script>

<style scoped>
    #app{
        width: 100%;
        height: 100%;
    }
</style>
