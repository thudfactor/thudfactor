import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import './index_CozOUF4O.mjs';
import 'clsx';

const frontmatter = {
  "title": "Here is a cat picture",
  "subtitle": "Meditations on the IMG tag",
  "date": "2023-06-05T00:00:00.000Z",
  "categories": ["HTML"],
  "tags": "post",
  "description": "John discusses the history of HTML’s image tag.",
  "cover": {
    "src": "./cat.jpg",
    "alt": "Cato, an orange and white cat, looking at the camera and loudly meowing."
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Here is a picture of my cat, Cato. He’s a very good cat except for the two hours prior to dinnertime. But he’s not the reason I am writing this — I am writing it to talk a bit about images in HTML."
    }), "\n", createVNode(_components.p, {
      children: ["It’s hard to believe, but the earliest version of the Web did not include a way to post an image. In fact, the original suggestion from ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Marc_Andreessen",
        children: "Marc Andreessen"
      }), ") met with a lot of opposition."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Some worried that arbitrary tags opened the floodgates, and it wouldn’t be long before we had an element for every media type, like an aud tag for audio (or a video tag maybe? That would be just too much)…"
      }), "\n", createVNode(_components.p, {
        children: ["Tim Berners-Lee, the creator of the World Wide Web, was hesitant too. He suggested that Andreessen instead use the anchor tag to display inline images instead of creating something entirely new. This would allow users to set their own preferences for how images should be handled. ", createVNode("cite", {
          children: ["from ", createVNode(_components.a, {
            href: "https://thehistoryoftheweb.com/the-origin-of-the-img-tag/",
            children: "The Origin of the IMG tag"
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Marc wasn’t going to wait around. Later that year he shipped NCSA Mosaic with support for the still-controversial ", createVNode(_components.code, {
        children: "<img>"
      }), " tag."]
    }), "\n", createVNode(_components.p, {
      children: ["This decision had two consequences. First, it put the web on the road to being a ", createVNode(_components.em, {
        children: "designable"
      }), " medium, which gave the web — and the internet — broad appeal. When I returned to college from my co-op semester in January of 1994 and found Mosaic on my re-imaged computer science workstation, it was the inline images that grabbed my attention and created my entire career."]
    }), "\n", createVNode(_components.p, {
      children: "Second, it set the precedent of different browsers having support for custom tags. This was less awesome — when Microsoft jumped into the market with their own Internet Explorer browser they added their own extensions, vastly complicating web development for decades. That’s a situation we still haven’t quite put behind us."
    }), "\n", createVNode(_components.p, {
      children: ["I say all of that to say this: showing images on the web is actually pretty complex — more so now than it used to be. While the original ", createVNode(_components.code, {
        children: "<img>"
      }), " tag shipped in 1994 was straightforward — one source file, one image — we can provide multiple image sizes for the browser to choose from based on the viewing conditions. With the newer ", createVNode(_components.code, {
        children: "<picture>"
      }), " tag, we can ", createVNode(_components.em, {
        children: "also"
      }), " specify images in different aspect ratios for the same slot. That means we could show square images when browser windows are small, but large landscape-oriented images when browser windows are large."]
    }), "\n", createVNode(_components.p, {
      children: ["These tools have been around for awhile, but they are complex enough that I don’t often code them by hand; I set them up once in a content management system like Drupal or Wordpress and then stop thinking about them. For this site, I could lean on ", createVNode(_components.a, {
        href: "https://www.11ty.dev/docs/plugins/image/#use-this-in-your-templates",
        children: "eleventy’s several excellent tools"
      }), ", but I am coding my own. I am hoping doing so will strengthen my understanding of how the modern image tags work, but as an extra measure I will probably blab about it here as well."]
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

const url = "src/content/posts/2023/06/image-of-a-cat/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/image-of-a-cat/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2023/06/image-of-a-cat/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
