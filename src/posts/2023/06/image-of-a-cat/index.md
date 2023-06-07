---
title: Here is a cat picture
subtitle: Meditations on the IMG tag
date: 2023-06-05
categories: ["HTML"]
tags: post
---

Here is a picture of my cat, Cato. He’s a very good cat except for the two hours prior to dinnertime. But he’s not the reason I am writing this — I am writing it to talk a bit about images in HTML.

{% image "cat.jpeg" "Cato, an orange and white cat, looking at the camera and loudly meowing." %}

It’s hard to believe, but the earliest version of the Web did not include a way to post an image — like I just did above. In fact, the original suggestion from [Marc Andreessen](https://en.wikipedia.org/wiki/Marc_Andreessen)) met with a lot of opposition.

> Some worried that arbitrary tags opened the floodgates, and it wouldn’t be long before we had an element for every media type, like an aud tag for audio (or a video tag maybe? That would be just too much)…
>
> Tim Berners-Lee, the creator of the World Wide Web, was hesitant too. He suggested that Andreessen instead use the anchor tag to display inline images instead of creating something entirely new. This would allow users to set their own preferences for how images should be handled. <cite>from [The Origin of the IMG tag](https://thehistoryoftheweb.com/the-origin-of-the-img-tag/)</cite>

Marc wasn’t waiting around for people to agree, however. Later that year he shipped NCSA Mosaic with support for the still-controversial `<img>`. Mosaic became the standard browser for the Web

This decision had two consequences. First, it put the web on the road to being a _designable_ medium, which gave the web — and the internet — broad appeal. When I returned to college from my co-op semester in January of 1994 and found Mosaic on my re-imaged computer science workstation, it was the inline images that grabbed my attention and created my entire career.

Second, it set the precedent of different browsers having support for custom tags. This was less awesome — when Microsoft jumped into the market with their own Internet Explorer browser they added their own extensions, vastly complicating web development for decades. That’s a situation we still haven’t quite put behind us.

I say all of that to say this: showing images on the web is actually pretty complex — more so now than it used to be. While the original `<img>` tag shipped in 1994 was straightforward — one source file, one image — we can provide multiple image sizes for the browser to choose from based on the viewing conditions. With the newer `<picture>` tag, we can _also_ specify images in different aspect ratios for the same slot. That means we could show square images when browser windows are small, but large landscape-oriented images when browser windows are large.

These tools have been around for awhile, but they are complex enough that I don’t often code them by hand; I set them up once in a content management system like Drupal or Wordpress and then stop thinking about them. For this site, I could lean on [eleventy’s several excellent tools](https://www.11ty.dev/docs/plugins/image/#use-this-in-your-templates), but I am coding my own. I am hoping doing so will strengthen my understanding of how the modern image tags work, but as an extra measure I will probably blab about it here as well.
