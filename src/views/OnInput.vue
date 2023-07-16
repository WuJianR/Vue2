<template>
    <div>
        <h3>通过监听器或oninput实现限制输入框输入的数字在[0-100]的范围</h3>
        <div>监听器</div>
        <input type="number" v-model="inputValue_2">
        <div>oninput【使用value，并且不绑定methods中的方法】</div>
        <input type="number" v-model="inputValue_3" oninput="if(value>100)value=100;if(value<0)value=0;value=parseInt(value)">
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue_2: 0,
            inputValue_3: 0
        }
    },
    watch: {
        inputValue_2: {
            handler(newValue, oldValue) {
                if (newValue > 100) {
                    this.inputValue_2 = 100
                } else if (newValue < 0) {
                    this.inputValue_2 = 0
                } else {
                    this.inputValue_2 = newValue
                }
            }
        }
    }
}
</script>
