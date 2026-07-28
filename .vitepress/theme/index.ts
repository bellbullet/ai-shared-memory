import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import WorkspaceDashboard from './components/WorkspaceDashboard.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WorkspaceDashboard', WorkspaceDashboard)
  }
} satisfies Theme
