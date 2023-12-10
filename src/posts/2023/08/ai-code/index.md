---
title: "AI integration: challenges and discoveries"
date: 2023-08-09
description: I spent a couple of weeks diving into coding _with_ AI, and there are a lot of challenges. The most concerning, however, have very little to do with the technology.
categories:
  - AI
  - Dev
tags: post
cover:
  src: gerbils.png
  alt: AI art of a bunch of gerbils riding an antique-looking open-top car across a dry lake bed, a cloud of dust behind them.
  description: Get in, loser! We’re gonna find the bandwagon!
  attribution:
    name: John Williams / Midjourney
    link: https://www.midjourney.com/app/jobs/ac510f79-a469-478d-a280-fbda50660b87/
egbert:
  titles:
    - "The Mysteries of AI: Insights from an R&D Sprint"
    - Unraveling the Secrets of AI Integration
    - "AI Integration: Challenges and Discoveries"
  summaries:
    - Delve into the world of AI integration and learn about the challenges and
      discoveries made during an R&D sprint.
    - Discover the mysteries of AI as the author shares their insights from a
      recent exploration into integrating AI tools.
    - Uncover the secrets behind AI integration and gain valuable knowledge from
      a developer’s perspective.
  sentiment: The sentiment of the post is generally positive, with the author
    expressing excitement about the potential of AI and acknowledging its
    ability to simplify complex programming tasks. However, there is also a
    sense of caution and concern regarding the limitations and risks associated
    with AI, particularly in terms of its business structure and impact on jobs.
    Overall, the post presents a balanced view of the subject matter.

---

So I’m coming off a R&D sprint investigating how to integrate the newer AI tools into our toolkit, and it’s been an interesting ride. I’ve learned a bit about prompt writing (“prompt engineering?” I’ll get to that), a bit about Python, a bit about Ruby, and a bit about neural nets. Not bad for a developer from Frontendistan.

Here are a few of my observations.

## That’s a heck of a lot of math

Even using paid services, the APIs are slow and sometimes fail to respond at all. I read Stephen Wolfram’s book _What ChatGPT is Doing… and Why Does It Work_ and he explains that tokenizing text — breaking the text down into more manageable parts — is a pretty compute-intensive task. Every token has to go through every node in the neural net, and that neural net is 175 billion nodes. This suggests to me that if you have a text that’s one thousand tokens long, which is by no means outlandish, you’re looking at 175 trillion operations. With a “T.” That’s a hard number to think about. But for comparison’s sake, a human body has roughly 100 trillion cells.

Think about that the next time you ask ChatGPT to make up a funny limerick about cheese sandwiches.

> In a sandwich of cheese so divine,<br>
> Between slices, it’s melted, a sign.<br>
> With a crunch and a chew,<br>
> It’s a flavor to pursue,<br>
> Oh, that cheesy delight, so benign!<br>

Anyway, what that means is that it takes a little while for the AI to think about what you are saying and then put together a good response. Kind of like what would happen to you if someone dropped an 800 word text on you and requested a sentiment analysis.

This is a pattern that we see repeated often with these Large Language Models. They were designed to mimic human writing, so they tend to make very human decisions.

## No one really understands how it works

No, seriously. When they say “we don’t know how this works,” _they don’t know how this works_.

> Why does one just add the token-value and token-position embedding vectors together? I don’t think there’s any particular science to this. It’s just that various different things have been tried, and this is one that seems to work. <cite>— Stephen Wolfram, “What ChatGPT is Doing…”</cite>

Wolfram uses an odd word for the tribal knowledge of tricks that seem to work in developing and training a neural net. That word is “lore.” He uses it a lot.

> Sometimes—especially in retrospect—one can see at least a glimmer of a “scientific explanation” for something that’s being done. But mostly things have been discovered by trial and error, adding ideas and tricks that have progressively built a significant lore about how to work with neural nets. <cite>— Stephen Wolfram, “What ChatGPT is Doing…”</cite>

