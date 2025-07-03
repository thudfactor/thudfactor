import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import './AlertCallout_BPXWUukm.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
import 'clsx';

const Scriptaculous = new Proxy({"src":"/_astro/scriptaculous.CR5SAOmD.png","width":3146,"height":1662,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/11/goodbye-postcss/scriptaculous.png";
							}
							
							return target[name];
						}
					});

const SlidingDoors = new Proxy({"src":"/_astro/sliding-doors-sprites.EQOYgntn.gif","width":600,"height":262,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/11/goodbye-postcss/sliding-doors-sprites.gif";
							}
							
							return target[name];
						}
					});

const FlashMX = new Proxy({"src":"/_astro/macromedia-flash-mx-03-preview.DIYQz4-O.png","width":450,"height":300,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/11/goodbye-postcss/macromedia-flash-mx-03-preview.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Web development of auld lang syne",
  "date": "2023-11-07T00:00:00.000Z",
  "description": "Removing any form of CSS post-processing has me nostalgic for the other web development strategies that have become obsolete thanks to modern development strategies.",
  "categories": ["CSS", "WebDev"],
  "tags": "post",
  "cover": {
    "src": "./columns.jpg",
    "alt": "Twenty-two corinthian columns arranged in a rectangle in a field, supporting nothing.",
    "description": "These columns on display at the National Arboretum in Washington, DC were made in 1828 and removed in 1958 when an addition to the east side of the Capitol took their place.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "presentational-html",
    "text": "Presentational HTML"
  }, {
    "depth": 2,
    "slug": "cgi-bin",
    "text": "/cgi-bin/"
  }, {
    "depth": 2,
    "slug": "javascript-libraries-of-yore-mootools-prototype-scriptaculous-jquery",
    "text": "Javascript Libraries of Yore (MooTools, Prototype, Scriptaculous, jQuery)"
  }, {
    "depth": 2,
    "slug": "layout-hell",
    "text": "Layout Hell"
  }, {
    "depth": 3,
    "slug": "our-site-is-an-image-map",
    "text": "Our Site is an Image Map"
  }, {
    "depth": 3,
    "slug": "table-based-layout",
    "text": "Table-Based Layout"
  }, {
    "depth": 3,
    "slug": "float-based-layouts",
    "text": "Float Based Layouts"
  }, {
    "depth": 2,
    "slug": "image-background-tricks",
    "text": "Image Background tricks"
  }, {
    "depth": 3,
    "slug": "image-replacement",
    "text": "Image Replacement"
  }, {
    "depth": 3,
    "slug": "faux-columns",
    "text": "Faux Columns"
  }, {
    "depth": 3,
    "slug": "table-based-layout-for-elements",
    "text": "Table-based layout (for elements!)"
  }, {
    "depth": 3,
    "slug": "sliding-doors",
    "text": "Sliding Doors"
  }, {
    "depth": 3,
    "slug": "sprites",
    "text": "Sprites"
  }, {
    "depth": 2,
    "slug": "bloody-hacks",
    "text": "Bloody Hacks"
  }, {
    "depth": 3,
    "slug": "matching-background-colors-for-transparent-gifs",
    "text": "Matching background colors for transparent GIFs"
  }, {
    "depth": 3,
    "slug": "progressively-loading-images-with-tables",
    "text": "Progressively loading images (with tables!)"
  }, {
    "depth": 2,
    "slug": "annoyances",
    "text": "Annoyances"
  }, {
    "depth": 3,
    "slug": "java-applets",
    "text": "Java Applets"
  }, {
    "depth": 3,
    "slug": "flash",
    "text": "Flash"
  }, {
    "depth": 3,
    "slug": "wysiwyg-web-development-apps",
    "text": "WYSIWYG web development apps"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I am really excited to say that the update to ", createVNode(_components.em, {
        children: "Thudfactor"
      }), " that posts this ", createVNode(_components.em, {
        children: "also"
      }), " removes PostCSS from the blog’s build process. SASS and PostCSS handled a lot of CSS complexity. But the CSS standard has mostly caught up to what these tools provide, so now I can now ship exactly the CSS I write… at least for this project."]
    }), "\n", createVNode(_components.p, {
      children: "To celebrate, I wanted to make note of several other strategies that have faded into distant memory."
    }), "\n", createVNode(_components.h2, {
      id: "presentational-html",
      children: "Presentational HTML"
    }), "\n", createVNode(_components.p, {
      children: ["It’s bonkers to think about now, but back when I first started the way you changed font sizes was through a ", createVNode(_components.code, {
        children: "<font>"
      }), " tag. If you needed text (or anything!) to be center-aligned, you used ", createVNode(_components.code, {
        children: "<center>"
      }), "."]
    }), "\n", createVNode("figure", {
      children: [createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "html",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), createVNode(_components.span, {
              style: {
                color: "#FDAEB7",
                fontStyle: "italic"
              },
              children: "center"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                color: "#FDAEB7",
                fontStyle: "italic"
              },
              children: "font"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " size"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " face"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"arial\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " color"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Hello, World</"
            }), createVNode(_components.span, {
              style: {
                color: "#FDAEB7",
                fontStyle: "italic"
              },
              children: "font"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#FDAEB7",
                fontStyle: "italic"
              },
              children: "center"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
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
              children: "></"
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
          })]
        })
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: ["Some pre-css HTML circa 1996. The ", createVNode(_components.code, {
            children: "size"
          }), " attribute offered seven different, imprecise sizes. There was no concept of a ", createVNode(_components.code, {
            children: "</p>"
          }), " closing tag, and convention was to place it at the end of a paragraph."]
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "Redesigning often meant crawling through the code, moving and changing these. It was such a tedious, awful, and error-prone process I learned text-editor keyboard shortcuts and regular expressions to cope."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " CSS"]
    }), "\n", createVNode(_components.h2, {
      id: "cgi-bin",
      children: "/cgi-bin/"
    }), "\n", createVNode(_components.p, {
      children: ["Very early on, the way you got web sites to do anything with form data was through the excitingly arcane language ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Perl",
        children: "Perl"
      }), ". Perl scripts were all shoved into one ", createVNode(_components.code, {
        children: "/cgi-bin/"
      }), " directory. When web-host shopping, you wanted one that gave you access to that so you could get your email contact form working."]
    }), "\n", createVNode("figure", {
      children: [createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "perl",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "@origarray=("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'0 1 2'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'0 0 0'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'-3 -2 -1'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ","
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'10 11 12'"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "@sortedarray="
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: " map"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{$_"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[0]}"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "    sort"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{$a"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[1] "
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<=>"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " $b"
            }), createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "->"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[1]}"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "       map"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "          my"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " @cols="
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "split"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "/"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D",
                fontWeight: "bold"
              },
              children: "\\s"
            }), createVNode(_components.span, {
              style: {
                color: "#DBEDFF"
              },
              children: "+"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "/"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ");"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "          my"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " $sum=$cols[0]+$cols[1]+$cols[2];"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          [$_,$sum];"
            })
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "       } @origarray;"
            })
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line"
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "foreach"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(@sortedarray){"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "  print"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "$_"
            }), createVNode(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\n"
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\""
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
      }), createVNode("figcaption", {
        children: [createVNode(_components.p, {
          children: "Some sample PERL code from 1999, creating and then sorting an array."
        }), createVNode("cite", {
          children: createVNode(_components.p, {
            children: ["Source: ", createVNode("a", {
              href: "https://perlmonks.org/index.pl?node_id=1641",
              children: "PerlMonks"
            })]
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " Cold Fusion (", createVNode(_components.em, {
        children: "memories!"
      }), "), PHP, ASP, Ruby, Node"]
    }), "\n", createVNode(_components.h2, {
      id: "javascript-libraries-of-yore-mootools-prototype-scriptaculous-jquery",
      children: "Javascript Libraries of Yore (MooTools, Prototype, Scriptaculous, jQuery)"
    }), "\n", createVNode($$Index, {
      image: Scriptaculous,
      alt: "screenshot of the scriptaculous website",
      children: createVNode(_components.p, {
        children: ["The ", createVNode(_components.a, {
          href: "http://script.aculo.us/",
          children: "Scriptaculous"
        }), " web site is still around, although the last update\nseems to have been in August of 2011."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Once Javascript matured a bit and it became possible to manipulate the ", createVNode("abbr", {
        title: "Document Object Model",
        children: "DOM"
      }), " ", createVNode(_components.em, {
        children: "after"
      }), " the HTML was sent to the browser, lots of libraries popped up to make this process a heck of a lot simpler. The basic Javascript tools were very limited and low-level. Some were focused more on visual effects than others, but eventually everyone bowed to jQuery."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " JavaScript ES6 and beyond. jQuery is still very much with us, of course, but many of its concepts got pulled into Javascript proper."]
    }), "\n", createVNode(_components.h2, {
      id: "layout-hell",
      children: "Layout Hell"
    }), "\n", createVNode(_components.p, {
      children: "The web was not originally created with rich design in mind, and the first few passes were made by folks who didn’t understand design all that well to begin with. So we had a lot of different coping strategies."
    }), "\n", createVNode(_components.h3, {
      id: "our-site-is-an-image-map",
      children: "Our Site is an Image Map"
    }), "\n", createVNode(_components.p, {
      children: ["One popular mechanism was to just make one honking great image and turn it into an ", createVNode(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image",
        children: "image map"
      }), " to scatter the links throughout. These made pages very heavyweight at a time when most people connected to the Internet through very slow modem connections, but they were popular with early designers who saw them as a way to regain rich design without having to learn much HTML at all."]
    }), "\n", createVNode(_components.p, {
      children: "Around 1998 I was looking into going back to school for web design and the local university’s “web design” web site was just a whole bunch of these."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by"
      }), ": Better design capabilities in HTML and CSS in general"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Suggested by: ", createVNode(_components.a, {
          href: "https://hachyderm.io/@bcdavid/111369208433512075",
          children: "@bcdavid@hachyderm.io"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "table-based-layout",
      children: "Table-Based Layout"
    }), "\n", createVNode(_components.p, {
      children: ["In the earliest days you just couldn’t have a sidebar. Everything was presented in one column. Once ", createVNode(_components.code, {
        children: "<table>"
      }), " made it into browsers, people started using these to lay out pages. There was a ", createVNode(_components.em, {
        children: "huge"
      }), " debate over this at the time. “Tables should be for data!” some people said. “How else are we going to do design?” other people said. The designers won."]
    }), "\n", createVNode(_components.p, {
      children: "I think this was the beginning of the understanding that the web was going to evolve into a designed medium."
    }), "\n", createVNode(_components.p, {
      children: ["But that was still all we had for several years, very fancy designs were produced using increasingly elaborate, sometimes nested, tables. Tools like ", createVNode(_components.em, {
        children: "Macromedia Fireworks"
      }), " and ", createVNode(_components.em, {
        children: "Adobe ImageReady"
      }), " would let designers create huge image-map-like comps and slice them into hundreds of tiny images, which web developers would then turn into something more fluid and suited to the web."]
    }), "\n", createVNode(_components.p, {
      children: "Heavily related is the 1x1 transparent spacer gif, which was a tiny one-pixel image that was resized as needed to hold table cells open when the image inside them was loaded as a background."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by"
      }), ": Float-based layout"]
    }), "\n", createVNode(_components.h3, {
      id: "float-based-layouts",
      children: "Float Based Layouts"
    }), "\n", createVNode(_components.p, {
      children: ["The alternative to tables was using the css ", createVNode(_components.code, {
        children: "float"
      }), " property. It was the only way of pushing things into different column shapes. It was also and far less precise than table layouts. Web standards and accessibility advocates dug in their heels on this, though, leading to lots of arguments with designers frustrated that the effects they could achieve through tables just weren’t available anymore."]
    }), "\n", createVNode(_components.p, {
      children: "It wasn’t really until the advent of responsive design that the rigidity of table-based layout dragged the last holdouts into modernity."
    }), "\n", createVNode(_components.p, {
      children: ["If you’re really curious, here’s a 2011 ", createVNode(_components.a, {
        href: "https://css-tricks.com/almanac/properties/f/float/",
        children: "float-based layout tutorial"
      }), " from CSS-Tricks. Pay close attention to the “clearing the float” section, which was crucial to managing these layouts."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " Flex, grid layouts"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Suggested by: ", createVNode(_components.a, {
          href: "https://mastodon.social/@wonkeythemonkey/111369371376460302",
          children: "@wonkeythemonkey@mastodon.social"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "image-background-tricks",
      children: "Image Background tricks"
    }), "\n", createVNode(_components.p, {
      children: "I reach for this so rarely now, but there was a time when being a front-end web developer meant mastering a whole host of techniques that involved loading an image in the background."
    }), "\n", createVNode(_components.h3, {
      id: "image-replacement",
      children: "Image Replacement"
    }), "\n", createVNode(_components.p, {
      children: "For many years, web sites were limited to using the limited set of fonts that were commonly installed on people’s computers. Designers introduced their own typefaces — for things like navigation, anyway — by setting type in images and using those instead."
    }), "\n", createVNode(_components.p, {
      children: "Obviously this is horrible for accessibility, so early accessibility efforts involved using real text inside links, but loading the image-text as a background. Then you would use CSS to hide the text off-screen somewhere and make sure the background container was the right size."
    }), "\n", createVNode(_components.p, {
      children: ["Any text change meant having to produce a new image, however, which made this unsuitable for headlines. A late modification on image replacement was ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Scalable_Inman_Flash_Replacement",
        children: createVNode("abbr", {
          title: "Scalable Inman Image Replacement",
          children: "sIFR"
        })
      }), ", which involved a small Flash file with an embedded font that could pull text from elsewhere. It’s hard to describe what a relief this was, but it did proliferate lots of tiny ", createVNode(_components.code, {
        children: "swf"
      }), " files throughout a site."]
    }), "\n", createVNode(_components.p, {
      children: "Flash, and thus sIFR, suffered a quick death when Apple refused to let Flash load on iPhones."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " ", createVNode(_components.code, {
        children: "@font-face,"
      }), " which enabled the delivery of web fonts."]
    }), "\n", createVNode(_components.h3, {
      id: "faux-columns",
      children: "Faux Columns"
    }), "\n", createVNode(_components.p, {
      children: ["Float-based layout forced much simpler design, but one of the intolerable losses was having a column-based layout where (for example) the left column and the right column backgrounds ended at the same point. “Faux columns” was a technique that ran a large background image behind a wrapper that had all of the column decorations in place; then you would align your float layout over the top. This was ", createVNode(_components.em, {
        children: "indispensable"
      }), " for many years."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " Flex, Grid"]
    }), "\n", createVNode(_components.h3, {
      id: "table-based-layout-for-elements",
      children: "Table-based layout (for elements!)"
    }), "\n", createVNode(_components.p, {
      children: ["Nowadays you can put rounded borders on something with ", createVNode(_components.code, {
        children: "border-radius"
      }), ", but before then, one way you could do this was to do a tiny table-based nine-slice layout."]
    }), "\n", createVNode("figure", {
      children: [createVNode(_components.pre, {
        class: "astro-code github-dark",
        style: {
          backgroundColor: "#24292e",
          color: "#e1e4e8",
          overflowX: "auto"
        },
        tabindex: "0",
        "data-language": "html",
        children: createVNode(_components.code, {
          children: [createVNode(_components.span, {
            class: "line",
            children: createVNode(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "<!-- old style -->"
            })
          }), "\n", createVNode(_components.span, {
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
              children: "a"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " href"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"http://www.example.com/\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "table"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-border-button\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "tr"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-tl\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "img"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " src"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-green-bg-tl.gif\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " width"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " height"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " /></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-t\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-tr\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "img"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " src"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-green-bg-tr\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " width"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " height"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " /></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t</"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "tr"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "tr"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-l\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"content\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Buy now</"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-r\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t</"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "tr"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "tr"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-bl\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "img"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " src"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-green-bg-bl\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " width"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " height"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " /></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-b\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t\t<"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " class"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-br\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "><"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "img"
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " src"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"red-button-green-bg-br\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " width"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: " height"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "="
            }), createVNode(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"5\""
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " /></"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "td"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t\t</"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "tr"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "\t</"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "table"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", createVNode(_components.span, {
            class: "line",
            children: [createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</"
            }), createVNode(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "a"
            }), createVNode(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          })]
        })
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "A button with rounded corners, circa 2002. Every dang button that used this style had to have this table wrapped around it. Note the lack of alt text on any of the images."
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "The four corners would have tiny images in them. The edge pieces would have repeating backgrounds for the border edges, and then the center area could grow as needed."
    }), "\n", createVNode(_components.p, {
      children: "So. Many. Tables."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced By:"
      }), " “Sliding Doors,” (below)"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Suggested by: ", createVNode(_components.a, {
          href: "https://mastodon.social/@wonkeythemonkey/111369371376460302",
          children: "@wonkeythemonkey@mastodon.social"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "sliding-doors",
      children: "Sliding Doors"
    }), "\n", createVNode(_components.p, {
      children: "A related technique to faux-columns was called “sliding doors.” In this, you had a background that consisted of two layers. One would slide under the other to make a background container flexible in one dimension. It was used a lot for navigation and buttons."
    }), "\n", createVNode(_components.p, {
      children: ["It’s hard to visualize, so ", createVNode(_components.a, {
        href: "https://alistapart.com/article/slidingdoors/",
        children: "here’s a 2003 article"
      }), " from the very influential ", createVNode(_components.em, {
        children: "A List Apart"
      }), " explaining the technique."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " CSS3"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Suggested by: ", createVNode(_components.a, {
          href: "https://opencoaster.net/@troy/111370197631409467",
          children: "@troy@opencoaster.net"
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "sprites",
      children: "Sprites"
    }), "\n", createVNode(_components.p, {
      children: ["One of the ", createVNode(_components.em, {
        children: "earliest"
      }), " CSS tricks I learned was how to swap images out of the background of a link when you hovered. If you did it the naïve way — changing ", createVNode(_components.code, {
        children: "background-image"
      }), " URLs — there was often a noticeable lag on hover as that image was downloaded. The solution was to put ", createVNode(_components.em, {
        children: "both"
      }), " states in one image, then shift ", createVNode(_components.code, {
        children: "background-position"
      }), " around."]
    }), "\n", createVNode(_components.p, {
      children: ["This later expanded into the performance-enhancing (but maintainability-destroying) advent of sprite sheets. Sprite sheets might contain ", createVNode(_components.em, {
        children: "several"
      }), " needed incidental graphics like bullet styles, backgrounds, icons, and the like into one image which could be downloaded with one request and then shifted around with ", createVNode(_components.code, {
        children: "background-position"
      }), " in CSS."]
    }), "\n", createVNode($$Index, {
      image: SlidingDoors,
      alt: "An image with two large horizontal bars with rounded corners on the left, and two small horizontal bars with rounded corners on the right",
      children: [createVNode(_components.p, {
        children: "A very small sprite sheet for a sliding doors button. It’s a little hard to tell just looking at\nthe sheet, but this contains both the normal and the hover state for the button design."
      }), createVNode("cite", {
        children: [createVNode(_components.p, {
          children: ["Image source: Devin Olsen’s", " "]
        }), createVNode("a", {
          href: "https://devinrolsen.com/beginners-guide-to-css-sprites/",
          children: createVNode(_components.p, {
            children: "What is a CSS sprite anyways?"
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "The technique required a great deal of precision and made changes and updates difficult. Especially if you weren’t the original design agency and couldn’t get the source Photoshop files."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " SVG, CSS, more efficient browser load behavior in general"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["Suggested by: ", createVNode(_components.a, {
          href: "https://opencoaster.net/@troy/111370197631409467",
          children: "@troy@opencoaster.net"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "bloody-hacks",
      children: "Bloody Hacks"
    }), "\n", createVNode(_components.p, {
      children: "You could argue that most of web development for the first ten years or so was just exploiting various tricks and workarounds. But here are a few."
    }), "\n", createVNode(_components.h3, {
      id: "matching-background-colors-for-transparent-gifs",
      children: "Matching background colors for transparent GIFs"
    }), "\n", createVNode(_components.p, {
      children: ["Until about 2007, if you needed bits of your website to show through an image your only choice was a transparent GIF. The problem was that GIFs only had ", createVNode(_components.code, {
        children: "1-bit transparency"
      }), ", which means a pixel was either fully transparent or completely opaque. This would cause an ugly, rough halo around images if they were used on a different background color than where they were used."]
    }), "\n", createVNode(_components.p, {
      children: ["To get around this, you had to make your transparent GIF in an image editor using a solid background that matched where you were going to … here, just ", createVNode(_components.a, {
        href: "https://www.stunningmesh.com/2009/12/unwanted-edges-of-transparent-gifs-photoshop/",
        children: "read this Stunning Mesh tutorial"
      }), " from 2009."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " PNG, WebP, SVG"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Suggested by:"
      }), " ", createVNode(_components.a, {
        href: "https://mastodon.social/@wonkeythemonkey/111369353992289765",
        children: "@wonkeythemonkey@mastodon.social"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "progressively-loading-images-with-tables",
      children: "Progressively loading images (with tables!)"
    }), "\n", createVNode(_components.p, {
      children: "Then, as now, if you have a really large image it can take forever to download without much user feedback that anything was happening. One solution was to slice the image up into a lot of smaller bits, then re-assemble them in the browser with a table. This way, bits of the image could load in. Ultimately this made the total file size larger and the download slower, but at least it gave some feedback."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " Better compression (", createVNode(_components.code, {
        children: "webp"
      }), ", for example). Broadband. Paying attention to download sizes. Also ", createVNode(_components.code, {
        children: "picture"
      }), " and ", createVNode(_components.code, {
        children: "img srcset"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Suggested by:"
      }), " ", createVNode(_components.a, {
        href: "https://hachyderm.io/@bcdavid/111369208433512075",
        children: "@bcdavid@hachyderm.io"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "annoyances",
      children: "Annoyances"
    }), "\n", createVNode(_components.h3, {
      id: "java-applets",
      children: "Java Applets"
    }), "\n", createVNode(_components.p, {
      children: ["The early web — especially before the widespread adoption of Javascript and the technique called ", createVNode(_components.code, {
        children: "DHTML"
      }), " (for “Dynamic HTML”) — was a very static place. One mechanism for injecting app-like behavior or even just some visual flair was writing a small program in Java and shipping it as a browser ", createVNode(_components.code, {
        children: "applet."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["These tended to be hideous and often used for pointless things like animated news tickers, but the ", createVNode(_components.em, {
        children: "worst"
      }), " thing was they would lock up the entire Mac OS until all the applets on a page were downloaded and booted. Mac users in the mid 90s never knew when they hit a new web site if their computer was going to just beach-ball for ninety seconds."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " Shockwave, Flash"]
    }), "\n", createVNode(_components.h3, {
      id: "flash",
      children: "Flash"
    }), "\n", createVNode(_components.p, {
      children: ["Shockwave, and later it’s younger brother Flash, took out Applets. These were both very ", createVNode(_components.em, {
        children: "design-forward"
      }), " tools and they let skilled multimedia designers create elaborate experiences and deliver them over the web instead of CD-ROM."]
    }), "\n", createVNode($$Index, {
      image: FlashMX,
      alt: "The user interface for Flash on Windows circa 2002",
      children: [createVNode(_components.p, {
        children: "The Flash timeline was a familiar place for motion designers but pretty inscrutable for web\ndevelopers used to working in text documents."
      }), createVNode("cite", {
        children: [createVNode(_components.p, {
          children: ["Image Source:", " "]
        }), createVNode("a", {
          href: "https://www.webdesignmuseum.org/software/macromedia-flash-mx-in-2002",
          children: createVNode(_components.p, {
            children: "The Web Design Museum"
          })
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["There was real concern that the entire web would become this, but Flash was hard to write applications in and ", createVNode(_components.em, {
        children: "very"
      }), " hard to code. Frequent security flaws in the Flash player also limited adoption, especially on work machines. After a brief period where some folks, particularly design agencies, experimented with Flash-only web sites, things moved back around to web standards."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " HTML5, Javascript ES6"]
    }), "\n", createVNode(_components.h3, {
      id: "wysiwyg-web-development-apps",
      children: "WYSIWYG web development apps"
    }), "\n", createVNode(_components.p, {
      children: ["One thing that has ", createVNode(_components.em, {
        children: "never"
      }), " changed is that professional web development happens in a text editor or IDE, although the death of the web developer in favor of design tools has been predicted for many years. Attempts to replace writing actual code started pretty early with Netscape 4, which shipped with Netscape Composer. There was also Microsoft FrontPage, Macromedia Fireworks, Adobe ImageReady, and (of course) Dreamweaver."]
    }), "\n", createVNode(_components.p, {
      children: "It’s been a long, long time since I met any web developer who relied on any of these tools."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "Replaced by:"
      }), " CMS themes, as well as site builders like SquareSpace and Wix"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "I could just keep going! As new techniques replace the old and web development languages get more sophisticated, it’s good to take some time to look back at how far we’ve traveled."
    }), "\n", createVNode(_components.p, {
      children: ["As each new technique replaces the ", createVNode(_components.em, {
        children: "status quo"
      }), ", it’s common to hate on what we’re leaving behind. This was especially true with things like Flash and table layouts. But these tools came about in an attempt to push the web much farther than the current standards could manage, and the standards often caught up."]
    }), "\n", createVNode(_components.p, {
      children: "This is still happening today, as Javascript, HTML, and Javascript begin to provide functionality you once needed jQuery or React to manage. Would we have CSS custom properties and nesting today if SASS hadn’t provided them years ago? I am not sure."
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

const url = "src/content/posts/2023/11/goodbye-postcss/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/11/goodbye-postcss/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/11/goodbye-postcss/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
