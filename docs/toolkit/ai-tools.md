# Command Line AI Tools

Three AI assistants you can run in your terminal. Each one opens a text interface where you type prompts and the AI works with the files in your current folder. Claude Code is the primary tool; the others are optional.

!!! note "Prefer a desktop app?"
    If you'd rather skip the terminal, see [Desktop AI Tools](desktop-apps.md) for Claude Cowork and the Codex App — same capabilities, graphical interface.

---

## Claude Code (primary)

Anthropic's AI assistant. Open a terminal in your project folder, type `claude`, and you're in a conversation where Claude can read, edit, and create files directly on disk.

**Requires:** Claude Pro or Max subscription ($20–100/month) — [sign up at claude.ai](https://claude.ai)

**Install:**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Log in:**

```bash
claude
```

When you run `claude` for the first time, it prints a URL in the terminal:

=== "Mac"

    1. Select the URL and press `Cmd+C` to copy
    2. Open Safari or Chrome
    3. Paste the URL and press Enter
    4. Sign in with your Anthropic account
    5. Approve the connection
    6. Copy the code it gives you
    7. Go back to Terminal, press `Cmd+V` to paste, press Enter

=== "Linux (WSL2)"

    1. When Claude prints the URL, press `c` to copy it
    2. Open your Windows browser (Chrome, Edge, etc.)
    3. Paste the URL into the address bar (`Ctrl+V`) and press Enter
    4. Sign in with your Anthropic account
    5. Approve the connection
    6. Copy the code it gives you
    7. Go back to the Ubuntu terminal, right-click to paste, press Enter

    !!! note "WSL can't open your browser"
        WSL is Linux running inside Windows — it can't open Windows browsers automatically. Copying the URL manually is the one slightly awkward part. You only do it once.

Exit Claude Code with `Ctrl+C` or type `/exit`.

---

## Codex CLI (free)

OpenAI's AI in your terminal. Open source and free to use.

**Install:**

```bash
npm install -g @openai/codex
```

**Log in:**

```bash
codex
```

Same browser flow as Claude Code — URL, sign in, approve, come back. Or use an API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys):

=== "Mac"

    ```bash
    echo 'export OPENAI_API_KEY="paste-your-key-here"' >> ~/.zshrc
    exec zsh
    ```

=== "Linux (WSL2)"

    ```bash
    echo 'export OPENAI_API_KEY="paste-your-key-here"' >> ~/.bashrc
    exec bash
    ```

---

## Gemini CLI (free)

Google's AI in your terminal. Free with any Google account.

**Install:**

```bash
npm install -g @google/gemini-cli
```

**Log in:**

```bash
gemini
```

Select "Login with Google." Same browser flow — URL, sign in, approve, come back.

Or use a free API key from [aistudio.google.com/apikey](https://aistudio.google.com/apikey). Generate a key on that page, then add it to your shell config so it's available every time you open a terminal:

=== "Mac"

    ```bash
    echo 'export GEMINI_API_KEY="paste-your-key-here"' >> ~/.zshrc
    exec zsh
    ```

=== "Linux (WSL2)"

    ```bash
    echo 'export GEMINI_API_KEY="paste-your-key-here"' >> ~/.bashrc
    exec bash
    ```

---

## The Authentication Pattern

All three CLI tools follow the same flow:

```
Run the tool → It prints a URL → Copy the URL → Paste into browser
→ Sign in & approve → Get a code → Paste it back in terminal → Done
```

You do this once per tool. After that, it remembers you.

??? tip "Browser doesn't open from WSL?"
    This is expected. Copy the URL manually and paste it into your Windows browser. See the WSL tab above for step-by-step instructions.
