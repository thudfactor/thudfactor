---
title: Article Typography
subtitle: Font size, line height & line width
date: 2023-06-17
categories: ["CSS", "Typography"]
tags: post
description: Three CSS typography properties to improve your site’s readability
cover:
  src: original-movable-type.jpg
  alt: A page set with moveable lead type
  description: What we used to do with metal slugs and spacers, we do today with HTML and CSS.
  attribution:
    name: Purdman1 / Flickr.
    link: https://www.flickr.com/photos/purdman1/2875431305/
    license:
      name: CC BY 2.0
      link: https://creativecommons.org/licenses/by/2.0/
---

“Thud factor” is academic slang for how loud your thesis sounds when it’s thrown downstairs. When I first registered this domain in (let me check…) August of 2000 (‼️) my intent was to fill up the site with a whole bunch of text. I did actually do that once upon a time, but one thing I never really got right was the typography.

That’s unfortuate because getting the basics of typography right is not that difficult and there are quite a few excellent examples to emmulate. I am still learning, still working on this site. But here’s some stuff about the basics.

## What to focus on first

Typography is a true _Alice_-sized rabbithole and getting distracted by minutae is a real risk. But you can get most of what you need to improve readability right away by working with three basic values. These are:

* Font size: the vertical size of the letters
* Line width: how many letters can fit on a line
* Line height: the combined font size and the distance between the lines.

Notice that the font choice — the fun decision — isn’t in this list. It’s important, but it’s not vital. People can read comfortably if you use the default type and get font size, line length, and line height right. But it doesn't matter how awesome the font is if you get those three details of using the font wrong.

Not that getting it right is hard! Once you know where to focus first, you can start with reasonable recommendations from centuries of typography best practices. Then, use your own eyeballs to tweak things at the margins until you’re happy.

Let’s talk about those three basic values, then.

## Font size

Font size is a good place to start because it affects line length. The two important questions to ask about font size in web development is “how big?” and “what unit?” My typical practice is to set the size as a percentage of the default browser size. You can do this literally with percentages in the root element…

```css
::root {
  font-size: 120%;
}
```

or in CSS selectors using the `rem` unit…

```css
p {
  font-size: 1.2rem;
}
```

The former sets the _default_ size of fonts throughout the document to 120% of the browser default. The latter sets the font size of the selector’s content to 120% of the root font size. Changing the root font size is a real sledgehammer of a tool, though — anything else that depends on `rem` or `em` sizing will _start_ from this higher or lower value.

