---
title: Exploring HSL
date: 2023-12-11
description: We continue exploring color in CSS by taking a close look at HSL.
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

<figure class="right">
  <labeled-swatch color="#c414b3" label="#c414b3"></labeled-swatch>
  <labeled-swatch color="rgb(196 20 179)" label="rgb(196 20 179)"></labeled-swatch>
  <labeled-swatch color="hsl(306deg, 81%, 42%)" label="hsl(306deg 81% 42%)"></labeled-swatch>
  <figcaption>
    Specifying the same color three different ways: RGB hex notation, the `rgb()` function, and the `hsl()` function.
  </figcaption>
</figure>

The next most common color model in CSS is _HSL_. Unlike the RGB color model from [the last article](../exploring-rgb/), HSL doesn’t define color as a mixture of three primaries. It describes color as being made up of three different qualities. The first, _hue_, sets the overall color from the spectrum. _Saturation_ is how much that hue contributes to the overall color. _Lightness_ is how light or dark the color is.

In CSS, both the HSL and the RGB color models work within the sRGB color space. All colors specified using RGB can also be specified using HSL, so they can be chosen more or less by personal preference. But many people find working with HSL values more intuitive.

## Adjusting one axis

Just as we did with RGB, let’s look at each axis in isolation. (Or, at least, as much isolation as we can manage.)

<figure>
<color-bar numswatches="18" class="hsl hue" style="margin-bottom: 1rem;"></color-bar>
<color-bar numswatches="20" class="hsl saturation" style="margin-bottom: 1rem;"></color-bar>
<color-bar numswatches="20" class="hsl lightness" style="margin-bottom: 1rem;"></color-bar>
<figcaption>

  Top: Changing the _hue_ value from 0º to 360º.
  Middle: Changing the _saturation_ value from 0% to 100%, with lightness 50%.
  Bottom: changing the _lightness_ value from 0% to 100%, saturation 100%.

</figcaption>
</figure>

Hue is specified as an angle on a color wheel, so values range from 0º to 360º, with decimal values available. Just as with other circles, angles equal to or greater than 360º just take another turn around the wheel — 0º and 360º are the same hue (red), 60º and 420º are both the same yellow, and so forth.

Saturation and lightness are both specified as percentages. Adjusting saturation alone causes colors to tend towards grey, which sometimes appears to lighten the colors even though the lightness value is untouched. At 0% saturation, all colors are the same because the hue value contributes nothing to the overall color, so only lightness matters.

<figure>
  <color-bar numswatches="16" class="hsl hue" style="--s: 100%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 75%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 50%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 25%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--s: 0%"></color-bar>
  <figcaption>
    Reducing saturation in 25% increments from 100% to 0%, lightness kept constant at 50%.
  </figcaption>
</figure>

Adjusting lightness can also seem to pull the hue out of the color because the hue is gradually overwhelmed by the black and white tints.

<figure>
  <color-bar numswatches="16" class="hsl hue" style="--l: 0%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 20%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 40%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 60%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 80%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 100%"></color-bar>
  <figcaption>
    Increasing lightness in 20% increments from 0% to 100%, saturation kept constant at 50%.
  </figcaption>
</figure>

To get purely neutral tones, you can set the hue to any degree, reduce saturation to 0, and sweep through the lightness values.

<figure>
  <color-bar numswatches="16" class="hsl lightness" style="--s: 0%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 25%"></color-bar>
  <figcaption>
    Every block in both bars has a different hue, but they are all shades of grey in the bottom bar because saturation is 0%.
  </figcaption>
</figure>

The difference between lightness and saturation is a bit subtle, but it helps me to think of it this way. Removing saturation is like turning a color photo black and white. But increasing or decreasing lightness makes a color photo more faded or darker, until you get completely white or black.

## Advantages and Disadvantages

<figure class="right">
  <labeled-swatch color="hsl(60deg 70% 50%)" label="#c414b3"></labeled-swatch>
  <labeled-swatch color="rgb(196 20 179)" label="rgb(196 20 179)"></labeled-swatch>
  <labeled-swatch color="hsl(306deg, 81%, 42%)" label="hsl(306deg 81% 42%)"></labeled-swatch>
  <figcaption>
    Specifying the same color three different ways: RGB hex notation, the `rgb()` function, and the `hsl()` function.
  </figcaption>
</figure>

Once you have a good feel for where hues are located on the color wheel, it’s relatively easy to pick a color and get it into the general ballpark. It does take some practice, but in my experience you have a wider range of colors you can get to (roughly) without having to reach for a color picker.

HSL also mimics a common way we think about colors. If you think “that red is too vivid,” you can pull saturation down. But if you want “dark red” or “light red” you can adjust lightness. This also means it’s better suited to cases where colors have to change programmatically.

<figure class="right">
  <labeled-swatch color="hsl(270deg 100% 100%)" label="hsl(270deg 100% 100%)"></labeled-swatch>
  <labeled-swatch color="hsl(60deg 75% 100%)" label="hsl(60deg 75% 100%)"></labeled-swatch>
  <labeled-swatch color="hsl(43.23deg 0% 100%)" label="hsl(43.23deg 0% 100%)"></labeled-swatch>
  <figcaption>
    Although these swatches all describe colors at different points on the hue wheel and with different amounts of saturation, they are all white.
  </figcaption>
</figure>

There are a couple of flaws with HSL, however. Because all three color components are always required, there are a few places where only one or two matter. At 100% or 0% lightness, it does not matter what either the saturation or the hue are. Those “theoretical” colors just get clipped to white and black.

There’s also a human-assumption issue, since we tend to like to think in whole numbers. With RGB you can get 256 levels of grey without reaching for fractions — You just increase all three colors in lock-step from 0 to 255 (#00 to #FF). With HSL percentages, though, you only have 101 whole number values — 0% to 100%.

You can see this tendency in many online color pickers or color picker apps. Although decimal values for lightness and saturation are completely valid, [A Most Excellent HSL Color Picker](https://hslpicker.com/#f0f0f0) treats them as invalid. That means two to three levels of RGB grey are unreachable — not by HSL itself, but through the color picker.

The biggest disadvantage, however, is that colors of the same lightness _value_ are perceived as lighter or darker than their neighbors.

<figure>
  <color-bar numswatches="16" class="hsl hue" style="--s: 100%"></color-bar>
  <figcaption>
    The HSL color spectrum, with saturation at 100% and lightness at 50%.
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
