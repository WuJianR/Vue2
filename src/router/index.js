import Vue from "vue";
import VueRouter from "vue-router";
import TestTableComponent from "../views/TestTableComponent.vue";
import TestInputComponent from "../views/TestInputComponent.vue";
import Bubbling from "../views/Bubbling.vue";
import ForceUpdate from "@/views/ForceUpdate";
import OnInput from "@/views/OnInput.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: TestTableComponent,
  },
  {
    path: "/newInput",
    name: "newinput",
    component: TestInputComponent,
  },
  {
    path: "/bubbling",
    name: "bubbling",
    component: Bubbling,
  },
  {
    path: "/forceupdate",
    name: "forceupdate",
    component: ForceUpdate,
    },
    {
        path: "/oninput",
        name: "oninput",
        component: OnInput
  }
];

const router = new VueRouter({
  routes,
});

export default router;
