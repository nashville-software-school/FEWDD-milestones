# Hardware

Up until now, you didn't have the power to destroy your machine, but now you do. Go buy a backup drive RIGHT NOW and start backing up your entire hard drive.

Seriously, right now.

# Things you need to install

## Everyone

### Create a Github account

Github is the primary site that software developers throughout the world use to store their code, and share it with other developers. Visit the [sign up page](https://github.com/join) and create your own, free account.

### Install Slack

1. We will make sure you get an invitation to the Nashville Software School Slack organization.
1. When you get your invitation email, make sure you download and install the Slack client on your machine.

### Create Treehouse account

Visit [treehouse](https://teamtreehouse.com/) and create an account with the Basic Plan, which is $25 per month.

### Create Codepen account

Visit the [Codepen sign up page](https://codepen.io/signup), and scroll all the way to the bottom to sign up for a free plan. If you like, you can click the "Use info from Github" button when creating your account.

### Google Chrome

[Google Chrome](https://www.google.com/chrome/browser/desktop/index.html) is the most popular browser for web developers because of the powerful tools it provides to test code, manipulate documents, and measure performance.

### Google Cast extension

Once Chrome is installed, open it and visit the [Chrome Store page](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd) for Google Cast and install it. This will allow you to share your browser screen in the classroom.

### Sublime Text

Visit the [Sublime Text](http://www.sublimetext.com/3) website and click the link that corresponds to your operating system. Then install once the download is complete.

Install the Sublime Text [package control](https://packagecontrol.io/installation) which, in turn, allows you to easily install and manage tons of really cool add-ons for customizing your Sublime editor.

Read [this excellent introduction](https://scotch.io/bar-talk/best-of-sublime-text-3-features-plugins-and-settings) to getting the very most out of Sublime Text. These tips will make coding more enjoyable and increase your speed.

### Vagrant

Visit the [Vagrant download](https://www.vagrantup.com/downloads.html) page and download the installer for your operating system. Once complete, run the installer using all of the default options it provides.

### Virtual Box

Visit the [VirtualBox download](https://www.virtualbox.org/wiki/Downloads) page and download the installer for your operating system. Once complete, run the installer using all of the default options it provides.

## Windows users

###Git powershell

Visit the [Git powershell](http://www.git-scm.com/downloads) download page click the "Download for Windows" button, and once complete, install the software. Powershell is a command line utility that allows you to run most Unix command inside a Windows environment. This will help you have the same vernacular as the rest of the class, since having a *nix environment is preferred and is how the class is taught.

Git is a program that allows software developers to efficiently manage how their code is versioned, shared, and archived. You will be learning how to use it during class.

###Chocolatey package manager (*optional*)

Windows, like OSX, does not have a built in package manager (a fancy term for a piece of software that lets you easily install other software that you need as a developer). There will be times, many weeks into class, as you gain confidence and skill, that you will want to use a package manager. Therefore, if you feel up to the task - meaning, you were able to install all the required software easily - you may want to install Chocolately.

Here's the [official page](https://chocolatey.org/), but it's instructions are written to an audience of existing software developers and may be confusing for a layperson. Here's the basic instructions.

1. Press your Windows key.
1. Type `cmd` into the search box.
1. You'll see a black box as the first search result named `cmd`.
1. Right click that icon and select the "Run as administrator" option. This opens up the _**Windows Command Line**_.
1. When that starts, copy the following command with Ctrl+C, and once that's done paste it into the command line by right-clicking anywhere in that window.
  `@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`

# System setup

> When you read the text "execute the command `something`", enter in the command in your terminal, and always follow the command by pressing the enter key.

## Setting up Vagrant

Vagrant is a tool that lets you run a virtual machine that has much of the software that you'll need for class already installed and configured. Think of it as an operating system _**inside**_ your operating system. It's actually an operating system called Linux, a specific brand called Ubuntu, that will run while your machine's default operating system is running. You can start it up, shut it down, pause it, or delete it entirely without affecting your default operating system.

It's why it's called a *virtual* machine.

### OSX

1. Open your terminal application by hitting the combination of the command key and the space key, and then typing in `terminal` and pressing enter.
1. Execute the command `cd` which is the command to change directory. This is what's called your home directory. You can execute the command `pwd` (print working directory) to see the actual path in on your hard drive to that directory. It should be something like `/Users/username`.
1. Create a new directory inside your home directory by executing the command `mkdir workspace`. This creates the directory `/Users/username/workspace`. This is the directory on your hard drive where we will be writing all of the code your learn during class.
1. Go into that directory by executing the command `cd workspace`.
1. If you have not yet installed Vagrant or VirtualBox, please go and do that now.
1. Execute the following command. Hint, you can copy and paste from here into your terminal so you don't have to manually type all that in.
  `vagrant init vagrant-trusty64 http://www.stevebrownlee.com/content/images/nss-base.box`
1. Once that completes, execute the command `vagrant up`. This will take some time and you'll notice a progress bar in your terminal while it's working.
1. After that machine starts, you can then execute the command `vagrant halt` which will put the virtual machine into suspended animation until you're ready to start using it in class.

### Windows

1. Open the Git powershell program that you installed earlier as an administrator. It will be labeled "Git bash" in your start menu or desktop. To open as administrator, right-click the icon and select "Run as administrator option".
1. Execute the command `cd` which is the command to change directory. This is what's called your home directory. You can execute the command `pwd` (print working directory) to see the actual path in on your hard drive to that directory. It should be something like `/c/Users/Steve`, except instead of `Steve` you will see **your** account username.
1. Create a new directory inside your home directory by executing the command `mkdir workspace`. This creates the directory `/c/Users/Steve/workspace`. This is the directory on your hard drive where we will be writing all of the code your learn during class.
1. Go into that directory by executing the command `cd workspace`.
1. If you have not yet installed Vagrant or VirtualBox, please go and do that now.
1. Execute the following command. Hint, you can copy and paste from here into your terminal so you don't have to manually type all that in.
  `vagrant init vagrant-trusty64 http://www.stevebrownlee.com/content/images/nss-base.box`
1. Once that completes, execute the command `vagrant up`. This will take some time and you'll notice a progress bar in your terminal while it's working.
1. After that machine starts, you can then execute the command `vagrant halt` which will put the virtual machine into suspended animation until you're ready to start using it in class.

# Homebrew for Mac users

Visit the [homebrew home page](http://brew.sh/) and follow the single instruction there to get it installed.

---

# Keyboard shortcuts

## Quick overview of general shortcuts

1. Keyboard shortcuts for window management (open, close, switch between)
1. Switching tab
1. Selecting whole lines of text
1. Moving/selecting single words
1. Codepen shortcuts

## Sublime Text shortcuts

1. Cmd+O (_Open file/folder_)
1. Cmd+K, B (_Show/hide sidebar_)
1. Cmd+N (_New file_)
1. Cmd+S (_Save file_)
1. Cmd+P (_Quick open file_)
1. Shift+Arrows for selection
1. Copy, cut, paste (_Cmd+C, X, V_)
1. Undo, redo (_Cmd+z, Cmd+Y_)
1. Shift+Alt+Arrows for word selection
1. Ctrl+Cmd+Up/Down
1. Ctrl+Shift+K (_Delete entire line of code_)
1. Cmd+[] (_Indent,unindent_)
1. Ctrl+Shift+Up/Down for mutiple cursors
1. Cmd+D (_Select entire word_)
1. Cmd+F (_Find_)
1. Cmd+Shift+F (_Advanced find_)
1. Ctrl+Cmd+G for selecting all occurances

---

# Command Line Interface (CLI)

Ensure that any students who are using Windows have the Powershell package installed, since you'll be covering \*nix commands for the following actions.

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

## Working with your Vagrant virtual machine

Explain Vagrant and why it's being used to standardize the development environment for NSS students.

1. Make a standard workspace directory `cd && mkdir -p workspace`
1. `cd workspace`
1. `touch test.md`
1. Run this command in the workspace folder `vagrant init vagrant-trusty64 http://stevebrownlee.com/content/images/nss-base.box`
1. Run `vagrant up` and verify that it pulls and starts the VM
1. `vagrant ssh` to get into the machine
1. `cd /vagrant` and verify that `test.md` file is there. Explain that the `/vagrant` directory is a direct mapping to the directory on the host machine where vagrant was initialized.

---

# Want to learn more?

Use the `man` command to learn more about the other commands below. For example, `man touch` tells you everything you need to know about the `touch` command. Just press `q` when you're done reading the content.

1. Go through the CodeAcademy [command line course](https://www.codecademy.com/learn/learn-the-command-line).
1. **List all processes on your machine**. Learn about the `ps` command to find processes on your machine. For advanced usage, combine it with grep to find a specific process.
1. **View processes, live, with stats**. Try the `top` command to monitor running processes in real time.
1. **curl your way on the Web**. You can "surf the web" on the command line using `curl`. Read the docs and see what happens when you use `curl` instead of a web browser.
1. **Find the process using a port**. There's a way to see which port every process that's running is listening on (if applicable). It's `lsof -i`. To find the process listening on a specific port, you add a second argument that is the port number - `lsof -i :8080`.
1. **Securely connect to remote machines**. The `ssh` command allows you to use the CLI of another computer - whether it's a virtual machine running on your personal computer, or a server running in one of Amazon's server farms. You can try it by connecting to your Vagrant machine with `ssh vagrant@192.168.33.10`.
