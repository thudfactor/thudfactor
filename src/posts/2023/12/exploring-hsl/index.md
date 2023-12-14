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

The next most common color model in CSS is _HSL_. Unlike the RGB color model, HSL doesn’t define color as a mixture of three primaries. It describes color as being made up of three different qualities.

The first, _hue_, sets the overall color from the spectrum. _Saturation_ is how much that hue contributes to the overall color. _Lightness_ is how light or dark the color is.

<figure class="right">
  <labeled-swatch color="#c414b3" label="#c414b3"></labeled-swatch>
  <labeled-swatch color="rgb(196 20 179)" label="rgb(196 20 179)"></labeled-swatch>
  <labeled-swatch color="hsl(306deg, 81%, 42%)" label="hsl(306deg 81% 42%)"></labeled-swatch>
  <figcaption>
    Specifying the same color three different ways: RGB hex notation, the `rgb()` function, and the `hsl()` function.
  </figcaption>
</figure>

In CSS, both the HSL and the RGB color models work within the sRGB color space. All colors specified using RGB can also be specified using HSL, so you can pick the one you are more comfortable with. But many people find working with HSL values more intuitive.

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

Saturation and lightness are both specified as percentages. Adjusting saturation alone causes colors to tend towards grey, which sometimes appears to lighten the colors even though the lightness value is untouched. At 0% saturation, all colors are the same because the hue value contributes nothing to the overall color. Only saturation and lightness matter.

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

Adjusting lightness can also seem to pull the hue out of the color because the hue is overwhelmed by black and white, but you can’t get anything approaching a neutral grey that way.

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

To get those neutral tones, you can set the hue to any degree, reduce saturation to 0, and and then change the lightness.

<figure>
  <color-bar numswatches="16" class="hsl lightness" style="--s: 0%"></color-bar>
  <color-bar numswatches="16" class="hsl hue" style="--l: 25%"></color-bar>
  <figcaption>
    Every block in both bars has a different hue, but they are all shades of grey in the top bar because saturation is 0%.
  </figcaption>
</figure>

The difference between lightness and saturation is a bit hard to grasp, but think about changing colors in a photograph. Removing saturation from a color photo will make it look black and white. But increasing or decreasing lightness makes a color photo more darker or brighter. You will start to lose details in the shadows (which get darker) or highlights (which get blown out) until everything disappears into black or white.

## Advantages and Disadvantages

<figure class="right">
  <labeled-swatch color="hsl(127deg 100% 50%)" label="hsl(127deg 100% 50%)"></labeled-swatch>
  <labeled-swatch color="hsl(127deg 10% 50%)" label="hsl(127deg 10% 50%)"></labeled-swatch>
  <labeled-swatch color="hsl(127deg, 56%, 37%)" label="hsl(127deg 56% 37%)"></labeled-swatch>
  <figcaption>
    All three color swatches above use the same hue value.
    Top: A very vivid green. Middle: A very faded green. Bottom: A rather spring-like green.
  </figcaption>
</figure>

Once you have a good feel for where hues are located on the color wheel, it’s easy to pick a color and get it into the general ballpark. It does take some practice, but in my experience you have a wider range of colors you can get to without having to reach for a color picker.

HSL also mimics a common way we think about colors. If you think “that red is too vivid,” you can pull saturation down. But if you want “dark red” or “light red” you can adjust lightness. This also means it’s better suited to cases where colors have to change programmatically.

<figure class="right">
  <labeled-swatch color="hsl(270deg 100% 100%)" label="hsl(270deg 100% 100%)"></labeled-swatch>
  <labeled-swatch color="hsl(60deg 75% 100%)" label="hsl(60deg 75% 100%)"></labeled-swatch>
  <labeled-swatch color="hsl(43.23deg 0% 100%)" label="hsl(43.23deg 0% 100%)"></labeled-swatch>
  <figcaption>
    Although these swatches all describe colors at different points on the hue wheel and with different amounts of saturation, they are all white.
  </figcaption>
</figure>

There are a couple of flaws with HSL, however. Because all three color components are always required, there are a few places where just one or two matter. At 100% or 0% lightness, it does not matter what either the saturation or the hue are. Those “theoretical” colors just get clipped to white and black.

There’s also a human-assumption issue, since we tend to like to think in whole numbers. With RGB you can get 256 levels of grey without reaching for fractions — You just increase all three colors in lock-step from 0 to 255 (#00 to #FF). With HSL percentages, though, you have 101 whole number values — 0% to 100%.

You can see this tendency in many online color pickers or color picker apps. Although decimal values for lightness and saturation are valid, [A Most Excellent HSL Color Picker](https://hslpicker.com/#f0f0f0) presents an error message. That means two to three levels of RGB grey are unreachable — not by HSL itself, but through the color picker. You could argue that the visual difference between `#ececec`, `#ededed`, and `#eeeeee` is indistinguishable, but no doubt it matters to someone.

The biggest disadvantage, however, is that colors of the same lightness _value_ are perceived as lighter or darker than their neighbors. Let’s take a look at the HSL spectrum again:

<figure>
  <color-bar numswatches="18" class="hsl hue" style="--s: 100%"></color-bar>
  <figcaption>
    The HSL color spectrum, with saturation at 100% and lightness at 50%. Although lightness is consistent, some of these colors look brighter than others.
  </figcaption>
</figure>

This is not as critical for some concerns as it is for others, but it’s critical if you’re assigning colors automatically while sticking to the WCAG color contrast guidelines.

{% alertCallout %}
Fun fact: the WCAG 2.0 color contrast guidelines have some [significant deficiencies](https://git.apcacontrast.com/documentation/WhyAPCA), in part because they also lean on a flawed mathematical  understanding of contrast.
{% endalertCallout %}

Other color models try to address this, and we’ll take a look at those in future installments.

## Similar variations

There are many similar color models often confused with HSL. CSS also has HWB, which expresses color as a mixture of hue, white, and black. Changing _either_ W or B while keeping the other at 0% is the same as sweeping through the "lightness" values in HSL. HWB is perhaps more intuitive for lightening and darkening colors, but counter-intuitive for neutral tones.

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

Stefan Judis has an excellent [article about HWB](https://www.stefanjudis.com/blog/hwb-a-color-notation-for-humans/).

The other color model confused with HSL is HSB, which stands for Hue, Saturation, and Brightness. In HSB, 100% _brightness_ does not make the color white. Instead, it gives the color its most intense hue. You get actual white by setting brightness to 100% and saturation to 0%. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hsl-hsv_models_b.svg) has a great, but very large, illustration of the differences.

HSV (Hue, Saturation, and Value) is the same color model as HSB — they just disagree on what that third color component is called.

## Which is better, RGB or HSL?

If you had to choose just one of these two, HSL is more often than not a better choice. It’s easy to understand. With practice it’s easier to picture what any given color value will be. And the biggest benefit is that it’s easier to manipulate with code.

That said, _you don’t have to choose_. CSS supports both, so there’s no reason not to switch modes if you find one works better than the other. Remember that you can create every color with HSL that you can with RGB (even if some color pickers won’t let you), so use the one you like until circumstances require a change.

Coming up: we complicate matters with newer color models and color spaces beyond the now very dated sRGB.


