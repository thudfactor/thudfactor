---
title: A Month (or so) with GitHub Copilot
subtitle: Your plastic pal who’s fun to be with
date: 2023-06-20
categories: ["AI"]
tags: post
description: Some thoughts on GitHub Copilot, the AI-powered code assistant.
cover:
  src: airplane.jpg
  alt: The cockpit from Airplane the movie. Left to right, the Autopilot, Elaine, and Ted.
  description: With more experience, Copilot feels less like a different intellegence and more like an inflatable replacement human.
---

I’ve been using Copilot for a few weeks now and have come to a few tenative conclusions. It’s been frequently helpful in small places, remarkably unhelpful in larger areas, and sometimes in the way. In fact, as I write this blog post it is in the way quite a lot.

Before we get too far in, I’d like to direct your attention to Frederick Brooks’s 1987 essay [No Silver Bullet: Essence and Accident in Software Engineering](https://ieeexplore.ieee.org/document/1702388). Brooks says software development has sped up quite a lot, but attributes this to tools that help us write and debug code more quickly. He said we were beginning to reach the level of diminishing returns from these mechanical aids.

Some things have indeed become faster since then, but I think he was probably right. The big speed gains from tooling were made long ago.

Any significant improvement software production speed, he argues, would have to come from advancements in how we think about software and what it is we are trying to build. That is, it has to come in the analysis stage, when we are asking WTF we are doing anyway.

<blockquote>
The hardest single part of building a software system is deciding precisely what to build. No other part of the conceptual work is so difficult as establishing the detailed technical requirements, including all the interfaces to people, to machines, and to other software systems. No other part of the work so cripples the resulting system if done wrong. No other part is more difficult to rectify later.
<cite>— Frederick P. Brooks<br/>No Silver Bullet: Essence and Accident in Software Engineering</cite>
</blockquote>

Copilot is tooling, and imprecise tooling at that. Although it’s better than [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) at extrapolating what you need to do next, it only has a small part of the picture.

<figure>
{% image "suggestion.png" "Clip of a suggestion from co-pilot while writing this blog post. Text in the caption." %}
<figcaption>Sometimes it doesn’t have any part of the picture. Here, co-pilot trys to write the caption for this post’s cover photo. It suggests completing “the cockpit from Airplane the movie” “with the caption ‘I am serious. And don’t call me Shirley.” That doesn’t match the image at all.</figcaption>
</figure>

## Something that works: refactoring React

I am genuinely excited about this. For my money, this is the best thing Copilot does. It’s pretty close to perfect and it gets rid of a lot of drudgery. Whatever I say later, I want you to keep in mind: this behavior is worth the price of entry.

Copilot can tell when you are refactoring code, and it can speed that process up by _a lot_.

For example, if I have a React element like this…

```jsx
const MyComponent = () => {
  return (
    <div>
      <li className="red">One</li>
      <li className="blue">Two</li>
      <li className="green">Three</li>
    </div>
  );
};
```

… and I decide I want to break those `li` elements into their own components…

```jsx
const MyLIComponent = ({color, children}) => {
  return (
    <li className={color}>{children}</li>
  );
};
```

Copilot will tumble to what I am doing pretty quickly. In fact, it completed my code correctly in the example above after I typed the first `li`. And it did it exactly the way I would have done it.

That’s not all. After doing that, it figured out I want to replace the old `li` elements with my new component. Watch me just hit tab here in the video as Copilot suggests handle the copy / paste / change values routine.

<figure>
<video controls width="720">
  <source src="/video/refactor.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="copilot.mp4">link to the video</a> instead.</p>
</video>
<figcaption>
Copilot understands what I am trying to do and helps me out along the way.
</figcaption>
</figure>

```jsx
const MyComponent = () => {
  return (
    <div>
      <MyLIComponent color="red">One</MyLIComponent>
      <MyLIComponent color="blue">Two</MyLIComponent>
      <MyLIComponent color="green">Three</MyLIComponent>
    </div>
  );
};
```

This is a pretty trivial example, but Copilot has done this multiple times with much more complex components. It’s pretty sweet, and I’ve wished my code editors could do this for years. I’m glad it’s finally here.

## Something that’s less good

With CSS, the results are rather more dire. Here, I want to make a div that covers a parent container. Often we do this when we want to put an overlay over some content. Copilot’s first shot is this:

```css
.coverContainer {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
}
```

That … might work. But I hope you didn't want to put anything else in that block, because the relative positioning here fills the container, crowding everything instead. With a gentle hint to use absolute positioning, Copilot suggests the following:

```css
.coverContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
}
```

Better, but still wrong. Here’s the thing. When containers are positioned absolutely, they start where they normally would. If `.coverContainer` isn’t the first dom element, it’s going to be pushed down from the parent container’s boundaries. We have to specify more coordinates than just that.

```css
.coverContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
}
```

Copilot read my last sentence and suggested top and left coordinates. A real improvement! It is, at least, approaching a useful overlay div. But there’s a much easier way to handle this now, and it’s been around for a while.

```css
.coverContainer {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #000;
}
```

`inset` is a newer prop, but there are a lot of folks still doing the old `top / left / height / width` trick. Or, for that matter, `top / right / bottom / left.`

This is a concern I have with Copilot. Since Copilot has been trained on a heck of a lot of code. I assume much of that code is old. Unwary or inexperienced developers leaning too heavily on Copilot could end up perpetuating a lot of bad practice. This is _especially_ true, I fear, in the case of CSS — which is often written by people who haven’t taken it seriously enough to learn it properly. With Large Language Models, as most things, it’s garbage in, garbage out.

This is the problem with prompt-based software development. You have to ask for what you want. And, as Brooks pointed out, knowing what you want is tricky and often requires several rounds of conversations and iterations. Copilot is a better partner than none in this process, but humans still contribute far more — either as pair programmers or in code reviews. I don’t want Copilot reading or judging my code without too much careful guidance.

<figure>
  {% image "suggestion-2.png" "Clip of another suggestion from co-pilot while writing this blog post, text in the caption." %}
  <figcaption>
    Copilot trying to write my blog post for me: “I’m not going to talk about the controversy around Copilot, or the licensing issues, or the fact that it’s not really an AI. I’m going to talk about how it works, how I use it, and what I think it’s good for.”
  </figcaption>
</figure>

## What does this mean for developers?

Copilot wants me to say the following after typing the above heading. It clearly has some difficulty reading the room.

<blockquote>
I think Copilot is a great tool for developers. It’s a great way to learn new languages and frameworks. It’s a great way to get a little help when you’re stuck.
</blockquote>

Copilot is smarter in some ways than my older code-completion tools, but IntelliSense — which relies on indexing the codebase — is still better at suggesting the right thing. Copilot will sometimes suggest the right thing, and do so with rather creepy precision. But in other cases, it will do precisely the wrong thing. Or leap to weird conclusions.

Sometimes those suggestions interfere with my other code-completion tools. When handling an import, IntelliSense is very solid at finding the right paths and letting me know if what I am trying to import is even there. More often than not, Copilot will try to import from some library I haven’t even added to my dependencies yet.

This makes the coding somewhat less fluid — I am frequently pausing to see if Copilot has made a sensible suggestion or if it slept its way through webdev bootcamp. I am not at this point _actually_ afraid of Copilot being better at my job than me. It is a fancy autocomplete, one that can solve more difficult problems than the old tools, but the tradeoff is that it’s less reliable.

I don’t want to discourage anyone from trying it out — I _like_ Copilot most of the time. You may very well find it useful. But as Brooks suggests, it’s pretty much a marginal improvement on software development speed. Better tools aren’t going to help us much. What we need are better processes and better ways to come to a shared understanding of what we are trying to accomplish. Interestingly, what Brooks suggests looks less like a simulated coding partner and more like agile practice.

