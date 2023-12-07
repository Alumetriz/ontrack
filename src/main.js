import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNavigation from '@/components/TheNavigation.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'
import NavItem from '@/components/NavItem.vue'
import TheTimeline from '@/Pages/TheTimeline.vue'
import TheActivities from '@/Pages/TheActivities.vue'
import TheProgress from '@/Pages/TheProgress.vue'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-navigation', TheNavigation)
app.component('the-logo', TheLogo)
app.component('the-header-progress', TheHeaderProgress)
app.component('nav-item', NavItem)
app.component('the-timeline', TheTimeline)
app.component('the-activities', TheActivities)
app.component('the-progress', TheProgress)

app.mount('#app')
