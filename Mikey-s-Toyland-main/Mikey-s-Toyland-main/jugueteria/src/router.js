import { createRouter, createWebHistory } from 'vue-router';
import ProductDetail from './components/ProductDetail.vue';
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import Deleteconfirmation from './components/Deleteconfirmation.vue';
import Pagination from './components/Pagination.vue';

const routes = [
    {
        path: '/',
        name: 'ProductList',
        component: ProductList,
    },
    
    {
        path: '/productform',
        name: 'ProductForm',
        component: ProductForm,
    },
   
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: ProductDetail,
        props: true,
    },
    {
        path: '/deleteconfirmation',
        name: 'Deleteconfirmation',
        component: Deleteconfirmation,
    },
    {
        path: '/pagination',
        name: 'Pagination',
        component: Pagination,
    },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
