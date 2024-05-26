---
title: Seeking a new editor
description: Some thoughts about changing up my typical toolset
date: Sat May 25 07:05:25 EDT 2024
---

This week I started looking at other editing tools. I've been a pretty happy user of VSCode for years, but Microsoft's stewardship has me feeling antsy. Their eagerness to work AI into every corner of every process everywhere seems irresponsibly premature at best.

I started out dubious about the value of AI for developers, and several months experience with Github Copilot has not improved that very much. When it works, it's very useful. But those "when it works" bits feel like they are getting increasingly rare, and my time savings on task A gets eaten up by all the corrections I am doing on tasks B, C, D, and E.

I've already turned off Copilot entirely for CSS because the styles it writes are very detailed _and_ use old techniques. And Copilot keeps trying to autocomplete Javascript "import" statements to use packages I haven't even installed.

It may be slower than intellisense, but at least it's a lot more wrong.

Of course, you don't have to _use_ the AI stuff. But my experience so far has been that when companies add major feature to their products and people _don't_ use them, they respond by elevating the amount of attention those features get... until you spend a lot of time turning them off (again) or batting away prompts to use them. "We built AI into your search" is a great example of this.

VSCode felt better to use when it was run by an independent company with a strong programmer focus, and for years it felt like Microsoft was content not to poke at it too much. These were also years where it seemed Microsoft was making deliberate strides to improve Windows as a development platform. It feels like that's changed, though.

Ideally what I'd want is an editor that was:

1. Fast
2. Open source
3. Met my needs with little setup
4. Well supported
5. Didn't encourage tinkering

Undoubtedly I will have to compromise on a few of these. Anyway, here's some of the things I've been looking at.

## Stand-alone editors

I see [Sublime](https://www.sublimetext.com/) is still kicking around. It'd been my favorite for a long time, until Atom and then VSCode seemed more exciting. I think you can still get Atom but it's no longer in active development.

[BBEdit](https://www.barebones.com/support/bbedit/updates.html) is also still with us. In fact, they released version 15 just ten days ago. Much of my early work on the web was done through BBEdit, so I have fond memories.

Some of the Atom team, though, is working on a new editor called [Zed](https://zed.dev/). I am not sure what license Zed is using, but they say it will "always be free." I'm dubious, not because I don't trust the development team but because I've heard that before. Zed also bakes in a lot of collaboration tools, which is exciting if that's the way you work. It's not the way I work, at least not yet, so having the focus there is not great for me.

## In-terminal editors

Using editors from the command line seems potentially very exciting. I spend a lot of time on the command line already. I am writing this post using [Helix](https://helix-editor.com/), and it's a lot of fun. I am certainly feeling the lack of an integrated file browser, though. Maximizing my experience with Helix will require a lot of mindful use, though.

One thing I didn't notice until I started this post is that my very-ingrained key combinations for typographer's quotes, ellipsis, and other international characters don't work in the terminal. This is a _significant_ flaw, since [I use those a lot](https://thudfactor.com/posts/2024/02/punctuation/). It's one of the reasons I never returned to Windows as a development environment.

_Update:_ While I was reading over this again (several hours after posting), I realized that something in my build process is automatically turning the straight quotes into typographer's quotes, so that's an improvement.

[VIM](https://www.vim.org/) & [NeoVIM](https://neovim.io/) are overwhelmingly popular in this space, but the ecosystem is seriously confusing and both of the editors certainly don't meet my fifth requirement. In fact, I've seen several people say they switched _away_ from either VIM or NVIM because they were constantly having to repair their setups _or_ were often distracted by tinkering with the setups.

Helix, VIM, and NeoVIM are all modal editors, which let you do a lot from the keyboard because you can switch into and out of the typical writing mode. I often hear that people feel more productive when using them, _but_

1. They take a while to learn
2. You usually have to cobble a lot more together
3. It's easy to spend a lot of time tinkering

All of that means the productivity gains might be eaten up (or more!) by the supporting activities.

Emacs was my initial editor when I started in Computer Science. I don't have fond memories. Everything I said about productivity gains and VIM goes triple for Emacs.

The only way to really choose another tool is to poke at them all for awhile, and not worry too much about the productivity gains. I don't want to be slowed down _too_ much, but if it makes the work more fun that's probably worth the change alone.
