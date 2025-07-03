import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Playing catch-up",
  "date": "Sat Feb  8 10:23:23 EST 2025",
  "categories": ["Diary"],
  "tags": "post",
  "description": "Where my head is at after a three-month hiatus",
  "cover": {
    "src": "sampler.png",
    "alt": "Three knit swatches. The top is a stockinette swatch knit in the round. Bottom left is a yellow swatch in broken rib, and bottom right is a flat-knit stockinette swatch.",
    "description": "Knitting does an excellent job keeping hands from doomscrolling, but it also keeps them from blogging.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Friends, it has been a long and pretty distressing three months, but you’ve lived through them too. I did a pretty good job in 2024 of posting at least once a month through July, but then things got extra complicated. I didn’t mention it at the time, but one of my cats passed away at the end of August, and then the second just two weeks ago. In between we adopted two kittens from the county, and they are doing just fine."
    }), "\n", createVNode(_components.p, {
      children: "In late October, just before the election here in the US, I picked up knitting needles again for the first time in many years. I’ve been pretty obsessed with knitting as a way of replacing by obsession with news."
    }), "\n", createVNode(_components.p, {
      children: ["My adventures with Vim (", createVNode(_components.a, {
        href: "http://localhost:4321/posts/2024/05/vim-1/",
        children: "part I"
      }), ", ", createVNode(_components.a, {
        href: "https://thudfactor.com/posts/2024/05/vim-1/",
        children: "part II"
      }), ") have been stalled; there are a few UI things I just couldn’t get around, and the tool was not quite as stable as I had hoped. Not crashy, you understand, just often very different each time I opened it. Plugins would update and move things around or break other things I was using and … well, plugin architectures are great in theory."]
    }), "\n", createVNode(_components.p, {
      children: "I use NeoVim inside VSCode, though, and learning Vim motions makes me feel a lot faster, at least."
    }), "\n", createVNode(_components.p, {
      children: ["I guess I didn’t learn my lesson from the Vim experiments, though, because just yesterday I installed Ubuntu on my rarely-used Windows laptop. ", createVNode(_components.a, {
        href: "https://en.wikipedia.org/wiki/Free_and_open-source_software",
        children: "FOSS"
      }), " seems to be the only real solution for those of us sick of being marketed at and having our private information sold."]
    }), "\n", createVNode(_components.p, {
      children: ["Similar thinking led me to leave Facebook for good at the end of January. I’d had an arms-length relationship with Meta for a few years, really, but ultimately the value Facebook was providing was not sufficient for the price they were asking. This leaves me without even the occasional outlet for my random moments of thinking in writing, since I’ve tried to keep Thudfactor developer-centric and ", createVNode(_components.a, {
        href: "https://wwww.filmhydra.com",
        children: "FilmHydra"
      }), " movie-focused. So I guess I might do more personal writing from time to time here as well."]
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

const url = "src/content/posts/2025/02/catch-up/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/02/catch-up/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/02/catch-up/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
