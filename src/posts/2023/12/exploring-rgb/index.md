---
title: Exploring the RGB Color Space
date: 2023-12-09
description:
categories:
  - CSS
  - Color
tags: post
js:
  - /js/color-bar.js
css:
  - /styles/color-bar.css
  - rgb-bars.css
cover:
  src: LED_RGB_matrix.jpg
  alt: Closeup of tiny red, greenm and blue LEDs arranged in a matrix for a display.
  description: These LEDs are arranged very close together in a tight matrix; when viewed from a normal distance, the colors from these lights will blend to reproduce a large portion of the visible spectrum.
  attribution:
    name: Komatta / Wikimedia
    link: https://commons.wikimedia.org/wiki/File:LED_RGB_matrix.jpg
    license:
      name: Public Domain
---

It's a revolution for color in CSS. Not only do we now have access to many different color models, we also have entirely new color spaces to explore. As part of deepening my own understanding of what’s available to us, I've been experimenting with the different color spaces and color notations.

## Color spaces

Color terms get rapidly technical, and — to be honest — I only have a fingernail grip on it to begin with. But for our purposes as web designers or developers, it seems to be correct enough to say that _color space_ represents the entire set of colors that can be seen or reproduced on a specific device.

{% articleFig "color-spaces-apple.png" "A screenshot of Apple’s monitor color space settings" "right" %}

Apple monitors are the exception to those terrible monitor menus; you can access their settings from the Control Panel.

{% endarticleFig %}

Example color spaces are: sRGB, Adobe RGB, DCI-P3, and Rec2020. If you dig into your monitor’s display settings — those are the ones behind the annoying and difficult-to-use monitor firmware menus — you may discover you can switch between these.

## Color models

Color _models_, on the other hand, are the mechanisms used to represent those colors. For example, one color model is the one you may have learned when you were first using finger-paint. “The three primary colors,” it went, “are red, yellow, and blue.” This is not accurate. It is, for example, impossible to get white or black by mixing any amount of red, yellow, and blue paint. Furthermore, the absence of white and black leaves many shades of colors entirely unreachable. But the range of colors reproducible this way is probably fine for five-year-olds.

Over the course of a few posts, I want to take a look at other color models and discuss what I think are their benefits and weaknesses. The first one we’ll look at is RGB — which uses red, green and blue as primary colors.

## RGB in the sRGB color space

Similar to the old "Red, Yellow, Blue" system is the "Red, Blue, Green" system. This color model works well with light. You can get black by reducing _all_ of the light, and you get white by turning red, blue, and green up to their full intensities. Old color CRT displays used tiny red, blue, and green phosphor dots, and modern televisions use the same colors but different technologies.

<figure class="right">
  <labeled-swatch color="#ff0000" label="#ff0000 — red"></labeled-swatch>
  <labeled-swatch color="#00ff00" label="#00ff00 — green"></labeled-swatch>
  <labeled-swatch color="#0000ff" label="#0000ff — blue"></labeled-swatch>
  <figcaption>
    Hexadecimal notation of the three primaries. Although we might think of these as three numbers jammed together, the result is just one number.
  </figcaption>
</figure>

This trick with red, blue, and green works because our eyes have photoreceptors called “cones” which are specifically designed to detect these colors. All the in-between colors we see comes from some mixture of these as a result.

The RGB color model expresses color in exactly this way. The sRGB color space — created in 1996 — is the most common and compatible model for colors on the web. If you have used “hex color,” you are working in the RGB color space. The intensity of each color is described by a number from 0 to 255 (or 00 to FF in hexadecimal). In hexadecimal notation, the amount of blue constitutes the first two digits, green the second two, and red is the third two. For example:

<figure class="right">
  <labeled-swatch color="#9760f0" label="9,920,752 — grimace purple"></labeled-swatch>
  <labeled-swatch color="#009060" label="36,960 — forest green"></labeled-swatch>
  <labeled-swatch color="#f00073" label="15,728,755 — pink"></labeled-swatch>
  <figcaption>
    Some RGB colors represented as decimals. Once you start mixing colors, it becomes really hard to break the colors down into their component parts.
  </figcaption>
</figure>

Why hexadecimal notation? This format makes it easy for us to see the intensity of red, green, and blue values independently. Decimal is a lot harder to manage. “15,728,755” is a combination of both red and blue, but it’s hard to tease out how much by looking at the decimals. Once it’s in hex, it’s a lot easier to see that it's quite a lot of red and a bit of blue: `#f00073`.

The amount of each of these colors tells us how much of that wavelength of light contributes to the final color value. If we turn off all but one, and then sweep through the values from 0 to 256 for a single color, we get shades of that color.




