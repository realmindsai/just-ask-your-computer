# Core Stack

Six tools. Opinionated choices that work well together. Install them in order — each one takes about a minute.

## Why these tools?

| Tool | Why |
|------|-----|
| **git** | Track your work, undo mistakes |
| **Volta** | Manages Node.js without pain |
| **Node.js** | Required by Claude Code, Gemini CLI, Codex |
| **uv** | Manages Python without pain |
| **Python** | Most research tools are Python |
| **Claude Code** | The AI that does the work |

---

## 1. git

Track changes to your files. Undo mistakes. Required by most development tools.

=== "Mac"

    git is pre-installed on most Macs. Type `git` in Terminal — if it's not installed, macOS will prompt you to install it. Click **Install** and wait.

    ```bash
    git --version
    ```

=== "Linux (WSL2)"

    ```bash
    sudo apt update && sudo apt install git
    ```

    ```bash
    git --version
    ```

---

## 2. Volta

Volta manages Node.js versions so you don't have to.

```bash
curl https://get.volta.sh | bash
```

Reload your terminal:

=== "Mac"

    ```bash
    exec zsh
    ```

=== "Linux (WSL2)"

    ```bash
    exec bash
    ```

---

## 3. Node.js

Required by Claude Code, Gemini CLI, and Codex.

```bash
volta install node
```

```bash
node --version
```

You should see a version number like `v22.x.x`.

---

## 4. uv

A fast Python package manager. Handles Python versions and project dependencies.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Reload your terminal:

=== "Mac"

    ```bash
    exec zsh
    ```

=== "Linux (WSL2)"

    ```bash
    exec bash
    ```

---

## 5. Python

```bash
uv python install 3.12
```

```bash
uv --version
```

---

## 6. Claude Code

The main AI tool. Conversational assistant right in your terminal.

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Reload your terminal:

=== "Mac"

    ```bash
    exec zsh
    ```

=== "Linux (WSL2)"

    ```bash
    exec bash
    ```

Verify:

```bash
claude --version
```

Log in — see [AI Tools](ai-tools.md) for the full authentication walkthrough.

!!! note "Other AI tools"
    Claude Code is the primary tool, but there are free and optional alternatives. See [AI Tools](ai-tools.md) for Gemini CLI (free) and OpenAI Codex.

??? tip "'Command not found' after installing?"
    Reload your terminal (`exec zsh` on Mac, `exec bash` on WSL2). If that doesn't work, close and reopen the terminal window.
