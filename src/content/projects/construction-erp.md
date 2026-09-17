---
title: "Construction ERP System"
description: "React/TS ERP for managing construction projects, budgets and resources"
href: "#"

technologies:
  [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "TailwindCSS",
    "Feature-Sliced Design",
  ]
---

# Construction ERP System

A scalable ERP system for managing construction projects, budgets and resources, built for a team of about 5 frontend developers working in parallel.

Designed the client architecture on Feature-Sliced Design instead of a simple feature-folder layout or Atomic Design — the strict import rules between layers kept developers from creating hidden cross-dependencies as the number of entities (projects, budgets, resources) grew.

Built complex UIs for nested entities: deeply filterable tables, tree structures, hierarchical forms.

Moved data fetching and caching to RTK Query, replacing hand-written cache invalidation logic with tag-based invalidation — **cut the amount of code by 25%** compared to classic Redux.

Optimized rendering performance (memoization, React.memo, useCallback) — **reduced UI response time by 35%**.
