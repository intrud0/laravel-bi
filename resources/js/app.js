import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    base: window.bi.base,
    mode: "history",
    routes: [
        {
            name: "homepage",
            path: "/",
            redirect: "/ceg"
        },
        {
            name: "dashboard",
            path: "/:dashboardKey",
            component: Dashboard,
            props: route => {
                return {
                    dashboardKey: route.params.dashboardKey
                };
            }
        }
    ]
});

import Nav from "./components/Nav.vue";
import Dashboard from "./components/Dashboard.vue";
import Toast from "./components/Toast.vue";
import Loader from "./components/Loader.vue";
import Filters from "./components/Filters.vue";

import BigNumber from "./components/widgets/BigNumber.vue";
import Table from "./components/widgets/Table.vue";
import PartitionPie from "./components/widgets/PartitionPie.vue";

import VueRangedatePicker from 'vue-rangedate-picker'

Vue.component("bi-nav", Nav);
Vue.component("bi-dashboard", Dashboard);
Vue.component("bi-toast", Toast);
Vue.component("bi-loader", Loader);
Vue.component("bi-filters", Filters);

Vue.component("bi-big-number", BigNumber);
Vue.component("bi-table", Table);
Vue.component("bi-partition-pie", PartitionPie);

Vue.component('date-picker', VueRangedatePicker);

new Vue({
    el: "#laravel-bi",
    router,
    mounted() {
        console.log("Laravel Bi started!");
    }
});
