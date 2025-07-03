import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Popovers and Dialogs, a (kinda) case study",
  "date": "2024-05-15T10:08:52.000Z",
  "categories": ["CSS", "HTML"],
  "tags": "post",
  "description": "The differences (and similarities) of the new Popover API and the Dialog element."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "and-javascript",
    "text": "…And Javascript"
  }, {
    "depth": 2,
    "slug": "the-first-component-dialogs",
    "text": "The first component: dialogs"
  }, {
    "depth": 2,
    "slug": "the-second-component-tooltips",
    "text": "The second component: tooltips"
  }, {
    "depth": 3,
    "slug": "handling-hover",
    "text": "Handling hover"
  }, {
    "depth": 3,
    "slug": "handling-position",
    "text": "Handling position"
  }, {
    "depth": 3,
    "slug": "guess-what",
    "text": "Guess what?"
  }, {
    "depth": 2,
    "slug": "wrap-up",
    "text": "Wrap-up"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["HTML has had a couple of exciting, but similar, new releases. ", createVNode(_components.code, {
        children: "Dialog"
      }), " is a new element and related API, with broad support among Chrome, Safari, and Firefox since early 2022. The ", createVNode(_components.code, {
        children: "popover"
      }), " attribute — which gets added to other HTML elements to convert them into popovers — is much more recent. Chrome and Safari added support in 2023, but it didn’t land in Firefox browsers until a month ago."]
    }), "\n", createVNode(_components.p, {
      children: ["I recently used both of these in a production app, so I got to know them relatively well. When I demoed to other engineers, they always asked what the difference was between ", createVNode(_components.code, {
        children: "popover"
      }), " and ", createVNode(_components.code, {
        children: "dialog"
      }), ". Hidde de Vries has a great (and exhaustive!) post on ", createVNode(_components.a, {
        href: "https://hidde.blog/dialog-modal-popover-differences/",
        children: "just this subject"
      }), ", but I want to focus on what I discovered when using these two."]
    }), "\n", createVNode(_components.p, {
      children: "The two components I needed were:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "A modal dialog box, which needs to be centered and act as a focus trap. It also needed to have a backdrop that obscured the background, and if you clicked outside (on the backdrop), the modal should be dismissed. (This is called a “light dismiss.”)"
      }), "\n", createVNode(_components.li, {
        children: ["A tooltip, which needs to show on hover and keyboard focus, have a delay, have ", createVNode(_components.em, {
          children: "no"
        }), " backdrop, and is dismissed only on loss of hover or keyboard focus."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Running mostly on semantics alone, I chose ", createVNode(_components.code, {
        children: "dialog"
      }), " for the first option, and ", createVNode(_components.code, {
        children: "popover"
      }), " for the second, but from a capabilities standpoint the two of them are actually very much the same. Strangely, ", createVNode(_components.em, {
        children: "neither"
      }), " option was perfectly suited to either component."]
    }), "\n", createVNode(_components.h2, {
      id: "and-javascript",
      children: "…And Javascript"
    }), "\n", createVNode(_components.p, {
      children: ["Practically speaking, both ", createVNode(_components.code, {
        children: "dialog"
      }), " and ", createVNode(_components.code, {
        children: "popover"
      }), " have extremely limited use without Javascript. This will be upsetting to folks who are aggressively anti-Javascript, but I’d expect these elements to develop over time so you can do more without it."]
    }), "\n", createVNode(_components.p, {
      children: ["Those ", createVNode(_components.code, {
        children: "dialog"
      }), " elements default to being hidden, but you can open one by adding the ", createVNode(_components.code, {
        children: "open"
      }), " attribute. This will open the dialog in non-modal form, which means it gets absolute positioning inside the container, but it does not get any positioning otherwise."]
    }), "\n", createVNode(_components.p, {
      children: ["Elements with a ", createVNode(_components.code, {
        children: "popover"
      }), " attribute also start life hidden, but I don’t think there’s a way to open them in markup. You ", createVNode(_components.em, {
        children: "can"
      }), " link opening and closing popovers to a button by adding a ", createVNode(_components.code, {
        children: "popovertarget"
      }), " attribute to the button, but that’s limited to opening and closing popovers with clicks."]
    }), "\n", createVNode(_components.p, {
      children: ["This feels backwards to me, I guess — popovers open with a trigger relationship you can set in markup, but dialogs don’t — because dialogs seem like they would ", createVNode(_components.em, {
        children: "always"
      }), " be opened on click events, but popovers might occur for many reasons. But that’s the API."]
    }), "\n", createVNode(_components.h2, {
      id: "the-first-component-dialogs",
      children: "The first component: dialogs"
    }), "\n", createVNode(_components.p, {
      children: ["When ", createVNode(_components.code, {
        children: "dialog"
      }), " is opened by Javascript, you can choose to open it as a modal — which is what I needed. The modal dialog display does a number of things:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["The element is moved into the ", createVNode(_components.a, {
          href: "https://developer.chrome.com/blog/what-is-the-top-layer/",
          children: "top layer"
        }), ", which resolves a lot of z-index stuff."]
      }), "\n", createVNode(_components.li, {
        children: ["Since it’s in the top layer, modal dialogs get a backdrop and ", createVNode(_components.code, {
          children: "position: fixed"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["The dialog provides a focus trap, and clicks outside the dialog proper and onto the ", createVNode(_components.code, {
          children: "::backdrop"
        }), " pseudo-element are all delegated back to the dialog itself."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["However, the ", createVNode(_components.code, {
        children: "dialog"
      }), " API does not have light dismiss support. You have to add it yourself, which I did by:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Listening for clicks on ", createVNode(_components.code, {
          children: "dialog"
        }), " directly (not its children). Since clicks on the backdrop are delegated to the dialog, the dialog’s click handler will catch these, too."]
      }), "\n", createVNode(_components.li, {
        children: ["Checking the coordinates of the click against the boundaries described by ", createVNode(_components.code, {
          children: "getClientBoundingRect()"
        }), " to determine if the click was inside or outside of the dialog element."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Any time I find myself reaching into specific element coordinates I feel like I’m doing pretty low-level UI programming and I’d rather not."
    }), "\n", createVNode(_components.h2, {
      id: "the-second-component-tooltips",
      children: "The second component: tooltips"
    }), "\n", createVNode(_components.p, {
      children: ["Buckle up, I am glad I tackled this one ", createVNode(_components.em, {
        children: "after"
      }), " the dialogs."]
    }), "\n", createVNode(_components.p, {
      children: ["I decided to use the newer ", createVNode(_components.code, {
        children: "popover"
      }), " element for tooltips. ", createVNode(_components.code, {
        children: "Dialog"
      }), " seems like a heaver element to use for something so ephemeral, and it’s also a bit more prescriptive semantically. For example: ", createVNode(_components.code, {
        children: "dialog"
      }), " has a built-in mechanism to deliver form values when the dialog is closed, and ", createVNode(_components.code, {
        children: "dialog"
      }), " elements have an implicit ", createVNode(_components.code, {
        children: "dialog"
      }), " role. Our friend ", createVNode(_components.code, {
        children: "popover"
      }), " does neither."]
    }), "\n", createVNode(_components.p, {
      children: ["Our previous tooltip solution was CSS-only, which was really nice. However, it did not have access to the top layer, and so we had a good deal of ", createVNode(_components.code, {
        children: "z-index"
      }), " problems and a few issues with tooltips getting clipped by their containing elements. The top layer solves all of these problems, but there’s no CSS property that tells a popover it’s open — so we had to move that functionality to Javascript."]
    }), "\n", createVNode(_components.h3, {
      id: "handling-hover",
      children: "Handling hover"
    }), "\n", createVNode(_components.p, {
      children: ["Friends, that was a significant blow. Not because I dislike Javascript! It’s my favorite programming language and a crucial leg supporting the web platform. It’s because I couldn’t toggle the popover when a trigger element’s ", createVNode(_components.code, {
        children: ":hover"
      }), " state changed."]
    }), "\n", createVNode(_components.p, {
      children: ["Perhaps you are thinking: “aha, you can open ", createVNode(_components.code, {
        children: "onMouseOver"
      }), " and close ", createVNode(_components.code, {
        children: "onMouseOut"
      }), ", that’s the same as hover!” You would think! But that’s not the case. These events (and the similar ", createVNode(_components.code, {
        children: "pointer*"
      }), " events) seem to fire ", createVNode(_components.em, {
        children: "only"
      }), " when the pointer is moved into or out of the listener, ", createVNode(_components.em, {
        children: "not"
      }), " when the listener gets moved underneath the pointer. This can happen a number of ways:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "The trigger animates into a position underneath (or out from underneath) the pointer"
      }), "\n", createVNode(_components.li, {
        children: "A click on the trigger causes the trigger to move or disappear"
      }), "\n", createVNode(_components.li, {
        children: "The trigger gets scrolled into position behind the pointer"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["At least, that’s what my tests reveal. I’d love to be proven wrong. This is a bit less of a problem for the “enter” state — I can live with a tooltip not firing if the trigger moves underneath the pointer — but it not firing on the ", createVNode(_components.em, {
        children: "exit"
      }), " state means you get an orphaned, visible tooltip. That’s not good."]
    }), "\n", createVNode(_components.p, {
      children: ["I solved this exit case by checking the trigger’s ", createVNode(_components.code, {
        children: ":hover"
      }), " state constantly (with ", createVNode(_components.code, {
        children: "matches()"
      }), ") the entire time the popover was open, and closing it when that check failed. To solve the ", createVNode(_components.em, {
        children: "enter"
      }), " case, I’d have to have each trigger checking while the popover was closed, which seemed like a bit of a performance hit to me."]
    }), "\n", createVNode(_components.p, {
      children: ["I had to do something similar to trigger the popover on ", createVNode(_components.code, {
        children: ":focus-visible"
      }), " instead of the broader ", createVNode(_components.code, {
        children: ":focus"
      }), " because Javascript doesn’t provide an ", createVNode(_components.code, {
        children: "onfocusvisible"
      }), " event."]
    }), "\n", createVNode(_components.h3, {
      id: "handling-position",
      children: "Handling position"
    }), "\n", createVNode(_components.p, {
      children: ["Tooltips need to show up in close proximity to the trigger. The CSS-only non-popover solution could use absolute positioning relative to the trigger as long as the trigger contained the tooltip. But since popovers must have ", createVNode(_components.code, {
        children: "position: fixed"
      }), " in the top layer, we can’t do that any more."]
    }), "\n", createVNode(_components.p, {
      children: ["The ideal solution for this is ", createVNode(_components.a, {
        href: "https://developer.chrome.com/blog/anchor-positioning-api",
        children: "anchor-based positioning"
      }), ", which Chrome started to roll out (", createVNode(_components.em, {
        children: "…checks calendar…"
      }), ") yesterday. Firefox ", createVNode(_components.em, {
        children: "just"
      }), " started work on it, and I don’t know where it is on Safari’s radar."]
    }), "\n", createVNode(_components.p, {
      children: ["That means have to use ", createVNode(_components.code, {
        children: "getBoundingClientRect()"
      }), " again. And, once again, we have to check that constantly while the popover is open because the trigger might move and we’d need to move the tooltip with it. A tooltip exposed on hover might disappear quickly, but these tooltips also appear with keyboard focus, which is a much more stable state. So yes, a scrolling tooltip is actually pretty common."]
    }), "\n", createVNode(_components.p, {
      children: ["This turned out to be an elaborate solution (", createVNode(_components.a, {
        href: "https://codepen.io/elfinjohn/pen/oNRXBNy",
        children: "also sketched out in that codepen"
      }), "), but one I thought was worth the effort to eliminate the stacking order and containment issues. I also have a lot of hope that I’ll be able to migrate the component to anchor-based positioning before the end of the year, which will simplify matters quite a bit."]
    }), "\n", createVNode(_components.h3, {
      id: "guess-what",
      children: "Guess what?"
    }), "\n", createVNode(_components.p, {
      children: ["One thing I did ", createVNode(_components.em, {
        children: "not"
      }), " need for tooltips the light dismiss functionality I had to code myself for dialogs."]
    }), "\n", createVNode(_components.p, {
      children: "Popovers have that."
    }), "\n", createVNode(_components.p, {
      children: "But they don’t do the focus trap thing."
    }), "\n", createVNode("pre", {
      children: "::shrug::"
    }), "\n", createVNode(_components.h2, {
      id: "wrap-up",
      children: "Wrap-up"
    }), "\n", createVNode(_components.p, {
      children: ["Popovers and dialogs are really similar in a lot of ways, and I am not entirely convinced that the semantic difference between the two is something most folks will easily grasp. It falls into the same category for me as the difference between a “link” and a “button” — which for most folks is a change in ", createVNode(_components.em, {
        children: "presentation"
      }), ", not purpose. Or the difference between ", createVNode(_components.code, {
        children: "strong"
      }), " and ", createVNode(_components.code, {
        children: "b"
      }), ", which is entirely hair-splitting. Because their functionalities are so similar, I can see most developer settling on using only one, or using ", createVNode(_components.code, {
        children: "dialog"
      }), " for only a narrow handful of cases."]
    }), "\n", createVNode(_components.p, {
      children: ["I think the weirdness between the two — ", createVNode(_components.code, {
        children: "dialog"
      }), " getting a focus trap but no light dismiss, popovers getting the opposite — is an artifact of ", createVNode(_components.code, {
        children: "dialog"
      }), " being an older element and popover benefiting from the lessons learned. But I was not in the room for those conversations. That’s just what it looks like to me based on doing the exact same thing myself often."]
    }), "\n", createVNode(_components.p, {
      children: "The stuff that I need to do by hand with Javascript is, on one hand, pretty irritating. I can see how it might even be pretty infuriating if you don’t know / don’t like Javascript."
    }), "\n", createVNode(_components.p, {
      children: ["But on the other hand, these low-level UI programming efforts are a good reminder of what ", createVNode(_components.em, {
        children: "exactly"
      }), " is involved for Chrome, Firefox, and Safari’s browser teams when we ask for new affordances. There are always lots of little wrinkles that take a long time to smooth out, especially in a spec that’s getting quite complicated."]
    }), "\n", createVNode(_components.p, {
      children: ["How are ", createVNode(_components.em, {
        children: "you"
      }), " using ", createVNode(_components.code, {
        children: "dialog"
      }), " or ", createVNode(_components.code, {
        children: "popover"
      }), "? Are you waiting for more (better) support? Anchor-based positioning? Declarative control? Is there a better solution than any I’ve described here? Let me know ", createVNode(_components.a, {
        href: "https://hachyderm.io/@thudfactor",
        children: "via Mastodon"
      }), " or, you know, write your own blog post about it! I’d love to learn from you."]
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

const url = "src/content/posts/2024/05/tooltips/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/05/tooltips/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/05/tooltips/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
