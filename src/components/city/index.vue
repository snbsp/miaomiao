<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList" :key='item.id'>{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="item in cityList" :key='item.index'>
                    <h2>{{item.index}}</h2>
                    <ul v-for="data in item.list" :key="data.id">
                        <li>{{data.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="city_index">
                <ul>
                    <li v-for="(item,i) in cityList" :key='item.index' @touchstart='handleToIndex(i)'>{{item.index}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'City',
    data(){
        return {
            cityList: [],
            hotList: [],
        }
    },
    mounted(){ //html加载完成后执行。执行顺序：子组件-父组件 生命周期
        this.axios.get('/api/cityList').then(res => {
            var msg = res.data.msg;
            if(msg === 'ok'){
                var data = res.data.data.cities;
                var {cityList , hotList}  = this.formatCityList(data);
                this.cityList = cityList;
                this.hotList = hotList;
            }
        });
    },
    methods: { // 事件方法执行  定义vue方法
        formatCityList(data) {
            var cityList = [];
            var hotList = [];

            for (let i = 0; i < data.length; i++) {
                if(data[i].isHot === 1){
                    hotList.push(data[i])
                }
            }

            for (let i = 0; i < data.length; i++) {
                // toUpperCase() 转换大写
                var firstLetter = data[i].py.substring(0,1).toUpperCase(); //拼英首字母
                if(toCom(firstLetter)) {  // 新添加index
                    let list = { 
                        index: firstLetter,
                        list : [ 
                            { 
                                name: data[i].nm,
                                id : data[i].id 
                            }
                        ] 
                    }

                    cityList.push(list);

                } else { // 累加已有index中
                    for (let j = 0; j < cityList.length; j++) {
                        if( cityList[j].index === firstLetter ) {
                            cityList[j].list.push( { name: data[i].nm, id : data[i].id } )
                        }
                    }
                }
            }

            // sort 排序
            cityList.sort((n1,n2) => {
                // n1.index > n2.index n1 在 n2 之前  返回值大于0 
                if ( n1.index > n2.index ) {
                    return 1
                } else if (n1.index < n2.index){
                    return -1
                } else {
                    return 0
                }
            });

            // 判断firstLetter在cityList是否存在 存在返回false
            function toCom(firstLetter) {
                for (let i = 0; i < cityList.length; i++) {
                    // 如果首字母和cityList里的相同 则累加
                    if( cityList[i].index ===  firstLetter ){
                        return false;
                    } 
                }
                return true
            }

            return {
                cityList,
                hotList
            }

        },
        handleToIndex(index){
            // 获取点击的当前下标
            var h2 = this.$refs.city_sort.getElementsByTagName('h2');
            // 将获取的当前下标距离顶部的距离赋值给父级
            this.$refs.city_sort.parentNode.scrollTop =  h2[index].offsetTop;
        }
    }
}
</script>

<style scoped>
    #content .city_body { margin-top: 45px;display: flex;width: 100%;position: absolute;top: 0;bottom: 0}
    .city_body .city_list {flex: 1;overflow: auto;background-color: #fff5f0}
    .city_body .city_list::-weblit-scrollbar {
        background-color: transparent;
        width: 0;
    }
    .city_body .city_hot {margin-top: 20px;margin-right: 20px}
    .city_body .city_hot h2 {padding-left: 15px;line-height: 30px;font-size: 14px;background-color: #f0f0f0;font-weight:normal;}
    .city_body .city_hot ul li {float: left;background: #fff;width: 29%;height: 33px;margin-top: 15px;margin-left: 3%; padding: 4px;border: 1px solid #e6e6e6;border-radius: 3px; text-align: center;box-sizing: border-box}
    .city_body .city_sort div {margin-top: 20px;}
    .city_body .city_sort h2 {padding-left: 15px;line-height: 30px;font-size: 14px;background: #f0f0f0;font-weight: normal;}
    .city_body .city_sort ul {padding-left: 10px;margin-top: 10px;}
    .city_body .city_sort ul li {line-height: 30px;}
    .city_body .city_index {width: 20px;display: flex;flex-direction: column;justify-content: center;text-align: center;border-left: 1px solid #e6e6e6;position: absolute;top: 0;right: 0;height: 100%;background-color: #fff;}
</style>