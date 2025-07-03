import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Real punctuation for programmers",
  "subtitle": "But don’t quote me on that…",
  "date": "2024-02-15T00:00:00.000Z",
  "categories": ["Design", "Typography", "100 Days to Offload"],
  "tags": "post",
  "description": "How to give your UI a more polished look just by using the correct punctuation.",
  "cover": {
    "src": "./original-movable-type.jpg",
    "alt": "A page set with moveable lead type",
    "description": "Close and picky attention to detail is what distinguishes professional typesetting from mere typing.",
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
    "slug": "ellipsis",
    "text": "Ellipsis"
  }, {
    "depth": 2,
    "slug": "quotation-marks",
    "text": "Quotation Marks"
  }, {
    "depth": 2,
    "slug": "international-quotes",
    "text": "International quotes"
  }, {
    "depth": 2,
    "slug": "some-programmery-details",
    "text": "Some programmery details"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "My fellow developers find it tedious, but I always check punctuation in public-facing text in pull requests. Punctuation is a deep and complex subject, and our typewriter layouts—the US layouts, at least—still reflect the legacy of an earlier age. Here I want to discuss common and often misused punctuation marks: quotation marks, apostrophes, and ellipsis."
    }), "\n", createVNode(_components.p, {
      children: ["To get professional results you’ll need to learn a few more rules, a few more keystrokes, and probably how to use your operating system’s character viewer. My experience is that Mac users have a bit of an easier time with this, since a lot of the ", createVNode(_components.em, {
        children: "common"
      }), " extended punctuation set is available through key combinations."]
    }), "\n", createVNode(_components.p, {
      children: ["That seems not to be the case for Windows users. Y’all have to use the Character Map app or have a keyboard with a number pad. ", createVNode(_components.a, {
        href: "https://support.microsoft.com/en-us/office/insert-ascii-or-unicode-latin-based-symbols-and-characters-d13f58d3-7bcb-44a7-a4d5-972ee12e50e0",
        children: "More information for Windows users"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "ellipsis",
      children: "Ellipsis"
    }), "\n", createVNode(_components.p, {
      children: ["Let’s start with an easy one: the ellipsis ", createVNode(_components.code, {
        children: "…"
      }), ". The ellipsis is used when words are dropped from a quotation, but people also use them do indicate uncertainly or a speaker trailing off…"]
    }), "\n", createVNode(_components.p, {
      children: ["The pre-word processor typewriter way of producing ellipsis is to type three periods close together, as ", createVNode(_components.code, {
        children: "..."
      }), ". Sometimes people put spaces in between, so it looks like ", createVNode(_components.code, {
        children: ". . ."
      }), ". ", createVNode(_components.em, {
        children: "Or"
      }), " you could use the actual ellipsis character. On Mac keyboards, this is available with the keystroke ", createVNode(_components.code, {
        children: "Opt-;"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "quotation-marks",
      children: "Quotation Marks"
    }), "\n", createVNode(_components.p, {
      children: ["The QWERTY keyboard has one key for quotation marks, ", createVNode(_components.code, {
        children: "'"
      }), " un-shifted and ", createVNode(_components.code, {
        children: "\""
      }), " with shift. There are four more marks, however. I’ve heard these called “typographer’s quotes” or “curly quotes.” Some people call them “smart quotes,” because that was the name of an early word-processing feature that automatically replaced ", createVNode(_components.code, {
        children: "\""
      }), " and ", createVNode(_components.code, {
        children: "'"
      }), " with the correct marks."]
    }), "\n", createVNode(_components.p, {
      children: ["(The readily-accessible varieties of curly quotes on our keyboards are still correct if you are using them for foot ", createVNode(_components.code, {
        children: "'"
      }), " or inch ", createVNode(_components.code, {
        children: "\""
      }), ". They can also be used for minutes and seconds, either as fractions of an hour or of a degree.)"]
    }), "\n", createVNode(_components.p, {
      children: ["Text editors and web forms don’t usually replace these for us, at least not without persuasion. That means you have to know how to use them manually. Open marks are ", createVNode(_components.code, {
        children: "“"
      }), " or ", createVNode(_components.code, {
        children: "‘"
      }), ". Depending on the typeface, those curves towards the right, are thicker on the bottom part of the mark, or both. Closed marks are ", createVNode(_components.code, {
        children: "”"
      }), " or ", createVNode(_components.code, {
        children: "’"
      }), ", curve to the left, are thicker on the top, or both. In American, Canadian, and New Zealand English, quotations are nested by alternating between ", createVNode(_components.code, {
        children: "“”"
      }), " and ", createVNode(_components.code, {
        children: "‘’"
      }), ". Elsewhere, it’s the opposite."]
    }), "\n", createVNode(_components.p, {
      children: ["Mac users can access these quotes on the ", createVNode(_components.code, {
        children: "["
      }), " and ", createVNode(_components.code, {
        children: "]"
      }), " keys:"]
    }), "\n", createVNode($$Index, {
      children: [createVNode("table", {
        slot: "fig",
        children: [createVNode("caption", {
          children: "Keystrokes required for curly quotes (Mac)"
        }), createVNode("thead", {
          children: createVNode("tr", {
            children: [createVNode("th", {
              children: "Keystroke"
            }), createVNode("th", {
              children: "Character"
            })]
          })
        }), createVNode("tbody", {
          children: [createVNode("tr", {
            children: [createVNode("td", {
              children: "Opt-["
            }), createVNode("td", {
              children: "“"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Shift-Opt-["
            }), createVNode("td", {
              children: "”"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Opt-]"
            }), createVNode("td", {
              children: "‘"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Shift-Opt-]"
            }), createVNode("td", {
              children: "’"
            })]
          })]
        })]
      }), createVNode(_components.p, {
        children: ["Fun fact: the Mac OS has had these keystrokes in place for ", createVNode(_components.em, {
          children: "ages"
        }), ". A major selling point of\npre-web Macs was their use in desktop publishing, and I learned about these from Robin Williams’s\n(not that Robin Williams) classic desktop publishing book ", createVNode(_components.a, {
          href: "https://openlibrary.org/works/OL3502195W/The_Mac_is_not_a_typewriter?edition=key%3A/books/OL8416336M",
          children: createVNode(_components.em, {
            children: "The Mac is Not a\nTypewriter"
          })
        }), "."]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Apostrophes are always the closed ", createVNode(_components.code, {
        children: "’"
      }), " variant. Although you may have heard people say they are ", createVNode(_components.em, {
        children: "only"
      }), " used for possession or contraction, the ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Apostrophe#Usage_in_English",
        children: "real rules"
      }), " are frighteningly complicated and add nothing to the language, which is why playwright George Bernard Shaw refused to use them. Some folks think we should ", createVNode(_components.a, {
        href: "https://slate.com/human-interest/2013/09/the-apostrophe-why-the-punctuation-is-unnecessary-confusing-and-condescending.html",
        children: "stop using apostrophes"
      }), " altogether. Suggesting this is a good way to start a fight. It’s right up there with saying “I don’t think schools should teach cursive” or “knives should go point-down in the dishwasher.”"]
    }), "\n", createVNode(_components.h2, {
      id: "international-quotes",
      children: "International quotes"
    }), "\n", createVNode(_components.p, {
      children: ["Notice that I am saying “English.” If you are doing internationalization, quotation marks are a bit different. Spanish and French use these double angles: ", createVNode(_components.code, {
        children: "«»"
      }), ". They are called “comillas” or “guillemets” (respectively), and should ", createVNode(_components.em, {
        children: "not"
      }), " be replaced by doubling the easily-accessible angle brackets ", createVNode(_components.code, {
        children: "<>"
      }), " on the English keyboard. Other languages use different symbols and they all have subtleties about spacing and punctuation around the marks. For example, French puts spaces on both sides of the guillemets, but Spanish does not add spaces between comillas and the text they enclose."]
    }), "\n", createVNode(_components.p, {
      children: ["Some ", createVNode(_components.em, {
        children: "very"
      }), " picky semantic HTML fans will say you can just replace quotation marks with the ", createVNode(_components.code, {
        children: "<q>"
      }), " element and the browser’s localization will take care of the rest. Well, sorta. I did some quick testing in Chrome, and while the browser does seem to handle the nesting of quotations correctly, it was unaware of the differences between UK and US English conventions and did not respect French spacing conventions, either.I would expect the same to be true of the placement of punctuation inside or outside of the quotation marks. If you ", createVNode(_components.em, {
        children: "want"
      }), " fine-grained control instead of just getting within the general proximity of correct, you will need to leave that ", createVNode(_components.code, {
        children: "<q>"
      }), " tag alone."]
    }), "\n", createVNode(_components.p, {
      children: ["In any case, isn’t it strange to have an element for one set of punctuation but none of the others? Spanish, for example, occasionally has punctuation at the ", createVNode(_components.em, {
        children: "beginning"
      }), " of sentences: “¿Cómo estás? ¡Muy bien, gracias!” But there’s no automatically internationalized tag for “question” or “exclamation” to help us out there."]
    }), "\n", createVNode(_components.h2, {
      id: "some-programmery-details",
      children: "Some programmery details"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "I"
      }), " think you should use curly quotes in text just because they look a lot more polished. They give a text more of a typeset, published feel, while the straight quotes always look to me like someone was in a hurry or not paying attention. But programmers have another good reason to learn this trick: you don’t have to escape-quote curly quotes."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " straightQuotes"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " '\"Well, butter my britches,\" bellowed the bat.'"
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
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " curlyQuotes"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"“Well, butter my britches,” bellowed the bat.\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This is great, because I occasionally see programmers choose quotation marks based on what they’d have to escape:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " iUsedDoubleQuotes"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"I don't like escaping characters so 'quotations get single quotes' now.\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "This arbitrary use triggers typesetters and armchair grammarians both."
    }), "\n", createVNode(_components.p, {
      children: "“But wait!” Some of you say. “If you are writing HTML, shouldn’t you be using HTML entities?” If you’re a young developer wondering what the heck those are, we’re talking about this nonsense:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "&ldquo;"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "Well, butter by britches,"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "&rdquo;"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " bellowed"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "&hellip;"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\"</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["These kinds of special characters were needed a long time ago when we were using much older character encoding strategies. Nowadays you should use UTF-8 encoding unless you have ", createVNode(_components.a, {
        href: "https://www.w3.org/International/questions/qa-choosing-encodings#nutshell",
        children: "a very good reason otherwise"
      }), ". In fact, UTF-8 encoding is typically the default, so unless you are using old software or have deliberately changed it, it’s likely the files you write code in are encoded as UTF-8 already."]
    }), "\n", createVNode(_components.p, {
      children: "That means you can use all of those special characters, including emojis (🤢), unusual punctuation (§), and even mathematical symbols. You can even use them as variable names! You don’t have to name a variable “delta” anymore, you can just go ahead and say:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "js",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " Δ"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " Math."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "abs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(oldValue "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " newValue);"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "But think twice, maybe, about your colleagues on Windows machines, because you’re making those variable names very difficult to type."
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

const url = "src/content/posts/2024/02/punctuation/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/02/punctuation/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/02/punctuation/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
