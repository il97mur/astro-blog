---
title: "Mechanic & Auto Shop Marketplace"
description: "Marketplace connecting mechanics/shops with customers via an interactive map"
href: "#"
order: 3

technologies:
  ["React", "TypeScript", "Inertia.js", "MapLibre", "Zustand", "PayPal"]
---

# Mechanic & Auto Shop Marketplace

Built the frontend of a marketplace from scratch, where mechanics and auto shops register, pay for a subscription and appear as a pin on a map, so customers nearby can find and contact them directly.

Designed the main screen around an interactive map (MapLibre). Optimized point loading: the client sends the current viewport's bounding box on pan/zoom, and the backend returns only points inside it, instead of loading the whole dataset at once.

Lazy-loaded the map component (React.lazy) since MapLibre noticeably increased the main bundle size and was visible on first paint.

Built registration and profile forms with Inertia Forms, backend validation and PayPal subscription payments end-to-end on the client.

**Cut main page load time by 30%** through bundle optimization (code splitting) and lazy loading.
