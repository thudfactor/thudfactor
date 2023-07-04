---
title: User-initiated element resizing in CSS
subtitle: How I learned to love the resize property, then hate it again
date: 2023-07-04
categories: ["CSS"]
tags: post
description: CSS offers a browser-native way to make elements resizable, but it comes with a lot of limitiations.
cover:
  src: super-genius.png
  alt: Still from a Coyote / Road Runner cartoon. The Coyote holds a business card saying Wile E. Coyote Super Genius
  description: Not every elegant solution is the correct one.
---

We’ve been working on a project at work that is growing a fairly elaborate user interface heavily informed by desktop applications like Photoshop. What used to be straightforward `divs` now need to be moved around, closed, minimized, and resized.

The typical way to handle resizing is to create a `mousedown` event handler on a resize control, then listen to subsequent `mousemove` and `mouseup` events. Or, if you’re really on top of things, you can use the newer [`pointer events`](https://caniuse.com/?search=pointer).

Or you can do what I did. I attached a `resize` CSS property to the element that needed resizing.

## Benefits of CSS’s `resize`

The benefits to this approach were pretty attractive:

### You don’t have to do math

The math seems straightforward, but there’s a lot to keep track of. You need to pick the right coordinate space, for starters. Pointer events provide `screen`, `client`, `page`, `offset`, and `layer.` These are all subtly different, and it’s likely that none of them will actually map to the coordinate space you need: that of your item’s containing element.

The `mousemove` and `pointermove` events both expose `movementX` and `movementY` properties, which report the distance the pointer has moved between events. This _seems_ like it would resolve the coordinate space conversion problem, but MDN warns that [we can’t rely on consistent browser implementation](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX).

Another complexity you need to keep track of is adjusting the math from the _pointer’s_ position and the _actual window bounds_. The pointer is going to fall somewhere inside the resize handle. If you don't control for that you are going to get some weird snapping behavior.

The CSS `resize` handles all of that for us, which is a relief.

### You don’t have to manage events

And there are a lot of events to manage. My process here is to attach `move` and `up` events on `down`, then detatch the `move` and `up` events on `up` so they are not continuiously firing. And since I am working in a React environment, I also need to clean these events up when the component that owns them is removed and/or re-rendered to avoid memory leaks or rapidly multiplying event listeners handling the same event.

### Browser-native resizing is smooth right out of the box

Native resizing doesn’t seem to be affected by paint / layout sluggishness, so it seems to work faster than handling it myself.

## Drawbacks of CSS resize

In short: the CSS `resize` solution is easier, significantly less code, and more performant. What’s not to love? Quite a lot, as it turns out.

### You only get one handle, and you don’t get to choose

The resize handle is located in the lower right corner of the element you are resizing, so you can really only make the item larger by dragging this handle. There are many typical cases where this works, but there are a lot of instances where this is unhelpful.

Two that spring immediately:

* The element has any `translate()` transformations applied to it
* The right and/or bottom edges are at the boundaries of the layout already

The first thing my designer asked was “can we resize from the lower left corner, too?” This is a perfectly reasonable ask, given that our windows are modeled after application or operating system windows.

It would be nice to be able to resize from all edges. But at a minimum, I need at least the lower left and lower right corners.

### You can’t delegate an element to be resized

To apply the CSS resize I had to shrink-wrap all of the containing elements around the specific one I applied the resize element to. That’s because the resized element gets inline “height” and “width” styles applied. This broke my layout logic a bit, which was frustrating.

I thought I could get around this by listening to resizing events and moving those values elsewehere as needed, but…

### There are no resizing events specific to the CSS resize

Ideally, we’d have “start,” “stop,” and “resizing” events so I could change behavior or tie other side-effect logic to resizing an element. The CSS resize strategy doesn’t provide any of those. Instead, you need to rely on the [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver). That makes distingushing between user-driven resizes and resizes that result from other events — minimizing or closing the window, for example, or content size changes — pretty darn tricky. And since the `ResizeObserver` only reports that an element’s size has changed, you still need to interpret “resizing has started” and “resizing has ended” on your own.

### You can’t manage the resize handle’s appearance

The second thing my designer asked was “can we make that handle larger?” It’s the size and shape that it is. _Maybe_ you can change how it looks through CSS props? If you can, I haven’t found any.

## Back to the drawing board for me

Given all of these limitations, I’ve had to abandon the native resize. I don’t regret the effort — it’s best to do through CSS and HTML what you can, rather than take control of these behaviors yourself — but the CSS `resize` seems to fit only a narrow use case, and it’s not suitable for other interactive implementations. It _might_ be possible to work around those limitations, but that puts all of the benefits of using the native code at risk.



