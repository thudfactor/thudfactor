import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import './index_BWnmU9ZN.mjs';
import { $ as $$Index } from './index_B2d5c0sX.mjs';
import { $ as $$AlertCallout } from './AlertCallout_BPXWUukm.mjs';
import 'clsx';

const frontmatter = {
  "title": "The Regrettable State of Cross-Browser Testing",
  "date": "2024-06-26T09:51:34.000Z",
  "categories": ["WebDev"],
  "tags": "post",
  "description": "Update-by-default has pushed the platform forward, but has also put browser testing out of reach for many",
  "cover": {
    "src": "./guard.png",
    "alt": "A very life-like sculpture of a security officer.",
    "description": "Marc Sijan's \"Security Officer,\" a resin sculpture installed at the Baird Center in Milwaukee. It took me a couple of days before I noticed this guy never moved."
  },
  "attribution": {
    "name": "Photo by John Williams"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "options-for-browser-testing",
    "text": "Options for browser testing"
  }, {
    "depth": 2,
    "slug": "the-indie-web-is-going-to-have-rough-edges",
    "text": "The Indie Web is going to have rough edges"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Index, {
      image: import('./borked_C9Q3UA17.mjs'),
      alt: "The website layout for this site, with all page layout items in very narrow columns only a few characters wide.",
      position: "right",
      children: createVNode(_components.p, {
        children: "There’s slightly broken, and then there’s this."
      })
    }), "\n", createVNode(_components.p, {
      children: ["My last post about the perceived ", createVNode(_components.a, {
        href: "https://www.thudfactor.com/posts/2024/06/new-hotness/",
        children: "“slow” adoption of new CSS"
      }), " sparked some great discussion. But I also got a few bug reports about my site design. I am not enormously concerned about supporting older or unusual browsers, but friends, the site looked bad."]
    }), "\n", createVNode(_components.p, {
      children: ["“Best practice” says I ", createVNode(_components.em, {
        children: "should"
      }), " test the site in many browsers and many different versions. But I don’t. Not this site, anyway, for two reasons:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "I have limited time and no one is paying me for any of this work."
      }), "\n", createVNode(_components.li, {
        children: "It is difficult and/or expensive to test multiple versions of each browser on each OS."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In my defense, though, the only way I was able to reproduce and diagnose the problem, then verify a fix, was to install an old version of Firefox through a Docker container. It’s not something a casual cruise through typical browsers would have revealed."
    }), "\n", createVNode(_components.p, {
      children: ["By the way, ", createVNode(_components.em, {
        children: "this"
      }), " is an excellent way to report that someone’s website is borked (thank you!):"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Heads up: On Firefox 115.12.0esr (Debian 12 system version) the page layout is broken (at all viewport widths)?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This will get you blocked:"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Why do I get the impression you are either a chrome fan, into the newest, hottest shit, or one of those mobile-first people? :-P"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "(If you are an indie web person and/or just getting started in web development and someone speaks to you this way, absolutely block, block, block. It’s not you, it’s them.)"
    }), "\n", createVNode(_components.p, {
      children: ["This specific problem occurred because I was (and am still) using ", createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting",
        children: "native CSS nesting"
      }), " instead of running my CSS through a pre-processor. However, I am using the ", createVNode(_components.em, {
        children: "old"
      }), " syntax, which has been generally well-supported across all modern browsers for just shy of a year. Most people don’t have any problem seeing this because browsers all push updates by default, the status quo for many, many years now. I am ", createVNode(_components.a, {
        href: "http://localhost:4321/posts/2023/11/goodbye-postcss/",
        children: "loathe to add PostCSS back into my tool chain"
      }), " but also really like working with nested CSS, which has been my practice for ten years at least."]
    }), "\n", createVNode(_components.p, {
      children: ["The folks having problems with this design were all running the ", createVNode(_components.a, {
        href: "https://www.mozilla.org/en-US/firefox/enterprise/",
        children: "Firefox Extended Support Release"
      }), ", locked at the time to version 115 — two releases behind the native CSS nesting support. Of course, Mozilla doesn’t make it easy to determine what version ESR is running. A Mastodonian helpfully linked to a third-party site explaining the update schedule for the ESR releases."]
    }), "\n", createVNode(_components.p, {
      children: "Third party!"
    }), "\n", createVNode(_components.p, {
      children: "There is no incentive for browser makers to allow you to install old versions side-by-side, and every incentive for them to force updates."
    }), "\n", createVNode(_components.h2, {
      id: "options-for-browser-testing",
      children: "Options for browser testing"
    }), "\n", createVNode(_components.p, {
      children: "If you develop on a Mac, you can easily test using:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Firefox"
      }), "\n", createVNode(_components.li, {
        children: "Safari"
      }), "\n", createVNode(_components.li, {
        children: "Chrome"
      }), "\n", createVNode(_components.li, {
        children: "Chromium-based Microsoft Edge (Yes, really!)"
      }), "\n", createVNode(_components.li, {
        children: "Android with the Android SDK"
      }), "\n", createVNode(_components.li, {
        children: "iOS Safari with Xcode"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If you develop on Windows you can test using:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Firefox"
      }), "\n", createVNode(_components.li, {
        children: "Chrome"
      }), "\n", createVNode(_components.li, {
        children: "Chromium-based Microsoft Edge"
      }), "\n", createVNode(_components.li, {
        children: "Android with the Android SDK"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Cross-browser testing is not easy. Or cheap."
    }), "\n", createVNode(_components.p, {
      children: "Once upon a time you could run multiple versions of a web browser on your own machine, with no need for Docker, but I don’t think it’s worked that way for any of them for many years now."
    }), "\n", createVNode(_components.p, {
      children: ["I have been told that you can do live browser testing using ", createVNode(_components.a, {
        href: "https://playwright.dev/",
        children: "Playwright"
      }), ". I haven’t tried that out yet, but neither had the person who suggested this to me. My experience with Playwright tells me the setup is not beginner-friendly."]
    }), "\n", createVNode(_components.p, {
      children: "I was able to lean on my experience with Docker to pull and run a virtual machine locally with Firefox 115 on it to verify my “fix” worked. That is also not a trivial task for someone unfamiliar with Docker, and it was (at least) frustrating for me."
    }), "\n", createVNode(_components.p, {
      children: ["So in order to do a handful of minutes of testing I now have an Android developer toolkit, the full Xcode application, and Docker Firefox image all installed on my machine. The only reason I have to open any of these tools is to test web sites, ", createVNode(_components.em, {
        children: "which is nuts."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Or there’s BrowserStack, an expensive solution at US$39.00/month. Out of reach for many independent hobby-level developers. Certainly more than I want to pay for the tiny amount of time I need it. I tried a competitor, but once I’d signed up for the free tier I discovered that live testing was limited to three-minutes. On the plus side, I was subjected to the full-court press of commercial sales efforts and got to exercise my unsubscribing finger."
    }), "\n", createVNode(_components.h2, {
      id: "the-indie-web-is-going-to-have-rough-edges",
      children: "The Indie Web is going to have rough edges"
    }), "\n", createVNode(_components.p, {
      children: ["I suppose I spent most of a Saturday morning isolating the cause of this issue, implementing a rough “fix” (not really a fix, just a very simple fallback), and then verifying that the change worked. In my professional environment, I have the support of a team and access to paid, professional tools. This task goes much quicker. But on my personal work, it’s just me responsible for the design, the implementation, the testing, the dev ops, the writing, and most of the photography. I like doing this stuff, but I feel pretty stretched and the things I know I ", createVNode(_components.em, {
        children: "should"
      }), " do is larger than the things I have ", createVNode(_components.em, {
        children: "time"
      }), " to do by several orders of magnitude."]
    }), "\n", createVNode(_components.p, {
      children: ["That has to be even more difficult for beginners or folks dabbling in making websites. The surface level of web development is easy to get hold of, but the attack surface for critique is massive. Is the HTML semantic? Is the site accessible? Did you choose tooling (Wordpress, NextJS, Tailwind, Substack) that people have a technical or political beef with? Did you use vanilla CSS and JavaScript? Did you use ", createVNode(_components.em, {
        children: "any"
      }), " JavaScript? Did you use versions of it that were old enough? Is your site contributing too much to greenhouse emissions because your images aren’t properly compressed? Are you stealing everyone’s art by using an AI image somewhere?"]
    }), "\n", createVNode(_components.p, {
      children: "It’s real easy to see how people might decide that making their own web site is not worth the scrutiny. We need to be sensitive to that if we want independent creators writing stuff, especially without the expectation of it being monetized or a side hustle."
    }), "\n", createVNode(_components.p, {
      children: ["As far as browser testing goes, the ", createVNode(_components.em, {
        children: "typical"
      }), " user experience is having one of the Big Three browsers installed and on something relatively close to the most recent version. This works for most web site visitors, except those who have not upgraded — either because they can’t or because they won’t."]
    }), "\n", createVNode(_components.p, {
      children: ["The solution is ", createVNode(_components.em, {
        children: "not"
      }), " to limit ourselves to markup, layouts, and CSS features available circa 2007 (a suggestion I actually got). For all the device compatibility the old stuff has, it was also ", createVNode(_components.em, {
        children: "much"
      }), " more difficult to make accessible. Oh, and required much more extensive browser testing. (Anyone who thinks float-based layouts are “bulletproof” has never had to support IE 6, I assume.)"]
    }), "\n", createVNode($$AlertCallout, {
      children: createVNode(_components.p, {
        children: "IE 6 was released in 2001, superseded by IE 7 in 2006. In practice I ended up supporting it for\nfifteen years. “This browser is now old enough to go to high school,” I remember telling my\nproject manager."
      })
    }), "\n", createVNode(_components.p, {
      children: "I don’t even know what the solution is for website backwards compatibility, at least for the indie web producer. If it’s live cross-browser, cross-version testing, it will need to be something at least as easy to use as BrowserStack but much less expensive."
    }), "\n", createVNode(_components.p, {
      children: "In the meantime, some patience and tolerance will go a long way. On the indie web, people do what they can with the time and resources they have, and what they give us is usually a gift."
    }), "\n", createVNode(_components.p, {
      children: ["This ", createVNode(_components.em, {
        children: "by no means"
      }), " is to say you shouldn’t raise an issue if you can provide enough context. But please don’t respond to that gift with a sneer or a scowl because of technical decisions ", createVNode(_components.em, {
        children: "you"
      }), " have made. Remember to keep your bug reports concise, include the browser type and version, and the OS. And don’t be surprised to find out there’s very little they are equipped to do."]
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

const url = "src/content/posts/2024/06/browser-testing/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/06/browser-testing/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/06/browser-testing/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