<figure class="color-bars">
  <color-bar numswatches="16" class="rgb red" style=""></color-bar>
  <color-bar numswatches="16" class="rgb green" style=""></color-bar>
  <color-bar numswatches="16" class="rgb blue" style=""></color-bar>
  <figcaption>
    Each of the three components runs from black to the pure hue as long as the other two components
    are 0.
  </figcaption>
</figure>

You can get other hues by blending two of the three primary colors.

<figure class="color-bars">
  <color-bar numswatches="16" class="rgb red" style="--b: 0"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--b: 64"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--b: 128"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--b: 192"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--b: 256; margin-bottom: 1rem;"></color-bar>

  <color-bar numswatches="16" class="rgb red" style="--g: 0"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--g: 64"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--g: 128"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--g: 192"></color-bar>
  <color-bar numswatches="16" class="rgb red" style="--g: 256; margin-bottom: 1rem;"></color-bar>

  <color-bar numswatches="16" class="rgb blue" style="--g: 0"></color-bar>
  <color-bar numswatches="16" class="rgb blue" style="--g: 64"></color-bar>
  <color-bar numswatches="16" class="rgb blue" style="--g: 128"></color-bar>
  <color-bar numswatches="16" class="rgb blue" style="--g: 192"></color-bar>
  <color-bar numswatches="16" class="rgb blue" style="--g: 256"></color-bar>
  <figcaption>
    Top: 0-100% red across the horizontal axis, 0-100% blue on the vertical axis.
    Middle: 0-100% red across the horizontal axis, 0-100% green on the vertical axis.
    Bottom: 0-100% blue across the horizontal axis, 0-100% green on the vertical axis.
  </figcaption>
</figure>

Pure neutral tones have equal amounts red, green, and blue. The closer the red, green, and blue channels are to each other, the more desaturated -- or “grey” -- the colors get.

<figure class="color-bars">
  <color-bar numswatches="32" class="rgb greyscale" style="--g: 0; margin-bottom: 1rem;"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 0; --r: 0"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 64; --r: 64"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 128; --r: 128"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 192; --r: 192"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 256; --r: 256"></color-bar>
  <figcaption>
    Top: Greyscale values created by equal mixtures of red, green, and blue.
    Bottom: Green from 0-100% on the X axis, equal values from 0-100% blue and red on the Y axis.
  </figcaption>
</figure>

Mix all three unevenly and you get lighter, more pastel-like shades.

<figure class="color-bars">
  <color-bar numswatches="16" class="rgb green" style="--b: 128; --r: 0"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 256; --r: 64"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 128; --r: 128"></color-bar>
  <color-bar numswatches="16" class="rgb green" style="--b: 256; --r: 192"></color-bar>
  <figcaption>
    Top: Greyscale values created by equal mixtures of red, green, and blue.
    Bottom: Green from 0-100% on the X axis, equal values from 0-100% blue and red on the Y axis.
  </figcaption>
</figure>

CSS has a few other ways to describe an RGB color.

<dl>
<dt><code>rgb(0, 128, 255)</code></dt>
<dd>As a comma-separated list of red, green, and blue decimal values between 0 and 255</dd>
<dt><code>rgba(0, 128, 255, 0.1)</code></dt>
<dd>The same, but with a fourth component in decimal values between 0 and 1 describing how opaque (1) or translucent (0) the color is.</dd>
<dt><code>rgb(0 128 255 / 0.1)</code></dt>
<dd>A space-separated version with an optional opacity value separated from the color channels by a slash.</dd>
</dl>

## Advantages and Disadvantages

As a color model, RGB has some big advantages:

* It matches the mechanical production of color on displays, which emit red, green, and blue light, just smooshed close together.
* Every color in the sRGB space can be addressed by precisely one combination of R, G, and B.
* This mode of expressing colors in digital design is as common as dirt.

<figure class="color-bars right">
  <labeled-swatch color="#ff0000" label="#ff0000"></labeled-swatch>
  <labeled-swatch color="#f44e4e" label="#f44e4e"></labeled-swatch>
  <labeled-swatch color="#a73106" label="#a73106"></labeled-swatch>
  <figcaption>
    Very similar colors can have radically different RGB values.
  </figcaption>
</figure>

But there’s one huge disadvantage: Because RGB is a mixture of three colors, it can be very difficult to figure out on your own what values you need to change to make colors lighter or darker, or more or less saturated.

This is not a problem if you are able to pick individual colors from a color wheel, but if you want to derive colors mathematically — “the brand color, but 20% lighter” — you need to use a different color model.

The next color model was designed to solve that problem, but to do that we have to take ourselves out of the relatively familiar ground of mixing colors and learn to think about color in a different way.
