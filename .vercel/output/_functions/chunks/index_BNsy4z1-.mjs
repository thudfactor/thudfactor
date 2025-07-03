import { a as createComponent, m as maybeRenderHead, b as renderTemplate, g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$AlertCallout } from './AlertCallout_BPXWUukm.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
import 'kleur/colors';
import 'clsx';

const $$ExampleScanLength = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th scope="col">Size</th> <th scope="col">Sample</th> </tr> </thead> <tbody> <tr> <th scope="row">2rem</th> <td>There were doors all round the hall, but they were all locked; and when Alice had been all
				the way down one side and up the other, trying every door, she walked sadly down the middle,
				wondering how she was ever to get out again.</td> </tr> <tr> <th scope="row">1rem</th> <td>There were doors all round the hall, but they were all locked; and when Alice had been all
				the way down one side and up the other, trying every door, she walked sadly down the middle,
				wondering how she was ever to get out again.</td> </tr> <tr> <th scope="row">.8rem</th> <td>There were doors all round the hall, but they were all locked; and when Alice had been all
				the way down one side and up the other, trying every door, she walked sadly down the middle,
				wondering how she was ever to get out again.</td> </tr> </tbody> </table>`;
}, "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/article-typography/ExampleScanLength.astro", void 0);

const $$ExampleLineHeight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table> <thead> <tr> <th scope="col">Line Height</th> <th scope="col">Sample</th> </tr> </thead> <tbody> <tr> <th>2</th> <td>“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she
				quite forgot how to speak good English); “now I’m opening out like the largest telescope
				that ever was! Good-bye, feet!”</td> </tr> <tr> <th>1.5</th> <td>“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she
				quite forgot how to speak good English); “now I’m opening out like the largest telescope
				that ever was! Good-bye, feet!”</td> </tr> <tr> <th>1</th> <td>“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she
				quite forgot how to speak good English); “now I’m opening out like the largest telescope
				that ever was! Good-bye, feet!”</td> </tr> </tbody> </table>`;
}, "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/article-typography/ExampleLineHeight.astro", void 0);

