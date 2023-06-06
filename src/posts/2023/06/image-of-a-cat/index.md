---
title: Here is a cat picture
date: 2023-06-04
categories: ["HTML"]
tags: post
---

Here is a picture of my cat, Cato. He’s a very good cat except for the two hours prior to dinnertime. But he’s not the reason I am writing this — I am writing it to talk a bit about images in HTML.

{% image "cat.jpeg" "a cat" %}

It’s hard to believe, but the earliest version of the Web did not include a way to post an image — like I just did above. In fact, the original suggestion (made by [Marc Andreessen](https://en.wikipedia.org/wiki/Marc_Andreessen)) met with a lot of opposition.

> Some worried that arbitrary tags opened the floodgates, and it wouldn’t be long before we had an element for every media type, like an aud tag for audio (or a video tag maybe? That would be just too much)…
>
> Tim Berners-Lee, the creator of the World Wide Web, was hesitant too. He suggested that Andreessen instead use the anchor tag to display inline images instead of creating something entirely new. This would allow users to set their own preferences for how images should be handled. <cite>from [The Origin of the IMG tag](https://thehistoryoftheweb.com/the-origin-of-the-img-tag/)</cite>

Marc wasn’t waiting around for people to agree, however. Later that year he shipped NCSA Mosaic, including support for the still-controversial `<IMG>`.

This decision had two consequences. First, it put the web on the road to being a _designable_ medium, which gave the web — and the internet — broad appeal. When I returned to college from my co-op semester in January of 1994 and found NCSA Mosaic on my re-imaged computer science workstation, it was the inline images that grabbed my attention and created my entire career.

Second, it set the precident of different browsers having support for custom tags. This was less awesome — when Microsoft jumped into the market with their own Internet Explorer browser they added their own extensions, vastly complicating web development for decades. That’s a situation we still haven’t quite put behind us.



