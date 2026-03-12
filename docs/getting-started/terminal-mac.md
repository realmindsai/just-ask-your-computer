# Terminal — Mac

Your Mac already has a terminal built in. Here's how to use it.

## Open Terminal

Press `Cmd+Space` to open Spotlight, type **Terminal**, press Enter.

You'll see a window with a command prompt. This is where you'll run install commands.

## Navigate to a folder

Drag a folder from Finder onto the Terminal window. It pastes the path. Hit Enter.

That's it — you're now in that folder.

```bash
# The drag-and-drop pastes something like this:
cd /Users/jane/OneDrive/my-project
```

## Get back to Finder

```bash
open .
```

This opens the current folder in Finder.

## Reload your terminal

After installing tools, you sometimes need to reload so the terminal picks up new commands:

```bash
exec zsh
```

!!! note "Mac uses `zsh`"
    Wherever this site says `exec bash`, Mac users should use `exec zsh` instead. Modern Macs use zsh as the default shell.

??? tip "Terminal says 'command not found' after installing something?"
    Run `exec zsh` to reload. If that doesn't work, close the Terminal window (`Cmd+W`) and open a new one (`Cmd+N`).

??? tip "'Permission denied' errors?"
    Go to **System Settings → Privacy & Security → Full Disk Access** and add Terminal.app. You should not need `sudo` for any install in this guide.
