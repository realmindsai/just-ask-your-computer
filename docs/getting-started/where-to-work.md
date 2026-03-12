# Where Should You Work

Short answer: **work in your OneDrive or SharePoint folder.** Your files stay backed up, shareable, and in the same place they always were.

=== "Mac"

    Your terminal accesses OneDrive folders directly at full speed. No special setup needed.

    Navigate to your OneDrive folder in Finder, drag it onto Terminal, and you're there.

=== "Windows (WSL2)"

    Navigate to your OneDrive folder in Explorer like normal. When you need a terminal there, type `wsl` in the Explorer address bar and hit Enter.

    File operations through WSL on OneDrive folders are slightly slower than the Linux filesystem, but for typical research tasks — analyzing a CSV, drafting a paper, writing a grant — you won't notice. The backup and convenience are worth it.

    ??? tip "WSL feels slow?"
        If you're working with very large projects (thousands of files, big git repos), consider working in your Linux home directory (`~`) instead. For everyday research tasks, OneDrive is fine.
