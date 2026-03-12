# AI Tools

Three AI assistants you can talk to in your terminal. Claude Code is the primary tool; the others are optional.

---

## Claude Code (primary)

A conversational AI assistant in your terminal. Ask it questions, give it tasks, and it does the work.

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

## Claude Desktop (GUI alternative)

The same AI, but as a desktop app — no terminal needed. Has fewer automation features than Claude Code but handles conversation, analysis, and writing well.

**Requires:** Same Claude Pro or Max subscription

**Install:** Download from [claude.ai/download](https://claude.ai/download)

=== "Mac"

    Open the .dmg file, drag Claude to Applications. If macOS asks whether you're sure, click **Open**.

=== "Windows"

    Run the installer. On managed work machines, you may need elevated rights — see your [institution guide](../institutions/index.md).

Sign in with your Anthropic account and you're ready to go.

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

## OpenAI Codex (optional)

OpenAI's AI in your terminal.

**Requires:** ChatGPT Plus, Pro, Team, or Edu subscription

**Install:**

```bash
npm install -g @openai/codex
```

**Log in:**

```bash
codex
```

Same browser flow, or use an API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys):

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

## The Authentication Pattern

All three CLI tools follow the same flow:

```
Run the tool → It prints a URL → Copy the URL → Paste into browser
→ Sign in & approve → Get a code → Paste it back in terminal → Done
```

You do this once per tool. After that, it remembers you.

??? tip "Browser doesn't open from WSL?"
    This is expected. Copy the URL manually and paste it into your Windows browser. See the WSL tab above for step-by-step instructions.
