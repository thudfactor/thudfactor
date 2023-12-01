---
title: Exploring the RGB Color Space
date: 2023-12-01
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

RGB notation describes colors as a mixture of three primaries: Red, Green, and Blue. All colors — including neutral tones — can be expressed as different amounts of these three.

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

Pure neutral tones have equal amounts red, green, and blue. The closer the red, green, and blue channels are to each other, the more desaturated the colors get.

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

RGB has some big advantages:

* It matches the mechanical production of color on displays, which emit red, green, and blue light, just smooshed close together.
* Every color in the sRGB space can be addressed by precisely one combination of R, G, and B.
* This mode of expressing colors in digital design is as common as dirt.

There is one huge disadvantage. Because RGB is a mixture of three colors, it can be very difficult to figure out on your own what values you need to change to make colors light or dark, more or less saturated. This is not a problem if you are able to pick individual colors from a color wheel, but if you want to derive colors mathematically — “the brand color, but 20% lighter” — you need to use a different color space.

<figure class="color-bars">
  <labeled-swatch color="#ff0000" label="#ff0000"></labeled-swatch>
  <labeled-swatch color="#f44e4e" label="#f44e4e"></labeled-swatch>
  <labeled-swatch color="#a73106" label="#a73106"></labeled-swatch>
  <figcaption>
    Very similar colors can have radically different RGB values.
  </figcaption>
</figure>
