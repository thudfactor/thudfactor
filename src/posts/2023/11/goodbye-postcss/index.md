---
title: Goodbye, PostCSS
date: 2023-11-07
description: Removing any form of CSS post-processing has me nostalgic for the other web development strategies that have become obsolete thanks to modern development strategies.
categories:
  - CSS
  - WebDev
tags: post
cover:
  src: columns.jpg
  alt: Twenty-two corinthian columns arranged in a rectangle in a field, supporting nothing.
  description: These columns on display at the National Arboretum in Washington, DC were made in 1828 and removed in 1958 when an addition to the east side of the Capitol took their place.
  attribution:
    name: John Williams
---

I am really excited to say that the update to _Thudfactor_ that posts this _also_ removes PostCSS from the blog’s build processes. For ten years, give or take _n_, I've relied on a number of post-processing tools to make writing complex CSS a lot more managable. For most of that time it was SASS. I moved to PostCSS once I started using CSS Custom Properties, which solved most of my need for variables in my CSS. Newer selectors like `:has`, `:is`, and `:not` have made a lot of branching logic in CSS unnecessary. And now, with CSS Nesting part of the standard and well-adopted by all major browsers, my only excuse for using PostCSS has evaporated. I can now ship the CSS I write without any extra work.

To celebrate, I wanted to make note of several other strategies that have (thankfully) faded into distant memory.

