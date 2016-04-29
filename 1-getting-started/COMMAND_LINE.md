# Command Line Interface (CLI)

If you are using Windows have the Git Bash package installed, since you'll be learning \*nix commands for the following actions.

## Rule \#1 of command line

**Always know where you are**

## Basic commands

1. Learn how to navigate your computer's directory structure `cd`
1. Show where you are `pwd`
1. Create directory `mkdir`
1. View contents of a directory `ls`
1. Wiping the slate clean `clear`
1. Create files `touch`
1. View contents of files `cat`
1. Copying files and directories `cp`
1. Moving files and directories `mv`
1. Deleting files and folders `rm && rm -rf`

## Helpful commands to install

### tree

### OSX

1. [Install homebrew](http://brew.sh/)
2. Type `brew install tree` and wait for installation to complete
3. Type `tree`

### Linux

1. Type `sudo apt-get install tree`
2. Type `tree`

## Advanced commands & options

1. Perform actions that affect the entire machine with `sudo`
1. Quickly edit files with vim `vi filename`
1. Use `mkdir -p` to automatically make every directory in a new path
1. Use wildcards when moving or copying files, e.g. `cp *.js ./`
1. Use the `-r` option with `mv` or `cp` to recursively perform the action on all sub-directories
1. Use double bang `!!` to repeat last command, or prefix it with `sudo`, for example.
1. Aliases in .bashrc `mkcd() { [ -n "$1" ] && mkdir -p "$@" && cd $_; }`

---

# Want to learn more?

Use the `man` command to learn more about the other commands below. For example, `man touch` tells you everything you need to know about the `touch` command. Just press `q` when you're done reading the content.

1. Go through the CodeAcademy [command line course](https://www.codecademy.com/learn/learn-the-command-line).
1. **List all processes on your machine**. Learn about the `ps` command to find processes on your machine. For advanced usage, combine it with grep to find a specific process.
1. **View processes, live, with stats**. Try the `top` command to monitor running processes in real time.
1. **curl your way on the Web**. You can "surf the web" on the command line using `curl`. Read the docs and see what happens when you use `curl` instead of a web browser.
1. **Find the process using a port**. There's a way to see which port every process that's running is listening on (if applicable). It's `lsof -i`. To find the process listening on a specific port, you add a second argument that is the port number - `lsof -i :8080`.
1. **Securely connect to remote machines**. The `ssh` command allows you to use the CLI of another computer - whether it's a virtual machine running on your personal computer, or a server running in one of Amazon's server farms. You can try it by connecting to your Vagrant machine with `ssh vagrant@192.168.33.10`.