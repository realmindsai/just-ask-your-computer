# Desktop Apps

The web versions of Claude and ChatGPT can only see what you paste into the chat. The **desktop apps** can see the files on your computer. Point them at a folder and they can read, search, and work across everything in it — your data, your documents, your code.

That's the difference. Instead of copying and pasting snippets into a browser window, you give the AI access to a whole folder and have a conversation about what's in it.

---

## At a glance

| App | Provider | Cost | Download |
|-----|----------|------|----------|
| **Claude Desktop** | Anthropic | Pro $20/month, Max $100/month | [claude.ai/download](https://claude.ai/download) |
| **ChatGPT Desktop** | OpenAI | Plus $20/month, Pro $200/month | [openai.com/chatgpt/download](https://openai.com/chatgpt/download/) |

Both are standalone desktop apps — no terminal needed. Install, sign in, point at a folder, and start asking questions about your files.

---

## Claude Desktop

Anthropic's desktop app. Give it access to a folder on your computer and Claude can read everything in it — spreadsheets, PDFs, code, data files, documents. Ask it to summarise, analyse, compare, or transform what's there. No copying and pasting.

### Download and install

Go to [claude.ai/download](https://claude.ai/download).

=== "Mac"

    1. Open the downloaded `.dmg` file
    2. Drag **Claude** to your Applications folder
    3. Open Claude from Applications
    4. If macOS asks "Are you sure you want to open this?", click **Open**

=== "Windows"

    1. Run the downloaded `.exe` installer
    2. Follow the prompts to complete installation
    3. Open Claude from the Start menu

    !!! note "RMIT staff: you need elevated rights"
        RMIT-managed Windows PCs block software installation by default. You'll need to request temporary elevated rights before you can install Claude Desktop. See the [RMIT institution guide](../institutions/rmit.md#request-elevated-rights-for-claude-desktop) for the exact form and fields.

### Sign in

1. Open Claude Desktop
2. Click **Sign in**
3. Enter your email and password (the same account you use at [claude.ai](https://claude.ai))
4. You're in — start a conversation

??? tip "Don't have an account yet?"
    Go to [claude.ai](https://claude.ai) and sign up for a Pro or Max plan first. The free plan does not include Claude Desktop access.

### Give Claude access to your files

Once signed in, you need to tell Claude which folders it's allowed to read:

1. Open **Claude Desktop → Settings** (gear icon)
2. Go to **Files**
3. Click **Add Folder** and select the folder you want Claude to work with (e.g., your project folder, a data directory, or your OneDrive sync folder)
4. Claude will ask for permission the first time — click **Allow**

After that, Claude can see everything in that folder. Try asking: *"What files are in this folder?"* or *"Summarise the key findings across all the PDFs in here."*

!!! note "Claude only reads what you share"
    Claude can't see your whole computer — only the specific folders you add. You can add or remove folders at any time in Settings → Files.

---

## ChatGPT Desktop (OpenAI)

OpenAI's desktop app. Same idea — point it at a folder and ChatGPT can read your local files. Ask it to work with your data, documents, or code. Also includes image generation and the Codex coding assistant.

### Download and install

Go to [openai.com/chatgpt/download](https://openai.com/chatgpt/download/).

=== "Mac"

    1. Open the downloaded `.dmg` file
    2. Drag **ChatGPT** to your Applications folder
    3. Open ChatGPT from Applications
    4. If macOS asks "Are you sure you want to open this?", click **Open**

=== "Windows"

    1. Run the downloaded `.exe` installer
    2. Follow the prompts to complete installation
    3. Open ChatGPT from the Start menu

    !!! note "RMIT staff: you may need elevated rights"
        If the installer is blocked on your RMIT-managed PC, request temporary elevated rights. See the [RMIT institution guide](../institutions/rmit.md#request-elevated-rights-for-claude-desktop) for the process — use the same form, but mention you need to install "ChatGPT by OpenAI from https://openai.com/chatgpt/download".

### Sign in

1. Open ChatGPT
2. Click **Log in**
3. Sign in with your OpenAI account (the same one you use at [chatgpt.com](https://chatgpt.com))
4. You're in — start a conversation

??? tip "Don't have an account yet?"
    Go to [chatgpt.com](https://chatgpt.com) and sign up. The free plan gives limited access. For full features (GPT-4o, Codex, image generation), you'll need a Plus ($20/month) or Pro ($200/month) subscription.

### Give ChatGPT access to your files

1. Open a conversation in the ChatGPT desktop app
2. Click the **paperclip icon** (attach) in the message box
3. Select **Choose File** or **Choose Folder** to give ChatGPT access to local files or an entire directory
4. ChatGPT will ask for permission the first time — click **Allow**

Once connected, ask questions about your files: *"What's in this dataset?"* or *"Compare these two reports."*

!!! note "ChatGPT only reads what you share"
    Like Claude, ChatGPT can only see files and folders you explicitly share with it. You control what it has access to.

---

## Troubleshooting

??? tip "App won't install on Windows"
    You likely need elevated rights. On a managed work machine (RMIT, La Trobe, etc.), your IT department controls what you can install. See your [institution guide](../institutions/index.md) for the request process.

??? tip "App installs but won't connect"
    Both apps need internet access to work. If you're on a corporate network that blocks certain sites, check with your IT team that `claude.ai` (for Claude) and `chatgpt.com` (for ChatGPT) aren't blocked by your firewall or proxy.

??? tip "Which subscription do I actually need?"
    For the workshops, **Claude Pro ($20/month)** is the primary tool. ChatGPT Plus is optional but useful as a second opinion. Both have free tiers you can try first, but the free tiers have usage limits and may not include all features.
