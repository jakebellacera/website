# AGENTS.md

This file provides guidance to AI assistants when working with code in this repository.

## Project Overview

Personal website for jakebellacera.com, built with Astro 6 and hosted on GitHub Pages. Deploys automatically on merge to main.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Preview production build:** `pnpm preview`
- **Astro CLI:** `pnpm astro`

## Tech Stack

- **Framework:** Astro 6 (static site generator)
- **Language:** TypeScript (strict mode)
- **Package manager:** pnpm
- **Node:** >=22.12.0

## Architecture

Standard Astro project structure:

- `src/pages/` — File-based routing (`.astro` files become pages)
- `public/` — Static assets served as-is (favicons, etc.)
- `astro.config.mjs` — Astro configuration (currently default, no integrations)

No UI framework integrations (React, Vue, etc.) — pages use Astro's built-in component format with HTML templating and frontmatter scripts. Prefer minimal styles and JS whenever possible — the goal of the site is to be minimal.
