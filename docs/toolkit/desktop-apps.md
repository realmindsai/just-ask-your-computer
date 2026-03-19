# Desktop AI Tools

The web versions of Claude and ChatGPT can only see what you paste into the chat. The **desktop apps** can see the files on your computer. Point them at a project folder and they can read, search, and work across everything in it — your data, your documents, your code.

That's the difference. Instead of copying and pasting snippets into a browser window, you give the AI direct access to a folder and have a conversation about what's in it.

---

## Claude Cowork

Claude Cowork is a tab inside the **Claude Desktop** app. It gives Claude direct access to a project folder on your computer — Claude can read your files, write new ones, run commands, and work across your whole project.

### Step 1: Install Claude Desktop

Go to [claude.ai/download](https://claude.ai/download).

=== "Mac"

    1. Open the downloaded `.dmg` file
    2. Drag **Claude** to your Applications folder
    3. Open Claude from Applications
    4. If macOS asks "Are you sure you want to open this?", click **Open**

    !!! note "Apple Silicon required"
        The Cowork tab requires an Apple Silicon Mac (M1 or later). The Chat tab works on all Macs.

=== "Windows"

    1. Run the downloaded `.exe` installer
    2. Follow the prompts to complete installation
    3. Open Claude from the Start menu

    !!! note "RMIT staff: you need elevated rights"
        RMIT-managed Windows PCs block software installation by default. You'll need to request temporary elevated rights before you can install Claude Desktop. See the [RMIT institution guide](../institutions/rmit.md#request-elevated-rights-for-claude-desktop) for the exact form and fields.

### Step 2: Sign in

1. Open Claude Desktop
2. Click **Sign in**
3. Sign in with your Anthropic account (the same one you use at [claude.ai](https://claude.ai))

??? tip "Don't have an account yet?"
    Go to [claude.ai](https://claude.ai) and sign up for a Pro or Max plan. The free plan does not include Cowork access.

### Step 3: Open the Cowork tab and select your project folder

1. In Claude Desktop, find the **mode selector** and click the **Cowork** tab (it may also appear as the **Code** tab)
2. Select your **project folder** — the folder containing the files you want the AI to work with
3. Choose **Local** as the environment
4. Type your task and press **Enter**

Claude reads the files in your project folder, proposes an approach, and gets to work. You can watch, redirect, or interrupt at any time.

!!! note "Keep the app open"
    Claude Desktop must stay open while Cowork is running. If you close the app, the session ends.

---

## Codex App (OpenAI)

The Codex App is a standalone desktop app from OpenAI. Same idea as Cowork — point it at a project folder and the AI reads and writes your files directly.

### Step 1: Install the Codex App

=== "Mac"

    Download from [openai.com/codex](https://openai.com/codex/) and open the installer. Drag **Codex** to your Applications folder.

    !!! note "Apple Silicon required"
        The Codex App requires an Apple Silicon Mac (M1 or later).

=== "Windows"

    Install from the [Microsoft Store](https://apps.microsoft.com/detail/9plm9xgg6vks) or via PowerShell:

    ```powershell
    winget install Codex -s msstore
    ```

    !!! note "RMIT staff: you may need elevated rights"
        If the Microsoft Store is blocked on your RMIT-managed PC, request temporary elevated rights. See the [RMIT institution guide](../institutions/rmit.md#request-elevated-rights-for-claude-desktop) for the process — use the same form, but mention you need to install "Codex by OpenAI from the Microsoft Store".

### Step 2: Sign in

1. Open the Codex App
2. Sign in with your **ChatGPT account** (the same one you use at [chatgpt.com](https://chatgpt.com)) or an OpenAI API key

??? tip "Don't have an account yet?"
    Go to [chatgpt.com](https://chatgpt.com) and sign up. ChatGPT Plus, Pro, Business, Edu, and Enterprise plans include Codex.

### Step 3: Add a project and start working

1. Click **Add new project** (or press `Ctrl+O` / `Cmd+O`)
2. Select your **project folder** — the folder containing the files you want the AI to work with
3. Make sure **Local** is selected
4. Type your task and press **Enter**

Codex reads the files in your project folder and starts working. You can run multiple projects in parallel — each one gets its own thread.

---

## Troubleshooting

??? tip "App won't install on Windows"
    You likely need elevated rights. On a managed work machine (RMIT, La Trobe, etc.), your IT department controls what you can install. See your [institution guide](../institutions/index.md) for the request process.

??? tip "App installs but won't connect"
    Both apps need internet access to work. If you're on a corporate network that blocks certain sites, check with your IT team that `claude.ai` (for Claude) and `chatgpt.com` / `openai.com` (for Codex) aren't blocked by your firewall or proxy.

??? tip "Cowork tab not showing up on Mac"
    The Cowork tab requires Apple Silicon (M1 or later). If you're on an Intel Mac, use [Claude Code in the terminal](ai-tools.md) instead — it has the same capabilities.

??? tip "Codex App: 'Add new project' not working"
    Make sure you've signed in first. The project picker only works after authentication. Try restarting the app if the button is unresponsive.
