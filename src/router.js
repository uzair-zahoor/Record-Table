import { createWebHistory, createRouter } from "vue-router";
import updateForm from './components/Update.vue';
import APIdata from './components/APIdata.vue';
const routes = [
  {
    path: "/update/:id",
    name: "update",
    component: updateForm,
    },
     {
    path: "/api",
    name: "APidata",
    component: APIdata,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;