const frontmatter = {
  "title": "Article typography",
  "subtitle": "Font size, line height & line width",
  "date": "2023-06-17T00:00:00.000Z",
  "categories": ["CSS", "Typography"],
  "tags": "post",
  "description": "Three CSS typography properties to improve your site’s readability",
  "cover": {
    "src": "./original-movable-type.jpg",
    "alt": "A page set with moveable lead type",
    "description": "What we used to do with metal slugs and spacers, we do today with HTML and CSS.",
    "attribution": {
      "name": "Purdman1 / Flickr.",
      "link": "https://www.flickr.com/photos/purdman1/2875431305/",
      "license": {
        "name": "CC BY 2.0",
        "link": "https://creativecommons.org/licenses/by/2.0/"
      }
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "what-to-focus-on-first",
    "text": "What to focus on first"
  }, {
    "depth": 2,
    "slug": "font-size",
    "text": "Font size"
  }, {
    "depth": 3,
    "slug": "what-about-those-other-units",
    "text": "What about those other units?"
  }, {
    "depth": 2,
    "slug": "line-width",
    "text": "Line width"
  }, {
    "depth": 2,
    "slug": "line-height",
    "text": "Line height"
  }, {
    "depth": 2,
    "slug": "line-height-on-the-web",
    "text": "Line height on the web"
  }, {
    "depth": 2,
    "slug": "how-i-chose-my-values",
    "text": "How I chose my values"
  }, {
    "depth": 2,
    "slug": "what-we-didnt-cover-and-where-you-can-find-it",
    "text": "What we didn’t cover, and where you can find it"
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
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "“Thud factor” is academic slang for how loud your thesis sounds when it’s thrown downstairs. When I first registered this domain in (let me check…) August of 2000 (‼️) my intent was to fill up the site with a whole bunch of text. I did actually do that once upon a time, but one thing I never really got right was the typography."
    }), "\n", createVNode(_components.p, {
      children: "That’s unfortunate because getting the basics of typography right is not that difficult and there are quite a few excellent examples to emulate. I am still learning, still working on this site. But here’s some stuff about the basics."
    }), "\n", createVNode(_components.h2, {
      id: "what-to-focus-on-first",
      children: "What to focus on first"
    }), "\n", createVNode(_components.p, {
      children: ["Typography is a true ", createVNode(_components.em, {
        children: "Alice"
      }), "-sized rabbit-hole and getting distracted by minutia is a real risk. But you can get most of what you need to improve readability right away by working with three basic values. These are:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Font size: the vertical size of the letters"
      }), "\n", createVNode(_components.li, {
        children: "Line width: how many letters can fit on a line"
      }), "\n", createVNode(_components.li, {
        children: "Line height: the combined font size and the distance between the lines."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Notice that the font choice — the fun decision — isn’t in this list. It’s important, but it’s not vital. People can read comfortably if you use the default type and get font size, line length, and line height right. But it doesn’t matter how awesome the font is if you get those three details of using the font wrong."
    }), "\n", createVNode(_components.p, {
      children: "Not that getting it right is hard! Once you know where to focus first, you can start with reasonable recommendations from centuries of typography best practices. Then, use your own eyeballs to tweak things at the margins until you’re happy."
    }), "\n", createVNode(_components.p, {
      children: "Let’s talk about those three basic values, then."
    }), "\n", createVNode(_components.h2, {
      id: "font-size",
      children: "Font size"
    }), "\n", createVNode(_components.p, {
      children: "Font size is a good place to start because it affects line length. The two important questions to ask about font size in web development is “how big?” and “what unit?” My typical practice is to set the size as a percentage of the default browser size. You can do this literally with percentages in the root element…"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#FDAEB7",
              fontStyle: "italic"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "root"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\tfont-size"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "120"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["or in CSS selectors using the ", createVNode(_components.code, {
        children: "rem"
      }), " unit…"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\tfont-size"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.2"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "rem"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The former sets the ", createVNode(_components.em, {
        children: "default"
      }), " size of fonts throughout the document to 120% of the browser default. The latter sets the font size of the selector’s content to 120% of the root font size. Changing the root font size is a real sledgehammer of a tool, though — anything else that depends on ", createVNode(_components.code, {
        children: "rem"
      }), " or ", createVNode(_components.code, {
        children: "em"
      }), " sizing will ", createVNode(_components.em, {
        children: "start"
      }), " from this higher or lower value."]
    }), "\n", createVNode($$AlertCallout, {
      children: createVNode(_components.p, {
        children: ["Read more about the ", createVNode(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:root",
          children: "root element"
        }), " and\n", createVNode(_components.a, {
          href: "https://blog.logrocket.com/using-em-vs-rem-css/",
          children: "rem unit"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: "A lot of people suggest sticking with the default font size for your main article content. That’s a good place to start, but don’t feel shy about bumping it up a bit. Many of my favorite web sites do, too."
    }), "\n", createVNode(_components.h3, {
      id: "what-about-those-other-units",
      children: "What about those other units?"
    }), "\n", createVNode(_components.p, {
      children: "If you’re used to using word processors or doing print design, you might be more accustomed to using point size. A “point” is a unit of measurement common in traditional printing. 12 points make a “pica,” and there are 6 picas to an inch. This is fine in style rules intended for print media, and you can certainly use them in your print stylesheets like so:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@media"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " print"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "\tp"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\t\tfont-size"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "12"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "pt"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\t}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["In CSS-land, points and units like ", createVNode(_components.code, {
        children: "pt"
      }), ", ", createVNode(_components.code, {
        children: "in"
      }), ", ", createVNode(_components.code, {
        children: "mm"
      }), " are called “absolute units” and are not particularly useful in the screen context. ", createVNode(_components.a, {
        href: "https://www.smashingmagazine.com/2021/07/css-absolute-units/",
        children: ["Elad Shechter explains why at ", createVNode(_components.em, {
          children: "Smashing Magazine"
        })]
      }), ". Simply, though, browsers don’t know how ", createVNode(_components.em, {
        children: "physically"
      }), " large your monitor is, so they can’t represent those sizes accurately."]
    }), "\n", createVNode(_components.p, {
      children: ["What about pixels? Well, they ", createVNode(_components.em, {
        children: "were"
      }), " the universal screen unit. Computed values in your web development panel often translate to pixel units for this reason. But the typical size and meaning of “pixel” has changed a lot over the years."]
    }), "\n", createVNode(_components.p, {
      children: ["One pixel was one screen dot for most people for a long time. As part of the desktop publishing revolution, early Mac displays intentionally made ", createVNode(_components.code, {
        children: "1px = 1pt = 1/72in"
      }), ". Later, as display technology improved and screen dots could be made smaller, the rule of thumb became ", createVNode(_components.code, {
        children: "1px = 1/96in"
      }), ". Now, with some displays running between 220 to 300 pixels per inch, it’s not a reliable measure of size anymore."]
    }), "\n", createVNode(_components.p, {
      children: ["Now, the W3C defines both “device pixels” and “reference pixels” — with the CSS ", createVNode(_components.code, {
        children: "px"
      }), " unit theoretically comprising ", createVNode(_components.a, {
        href: "https://www.w3.org/TR/css-values-3/#reference-pixel",
        children: "the reference pixel"
      }), ". In practice, display manufacturers size pixels up and down pretty fluidly these days."]
    }), "\n", createVNode(_components.p, {
      children: ["For reference, the default font size is typically (although not always!) set to ", createVNode(_components.code, {
        children: "16px"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "line-width",
      children: "Line width"
    }), "\n", createVNode(_components.p, {
      children: "Line width (or “scan length”) is the horizontal distance between the start and the end of a line. It is the second most important typographic decision you can make."
    }), "\n", createVNode(_components.p, {
      children: "As you read, you can only focus on a few letters at a time. Humans like to read without moving our heads from side-to-side, so line length has to be short enough for us to read something by rotating our eyeballs. Make this distance too long or too short and people’s eyes tire quickly. Long line lengths mean more extreme rotation of the eyes until the neck is finally involved. Short lines mean rapid back-and-forth movement, because each line read requires a round trip."
    }), "\n", createVNode(_components.p, {
      children: "The good news here is that the comfortable range is actually pretty wide. 50 to 75 characters per line is a good rule of thumb, and there’s a fair amount of wiggle room at the extremes. Because we’re trying to take physical eye travel into account, the larger your font the shorter you want your line length to be, and vice-versa."
    }), "\n", createVNode($$Index, {
      children: [createVNode($$ExampleScanLength, {
        slot: "fig"
      }), createVNode(_components.p, {
        children: "These three paragraphs have the same line length but different font sizes. Pay attention to how\nthe muscles in your eyes feel as you read them. Do you notice any other impressions you get from\ntext set large and short versus small and long?"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Remember that this rule applies ", createVNode(_components.em, {
        children: "only"
      }), " to large blocks of text like article content. Other bits of text — headlines, captions, and so forth — serve different purposes, and thus merit different guidelines."]
    }), "\n", createVNode(_components.h2, {
      id: "line-height",
      children: "Line height"
    }), "\n", createVNode(_components.p, {
      children: ["Line height is the distance between lines of text. Remember how your eye has to both backtrack across a line of text ", createVNode(_components.em, {
        children: "and"
      }), " move to the next one at the same time? This trip is an excellent opportunity for the brain to get disoriented."]
    }), "\n", createVNode($$Index, {
      children: [createVNode($$ExampleLineHeight, {
        slot: "fig"
      }), createVNode(_components.p, {
        children: "These three paragraphs have the same font size but different line heights. Two of them feel really\nawful to me, only one seems comfortable. Which one seems best to you, again in the muscles of your\neyes? Does the difference in line height change any other impressions you have of the text?"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Ever find yourself suddenly reading one or two lines down in the middle of a line? That might be because the line-spacing was too cramped. On the other extreme, spreading text out involves eye muscles even more. This doesn’t just make it difficult to keep your place, it’s also physically tiring."
    }), "\n", createVNode(_components.p, {
      children: ["For article text, comfortable distances seem to be between ", createVNode(_components.code, {
        children: "1.4"
      }), " and ", createVNode(_components.code, {
        children: "1.6"
      }), ". When you set line-height in CSS without a unit, line-height is a multiplier of the font size."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "css",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\tfont-size"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.3"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "rem"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\tline-height"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.6"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "line-height-on-the-web",
      children: "Line height on the web"
    }), "\n", createVNode(_components.p, {
      children: "In traditional typesetting, line height is measured from the top of one line of text to the top of the next. The metal letter slugs in movable type were the font height, and the distance between lines could be increased by narrow strips of wood or lead. This extra space between the bottom of the type slug and the next row of type was called “leading” (pronounced “Led” as in Zeppelin)."
    }), "\n", createVNode(_components.p, {
      children: "In traditional typesetting, then, if you have 12pt type with 6pt leading, the type goes at the top and the extra 6pts is tacked on below it."
    }), "\n", createVNode("figure", {
      class: "text-figure",
      children: [createVNode("div", {
        style: "margin-top: 1rem; font-size: 2rem; line-height: 2; background-image: repeating-linear-gradient(to bottom, hsl(200deg 100% 65%) 0, hsl(200deg 100% 100%) 1px, hsl(200deg 100% 100%) 2rem, hsl(200deg 100% 65%) 2rem, hsl(200deg 100% 65%) 4rem); padding-bottom: 1px;",
        children: createVNode("div", {
          style: "position: relative; top: -1rem;",
          children: [createVNode("p", {
            children: "Waltz, nymph, for quick jigs vex Bud."
          }), createVNode("p", {
            children: "Sphinx of black quartz, judge my vow."
          })]
        })
      }), createVNode("figcaption", {
        children: "Text with leading between the text rows (traditional print)."
      })]
    }), "\n", createVNode(_components.p, {
      children: "For reasons that are not entirely clear to me but probably have to do with making programming browsers easier, CSS abandoned that convention long ago. In browsers, the extra space we call “leading” is split between the top and bottom of a text row. that means 1rem type with 0.5rem leading becomes 0.25rem at the top, 1rem of text, and the other 0.25 rem at the bottom."
    }), "\n", createVNode("figure", {
      class: "text-figure",
      children: [createVNode("div", {
        style: "margin-top: 1rem; font-size: 2rem; line-height: 2; background-image: repeating-linear-gradient(to bottom, hsl(200deg 100% 65%) 0, hsl(200deg 100% 65%) 1rem, hsl(200deg 100% 100%) 1rem, hsl(200deg 100% 100%) 3rem, hsl(200deg 100% 65%) 3rem, hsl(200deg 100% 65%) calc(4rem - 1px), hsl(200deg 100% 100%) 4rem);",
        children: [createVNode("p", {
          children: "Waltz, nymph, for quick jigs vex Bud."
        }), createVNode("p", {
          children: "Sphinx of black quartz, judge my vow."
        })]
      }), createVNode("figcaption", {
        children: "Text centered in the line-height (CSS)."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["It becomes a mathematical and strategic exercise any time you want to align a border, photo, or other block of something with the top of a line of text. Tell the browsers to line these items up with their tops, and the browser will align the top of an image (for example) and the top of the line-height for the text. But the text itself doesn’t actually start at that point unless the line-height is ", createVNode(_components.code, {
        children: "1"
      }), "."]
    }), "\n", createVNode("figure", {
      class: "text-figure",
      children: [createVNode("blockquote", {
        style: "line-height: 2; padding-top: 0; padding-bottom: 0; border-left: 2px #000 solid; padding-left: .8rem; margin-left: 0",
        children: createVNode("p", {
          children: createVNode(_components.p, {
            children: "“It was much pleasanter at home,” thought poor Alice, “when one wasn’t always growing larger\nand smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t gone down\nthat rabbit-hole—and yet—and yet—it’s rather curious, you know, this sort of life!"
          })
        })
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "A blockquote with a simple border on the left. The text area and the border on the left are the\nsame height, but the text’s line-height adds extra space at the top and the bottom — making the\nborder longer than it has to be."
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: ["To optically align these items, you either have to shift the text ", createVNode(_components.em, {
        children: "up"
      }), " slightly from its natural position or shift the other thing down. Which one you choose and how you do it depends on the specific circumstances."]
    }), "\n", createVNode(_components.p, {
      children: "One way of doing this is by applying margins or negative margins to some of the elements, depending on how the layout works. Shifting the text is the strategy I used in the figure below."
    }), "\n", createVNode("figure", {
      class: "text-figure",
      children: [createVNode("blockquote", {
        style: "line-height: 2; border-left: 2px black solid; padding-block: 2px; padding-left: .8rem; margin-left:0;",
        children: createVNode("p", {
          style: "margin-bottom: calc(-.5em - 3px); margin-top: calc(-.5em - 4px);",
          children: createVNode(_components.p, {
            children: "“It was much pleasanter at home,” thought poor Alice, “when one wasn’t always growing larger\nand smaller, and being ordered about by mice and rabbits. I almost wish I hadn’t gone down\nthat rabbit-hole—and yet—and yet—it’s rather curious, you know, this sort of life!"
          })
        })
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "Here, negative margins are used on the paragraph inside the blockquote to move the extra line\nheight out of the containing element."
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Maybe someday we’ll have an easier way to adjust the line height to something more traditional, but for now aligning items with vertical text boundaries remains both complicated and situational."
    }), "\n", createVNode(_components.h2, {
      id: "how-i-chose-my-values",
      children: "How I chose my values"
    }), "\n", createVNode(_components.p, {
      children: "Typography is a discipline and it requires both a design eye and careful attention to detail. Fortunately, setting large blocks of text isn’t an activity that rewards novelty, so we can cheat a little bit."
    }), "\n", createVNode(_components.p, {
      children: "OK, we can straight-up steal."
    }), "\n", createVNode(_components.p, {
      children: ["In this case, I went to ", createVNode(_components.a, {
        href: "https://www.theverge.com/",
        children: "The Verge"
      }), " because I liked how their articles looked. I swiped their font size, line width, and line height values. Once I chose my font, I tinkered a little with those settings."]
    }), "\n", createVNode(_components.p, {
      children: "There’s no shame in that — none of these things are trademarked, and are in fact based on conventional wisdom from centuries of typesetters beforehand. There’s no reason you can’t get a leg up by looking at good examples."
    }), "\n", createVNode(_components.h2, {
      id: "what-we-didnt-cover-and-where-you-can-find-it",
      children: "What we didn’t cover, and where you can find it"
    }), "\n", createVNode(_components.p, {
      children: ["There are lots of additional small choices you can make that improve readability. Most CSS developers are aware that you can choose between ", createVNode(_components.code, {
        children: "text-align: left"
      }), " and ", createVNode(_components.code, {
        children: "text-align: justify"
      }), ". The former gives you a ragged right text block with no hyphenation unless absolutely necessary, while the latter uses a combination of word spacing and hyphenation to give an even right edge."]
    }), "\n", createVNode(_components.p, {
      children: ["But did you know you can choose other hyphenation strategies? Combining ", createVNode(_components.code, {
        children: "text-align: left"
      }), " with ", createVNode(_components.code, {
        children: "hyphens: auto"
      }), " gives you a slightly less ragged right by allowing more hyphenation. Using ", createVNode(_components.a, {
        href: "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-chars",
        children: createVNode(_components.code, {
          children: "hyphenate-limit-chars"
        })
      }), " gives you even more fine-grained control."]
    }), "\n", createVNode(_components.p, {
      children: ["For much more information on typography from a real expert, check out ", createVNode(_components.a, {
        href: "http://webtypography.net/",
        children: "The Elements of Typographic Style Applied to the Web"
      }), " by Richard Rutter."]
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

const url = "src/content/posts/2023/06/article-typography/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/article-typography/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/article-typography/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
