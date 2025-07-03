import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
import 'clsx';

new Proxy({"src":"/_astro/peter.DSXAtVWR.webp","width":300,"height":289,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/04/css-programming/peter.webp";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Is CSS a programming language?",
  "date": "2024-04-27T21:02:38.000Z",
  "categories": ["CSS"],
  "tags": "post",
  "description": "And why does it seem to matter to so many people?"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "wait-what-are-we-talking-about-again",
    "text": "Wait, what are we talking about again?"
  }, {
    "depth": 2,
    "slug": "why-does-this-matter",
    "text": "Why does this matter?"
  }, {
    "depth": 2,
    "slug": "css-is-a-powerful-language-its-just-not-programming",
    "text": "CSS is a powerful language. It’s just not programming"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "No, CSS is not a programming language."
    }), "\n", createVNode(_components.p, {
      children: "Since you’re here, I guess I should provide a bit more detail."
    }), "\n", createVNode(_components.h2, {
      id: "wait-what-are-we-talking-about-again",
      children: "Wait, what are we talking about again?"
    }), "\n", createVNode($$Index, {
      position: "right",
      children: [createVNode("iframe", {
        slot: "fig",
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/TL41NpYnhWo?si=PCXHt-uZL__H6WDd",
        title: "YouTube video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: true
      }), createVNode(_components.p, {
        children: "Every YouTuber has to make dopey over-emotive faces in the thumbnails or The Algorithm™️ rejects\nthem. I’ve just had to get used to it."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["CSS YouTuber Kevin Powell did a video showing off games that were created using HTML and CSS alone. Powell keeps saying “and they say CSS isn’t a programming language.” He also says “I don’t want people being pedantic in the comments.” Fair enough, I’ll just be pedantic here. CSS is ", createVNode(_components.em, {
        children: "not"
      }), " a programming language, and I do think the distinction matters."]
    }), "\n", createVNode(_components.p, {
      children: "Just what constitutes a programming language is hard to pin down. Most categories tend to fuzz around the edges. But CSS is lacking most of what we would consider necessary in a programming language."
    }), "\n", createVNode(_components.p, {
      children: "CSS lacks:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Variables."
      }), "\n", createVNode(_components.li, {
        children: "Flow-of-control structures (conditionals, for-loops)"
      }), "\n", createVNode(_components.li, {
        children: "Any means of defining a function"
      }), "\n", createVNode(_components.li, {
        children: ["Any means of accepting ", createVNode(_components.em, {
          children: "input"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Any means of producing ", createVNode(_components.em, {
          children: "output"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "You do not “run” CSS."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Yes, CSS has a mechanism people insist on calling “variables.” These do not behave like variables at all. They do behave like CSS properties, however: the value is dependent on where it’s used in the cascade. This confused the heck out of me when I first started using them, as it has everyone else I’ve seen work with them. It doesn’t help, of course, that they are referenced with a function named ", createVNode(_components.code, {
        children: "var()"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "CSS might seem like it produces output, because it is all about how things look and — in some rare cases — you can present actual text to people. Unlike Javascript, which you can run independently of the browser, CSS relies on both HTML and the browser to have any meaning at all."
    }), "\n", createVNode(_components.p, {
      children: "You don’t even run CSS, because to “run” implies a sequential order of operations, something that has a defined beginning and end point. CSS is interpreted, then applied to HTML by the browser. This is why there’s no flow-of-control operations in CSS. In order to have looping, you must first have something to loop."
    }), "\n", createVNode(_components.h2, {
      id: "why-does-this-matter",
      children: "Why does this matter?"
    }), "\n", createVNode(_components.p, {
      children: "I like to make the distinction because approaching CSS like a programming language is the wrong mindset. When back-end programmers or full-stack programmers work with CSS, one of their first impulses is to correct the fundamental flaw they perceive in CSS: the fact that the values of properties “bleed” into other areas. This is the “cascade,” and it is so fundamental to how CSS works that the language is called “Cascading Style Sheets.”"
    }), "\n", createVNode(_components.p, {
      children: ["From a programming perspective CSS has too many side effects, too many global variables and no graceful way of scoping things. Thus, SASS, LESS, and CSS-in-JS solutions like Styled Components. Most of these programmers become so frustrated with the language that, like Peter Griffin fighting the blinds, they fall back on the old horrible practice of ", createVNode(_components.a, {
        href: "https://www.informit.com/articles/article.aspx?p=31538",
        children: "programming by coincidence"
      }), ". Unable to cope with CSS violating all of their expectations about how programming is supposed to work, they are reduced to making more and more precise selectors and throwing style rules into them to see what works."]
    }), "\n", createVNode(_components.h2, {
      id: "css-is-a-powerful-language-its-just-not-programming",
      children: "CSS is a powerful language. It’s just not programming"
    }), "\n", createVNode(_components.p, {
      children: ["I think one of the reasons those of us on the front end might ", createVNode(_components.em, {
        children: "want"
      }), " CSS to be a programming language, or at least recognized as one, is that it’s the programming languages that get all the glory. HTML and CSS are all “lesser” somehow, at least in prestige and often in pay."]
    }), "\n", createVNode(_components.p, {
      children: ["This mindset reminds me a lot of what I saw in college curriculums where academic and cultural studies felt the need to glue on a veneer of science-ness to their studies, even if science is a poor tool to use to talk about people and art. STEM is where the money was (is), so STEM is what English degrees should be. We can also see the same mindset in Evangelical Christians, who manufacture concepts like ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Creation_science",
        children: "Creation Science"
      }), " or ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Intelligent_design",
        children: "Intelligent Design"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "When things that are not science start to ape science, you know science has gained cultural primacy. But aping science cost the humanities and religion much, discarding their unique viewpoints in favor of a tool that has a lot more cultural capital but is much less suited to the task. This is my same concern with the desire to force CSS into a programming language model."
    }), "\n", createVNode(_components.p, {
      children: "Programming languages are about change, processing, and manipulation of information. CSS describes what that information looks like — in many different states. But CSS itself changes the state of precious little."
    }), "\n", createVNode(_components.p, {
      children: ["Even though it is not programming, CSS is a meticulous and analytical technical skill in its own right. It deserves respect as such. Any programmer who sneers at CSS ", createVNode(_components.em, {
        children: "probably isn’t good at writing it"
      }), " and doesn’t enjoy the kind of work CSS is. Why they feel like they should belittle it I don’t know, but many programmers — not a majority, I hope, at least in web development — don’t see the value of design or UX efforts either. CSS is complicated because design is complicated. People who are impatient with design requirements are going to be impatient with CSS as well."]
    }), "\n", createVNode(_components.p, {
      children: "As for those games Kevin Powell was talking about: as near as I can tell from watching his video, these games rely on the interactive tools provided by HTML form elements. They also seem to require a vast amount of CSS, I suspect generated as the output of something like SASS. One example has over a megabyte of CSS, and one does not simply write a megabyte of CSS."
    }), "\n", createVNode(_components.p, {
      children: ["That’s not to say these demos aren’t impressive! They are! It’s fun to watch people push CSS in directions that it isn’t intended to go. I am so interested in it that I’ve signed up for Kevin Powell’s ", createVNode(_components.a, {
        href: "https://courses.kevinpowell.co/css-games-workshop",
        children: "CSS Games Workshop"
      }), ". No doubt I will learn a few more tricks."]
    }), "\n", createVNode(_components.p, {
      children: ["But when I want to write a game, I will ", createVNode(_components.a, {
        href: "https://godotengine.org/",
        children: "reach for Godot instead"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/2024/04/css-programming/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/04/css-programming/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/04/css-programming/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
