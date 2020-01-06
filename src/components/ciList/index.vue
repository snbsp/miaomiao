<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>有名字辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：陈建兵，任素喜，潘炳龙</p>
                    <p>今天55家影院放映</p>
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>有名字辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：陈建兵，任素喜，潘炳龙</p>
                    <p>今天55家影院放映</p>
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>有名字辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：陈建兵，任素喜，潘炳龙</p>
                    <p>今天55家影院放映</p>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
    name:'ciList'
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