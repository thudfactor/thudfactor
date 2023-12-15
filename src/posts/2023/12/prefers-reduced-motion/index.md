---
title: Prefers reduced motion
date: 2023-12-14
description:
categories:
  - CSS
  - Accessibility
tags: post
js:
css:
cover:
  src: medusa.png
  alt: A closeup of Medusa’s sneering face from the 1981 movie “Clash of the Titans”
  description: Some of us will go to great lengths to make things just stand still.
  attribution:
    name: Ray Harryhausen / United Artists
---

There are lots of theories about why Medusa turned people to stone. One says she was just that ugly. Another says that she’s was magical, evil being. And a third claims Medusa was a case of victim-blaming by Minerva. I have my own theory, which is that Medusa just wanted people to settle down and be quiet.

{% articleFig "display-settings.png" "Display settings on MacOS, with Reduce Motion, Dim Flashing Lights turned on, and Auto-play Animated Images turned off." "right" %}
The MacOS display settings, which shows many different accessibility options.
{% endarticleFig %}

I can sympathize. I am one of many, many people prone to [sensory overload](https://health.clevelandclinic.org/sensory-overload), triggered by both motion and sound. Unlike folks with vestibular disorders, I don’t react to motion and sound by becoming dizzy, nauseous, or getting a headache. I instead get tense, anxious, irritable, and withdrawn. That’s why I’ve turned on “reduce motion” for every device that supports it. It’s also the primary reason I run my browser with ad blockers on — one flashing or auto-playing advertisement on the screen can make the entire page unusable for me.

Regardless of how motion sensitivity manifests, it’s a common accessibility issue for web sites. Fortunately, you can keep all your crazy animation stuff in place _and_ help those
of us who can’t even by using a pretty simple media query.

```css
@media (prefers-reduced-motion: reduce) {
  /* alternative, calm animations here */
}

/* or */

@media (prefers-reduced-motion) {
  /* alternative, calm animations here */
}
```

If you want to treat animation as a progressive enhancement, you can _add_ animations with slightly different syntax:

```css
@media screen and (prefers-reduced-motion: no-preference) {
  /* your re-implementation of <blink> */
}
```

{% alertCallout %}
“No preference” in this context evaluates to “false.”
{% endalertCallout %}

This media query ties into the accessibility on the users’s operating system, so you can test the effect by toggling that feature on and off wherever you need to set it. Alternatively, there's an emulation switch in Chrome’s developer tools, but if you turn on reduced motion in MacOS display preferences this will override the emulation settings.

Access to this OS-level setting is not just limited to CSS, however. You can use `window.matchMedia()` to check it your Javascript.

```js
const settleDown = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
```

Some ideas for this are:

- turning off or replacing blinking items, spinning logos, or other interface nonsense
- disabling auto-advancing carousels
- turning autoplay _off_ on videos if reduced motion preferences are on.

WCAG says it must be possible to “[pause, stop, or hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)” any animation on a page that’s not crucial to the page’s operation. This is such an important consideration it’s a requirement of passing WCAG level A, so it’s baseline accessibility.

Turning these animations off preemptively is somewhat more aggressive but certainly friendlier, and it’s been my default coding strategy for some time now when doing design implementation for clients. In the cases of incidental, decorative animations, it’s a lot safer to remove them than it is to offer toggle switches.

For the larger features, well, lots of folks are willing die on the hill of auto-advancing carousels and auto-playing video, but in my experience most will allow a carve-out for people like me who have expressed an opinion at the operating-system level.