Wolfram is no AI neophyte — if the name is not ringing bells for you, [read up on Wikipedia](https://en.wikipedia.org/wiki/Stephen_Wolfram). The fact that this physicist / computer scientist / mathematician says “we don’t know” and “lore” a lot is sobering.

## Unsurprisingly, prompt writing works the same way

I _really_ don’t like the term “prompt engineering.” There are lots of definitions of engineering, but they almost always rest on applying scientific principles in an orderly fashion to build, create, or predict the behavior of machines under specific conditions.

The American Engineer’s Council for Professional Development actually uses the phrase “to construct or operate [these machines] with full cognizance of their design.” I doubt you ever hear an engineer talking about “steel girder tensile strength lore.”

The way the prompt writing works (briefly) is this: you think of what you need, ask the AI for an answer, and then continually revise your prompt until you get something acceptable back.

When people are showing off what an AI can do, it’s something like a magic trick. But when you need it for actual _work_, it turns out you’re doing a fair amount of heavy lifting yourself. Assuming you care about the quality of the results, that is.

## You really can’t count on the results

That is to say the results of any specific prompt are not precisely repeatable. There’s a configuration value called “temperature” that tamps down or ramps up the “creativity” for ChatGPT (“who names these things?” asked a colleague), but even at its lowest setting you can get some variation in responses when you repeat the same question over and over. Kind of like what you would get with a human, actually.

_There are many cases where this is undesirable_. The enormous advantage of programming is that the computer does exactly what it is told, and it does it the same way every time. Unless, of course, you go to a great deal of effort to _introduce_ randomness into the system. Even then it might not be very random.

> “One thing that traditional computer systems aren’t good at is coin flipping,” says Steve Ward, Professor of Computer Science and Engineering at MIT’s Computer Science and Artificial Intelligence Laboratory. “They’re deterministic, which means that if you ask the same question you’ll get the same answer every time. In fact, such machines are specifically and carefully programmed to eliminate randomness in results. They do this by following rules and relying on algorithms when they compute.” <cite>[Can a computer generate a truly random number?](https://engineering.mit.edu/engage/ask-an-engineer/can-a-computer-generate-a-truly-random-number/)</cite>

This is perfectly fine if you are trying to get natural speech, but kind of a bummer if you need to mill that block of aluminum to within 0.001" of the spec. You _may_ even want repeatable results in natural language, because there’s a small but non-zero chance the LLM might decide to start calling your very irate client “dawg.”

Much like your human support agents, in fact.

## Beware vendor lock-in

Until and unless we get LLMs that are _open source_ and _freely distributed_, any code you write that depends on those is going to be managed by a company that’s in it for the benjamins. Right now those requests may be cheap, but you can bet at some point [enshitification](https://jacobin.com/2023/05/cory-doctorow-big-tech-internet-monopoly-capitalism-artificial-intelligence-crypto) will sit in.

Suddenly you are the Third Party Vendor to OpenAI’s Amazon. When they decide to change the model,  your prompts are suddenly turning out much different stuff. Maybe they ban all politics. Or all criticism of Amazon. Or all mentions of competing LLMs. [Stable Diffusion](https://www.theverge.com/2022/11/24/23476622/ai-image-generator-stable-diffusion-version-2-nsfw-artists-data-changes) demonstrated they were able to make those kinds of censorial changes, at least with their art bot.

Maybe they pull a Reddit and hike the price of their API drastically. Or they pull a Twitter and shut the API off altogether.

This is not a new risk; tons of folks built businesses on services provided by YouTube, TikTok, Ebay, Twitter, and Reddit, only to have service fees, changes in direction, or even an increased censorious attitude undermine all of their work.

## It’s exciting (and worrying)

All of that said, the AI makes some previously very difficult programming tasks _remarkably_ easy, and I think we’ve just scratched the surface of those. No doubt future generations of LLMs will get faster. Maybe we will replace “lore” with better understanding. Maybe prompt writing will actually become _engineering_ at some point. Maybe we will find a way to make these very complex, poorly understood tools respond in a consistent manner without us having to worry about it embarrassing us in front of Mom or starting political fights over Thanksgiving.

The last concern, though, is more about the _business_ structure of AI. As are concerns about what AI ultimately means to people’s jobs. Those will require some political action, political activism, and maybe a serious rethink of our economic foundations. I don’t know if it’s gonna get worse, or gonna get better, but it’s certainly gonna get weird.



