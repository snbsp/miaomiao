<template>
    <div class="search_body">
        <div class="search_title">
            <input type="text">
        </div>
        <div class="search_list">
            <h2 class="search_list_title">电视剧/电影/综艺</h2>
            <ul>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>无名字辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：陈建兵，任素喜，潘炳龙</p>
                    <p>今天55家影院放映</p>
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>无名字辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：陈建兵，任素喜，潘炳龙</p>
                    <p>今天55家影院放映</p>
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>无名字辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：陈建兵，任素喜，潘炳龙</p>
                    <p>今天55家影院放映</p>
                </div>
            </li>
        </ul>
        </div>
    </div>  
</template>


<script>
export default {
    name:'Search'
}
</script>

<style scoped>
    .search_body {flex: 1;overflow:auto;}
    .search_body .search_title {background-color: #e6e6e6; padding: 10px;}
    .search_body .search_title input {width: 100%;padding: 6px 0; border: none;border-radius: 5px;}
    .search_list  .search_list_title{ font-size: 15px;padding: 10px;color: #666;border-bottom: 1px solid #e6e6e6}
    .search_list ul {margin: 0 12px; overflow: hidden;}
    .search_list ul li {margin-top: 12px;display: flex;align-items: center;border-bottom: 1px solid #e6e6e6;padding-bottom:10px }
    .search_list .pic_show {width: 64px;height: 90px;margin-right: 10px};
    .search_list .pic_show img {width: 100%};
    .search_list .info_list {  flex: 1 }
</style>