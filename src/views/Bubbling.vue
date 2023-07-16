<template>
    <div class="main">
        <div class="bubble1 bubble-anm"></div>
        <!-- <div class="bubble2 bubble-anm"></div> -->
    </div>
</template>

<script>
import { add, substract } from '@/utils/export.js'
import Api from '@/utils/default'
import anyA from '@/utils/any'
export default {
    mounted() {
        console.log('add:', add(5, 3));
        console.log('substract:', substract(5, 3));
        console.log('multipy:', Api.multiply(5, 3));
        console.log('divide:', Api.divide(5, 3));
        console.log('anyA', anyA);
    },
}
</script>

<style lang="scss" scoped>
.main {
    background-color: #333333;
    // height: 100vh;
    width: 300px;
    height: 300px;
    margin: 50px auto;
}
.bubble1 {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 4px solid #fff;
    // transform: translate(50px, 200px);
}
.bubble2 {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 4px solid #fff;
}
// 创建动画关键帧
@keyframes bubble {
    0% {
        bottom: 20px;
        transform: translate(50px, 200px);
    }
    50% {
        transform: translate(70px, 100px);
    }
    100% {
        transform: translate(40x 0px);
    }
}

/* 应用动画 */
.bubble-anm {
    animation: bubble 4s ease-in infinite;
}
</style>
@/utils/export.js