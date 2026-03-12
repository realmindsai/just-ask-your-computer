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

```text
# CLAUDE.md

## Tools

- Use `uv` for Python dependencies (not pip)
- Use `volta` for Node.js version management
- Python version: 3.12

## Conventions

- Write clear commit messages
- Test before committing
```

## One config for all three AI CLIs

Claude Code reads `CLAUDE.md`. Gemini CLI and Codex read `AGENTS.md`. You don't want to maintain two files that say the same thing.

**The fix:** Write your config in one file, then create the other file with a single line pointing to it.

### If Claude Code is your primary tool

Create your config in `CLAUDE.md` (as shown above), then create a one-line `AGENTS.md`:

```text
See CLAUDE.md for project conventions.
```

### If Gemini CLI is your primary tool

Create your config in `AGENTS.md`, then create a one-line `CLAUDE.md`:

```text
See AGENTS.md for project conventions.
```

### Creating both files

=== "Mac"

    ```bash
    # If CLAUDE.md is your primary config:
    echo "See CLAUDE.md for project conventions." > AGENTS.md
    ```

=== "Linux (WSL2)"

    ```bash
    # If CLAUDE.md is your primary config:
    echo "See CLAUDE.md for project conventions." > AGENTS.md
    ```

Now all three AI tools share the same project context.
