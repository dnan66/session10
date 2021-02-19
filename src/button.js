import Vue from 'vue'
export default
    Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button style="color: black" v-on:click="count++">You clicked me {{ count }} times.</button>'
})

