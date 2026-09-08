import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CaseStudyVvmView from '@/views/CaseStudyVvmView.vue'
import CaseStudyBiometriaView from '@/views/CaseStudyBiometriaView.vue'
import CaseStudyChataView from '@/views/CaseStudyChataView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/pripadova-studia/vvm', name: 'case-study-vvm', component: CaseStudyVvmView },
    {
      path: '/pripadova-studia/biometria',
      name: 'case-study-biometria',
      component: CaseStudyBiometriaView,
    },
    {
      path: '/pripadova-studia/chata',
      name: 'case-study-chata',
      component: CaseStudyChataView,
    },
    { path: '/o-mne', name: 'about', component: AboutView },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
