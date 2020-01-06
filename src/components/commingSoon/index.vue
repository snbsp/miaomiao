<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in comingList" :key='item.id'>
                <div class="pic_show" style="width: 64px;height: 90px;">
                    <img :src="item.img | setWH('128.180')" alt="" style="width: 100%">
                </div>
                <div class="info_list" style="flex:1">
                    <h2 style="font-size:20px;word-break: break-all;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">{{item.nm}}</h2>
                    <p>观众评 <span class="grade">{{item.sc}}</span></p>
                    <p style="word-break: break-all;text-overflow: ellipsis;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;">主演：{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
            </li>
        </ul>
    </div> 
</template>


<script>
export default {
    name:'commingSoon',
    data(){
        return {
            comingList:[]
        }
    },
    mounted(){
        this.axios.get('/api/movieComingList?cityId=9').then(res => {
            var msg = res.data.msg;
            if(msg === 'ok'){
                this.comingList = res.data.data.comingList;
            }
        })
    }
}
</script>

<style scoped>
    #content .movie_body {flex: 1; overflow: hidden;}
    .movie_body ul {margin: 0 12px; overflow: hidden;}
    .movie_body ul li {margin-top: 12px;display: flex;align-items: center;border-bottom: 1px solid #e6e6e6;padding-bottom:10px }
    .movie_body .pic_show {width: 64px;height: 90px;margin-right: 10px};
    .movie_body .pic_show img {width: 100%};
    .movie_body .info_list {  flex: 1 }
</style>