import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Index } from './index_BWnmU9ZN.mjs';
import 'clsx';

const frontmatter = {
  "title": "A month (or so) with GitHub Copilot",
  "subtitle": "Your plastic pal who’s fun to be with",
  "date": "2023-06-20T00:00:00.000Z",
  "categories": ["AI"],
  "tags": "post",
  "description": "Some thoughts on GitHub Copilot, the AI-powered code assistant.",
  "cover": {
    "src": "./airplane.jpg",
    "alt": "The cockpit from Airplane the movie. Left to right, the Autopilot, Elaine, and Ted.",
    "description": "With more experience, Copilot feels less like a different intelligence and more like an inflatable replacement human."
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "something-that-works-refactoring-react",
    "text": "Something that works: refactoring React"
  }, {
    "depth": 2,
    "slug": "something-thats-less-good",
    "text": "Something that’s less good"
  }, {
    "depth": 2,
    "slug": "what-does-this-mean-for-developers",
    "text": "What does this mean for developers?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      children: "I’ve been using Copilot for a few weeks and have thoughts. It’s been helpful in small places, unhelpful in larger ones, and sometimes in the way. In fact, as I write this blog post it is in the way quite a lot."
    }), "\n", createVNode(_components.p, {
      children: ["Before we get too far in, I’d like to direct your attention to Frederick Brooks’s 1987 essay ", createVNode(_components.a, {
        href: "https://ieeexplore.ieee.org/document/1702388",
        children: "No Silver Bullet: Essence and Accident in Software Engineering"
      }), ". Brooks says software development has sped up quite a lot, but attributes this to tools that help us write and debug code more quickly. He said we were beginning to reach the level of diminishing returns from these mechanical aids."]
    }), "\n", createVNode(_components.p, {
      children: "Some things have indeed become faster since then, but I think he was probably right. The big speed gains from tooling were made long ago."
    }), "\n", createVNode(_components.p, {
      children: "Any significant improvement software production speed, he argues, would have to come from advancements in how we think about software and what it is we are trying to build. That is, it has to come in the analysis stage, when we are asking WTF we are doing anyway."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "The hardest single part of building a software system is deciding precisely what to build. No other part of the conceptual work is so difficult as establishing the detailed technical requirements, including all the interfaces to people, to machines, and to other software systems. No other part of the work so cripples the resulting system if done wrong. No other part is more difficult to rectify later."
      }), "\n", createVNode("cite", {
        children: [createVNode(_components.p, {
          children: "— Frederick P. Brooks"
        }), createVNode("br", {}), createVNode(_components.p, {
          children: "No Silver Bullet: Essence and Accident in Software Engineering"
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Copilot is tooling, and imprecise tooling at that. Although it’s better than ", createVNode(_components.a, {
        href: "https://code.visualstudio.com/docs/editor/intellisense",
        children: "IntelliSense"
      }), " at extrapolating what you need to do next, it only has a small part of the picture."]
    }), "\n", createVNode("figure", {
      children: [createVNode($$Index, {
        image: import('./suggestion_BE3BlONa.mjs'),
        alt: "Clip of a suggestion from co-pilot while writing this blog post. Text in the caption."
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "Sometimes it doesn’t have any part of the picture. Here, co-pilot tries to write the caption for\nthis post’s cover photo. It suggests completing “the cockpit from Airplane the movie” with the\ncaption “I am serious. And don’t call me Shirley.” That doesn’t match the image at all."
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "something-that-works-refactoring-react",
      children: "Something that works: refactoring React"
    }), "\n", createVNode(_components.p, {
      children: "I am genuinely excited about this. For my money, this is the best thing Copilot does. It’s pretty close to perfect and it gets rid of a lot of drudgery. Whatever I say later, I want you to keep in mind: this behavior is worth the price of entry."
    }), "\n", createVNode(_components.p, {
      children: ["Copilot can tell when you are refactoring code, and it can speed that process up by ", createVNode(_components.em, {
        children: "a lot"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "For example, if I have a React element like this…"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
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
              color: "#B392F0"
            },
            children: " MyComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
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
              color: "#F97583"
            },
            children: "\treturn"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
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
            children: "div"
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
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
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
            children: ">One</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
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
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"blue\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Two</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
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
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"green\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Three</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
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
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\t);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["…and I decide I want to break those ", createVNode(_components.code, {
        children: "li"
      }), " elements into their own components…"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
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
              color: "#B392F0"
            },
            children: " MyLIComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ({ "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "children"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " }) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
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
              color: "#F97583"
            },
            children: "\treturn"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " className"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{color}>{children}</"
          }), createVNode(_components.span, {
            style: {
              color: "#85E89D"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Copilot will tumble to what I am doing pretty quickly. In fact, it completed my code correctly in the example above after I typed the first ", createVNode(_components.code, {
        children: "li"
      }), ". And it did it exactly the way I would have done it."]
    }), "\n", createVNode(_components.p, {
      children: ["That’s not all. After doing that, it figured out I want to replace the old ", createVNode(_components.code, {
        children: "li"
      }), " elements with my new component. Watch me just hit tab here in the video as Copilot suggests handle the copy / paste / change values routine."]
    }), "\n", createVNode("figure", {
      children: [createVNode("video", {
        controls: true,
        width: "720",
        children: [createVNode("source", {
          src: "/video/refactor.mp4",
          type: "video/mp4"
        }), createVNode("p", {
          children: createVNode(_components.p, {
            children: ["Your browser doesn’t support HTML5 video. Here is a", " ", "\n", createVNode("a", {
              href: "copilot.mp4",
              children: "link to the video"
            }), " instead."]
          })
        })]
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "Copilot understands what I am trying to do and helps me out along the way."
        })
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "jsx",
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
              color: "#B392F0"
            },
            children: " MyComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " () "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
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
              color: "#F97583"
            },
            children: "\treturn"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
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
            children: "div"
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
              color: "#79B8FF"
            },
            children: "MyLIComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
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
            children: ">One</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "MyLIComponent"
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
              color: "#79B8FF"
            },
            children: "MyLIComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"blue\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Two</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "MyLIComponent"
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
              color: "#79B8FF"
            },
            children: "MyLIComponent"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " color"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"green\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">Three</"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "MyLIComponent"
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
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\t);"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "This is a pretty trivial example, but Copilot has done this multiple times with much more complex components. It’s pretty sweet, and I’ve wished my code editors could do this for years. I’m glad it’s finally here."
    }), "\n", createVNode(_components.h2, {
      id: "something-thats-less-good",
      children: "Something that’s less good"
    }), "\n", createVNode(_components.p, {
      children: "With CSS, the results are rather more dire. Here, I want to make a div that covers a parent container. Often we do this when we want to put an overlay over some content. Copilot’s first shot is this:"
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
            children: ".coverContainer"
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
            children: "\tposition"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "relative"
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
            children: "\twidth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\theight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\toverflow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "hidden"
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
            children: "\tbackground-color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "#000"
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
      children: "That … might work. But I hope you didn’t want to put anything else in that block, because the relative positioning here fills the container, crowding everything instead. With a gentle hint to use absolute positioning, Copilot suggests the following:"
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
            children: ".coverContainer"
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
            children: "\tposition"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "absolute"
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
            children: "\twidth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\theight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\toverflow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "hidden"
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
            children: "\tbackground-color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "#000"
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
      children: ["Better, but still wrong. Here’s the thing. When containers are positioned absolutely, they start where they normally would. If ", createVNode(_components.code, {
        children: ".coverContainer"
      }), " isn’t the first dom element, it’s going to be pushed down from the parent container’s boundaries. We have to specify more coordinates than just that."]
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
            children: ".coverContainer"
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
            children: "\tposition"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "absolute"
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
            children: "\ttop"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
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
            children: "\tleft"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
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
            children: "\twidth"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\theight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\toverflow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "hidden"
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
            children: "\tbackground-color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "#000"
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
      children: "Copilot read my last sentence and suggested top and left coordinates. A real improvement! It is, at least, approaching a useful overlay div. But there’s a much easier way to handle this now, and it’s been around for a while."
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
            children: ".coverContainer"
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
            children: "\tposition"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "absolute"
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
            children: "\tinset"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0"
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
            children: "\toverflow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "hidden"
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
            children: "\tbackground-color"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "#000"
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
      children: [createVNode(_components.code, {
        children: "inset"
      }), " is a newer prop, but there are a lot of folks still doing the old ", createVNode(_components.code, {
        children: "top / left / height / width"
      }), " trick. Or, for that matter, ", createVNode(_components.code, {
        children: "top / right / bottom / left."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["This is a concern I have with Copilot. Since Copilot has been trained on a heck of a lot of code. I assume much of that code is old. Unwary or inexperienced developers leaning too heavily on Copilot could end up perpetuating a lot of bad practice. This is ", createVNode(_components.em, {
        children: "especially"
      }), " true, I fear, in the case of CSS — which is often written by people who haven’t taken it seriously enough to learn it properly. With Large Language Models, as most things, it’s garbage in, garbage out."]
    }), "\n", createVNode(_components.p, {
      children: "This is the problem with prompt-based software development. You have to ask for what you want. And, as Brooks pointed out, knowing what you want is tricky and often requires several rounds of conversations and iterations. Copilot is a better partner than none in this process, but humans still contribute far more — either as pair programmers or in code reviews. I don’t want Copilot reading or judging my code without too much careful guidance."
    }), "\n", createVNode("figure", {
      children: [createVNode($$Index, {
        image: import('./suggestion-2_BqlhxPdH.mjs'),
        alt: "Clip of another suggestion from co-pilot while writing this blog post, text in the caption."
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "Copilot trying to write my blog post for me: “I’m not going to talk about the controversy around\nCopilot, or the licensing issues, or the fact that it’s not really an AI. I’m going to talk\nabout how it works, how I use it, and what I think it’s good for.”"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "what-does-this-mean-for-developers",
      children: "What does this mean for developers?"
    }), "\n", createVNode(_components.p, {
      children: "Copilot wants me to say the following after typing the above heading. It clearly has some difficulty reading the room."
    }), "\n", createVNode("blockquote", {
      children: createVNode(_components.p, {
        children: "I think Copilot is a great tool for developers. It’s a great way to learn new languages and\nframeworks. It’s a great way to get a little help when you’re stuck."
      })
    }), "\n", createVNode(_components.p, {
      children: "Copilot is smarter in some ways than my older code-completion tools, but IntelliSense — which relies on indexing the codebase — is still better at suggesting the right thing. Copilot will sometimes suggest the right thing, and do so with rather creepy precision. But in other cases, it will do precisely the wrong thing. Or leap to weird conclusions."
    }), "\n", createVNode(_components.p, {
      children: "Sometimes those suggestions interfere with my other code-completion tools. When handling an import, IntelliSense is very solid at finding the right paths and letting me know if what I am trying to import is even there. More often than not, Copilot will try to import from some library I haven’t even added to my dependencies yet."
    }), "\n", createVNode(_components.p, {
      children: ["This makes the coding somewhat less fluid — I am frequently pausing to see if Copilot has made a sensible suggestion or if it slept its way through web developer boot camp. I am not at this point ", createVNode(_components.em, {
        children: "actually"
      }), " afraid of Copilot being better at my job than me. It is a fancy autocomplete, one that can solve more difficult problems than the old tools, but the tradeoff is that it’s less reliable."]
    }), "\n", createVNode(_components.p, {
      children: ["I don’t want to discourage anyone from trying it out — I ", createVNode(_components.em, {
        children: "like"
      }), " Copilot most of the time. You may very well find it useful. But as Brooks suggests, it’s pretty much a marginal improvement on software development speed. Better tools aren’t going to help us much. What we need are better processes and better ways to come to a shared understanding of what we are trying to accomplish. Interestingly, what Brooks suggests looks less like a simulated coding partner and more like agile practice."]
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

const url = "src/content/posts/2023/06/copilot/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/copilot/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/copilot/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
