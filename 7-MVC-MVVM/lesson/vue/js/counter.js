// 全局注册组件
Vue.component("button-counter", {
    props:['num'],
    template: `
        <div class="counter">
            <button @click="$emit('decrease')" type="button">-</button>
            <input type="text" v-model="num">
            <button @click="$emit('increase')" type="button">+</button>
        </div>
    `,
});