# Working in the Linux Home Folder (WSL2)

Most of the time, you should [work in your OneDrive folder](where-to-work.md) — your files stay backed up and shareable. But if WSL feels slow with large projects, you can work in your Linux home folder instead.

## When to use the Linux home folder

- **Large git repositories** with thousands of files
- **Heavy file I/O** — projects that read and write many files rapidly
- **Build-intensive projects** — compiling code, running large test suites

For typical research tasks (analyzing a CSV, drafting a paper, writing a grant), OneDrive is fine.

## Where is the Linux home folder?

In your Ubuntu terminal, run:

```bash
cd
pwd
```

This shows something like `/home/jane`. That's your Linux home folder.

## Access it from Explorer

```bash
cd
explorer.exe .
```

If you [pinned it earlier](terminal-windows.md#pin-your-linux-home-folder-in-explorer), it's already in your Explorer Quick access.

## Copy files between OneDrive and Linux home

Your OneDrive is accessible from WSL. You can copy files back and forth:

```bash
# Copy a file from OneDrive to your Linux home
cp /mnt/c/Users/jane/OneDrive/my-project/data.csv ~/my-project/

# Copy results back to OneDrive when done
cp ~/my-project/results.csv /mnt/c/Users/jane/OneDrive/my-project/
```

!!! note "Backup reminder"
    Files in your Linux home folder are NOT backed up by OneDrive. If you work here, use git to track your changes and push to GitHub regularly.
