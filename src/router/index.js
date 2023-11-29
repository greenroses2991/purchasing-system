import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/addbrand',
      name: 'product.addbrand',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/brand.vue')
    },
    {
      path: '/product/:id/editbrand',
      name: 'product.editbrand',
      props: true,
      component: () => import('../views/EditBrand.vue'),
      // props: route=>({id: parseInt(route.params.id)})
      

    },

    {
      path: '/product/brand',
      name: 'product.brand',
      props: true,
      component: () => import('../views/AllBrand.vue'),
     

    },
   {
    path: '/product/unit',
    name: 'product.unit',
    props: true,
    component: () => import('../views/AllUnits.vue'),
   },
  {
    path: '/product/:id/editunit',
    name: 'product.editunit',
    props: true,
    component: () => import('../views/EditUnit.vue')
  },
  {
    path: '/product/addunit',
    name: 'product.addunit',
    component: () => import('../views/unit.vue')
  },
  {
    path: '/supplier/suppliers',
    name: 'supplier.suppliers',
    props: true,
    component: () => import('../views/AllSuppliers.vue'),
   

  },
  {
    path: '/supplier/addsupp',
    name: 'supplier.addsupp',
    component: () => import('../views/AddSupplier.vue')
  }, 
  {
    path: '/productprof/addprod',
    name: 'productprof.addprod',
    component: () => import('../views/ProdProf.vue')
  }, 

  ]
})

export default router
