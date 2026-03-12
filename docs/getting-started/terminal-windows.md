# Terminal — Windows (WSL2)

WSL2 (Windows Subsystem for Linux) gives you a real Linux terminal inside Windows. The AI tools run here.

!!! note "Need admin access?"
    The initial `wsl --install` command requires administrator rights. If you're on a managed work computer, check the [Permissions](permissions.md) page or your [institution guide](../institutions/index.md) first.

## Install WSL2 and Ubuntu

Open PowerShell (Start menu → type `PowerShell` → click it):

```powershell
wsl --install -d Ubuntu
```

Restart your computer if prompted.

## Create your Linux user

When Ubuntu opens for the first time, it asks for a username and password. This is required by Linux — it only happens once.

- **Username**: short, lowercase, no spaces (e.g., `jane`)
- **Password**: easy to remember — you'll need it occasionally
- When you type the password, **nothing appears on screen** — this is normal. Just type and press Enter.
- You'll type it twice to confirm.

## Open Ubuntu

From now on, open Ubuntu from the Start menu — type `Ubuntu`, click the app.

## Pin your Linux home folder in Explorer

Your Linux home folder is where AI tools store their config files (like `CLAUDE.md`). Pin it for quick access.

In your Ubuntu terminal, run:

```bash
cd
explorer.exe .
```

This opens your Linux home directory in a Windows Explorer window. Right-click the folder and select **Pin to Quick access**.

!!! note "This is for config, not your daily work"
    Your actual research files stay in OneDrive — see [Where Should You Work](where-to-work.md). The Linux home folder is just for AI tool configuration.

## Navigate to a project folder

In Explorer, navigate to your project folder (e.g., in OneDrive). Type `wsl` in the address bar and hit Enter.

You're now in a terminal at that folder.

## Get back to Explorer

```bash
explorer.exe .
```

## Reload your terminal

After installing tools, you sometimes need to reload:

```bash
exec bash
```

??? tip "Terminal says 'command not found'?"
    Run `exec bash` to reload. If that doesn't work, close the Ubuntu window and reopen it from the Start menu.

??? tip "WSL feels slow?"
    If you're working with very large projects (thousands of files, big git repos), you can work in your [Linux home folder](wsl-home-folder.md) instead. For everyday research tasks, OneDrive is fine.
