<template>
    <div>
        <ul>
            <li v-for="(item) in arr" :key="item.id">
                <div>{{ item.userName }}</div>
                <div>{{ item.score }}</div>
            </li>
        </ul>
        <button @click="updateData">修改数组内的数据</button>
        <div>obj:{{ obj }}</div>
        <a href="https://blog.csdn.net/weixin_43599321/article/details/131713387?spm=1001.2014.3001.5501">页面刷新</a>
    </div>
</template>

<script>
export default {
    name: 'ForceUpdate',
    data() {
        return {
            arr: [
                {
                    id: 0,
                    userName: '小明',
                    score: 90,
                }, {
                    id: 1,
                    userName: '小红',
                    score: 91,
                }
            ],
            obj: {
                title: 'this is an userList',
                others: 'none'
            }
        }
    },
    methods: {
        updateData() {
            this.arr[2] = {
                id: 2,
                userName: '小泗',
                score: 92,
            }
            this.arr = [].concat(this.arr)
            console.log(this.arr);
            this.obj.newStats = 'newStats'
            this.obj = Object.assign({}, this.obj)
            console.log(this.obj);
        }
    },
}
</script>
