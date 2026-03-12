# CLAUDE.md

## Project Overview

Public MkDocs Material site: "Just Ask Your Computer" — AI tools setup guide for researchers and professionals.

## Development

- Install deps + build locally: `uv run mkdocs serve` (serves at http://127.0.0.1:8000)
- Deploy: Push to main branch — GitHub Actions handles deployment
- uv handles the virtual environment and dependency installation automatically

## Content Conventions

- All content is markdown in `docs/`
- Use MkDocs Material content tabs for Mac / Linux (WSL2) differences
- Code blocks must be copy-paste ready — no placeholders like "your-name-here" unless unavoidable
- Use `??? tip` admonitions for troubleshooting (collapsible by default)
- Use `!!! note` admonitions for callouts
- Filenames: lowercase, hyphens between words, no spaces

## Tools

- Use uv for Python dependency management
- MkDocs Material for site generation
