import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        isNotLoggedIn: true
      },
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        isNotLoggedIn: true
      },
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/products',
      name: 'products',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/views/ProductsView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: 'pageNotFound',
      component: ()=>import('@/views/PageNotFound.vue')
    }
  ]
})

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/login')
    }
  } else if (to.matched.some((record) => record.meta.isNotLoggedIn)) {
    if (await getCurrentUser()) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
