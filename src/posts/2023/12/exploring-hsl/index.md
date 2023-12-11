---
title: Exploring HSL
date: 2023-12-11
description:
categories:
  - CSS
  - Color
tags: post
js:
  - /js/color-bar.js
css:
  - /styles/color-bar.css
  - hsl-bars.css
cover:
  src: saturation-example.png
  alt: A picture of a flower doctored so that the leaves and blossom are brilliant green and purple on the left, but fade into shades of grey on the right.
  description: “Saturation” is a measure of how much hue contributes to a color. Here is a picture of a Guzmania Bromeliad (I think) with saturation decreasing from left to right.
  attribution:
    name: John Williams
---

HSL is a common replacement for RGB notation because it is more human-readable. While RGB notation describes a mix of red, green, and blue color components, HSL describes color on three axes: _hue_, _saturation_, and _lightness_.

### Adjusting one axis

_Hue_ describes the color by picking a direction on a color wheel. Once you have memorized the rough locations of common colors on the wheel (expressed in degrees), it’s trivial to pick a hue. Below is a color bar sweeping through the color wheel from 0º to 360º.

<figure>
<color-bar numswatches="16" class="hsl hue" style="margin-bottom: 1rem;"></color-bar>
<color-bar numswatches="16" class="hsl saturation" style="margin-bottom: 1rem;"></color-bar>
<color-bar numswatches="16" class="hsl lightness" style="margin-bottom: 1rem;"></color-bar>
<figcaption>

  Top: Changing the _hue_ value from 0º to 360º.
  Middle: Changing the _saturation_ value from 0% to 100%, with lightness 50%.
  Bottom: changing the _lightness_ value from 0% to 100%, saturation 100%.

</figcaption>
</figure>

Adjusting saturation alone causes colors to tend towards grey, which sometimes has the effect of lightening the colors even though the lightness value is untouched. At 0% saturation, all colors are the same because the hue value contributes nothing to the overall color, so only lightness matters.

<figure>
  <color-bar numswatches="16" class="hsl hue" style="--s: 100%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 75%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 50%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 25%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 0%"></color-bar>
  <figcaption>
    Reducing saturation in 25% increments from 100% to 0%, lightness kept constant
    at 50%. Notice that the last row is a solid color, but seems darker than any
    of the other colors in the second-to-last row.
  </figcaption>
</figure>

But adjusting lightness can also seem to pull the hue out of the color, but the only available neutral tones on this axis are black and white. Instead, the hue is gradually overwhelmed by the black and white colors, which causes saturation to have less of a visible effect.

<figure>
  <color-bar numswatches="16" class="hsl hue" style="--l: 0%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 10%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 20%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 30%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 40%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 50%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 60%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 70%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 80%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 100%"></color-bar>
  <figcaption>
    Increasing lightness in 10% increments from 0% to 100%, saturation kept constant
    at 50%.
  </figcaption>
</figure>

To get purely neutral tones, you can set the hue to any degree, reduce saturation to 0, and sweep through the lightness values.

<figure>
  <color-bar numswatches="16" class="hsl lightness" style="--s: 0%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 25%"></color-bar>
  <figcaption>
    Every swatch above has a different hue value, but they are all shades of
    grey because saturation is 0%.
  </figcaption>
</figure>

## HWB Color

Like HSL, HWB has a hue component, but the other two axes are "whiteness" and "blackness." Changing _either_ W or B while keeping the other at 0% is essentially the same as sweeping through the "lightness" values in HSL — you just have to change to a different axis once you want lightness values > 50%.

<figure>
  <color-bar numswatches="16" class="hwb hue" style="margin-bottom: 1rem;"></color-bar>
  <color-bar numswatches="16" class="hwb whiteness" style="margin-bottom: 1rem;"></color-bar>
  <color-bar numswatches="16" class="hwb blackness" style="margin-bottom: 1rem;"></color-bar>
  <figcaption>

    Top: Changing the _hue_ value from 0º to 360º.
    Middle: Changing the _whiteness_ value from 0% to 100%, blackness 0%.
    Bottom: changing the _blackness_ value from 0% to 100%, whiteness 100%.
    Note that all swatches have some hue component except for the pure white and pure black at the ends of the color bars.

  </figcaption>
</figure>

To get more neutral tones, you have to mix both white and black — just as you might if you were mixing paint.

<figure>
  <color-bar numswatches="16" class="hwb hue" style="--w: 0%; --b: 0%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 10%; --b: 10%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 20%; --b: 20%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 30%; --b: 30%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 40%; --b: 40%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 50%; --b: 50%; margin-bottom: 1rem;"></color-bar>
  <figcaption>
    Increasing W and B equally, from 0% to 50%. This is the same effect as changing
    saturation in HSL from 100% to 0%, while keeping lightness at 50%.
  </figcaption>
</figure>

Increasing both together beyond 50% W and B has no further effect…

<figure>
  <color-bar numswatches="16" class="hwb hue" style="--w: 50%; --b: 50%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 60%; --b: 60%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 70%; --b: 70%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 80%; --b: 80%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 90%; --b: 90%"></color-bar>
  <color-bar numswatches="16" class="hwb hue" style="--w: 100%; --b: 100%"></color-bar>
  <figcaption>
    White values increase from left to right for each bar, black values from top to bottom.
    Although this looks like one block, it is 96 swatches with 96 different HSB values … that
    all result in a neutral grey.
  </figcaption>
</figure>

Changing them in inverse proportion results in a predictable (but hard to visualize) pattern of desaturation.

<figure>
  <color-bar numswatches="16" class="hwb whiteness" style="--b: 100%"></color-bar>
  <color-bar numswatches="16" class="hwb whiteness" style="--b: 80%"></color-bar>
  <color-bar numswatches="16" class="hwb whiteness" style="--b: 60%"></color-bar>
  <color-bar numswatches="16" class="hwb whiteness" style="--b: 40%"></color-bar>
  <color-bar numswatches="16" class="hwb whiteness" style="--b: 20%"></color-bar>
  <color-bar numswatches="16" class="hwb whiteness" style="--b: 0%"></color-bar>
  <figcaption>
    White increases from left to right. Black decreases from top to bottom.
  </figcaption>
</figure>

<figure>
  <color-bar numswatches="16" class="hwb blackness" style="--w: 100%"></color-bar>
  <color-bar numswatches="16" class="hwb blackness" style="--w: 80%"></color-bar>
  <color-bar numswatches="16" class="hwb blackness" style="--w: 60%"></color-bar>
  <color-bar numswatches="16" class="hwb blackness" style="--w: 40%"></color-bar>
  <color-bar numswatches="16" class="hwb blackness" style="--w: 20%"></color-bar>
  <color-bar numswatches="16" class="hwb blackness" style="--w: 0%"></color-bar>
  <figcaption>
    Black increases from left to right. Black decreases from top to bottom.
  </figcaption>
</figure>
