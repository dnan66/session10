import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let mydata = {
    version: 1.2,
    owner: 'dani'
}
console.log(mydata)
new Vue({
    router,
    store,      //**** ES6 short notation , ES5 case -> store: store
    //el: '#app',
    data: mydata, // plain object or function when using in component
    render: h => h(App)
}).$mount('#app')

//vm.str = 'update property after instance'

//console.log(vm.$data)  // show option (property) in options object of vue instance
//console.log(vm)
/* ====================== update ok
vm.owner  = 'nan'
vm.version = 1.3

*/
// let's talk about Global API Vue/js 2.x
/***** EXTEND or  *****/

/*
Vue.extend({  // create a new constructor - use to add new components in Vue instance
    template: '<p>{{nume}}-{{prenume}}#{{access}}</p>',
    data: function() {
        return {
            nume: 'Nan',
            prenume: 'Dani',
            access: 0
        }
    }
})
*/