{% alertCallout %}
Read more about the [root element](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) and [rem unit](https://blog.logrocket.com/using-em-vs-rem-css/).
{% endalertCallout %}

A lot of people suggest sticking with the default font size for your main article content. That’s a good place to start, but don’t feel shy about bumping it up a bit. Many of my favorite web sites do, too.

### What about those other units?

If you’re used to using word processors or doing print design, you might be more accustomed to using point size. A “point” is a unit of measurement common in traditional printing. 12 points make a “pica,” and there are 6 picas to an inch. This is fine in style rules intended for print media, and you can certainly use them in your print stylesheets like so:

```css
@media print {
  p {
    font-size: 12pt;
  }
}
```

In CSS-land, points and units like `pt`, `in`, `mm` are called “absolute units” and are not particularly useful in the screen context. [Elad Shechter explains why at _Smashing Magazine_](https://www.smashingmagazine.com/2021/07/css-absolute-units/). Simply, though, browsers don’t know how _physically_ large your monitor is, so they can’t represent those sizes accurately.

What about pixels? Well, they _were_ the universal screen unit. Computed values in your web development panel often translate to pixel units for this reason. But the typical size and meaning of “pixel” has changed a lot over the years.

One pixel was one screen dot for most people for a long time. As part of the desktop publishing revolution, early Mac displays intentionally made `1px = 1pt = 1/72in`. Later, as display technology improved and screen dots could be made smaller, the rule of thumb became `1px = 1/96in`. Now, with some displays running between 220 to 300 pixels per inch, it's not a reliable measure of size anymore.

Now, the W3C defines both “device pixels” and “reference pixels” — with the CSS `px` unit theoretically comprising [the reference pixel](https://www.w3.org/TR/css-values-3/#reference-pixel). In practice, display manufacturers size pixels up and down pretty fluidly these days.

For reference, the default font size is typically (although not always!) set to `16px`.

## Line width

Line width (or “scan length”) is the horizontal distance between the start and the end of a line. It is the second most important typographic decision you can make.

As you read, you can only focus on a few letters at a time. Humans like to read without moving our heads from side-to-side, so line length has to be short enough for us to read something by rotating our eyeballs. Make this distance too long or too short and people’s eyes tire quickly. Long line lengths mean more extreme rotation of the eyes until the neck is finally involved. Short lines mean rapid back-and-forth movement, because each line read requires a round trip.

The good news here is that the comfortable range is actually pretty wide. 50 to 75 characters per line is a good rule of thumb, and there's a fair amount of wiggle room at the extremes. Because we’re trying to take physical eye travel into account, the larger your font the shorter you want your line length to be, and vice-versa.


<figure class="text-figure">

<div style="font-size: 2rem; margin-bottom: 1rem;">

**`2rem:`** There were doors all round the hall, but they were all locked; and when
Alice had been all the way down one side and up the other, trying every
door, she walked sadly down the middle, wondering how she was ever to
get out again.

</div>

<div style="font-size: 1rem;">

**`1rem:`** There were doors all round the hall, but they were all locked; and when
Alice had been all the way down one side and up the other, trying every
door, she walked sadly down the middle, wondering how she was ever to
get out again.

</div>

<div style="font-size: .8rem; margin-top: 1rem;">

**`0.8rem:`** There were doors all round the hall, but they were all locked; and when
Alice had been all the way down one side and up the other, trying every
door, she walked sadly down the middle, wondering how she was ever to
get out again.

</div>
<figcaption>
These three paragraphs have the same line length but different font sizes. Pay attention to how the muscles in your eyes feel as you read them. Do you notice any other impressions you get from text set large and short versus small and long?
</figcaption>
</figure>

Remember that this rule applies _only_ to large blocks of text like article content. Other bits of text — headlines, captions, and so forth — serve different purposes, and thus merit different guidelines.

## Line height

Line height is the distance between lines of text. Remember how your eye has to both backtrack across a line of text _and_ move to the next one at the same time? This trip is an excellent opportunity for the brain to get disoriented.

<figure class="text-figure">

<div style="line-height: 1; margin-bottom: 1rem;">

**`line-height 1`** “Curiouser and curiouser!” cried Alice (she was so much surprised, that
for the moment she quite forgot how to speak good English); “now I’m
opening out like the largest telescope that ever was! Good-bye, feet!”

</div>

<div style="line-height: 1.5;">

**`line-height 1½:`** “Curiouser and curiouser!” cried Alice (she was so much surprised, that
for the moment she quite forgot how to speak good English); “now I’m
opening out like the largest telescope that ever was! Good-bye, feet!”

</div>

<div style="line-height: 2; margin-top: 1rem;">

**`line-height 2:`** “Curiouser and curiouser!” cried Alice (she was so much surprised, that
for the moment she quite forgot how to speak good English); “now I’m
opening out like the largest telescope that ever was! Good-bye, feet!”

</div>
<figcaption>
These three paragraphs have the same font size but different line heights. Two of them feel really awful to me, only one seems comfortable. Which one seems best to you, again in the muscles of your eyes? Does the difference in line-height change any other impressons you have of the text?
</figcaption>
</figure>

Ever find yourself suddenly reading one or two lines down in the middle of a line? That might be because the line-spacing was too cramped. On the other extreme, spreading text out involves eye muscles even more. This doesn’t just make it difficult to keep your place, it’s also physically tiring.

For article text, comfortable distances seem to be between `1.4` and `1.6`. When you set line-height in CSS, it's best to do so using unitless values, represents a multiplier of the font size.

```css
p {
  font-size: 1.3rem;
  line-height: 1.6;
}
```

## Line height on the web

In traditional typesetting, line height is measured from the top of one line of text to the top of the next. The metal letter slugs in movable type were the font height, and the distance between lines could be increased by narrow strips of wood or lead. This extra space between the bottom of the type slug and the next row of type was called “leading” (pronounced “Led” as in Zeppelin).

In traditional typesetting, then, if you have 12pt type with 6pt leading, the type goes at the top and the extra 6pts is tacked on below it.

<figure class="text-figure">
<div style="margin-top: 1rem; font-size: 2rem; line-height: 2; background-image: repeating-linear-gradient(to bottom, hsl(200deg 100% 65%) 0, hsl(200deg 100% 100%) 1px, hsl(200deg 100% 100%) 2rem, hsl(200deg 100% 65%) 2rem, hsl(200deg 100% 65%) 4rem); padding-bottom: 1px;">
<div style="position: relative; top: -1rem;">
<p>Waltz, nymph, for quick jigs vex Bud.</p>
<p>Sphinx of black quartz, judge my vow.</p>
</div>
</div>
<figcaption>
Text with leading between the text rows (traditional print).
</figcaption>
</figure>

For reasons that are not entirely clear to me but probably have to do with making programming browsers easier, CSS abandoned that convention long ago. In browsers, the extra space we call “leading” is split between the top and bottom of a text row. that means 1rem type with 0.5rem leading becomes 0.25rem at the top, 1rem of text, and the other 0.25 rem at the bottom.

<figure class="text-figure">
<div style="margin-top: 1rem; font-size: 2rem; line-height: 2; background-image: repeating-linear-gradient(to bottom, hsl(200deg 100% 65%) 0, hsl(200deg 100% 65%) 1rem, hsl(200deg 100% 100%) 1rem, hsl(200deg 100% 100%) 3rem, hsl(200deg 100% 65%) 3rem, hsl(200deg 100% 65%) calc(4rem - 1px), hsl(200deg 100% 100%) 4rem);">
<p>Waltz, nymph, for quick jigs vex Bud.</p>
<p>Sphinx of black quartz, judge my vow.</p>
</div>
<figcaption>
Text centered in the line-height (CSS).
</figcaption>
</figure>

It becomes a mathematical and strategic exercise any time you want to align a border, photo, or other block of something with the top of a line of text. Tell the browsers to line these items up with their tops, and the browser will align the top of an image (for example) and the top of the line-height for the text. But the text itself doesn't actually start at that point unless the line-height is `1`.

<figure class="text-figure">
<blockquote style="line-height: 2; border-left: 2px #000 solid; padding-left: .8rem; margin-left: 0">
<p>“It was much pleasanter at home,” thought poor Alice, “when one wasn’t
always growing larger and smaller, and being ordered about by mice and
rabbits. I almost wish I hadn’t gone down that rabbit-hole—and yet—and
yet—it’s rather curious, you know, this sort of life!</p>
</blockquote>
<figcaption>
A blockquote with a simple border on the left. The text area and the border on the left are the same height, but the text's line-height adds extra space at the top and the bottom — making the border longer than it has to be.
</figcaption>
</figure>

To optically align these items, you either have to shift the text _up_ slightly from its natural position or shift the other thing down. Which one you choose and how you do it depends on the specific circumstances.

One way of doing this is by applying margins or negative margins to some of the elements, depending on how the layout works. Shifting the text is the strategy I used in the figure below.

<figure class="text-figure">
<blockquote style="line-height: 2; border-left: 2px black solid; padding-block: 2px; padding-left: .8rem; margin-left:0;">
<p style="margin-bottom: calc(-.5em - 3px); margin-top: calc(-.5em - 4px);">“It was much pleasanter at home,” thought poor Alice, “when one wasn’t
always growing larger and smaller, and being ordered about by mice and
rabbits. I almost wish I hadn’t gone down that rabbit-hole—and yet—and
yet—it’s rather curious, you know, this sort of life!</p>
</blockquote>
<figcaption>
Here, negative margins are used on the paragraph inside the blockquote to move the extra line height out of the containing element.
</figcaption>
</figure>

Maybe someday we’ll have an easier way to adjust the line height to something more traditional, but for now aligning items with vertical text boundaries remains both complicated and situational.

## How I chose my values

Typography is a discipline and it requires both a design eye and careful attention to detail. Fortunately, setting large bloks of text isn’t an activity that rewards novelty, so we can cheat a little bit.

OK, we can straight-up steal.

In this case, I went to [The Verge](https://www.theverge.com/) because I liked how their articles looked. I swiped their font size, line width, and line height values. Once I chose my font, I tinkered a little with those settings.

There’s no shame in that — none of these things are trademarked, and are in fact based on conventional wisdom from centuries of typesetters beforehand. There's no reason you can’t get a leg up by looking at good examples.

## What we didn’t cover, and where you can find it

There are lots of additional small choices you can make that improve readability. Most CSS developers are aware that you can choose between `text-align: left` and `text-align: justify`. The former gives you a ragged right text block with no hyphenation unless absolutely necessary, while the latter uses a combination of word spacing and hyphenation to give an even right edge.

But did you know you can choose other hyphenation strategies? Combining `text-align: left` with `hyphens: auto` gives you a slightly less ragged right by allowing more hyphenation. Using [`hyphenate-limit-chars`](https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-chars) gives you even more fine-grained control.

For much more information on typography from a real expert, check out [The Elements of Typographic Style Applied to the Web](http://webtypography.net/) by Richard Rutter.


