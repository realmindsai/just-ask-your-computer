# Recommended Tools

Not required, but these tools make the AI CLIs more capable. Install any that seem useful.

---

## Homebrew (Mac only)

Most of the tools below install via Homebrew on Mac. If you don't have it yet:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After it finishes, follow any instructions it prints about adding Homebrew to your PATH. Then reload:

```bash
exec zsh
```

Verify:

```bash
brew --version
```

---

## gh (GitHub CLI)

Manage repositories, pull requests, and issues from the terminal. Claude Code can use `gh` to interact with GitHub on your behalf.

=== "Mac"

    ```bash
    brew install gh
    ```

    Don't have Homebrew? [Install it first](#homebrew-mac-only).

=== "Linux (WSL2)"

    ```bash
    sudo apt update && sudo apt install gh
    ```

Verify:

```bash
gh --version
```

Log in:

```bash
gh auth login
```

---

## ripgrep (fast file search)

Searches through file contents faster than anything built in. Claude Code uses it automatically when available.

=== "Mac"

    ```bash
    brew install ripgrep
    ```

=== "Linux (WSL2)"

    ```bash
    sudo apt update && sudo apt install ripgrep
    ```

Verify:

```bash
rg --version
```

---

## jq (JSON wrangling)

Parses and transforms JSON data. Useful when working with APIs or data files.

=== "Mac"

    ```bash
    brew install jq
    ```

=== "Linux (WSL2)"

    ```bash
    sudo apt update && sudo apt install jq
    ```

Verify:

```bash
jq --version
```

---

## pandoc (document conversion)

Converts between document formats — markdown to Word, HTML to PDF, and dozens of others.

=== "Mac"

    ```bash
    brew install pandoc
    ```

=== "Linux (WSL2)"

    ```bash
    sudo apt update && sudo apt install pandoc
    ```

Verify:

```bash
pandoc --version
```
