<template>
    <div class="movie_body">
        <ul>
            <li v-for="item in ciList" :key="item.id">
                <div class="pic_show">
                    <span>{{ item.nm }}</span>
                    <span>
                        <span>{{ item.sellPrice }}</span>元起
                    </span>
                </div>
                <div class="info_list">
                    <span>{{ item.addr }}</span>
                    <span>{{ item.distance }}</span>
                </div>
                <div>
                    <div v-for="(card,i) in item.tag"  v-if="card === 1" :key="i" >{{ key | formatCard }}</div>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name:'ciList',
    data(){
        return {
            ciList: [],
        }
    },
    mounted(){
        this.axios.get('/api/cinemaList?cityId=10').then(res => {
            var msg = res.data.msg;
            if(msg === 'ok') {
                this.ciList = res.data.data.cinemas;
            }
        })
    },
    filters:{
        formatCard(i){
            var data = [
                {  key : 'tag', value : '折扣'}
            ];
            for (let i = 0; i < data.length; i++) {
                if(key === data[i].key){
                    return data[i].value
                }
            }
            return '';
        }
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