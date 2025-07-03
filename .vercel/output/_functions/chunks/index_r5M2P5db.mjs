import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "I ❤️ JavaScript",
  "description": "Despite considerable hatred of JavaScript in some corners of the web standards community, JavaScript is still a crucial part of the platform.",
  "date": "2025-06-12T10:59:39.000Z",
  "cover": {
    "src": "./meerkat.jpg",
    "alt": "A meerkat stands upright on a rock, watching the skies",
    "description": "A meerkat on lookout, standing on top of a rock and watching the sky. Taken at the Greensboro Science Center in North Carolina, May 2025.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    sup: "sup",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["A few months ago, an interesting question came across my social media feed.", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), " “How does a web page that doesn’t weigh 50 KB (compressed) consume 68 MB RAM?”"]
    }), "\n", createVNode(_components.p, {
      children: "An almost immediate response: “JavaScript frameworks have led to web developers who can’t write HTML. Loading up needless frameworks to support ads and tracking to say ‘Hello World!’”"
    }), "\n", createVNode(_components.p, {
      children: "An interesting hypothesis; shame there’s no way to test that… oh, wait, I can just open up dev tools and discover…"
    }), "\n", createVNode(_components.p, {
      children: "There was no JavaScript. Or ads. Or, for that matter, images. It was all just HTML and CSS."
    }), "\n", createVNode(_components.p, {
      children: "There are a few lessons in this."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "When someone asks “why is this happening,” it’s always worth a look before opening your mouth."
      }), "\n", createVNode(_components.li, {
        children: ["Before you sneer at a web developer’s work, check to see if you are speaking to that developer.", createVNode(_components.sup, {
          children: createVNode(_components.a, {
            href: "#user-content-fn-2",
            id: "user-content-fnref-2",
            "data-footnote-ref": "",
            "aria-describedby": "footnote-label",
            children: "2"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: "Web browsers use a surprising amount of memory just to display even basic web pages."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["But really, many people hate on JavaScript ", createVNode(_components.em, {
        children: "reflexively"
      }), ". I’ve started taking that into account in these conversations. Sometimes I think it’s because they don’t know JavaScript themselves, and hating it gives them a moral high-ground to defend their continued ignorance."]
    }), "\n", createVNode(_components.p, {
      children: "Sometimes I think that’s ungenerous."
    }), "\n", createVNode(_components.p, {
      children: ["But just in case: it’s ", createVNode(_components.em, {
        children: "ok"
      }), " to just use HTML and CSS if you are not interested in JavaScript personally. And if you use it sparingly, the web is better for it."]
    }), "\n", createVNode(_components.p, {
      children: ["What’s ", createVNode(_components.em, {
        children: "not"
      }), " OK is this: developing for the web using JavaScript and ", createVNode(_components.em, {
        children: "not"
      }), " understanding HTML and CSS. Those are the foundational technologies, and JavaScript is supposed to cooperate with and augment them. If you’re using them to replace or abstract away HTML or CSS ", createVNode(_components.a, {
        href: "/posts/2024/07/domain-shift/",
        children: "you are doing it wrong"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "I think it’s important that people place blame where it belongs, and I can’t think of an example where the language is at fault. Instead, it’s snobbery, laziness, and greed."
    }), "\n", createVNode(_components.p, {
      children: "For example:"
    }), "\n", createVNode("dl", {
      children: [createVNode("dt", {
        children: "Snobbery"
      }), createVNode("dd", {
        children: "”CSS isn’t programing, and it’s a terrible language.”"
      }), createVNode("dt", {
        children: "Laziness"
      }), createVNode("dd", {
        children: "”CSS is so hard to understand. Protect me, JavaScript!”"
      }), createVNode("dt", {
        children: "Greed"
      }), createVNode("dd", {
        children: "”Why should I hire experts? I can replace four of them with one full-stack developer.\""
      }), createVNode("dd", {
        children: ["\"New features fast! 10x Developer! Sleep when you’re dead! ", createVNode(_components.em, {
          children: "Vibe code!"
        }), "”"]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["These human failings lead to a lot of bad code, caused by using the wrong tool, using the tool ", createVNode(_components.em, {
        children: "incorrectly"
      }), ", or not slowing down enough to make good decisions or learn how to use the tool."]
    }), "\n", createVNode(_components.p, {
      children: "Anything that takes the place of direct contact with code plays to all three. That includes AI, but also the lengthy list of “no code” web building solutions. Figma Sites is the most recent example."
    }), "\n", createVNode(_components.p, {
      children: "Of these, “greed” is the worst; it encourages and rewards the other two. When you go into a company and see terrible JavaScript doing things much better left to other tools, don’t think “ugh, JavaScript.” Think: what have these poor people been having to put up with?"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "That’s not to say that languages don’t deserve criticism. JavaScript has its faults, and there are many places it should not be used, and purposes for which it is not suited. Absent context, using JavaScript is not bad."
    }), "\n", createVNode(_components.p, {
      children: ["Much the same thing can be said for frameworks; React is old. It served a purpose quite well in 2013, and it has not (perhaps) caught up with what CSS and HTML can do in 2025. But I’ll take a well-documented, thoughtful, and carefully maintained framework ", createVNode(_components.em, {
        children: "every day"
      }), " over a bespoke vanilla JavaScript application that has little documentation, no testing, and no internal consistency."]
    }), "\n", createVNode(_components.p, {
      children: "Yes, even if it’s React."
    }), "\n", createVNode(_components.p, {
      children: ["I do love JavaScript. I write it every day", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), ". But I love it for what it can do that HTML and CSS can’t do. I love it for its portability and how accessible it is to learn. I love that you can be functional, object-oriented, or even procedural with JavaScript."]
    }), "\n", createVNode(_components.p, {
      children: "It works so well with HTML and CSS, though. Use those more. I am running to use new CSS (anchor-based positioning) or HTML (dialogs and popovers)."
    }), "\n", createVNode(_components.p, {
      children: ["I love JavaScript, but any day I can replace it with HTML or CSS is a ", createVNode(_components.em, {
        children: "good day"
      }), "."]
    }), "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: ["I tend not link to Mastodon conversations because they are ephemeral and sometimes involve people who would prefer not to have their content widely indexed or distributed. ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: ["Based on personal experience, I find it a lot more effective to be ", createVNode(_components.em, {
              children: "behind"
            }), " someone before you talk behind their back. ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: ["Well, I write Typescript. Which I like less. ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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

const url = "src/content/posts/2025/06/i-like-javascript/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/06/i-like-javascript/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/06/i-like-javascript/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
