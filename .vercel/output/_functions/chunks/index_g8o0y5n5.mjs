import { a as createComponent, m as maybeRenderHead, k as renderScript, b as renderTemplate, g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="Target"></div> ${renderScript($$result, "/Users/johnwilliams/projects/thudfactor/src/components/animations/SimpleDemo/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/animations/SimpleDemo/index.astro", void 0);

const frontmatter = {
  "title": "P5.js in Instance Mode",
  "description": "Working with the JavaScript implementation of Processing in a way that cooperates with other JavaScript / frameworks is a little tricky.",
  "date": "2025-06-15T10:59:39.000Z",
  "cover": {
    "src": "./paw.jpg",
    "alt": "A grey cat's paw dangles from above the frame. You can see one small claw.",
    "description": "Cheery the kitten, asleep in her cat tree, gives me a great opportunity to photograph a foot.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "ok-what-i-did",
    "text": "OK, what I did"
  }, {
    "depth": 2,
    "slug": "working-with-classes",
    "text": "Working with Classes"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    sup: "sup",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["For the uninitiated, ", createVNode(_components.a, {
        href: "https://p5js.org/",
        children: "P5"
      }), " is a JavaScript implementation of the ", createVNode(_components.a, {
        href: "https://processing.org/",
        children: "Processing"
      }), " programming language. For the Very Olds among us, Processing is a bit like ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Logo_(programming_language)",
        children: "Logo"
      }), ". That is: a simple language geared towards producing art."]
    }), "\n", createVNode(_components.p, {
      children: ["Every so often I give P5 a poke or two because I find generative art (the non-AI kind) fascinating. Usually I do this on CodePen (", createVNode(_components.a, {
        href: "https://codepen.io/elfinjohn/pen/eYxBeEL",
        children: "here’s a fractal tree"
      }), "), but I really want to roll it into this site."]
    }), "\n", createVNode(_components.p, {
      children: "However, P5 is written with the basic learner in mind and there’s a lot of stuff set up with the expectation that you’re just going to set up a P5-exclusive project and go. It uses a classic mode of JavaScript development, putting everything in a global space and depending on correct sequencing of source-file downloads. Which is nice, but it means the simple approach is hostile to integration with other frameworks, build tools, and JavaScript."
    }), "\n", createVNode(_components.p, {
      children: ["Fortunately, P5 has an “instance mode” and a ", createVNode(_components.code, {
        children: "npm"
      }), " package, but getting these to work required a bit of digging. I don’t ", createVNode(_components.em, {
        children: "think"
      }), " either is mentioned in the official documentation. You have to go look up ", createVNode(_components.a, {
        href: "https://github.com/processing/p5.js/wiki/Global-and-instance-mode",
        children: "instance mode"
      }), " in their wiki."]
    }), "\n", createVNode(_components.h2, {
      id: "ok-what-i-did",
      children: "OK, what I did"
    }), "\n", createVNode(_components.p, {
      children: ["This site is built using ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro"
      }), ", but I think this process is going to be pretty similar if you have some sort of build process. This assumes you have an existing node project."]
    }), "\n", createVNode(_components.p, {
      children: ["Add to your project with ", createVNode(_components.a, {
        href: "https://www.npmjs.com/package/p5",
        children: "NPM"
      }), " or similar; for example: ", createVNode(_components.code, {
        children: "npm i p5"
      }), ". You can then import into your source files with ", createVNode(_components.code, {
        children: "import p5 from \"p5\""
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["I use TypeScript", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ", so at this point my project started barking at me about missing types, but the error message was a new one on me:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "text",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Could not find a declaration file for module 'p5'. '[...]/node_modules/p5/dist/app.js' implicitly has an 'any' type."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "There are types at '[...]//node_modules/p5/types/p5.d.ts', but this result could not be resolved when respecting package.json \"exports\". The 'p5' library may need to update its package.json or typings."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["I solved this by adding a separate type project (", createVNode(_components.code, {
        children: "npm i --save-dev @types/p5"
      }), "). It seems to work, but there’s probably a better way."]
    }), "\n", createVNode(_components.p, {
      children: ["When you ", createVNode(_components.code, {
        children: "import p5 from \"p5\""
      }), " you get a class you can instantiate:"]
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
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " p5 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"p5\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " sketch"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " p5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "p5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " { ["
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "] })"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "The constructor accepts a single argument function that you can then use to call all of P5’s methods. It will also take a second argument: an element to use as a render target."
    }), "\n", createVNode(_components.p, {
      children: "Here’s a simple, complete example:"
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
            children: "import"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " p5 "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "from"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " \"p5\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "// For clarity's sake, I like to store the sketch in a variable"
          })
        }), "\n", createVNode(_components.span, {
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
            children: " sketch"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: ":"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " p5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
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
              color: "#E1E4E8"
            },
            children: "  p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "setup"
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
              color: "#E1E4E8"
            },
            children: "    p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "createCanvas"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "200"
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
              color: "#E1E4E8"
            },
            children: "    p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "background"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "128"
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
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "draw"
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
              color: "#E1E4E8"
            },
            children: "    p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "stroke"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"rebeccapurple\""
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
              color: "#E1E4E8"
            },
            children: "    p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "strokeWeight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "50"
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
              color: "#E1E4E8"
            },
            children: "    p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "point"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "100"
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
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "};"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
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
            children: " target"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " document."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "getElementById"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"Target\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (target) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "  new"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " p5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(sketch, target);"
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
      children: "That will get you this:"
    }), "\n", createVNode($$Index, {}), "\n", createVNode(_components.p, {
      children: ["In “global” mode, P5 looks for ", createVNode(_components.code, {
        children: "window.setup()"
      }), " and ", createVNode(_components.code, {
        children: "window.draw()"
      }), " functions. It’s not going to find those, so it will then switch to “instance” mode and run the ", createVNode(_components.code, {
        children: "setup()"
      }), " and ", createVNode(_components.code, {
        children: "draw()"
      }), " functions defined on the P5 instance created by the constructor."]
    }), "\n", createVNode(_components.p, {
      children: "There’s no need to kick off the animation. P5 will start automatically, just as it does in global mode."
    }), "\n", createVNode(_components.h2, {
      id: "working-with-classes",
      children: "Working with Classes"
    }), "\n", createVNode(_components.p, {
      children: ["If you want to follow ", createVNode(_components.a, {
        href: "https://natureofcode.com/random/#the-random-walker-class",
        children: "Daniel Shiffman’s advice"
      }), " and turn your animation elements into separate classes, you’ll need to pass the P5 instance to your class constructors for them to have access:"]
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
            children: "class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Walker"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "\tconstructor"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FFAB70"
            },
            children: "p"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\t\tthis"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".x "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " p.width "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
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
            children: "\t\tthis"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".y "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " p.height "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "/"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 2"
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
            children: "\t\tthis"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".p "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " p;"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "\tshow"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "\t\tthis"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "stroke"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "255"
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
              color: "#79B8FF"
            },
            children: "\t\tthis"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "strokeWeight"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "10"
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
              color: "#79B8FF"
            },
            children: "\t\tthis"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".p."
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "point"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".x, "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "this"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".y);"
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
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ["
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "..."
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
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
      children: "Shiffman doesn’t do this in his examples because he still has P5 running in global mode, so all of the P5 functions are defined in the global space."
    }), "\n", createVNode(_components.p, {
      children: "Anyway, I hope this helps someone, somewhere, assuming a search engine chooses to show my website at any point. 🤣"
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
            children: ["I know I said ", createVNode(_components.a, {
              href: "/posts/2025/06/i-like-javascript/",
              children: "I don’t like TypeScript"
            }), " but it helps in a complex codebase. ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
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

const url = "src/content/posts/2025/06/p5-instance-mode/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/06/p5-instance-mode/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/06/p5-instance-mode/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
