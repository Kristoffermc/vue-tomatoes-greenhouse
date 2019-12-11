import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import {store} from "core-js";
import App from "../App";

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://metinseylan.com:1992/mynamespace',
    vuex: {
        store,
        options: {
            useConnectionNamespace: true
        }
    },
    options: { path: "/my-app/" } //Optional options
}));

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
