---
title: Syntax coloring in template literals
subtitle: No, really, I need it.
date: 2024-01-17
categories:
  - Web Components
  - Developer Ergonomics
  - 100 Days to Offload
tags: post
description: Template literals are great for assembling bits of CSS and HTML in Javascript, but what about the syntax coloring?
cover:
  src: ./no-syntax.png
  alt: A picture of a code sample showing CSS being assigned to a string, but without any visible syntax coloring.
  description: When all of the CSS is green, it’s going to be real frustrating to find that missing curly brace.
  attribution:
    name: John Williams
---

I’ve been digging into web components recently. For this site, a big advantage to the components is encapsulating the code samples in my articles. But since you tend to write CSS and HTML inside a Javascript file you lose the syntax colors. I like syntax colors. I spent enough years trying to do bracket-matching without them.

I finally lost patience yesterday searching for a typo in a large HTML string. It turns out you can do something about it! Here are two ways you can get those syntax colors back — if you use VSCode at least.

## VSCode extension

There’s a VSCode extension for just this kind of thing. It’s [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html). Despite the name, it handles HTML, CSS, SVG, SQL, XML, GLSL, Javascript, and Typescript. You trigger the syntax coloring with a comment, so it looks something like this:

```js
const htmlString = /* html */`<p>This is some HTML</p>`
```

Of course, you’re not going to see the syntax coloring here, since these code samples aren’t VSCode.

I don’t mind these plugin directives too much in my code, especially since code tends to get littered with `@tslint` or `@eslint` directives. But it’s easy to think those comments are superfluous if you don’t have the plugin installed and I can see some team members just deleting them. “Obviously this is HTML, why do we need a comment?” is a reasonable question, but then the deletion gets in a pull request and it turns into a whole conversation.

If you want to avoid that, there’s another alternative.

## Tagged template literals

Just to make sure we’re on the same page here, “template literals” are a kind of string that handles variable replacement. For example:

```js
const helloWhat = `world`;
const helloString = `Hello, ${helloWhat}!`;

// helloString now contains "Hello, world!"
```

A _tagged_ template literal has a label at the front which points to a function used to process the string. If you've used [styled-components](https://styled-components.com/), you’ve used tagged template literals before. VSCode (and maybe other tools!) will automatically use the appropriate syntax coloring if you use a tagged template literal with the language name. _But_ since the tag is the name of a function, there’s a little hoop you have to jump through first.

```js
const html = () => (strings, ...values) => String.raw({ raw: strings }, ...values);

const helloHTML = html`<p>If this example were VSCode, this HTML would have syntax coloring.</p>`
```

Note that some resources online will suggest you just use this:

```js
/* Don’t do this */
const html = String.raw;
```

…which will seem to work, but actually removes a fair amount of the processing done on typical template literals. For more, see [Building an Identity Tag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw#building_an_identity_tag) on MDN.

_This_ has the advantage of not even requiring a plugin in VSCode, but has the disadvantage of adding a function for each language you want tagged… possibly in every web component, depending on whether or not it suits your project to have the web component import something from another file.

The extra “work” done by Javascript is genuinely trivial, but if its only purpose is to tell the text editor what syntax coloring when the code _isn’t_ running, it seems strange to ship the function off to your client browsers. You still might end up having a chat about it during code review.

## Nothing’s perfect

Both of these solutions are a bit of a hack, so you have to decide which one feels better to you or your team. _However_, both will give you your syntax colors back, saving you plenty of time catching syntax errors while you write instead of at run-time.




