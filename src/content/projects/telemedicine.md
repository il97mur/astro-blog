---
title: 'Telemedicine Platform'
description: 'Vue 3/Nuxt 4 platform for doctors and patients with strict data-security requirements'
href: '#'

technologies: [
    'Vue.js',
    'Nuxt.js',
    'TypeScript',
    'TailwindCSS',
    'VeeValidate',
    'Zod',
    'PrimeVue',
]
---

# Telemedicine Platform

A platform for doctors and patients to interact remotely, built with high requirements for data security and UX reliability.

Designed and built a reusable UI-Kit on top of PrimeVue and TailwindCSS, driving theming through CSS variables tied into PrimeVue design tokens — cut new screen development time in half.

Implemented automatic access/refresh token rotation through an HTTP interceptor with a request queue, fully eliminating unexpected session drops for users.

Built a dynamic form module for collecting medical data on VeeValidate + Zod, including conditional validation where a field's requirement depends on the value of other fields — reduced input errors by 60%.
