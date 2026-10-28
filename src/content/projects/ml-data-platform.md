---
title: "Data Platform for ML Researchers"
description: "Next.js/Supabase data platform for an international client, current project"
href: "#"
order: 0

technologies: ["Next.js", "TypeScript", "Supabase", "PostHog", "Vercel"]
---

# Data Platform for ML Researchers

A data platform used by ML researchers at an international client, built on Next.js 16 with a Supabase (PostgreSQL) backend and PostHog analytics.

Found and fixed a serverless deployment issue: each function was bundling the entire project (median 177MB) because a dynamic `path.join(process.cwd(), ...)` call couldn't be statically analyzed by Vercel's build-time file tracer, so it defensively included everything. Rewriting the file access to be traceable **cut the bundled size per function by 88%** (177MB → 9.7MB median) and noticeably sped up deploys that previously sat on "Deploying outputs" for 10+ minutes.

Implemented CMS-driven ordering for catalog cards, letting editors rearrange the storefront themselves without developer involvement or releases.

Made large file uploads in the admin panel reliable (up to ~300MB) without server-side memory failures.

Write and maintain unit and e2e tests (authentication, analytics, ingest pipeline reliability) that run in CI before every merge.
