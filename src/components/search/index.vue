<template>
    <div class="search_body">
        <div class="search_title">
            <input type="text" v-model="message">
        </div>
        <div class="search_list">
            <h2 class="search_list_title">电视剧/电影/综艺</h2>
            <ul>
                <li v-for="item in searchList" :key="item.id">
                    <div class="pic_show">
                        <img :src="item.img | setWH('128.180')" alt="" style="width: 100%">
                        </div>
                    <div class="info_list" style="flex:1">
                        <p style="display:flex;justify-content: space-between;"><span style="font-size:18px;font-weight:500;">{{item.nm}}</span> <span class="grade" style="color:orange">{{ item.sc }}</span></p>
                        <p>{{ item.enm }}</p>
                        <p>{{ item.cat }}</p>
                        <p>{{ item.rt }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>  
</template>


<script>
export default {
    name:'Search',
    data(){
        return {
            message:'',
            searchList:[]
        }
    },
    methods:{
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
    },
    // 可以监控一个值的变换，并调用因为变化需要执行的方法
    watch:{
        message(newVal){
            var that = this;
            // 防抖节流 最后一次才会请求
            this.cancelRequest();
            this.axios.get('/api//searchList?cityId=10&kw=' + newVal,{
                cancelToken: new this.axios.CancelToken(function(c) {
                    that.source = c;
                })
            }).then(res => {
                var msg = res.data.msg;
                var movies = res.data.data.movies;
                if(msg === 'ok' && movies) {
                    this.searchList = res.data.data.movies.list;
                }
            }).catch((err) => {
                if (axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })
        }
    },
}
</script>

<style scoped>
    .search_body {flex: 1;overflow:auto;}
    .search_body .search_title {background-color: #e6e6e6; padding: 10px;}
    .search_body .search_title input {width: 100%;padding: 6px 0; border: none;border-radius: 5px;outline: none; padding-left: 10px}
    .search_list  .search_list_title{ font-size: 15px;padding: 10px;color: #666;border-bottom: 1px solid #e6e6e6}
    .search_list ul {margin: 0 12px; overflow: hidden;}
    .search_list ul li {margin-top: 12px;display: flex;align-items: center;border-bottom: 1px solid #e6e6e6;padding-bottom:10px }
    .search_list .pic_show {width: 64px;height: 90px;margin-right: 10px};
    .search_list .pic_show img {width: 100%};
    .search_list .info_list {  flex: 1 ;}
</style>