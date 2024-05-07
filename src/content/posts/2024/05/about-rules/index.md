---
title: Some rules about making rules
date: 2024-04-27T17:02:38-04:00
categories:
  - CSS
  - Process
tags: post
description: My first one is “never call them rules.”
---

I was thinking this morning about `border-radius`, the CSS property that lets us round off corners. I had almost forgotten that there was a time before. I am not sure when it was introduced, but the [CSS Tricks article](https://css-tricks.com/almanac/properties/b/border-radius/) is from 2011. Prior to `border-radius` if we wanted rounded corners we had to use images, either in a [9-slice table](https://thudfactor.com/posts/2023/11/goodbye-postcss/table-based-layout-for-elements) or through clever techniques like [sliding doors](https://thudfactor.com/posts/2023/11/goodbye-postcss/table-based-layout-for-elements).

When all major browsers finally supported `border-radius`, _tons_ of people were still stuck on IE 6. IE 9 was out, but we were all still testing on IE 6. It’s difficult to explain the significant improvement in developer time and page-weight that came with `border-radius`, but we were stuck making tiny corner images over various background colors because there was this rule:

“The design must look the same in all browsers.”

The idea for “progressive enhancement” had been around for ages, of course, but it wasn’t really embraced by designers and business folks until, I think, `border-radius` became an easy-to-understand example of why we needed to drop pixel-perfect designs in general. It took a lot of persuasion internally, then a lot of education of clients, and then occasional bursts of reminders when QA reports on sites came back complaining about the square buttons on IE 6.

That’s one problem with rules: they become outdated, but not everyone figures that out at the same time.

## Rules about rules

In _Pragmatic Thinking and Learning_, Andy Hunt says when you are new you need clear, concise rules about how to approach specific situations because you don’t have enough experience to understand the context. On the other hand, he says:

> It’s actually easy to derail an expert and ruin their performance. All you have to do is force them to follow the rules.

Most people spend their time between the novice and the expert, though, so how do they get there? Part of mastering the skill _has_ to be learning when the rule is no longer serving you. To do that you have to understand that the rule is _not_ a religious commandment but a more-or-less pre-made decision that serves a specific purpose, at a specific time, for a specific problem space. To that end, here are my rules about rules.

### 1. Don’t call them rules

The word “rule” suggests a lot of things to a lot of people. For some, it means “you must comply to be good.” For others, it means “something only sheeple care about.” Either way, the response is unthinking. So I try not to make rules. Instead I will say things like:

- I prefer…
- It is generally best to…
- The consensus seems to be…
- The guidelines are…

Sometimes people will ask for rules when I have none to give, so I end up saying things like “it depends.” Andy Hunt again:

> [T]he high-priced consultant’s favorite answer is “it depends.”

A broadly applicable guideline with rare exceptions can probably be called a rule, but there are very few examples. “Don’t use tables for layout” is a great one. However, it’s crucial that people understand this doesn’t mean “don’t use tables.” It’s not unheard of to discover tabular data, which absolutely belongs in a table, created using a ton of `div` elements and tortured CSS.

Even “provide alt text for images” has exceptions, [explained here by the W3C](https://www.w3.org/WAI/tutorials/images/decorative/):

> The information provided by the image might already be given using adjacent text, or the image might be included to make the website more visually attractive. In these cases, a null (empty) alt text should be provided (alt="") so that they can be ignored by assistive technologies, such as screen readers…

The W3C article goes on for some time about _why_ you would do such a thing, and how to know when. Ultimately, “whether to treat an image as decorative or informative is a judgment that only the author can make, based on the reason for including the image on the page.”

In other words, when you look hard enough even this iron-clad accessibility rule has exceptions near the blurry edges.

### 2. Don’t put tools out of reach

One of the most frustrating sets of “rules” I see are those ban practices, language features, or languages without any real discussion of why or when. Frameworks like React (Javascript) and Tailwind (CSS) are popular targets, but sometimes even the _idea_ of frameworks themselves come under fire.

Many of the arguments against Tailwind and React (for example) make sense, but not in all circumstances. Tailwind can be very heavyweight and does obscure a lot of the operation of CSS from newcomers. On the other hand, it’s a powerful tool in the hands of people who know CSS well _and_ need to do rapid site-building with data-driven design.

Tailwind solved a specific but common problem for me: how to expose a complex set of design options to content managers using a CMS. Utility-based CSS is a great way to approach the problem, but there’s a lot of effort involved in creating a good bespoke set of utility CSS. When you’re working to a cash-strapped budget, there’s not time to make bespoke utility systems, so Tailwind is an excellent choice.

Often these rules are made out of bad personal experiences or a violation of someone’s development ideology. But the worst reason I see for putting a tool out of use is for the sake of “consistency.” For example, I once worked on a React project that had a prohibition against using _class names_ in CSS. Everything was either a [styled-components](https://styled-components.com/) element or the CSS was rendered dynamically with Javascript and passed props. The goal here was to limit how much developers had to think about the cascade, but the result was tortured, verbose code that could have been expressed a lot more elegantly with simple vanilla CSS.

Although these banned-for-consistency rules are supposed to reduce confusion in development teams, they often back you into a corner where you are forced to use a screwdriver to pound in a nail because the rule is _don’t use hammers_. You should react to consistency-based rules as though someone were trying to take your toolbox away from you… because that’s exactly what they are doing.

### 3. Know why the rule was made

And if you are making the rule, know why you are making it. Because rules are only useful under specific circumstances, you need to know when they cease to be useful. Sometimes (often!) the rule can become an impediment.

PHP is a fine language, but it is not suitable for everything. For example, it is not great at command-line scripts. It’s _possible_ to create command-line scripts with PHP, but it’s not the best tool. If you suddenly find yourself having to write a lot of command line tools, and you are in a “PHP-only shop,” there’s something that needs to be reconsidered.

Another example: A lot of people say Javascript should be extremely rarely, ideally never. So far, all of the folks I’ve seen making this argument develop for article-based or content-driven web sites; none of them are using the web platform to write software. Obviously people writing software are going to need Javascript.

Javascript _is_ often used where it shouldn’t be, but it is also often the right tool for the job. The moralistic argument does not help anyone make a wise decision.

If you are a junior developer and someone gives you a rule, always ask “why.” Understand what purposes it serves. Sometimes those purposes are good, technical reasons related to the problem domain. But often those rules are either made out of ideology (“commercial OSes are exploitative”, “I am a Microsoft fanboy”) or out of simple aversion (“CSS is bad, so we lobotomized it”).

Ideological rules tend to be easy to spot, but hard to stand against. These rules are often couched in moral terms, and people who question them become the subject of condemnation. That’s the way ideologies work, and it makes more sense to me if you’re discussing more human, interpersonal topics.

“Generative AI is / is not plagiarism” is an ideological argument, but it’s more about the human consequences of generative AI, not its technical suitability for a job. “Stop using Javascript, it is ruining the web” is an argument about _tool choice_ but it’s couched in terms of good vs. evil: if you use Javascript, which is ruining the web, you are evil because you contribute to the ruination of the web.

## Finally, always leave the discussion open

It probably goes without saying, but I need to say it because someone else will undoubtedly point it out to me: these rules are themselves really guidelines, and subject themselves to everything else I've said here.

Are there rules you have heard that are actually guidelines? What technical decisions do you hear most frequently couched in moral terms? What rules do _you_ follow that might deserve some re-examination? Have I missed any good rules about rules? Do let me know, either on your own blog or [on Mastodon](https://hachyderm.io/@thudfactor) where I hang out the most.
