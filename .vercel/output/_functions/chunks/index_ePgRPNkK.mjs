import { _ as __astro_tag_component__, g as createVNode, F as Fragment } from './astro/server_B4EwhNOI.mjs';
import { $ as $$BlogPost } from './BlogPost_CTxqPoOR.mjs';
import { $ as $$Index } from './index_B811OrL0.mjs';
import 'clsx';

const ThudBro = new Proxy({"src":"/_astro/_sorta-selfie.BkiouR9t.png","width":928,"height":1232,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/johnwilliams/projects/thudfactor/src/pages/about/_sorta-selfie.png";
							}
							
							return target[name];
						}
					});

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$BlogPost, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/BlogPost.astro",
  "title": "About Me",
  "description": "A little bit about the proprietor.",
  "date": "2023-06-20T00:00:00.000Z",
  "updatedDate": "2024-04-24T12:59:33.000Z",
  "permalink": "about/"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "i-am-not-a-composer",
    "text": "I am not a composer"
  }, {
    "depth": 2,
    "slug": "from-typesetting-to-web-development",
    "text": "From Typesetting to Web Development"
  }, {
    "depth": 2,
    "slug": "evolving-with-the-web",
    "text": "Evolving with the Web"
  }, {
    "depth": 2,
    "slug": "embracing-agile-development",
    "text": "Embracing Agile Development"
  }, {
    "depth": 2,
    "slug": "me-elsewhere",
    "text": "Me, elsewhere"
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
      children: "Hi!"
    }), "\n", createVNode(_components.h2, {
      id: "i-am-not-a-composer",
      children: "I am not a composer"
    }), "\n", createVNode($$Index, {
      image: ThudBro,
      alt: "An AI artist’s concept of the author",
      position: "right",
      children: createVNode(_components.p, {
        children: "I fed Midjourney an image I took of myself, asked it to describe the image, then fed the image\nback. This is what I got. Except for the silly t-shirt, it’s not a significant resemblance."
      })
    }), "\n", createVNode(_components.p, {
      children: "My name is John Williams, but I am not a composer or a conductor. Sorry about that — it disappoints a lot of people."
    }), "\n", createVNode(_components.p, {
      children: ["Funny story. For as far back as I can remember people have made jokes about me writing the music for ", createVNode(_components.em, {
        children: "Star Wars"
      }), ". Occasionally people mix it up and say ", createVNode(_components.em, {
        children: "Harry Potter"
      }), " or ", createVNode(_components.em, {
        children: "Jurassic Park"
      }), ". But a few months ago I went through a Dunkin’ Donuts drive-through to pick up an order. The app only puts part of my name on the order sheet — “JOHN W” or some nonsense. The guy at the window says “hey, what’s your name again?”"]
    }), "\n", createVNode(_components.p, {
      children: ["“John Williams,” I say, and think ", createVNode(_components.em, {
        children: "here it comes again"
      }), ". He laughs and says says “I was hoping it was John Wick!”"]
    }), "\n", createVNode(_components.p, {
      children: "It’s always nice to hear a new one."
    }), "\n", createVNode(_components.h2, {
      id: "from-typesetting-to-web-development",
      children: "From Typesetting to Web Development"
    }), "\n", createVNode(_components.p, {
      children: ["Anyway, I am John Williams the famous ", createVNode(_components.em, {
        children: "web developer"
      }), ". I’ve been making web sites ", createVNode(_components.a, {
        href: "/posts/2023/11/goodbye-postcss/",
        children: "almost from the start"
      }), ". I am so old my earliest sites pre-date CSS. Heck, they pre-date ", createVNode(_components.code, {
        children: "<table>"
      }), ". — I remember the earliest debates about table layout. “Tables are for data,” said one side. “But how else can we get a sidebar?” said the other, and that side persevered until better options were available."]
    }), "\n", createVNode(_components.p, {
      children: ["Because there ", createVNode(_components.em, {
        children: "was"
      }), " no typical path towards web development, I came to the industry sideways through typesetting. I worked summers at my hometown newspaper using QuarkXPress to reproduce ad layouts. We’d print those on a very high-resolution printer, then I’d take a razor blade and ", createVNode(_components.a, {
        href: "https://www.forgottenartsupplies.com/?what=artifacts&image_id=46&cat=53",
        children: "adhesive wax machine"
      }), ", cut the ad out, and stick it to a broadsheet. From there it went to the camera room, and then the press. It was an odd mix of technologies, but it worked pretty well."]
    }), "\n", createVNode(_components.p, {
      children: ["The web became commercially relevant just as I was graduating from college, so the newspaper hired me to make and run their first web site. This I built with the aid of ", createVNode(_components.a, {
        href: "https://www.barebones.com/products/bbedit/",
        children: "BBEdit"
      }), " and ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/UserLand_Software",
        children: "UserLand Frontier"
      }), ". I used Frontier on my local computer to build the site anew each morning, and pushing the resulting HTML up through a 9600 baud modem."]
    }), "\n", createVNode(_components.h2, {
      id: "evolving-with-the-web",
      children: "Evolving with the Web"
    }), "\n", createVNode(_components.p, {
      children: "The web has changed a lot since then. It’s become professional and specialized. For most of my career I’ve stayed in front-end publishing, but in the last few years I’ve slid over to the UI Engineering side of things."
    }), "\n", createVNode(_components.p, {
      children: "It has always been a struggle to keep up, but here in the 2020’s things are really hopping. It’s the most exciting time since the birth of the Web, and I am thrilled to still be here learning new things every day and sharing them as much as I can with the small circle of people around me."
    }), "\n", createVNode(_components.p, {
      children: "Now you are in that circle! 🎉"
    }), "\n", createVNode(_components.h2, {
      id: "embracing-agile-development",
      children: "Embracing Agile Development"
    }), "\n", createVNode(_components.p, {
      children: ["I’m also dedicated to agile development processes, serving as my team’s Scrum master. I get to add letters after my name in some contexts. Those letters are ", createVNode(_components.a, {
        href: "https://www.scrumalliance.org/community/profile/jwilliams194",
        children: "“A-CSM” and “CSPO.”"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["What the technology industry calls “agile” a lot of other people call “making stuff.” I came out of the humanities, not traditional computer science education, so when everyone started buzzing about this “agile” stuff I took a look at it and it seemed real dang familiar. I ", createVNode(_components.a, {
        href: "https://www.elfinjohn.com/2019/05/what-studying-the-humanities-taught-me-about-software-development/",
        children: "wrote about that elsewhere"
      }), ", if you’re interested. But long story short, most agile frameworks are just the typical creative process scaled up for teams with some process guardrails and a thick buzzword frosting. I will likely discuss that from time to time."]
    }), "\n", createVNode(_components.h2, {
      id: "me-elsewhere",
      children: "Me, elsewhere"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://elfinjohn.com",
          children: "ElfinJohn"
        }), " is my portfolio site. It’s not been updated in awhile, really, because it covers a lot of my “working at an agency” life. I now live the “B2B SAAS” life, which makes for a lot fewer pretty pictures."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://www.filmhydra.com",
          children: "FilmHydra"
        }), " is my movie blog. Remember, I said I came from the humanities? Every so often I feel the need to write something about a movie, and that’s the place. My recent favorites are ", createVNode(_components.a, {
          href: "https://www.filmhydra.com/movies/1960/carnival-of-souls/",
          children: ["this review on ", createVNode(_components.em, {
            children: "Carnival of Souls"
          })]
        }), " and ", createVNode(_components.a, {
          href: "https://www.filmhydra.com/movies/1970/dracula-vs-frankenstein/",
          children: createVNode(_components.em, {
            children: "Dracula vs Frankenstein"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: ["You can also follow me on ", createVNode(_components.a, {
          href: "https://letterboxd.com/thudfactor/",
          children: "Letterboxd"
        }), ", a movie-focused social media site, but ", createVNode(_components.a, {
          href: "https://hachyderm.io/@thudfactor",
          children: "Mastodon"
        }), " is my social media of choice."]
      }), "\n", createVNode(_components.li, {
        children: ["Like that very first newspaper website, ", createVNode(_components.em, {
          children: "Thudfactor"
        }), " is built using a scripting toolkit with only static pages pushed up to the web host. You can read more about that on my ", createVNode(_components.a, {
          href: "/using",
          children: "Using page"
        }), ". For a more up-to-date sense of what’s going through my head, you can check out the ", createVNode(_components.a, {
          href: "/now",
          children: "Now page"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Thanks for sticking around. As the YouTubers say, be sure to Like and Subscribe. Well, it’s kinda hard to “like” something here, but if you have an RSS reader you ", createVNode(_components.a, {
        href: "/feed.xml",
        children: "can certainly subscribe"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/about";
const file = "/Users/johnwilliams/projects/thudfactor/src/pages/about/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/pages/about/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
