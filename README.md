# Ilya Murzalev — Portfolio

Personal portfolio site built with [Astro](https://astro.build) (+ Vue integration for interactive pieces).

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── Header.astro
│   │   ├── skills/
│   │   └── weeks-of-life/
│   ├── content/
│   │   ├── projects/     # case studies shown on the homepage
│   │   └── blog/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
└── package.json
```

Projects shown on the homepage are stored as Markdown files under `src/content/projects/`. Each file's frontmatter (`title`, `description`, `technologies`) drives the project card on the homepage; the Markdown body is the full case study shown on the project page.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview build locally, before deploying          |
