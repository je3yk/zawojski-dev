import posthog from 'posthog-js'
import './index.css'

posthog.init(import.meta.env.VITE_POSTHOG_PROJECT_TOKEN, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  defaults: '2026-05-30',
})
