# Project Config

## What is CLAUDE.md?

A file in your project folder that tells Claude Code about your project — what tools to use, what conventions to follow, what to watch out for. Claude Code reads it automatically when you start a session.

## What is AGENTS.md?

The same idea, used by Gemini CLI and OpenAI Codex. Same format, different filename.

## The philosophy

AI tools update weekly. The commands, conventions, and best practices shift constantly. Don't over-invest in your config file.

**Keep it to 10–20 lines.** Update it when things break, not preemptively. A short, current file beats a long, stale one.

## Starter template

Copy this into a file called `CLAUDE.md` in your project folder:

```markdown
# CLAUDE.md

## Tools

- Use `uv` for Python dependencies (not pip)
- Use `volta` for Node.js version management
- Python version: 3.12

## Conventions

- Write clear commit messages
- Test before committing
```

## Link CLAUDE.md and AGENTS.md

Write one file, reference the other. One source of truth for all three AI CLIs.

**Option A:** AGENTS.md points to CLAUDE.md

Create `AGENTS.md` with:

```markdown
See CLAUDE.md for project conventions.
```

**Option B:** CLAUDE.md points to AGENTS.md (if you prefer Gemini as primary)

Create `CLAUDE.md` with:

```markdown
See AGENTS.md for project conventions.
```

Either way, you maintain one file and all three tools use the same context.
