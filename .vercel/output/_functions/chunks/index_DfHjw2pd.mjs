import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Index } from './index_BBPz-tbm.mjs';
import 'clsx';

const frontmatter = {
  "title": "A Fairy-Tale about Capitalism",
  "description": "A story that illustrates what we were all told about capitalism, and most of us still feel to be true. Even if we know better.",
  "date": "Wed Mar 12 09:19:30 EDT 2025",
  "cover": {
    "src": "./sound.jpg",
    "alt": "Sunset over a large, mostly still body of water. The sun is already below the horzion, so the water is dark and the sky is fairly dark as well. There are a few wisps of clouds near the horizon that lighten the burt orange of the sky there.",
    "description": "The sun sets over the Albemarle Sound in North Carolina.",
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
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Once upon a time, a Businessman saw people struggling with a daily task. It doesn’t matter what task, but maybe it was “making a to-do list.” The Businessman thought to himself, “I can make the best to-do lists in the world! I should just make my system available to everyone for a price. They will get better to-do lists, and I can buy the Fanciest Keurig Machine In the World, everybody wins!”"
    }), "\n", createVNode(_components.p, {
      children: "And so he did that, and it was a very good way to make to-do-lists, and everyone liked it and the Businessman got rich."
    }), "\n", createVNode($$Index, {
      children: "Everyone liked it and the Businessman got rich. But then…"
    }), "\n", createVNode(_components.p, {
      children: ["But then one day an Entrepreneur came along and said “I know how to make better to-do lists, but the Businessman won’t make these changes because he is making enough money. But I can make my own version, ", createVNode(_components.em, {
        children: "and"
      }), " I can lower the price. Then I will get at least some of the money the Businessman was making."]
    }), "\n", createVNode(_components.p, {
      children: "And the Entrepreneur did, and he took some of the Businessman’s customers and got new ones also, who liked that the Entrepreneur’s to-do lists used cursive while the Businessman’s was boring old Helvetica."
    }), "\n", createVNode(_components.p, {
      children: "“Oh no,” thought the Businessman, “even though I already have The Fanciest Keurig Machine In the World, there may some day be a fancier one. I will want that, too. I better keep making money.” So he added a way to change fonts, then he got some of the Entrepreneur’s customers and some new ones besides."
    }), "\n", createVNode(_components.p, {
      children: "And so, through competition, the Businessman and the Entrepreneur kept making their products better and better. They both made money, and bought fancier and fancier Keurigs. Meanwhile, everyone else’s to-do lists had never been better, and they all lived happily ever after."
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

const url = "src/content/posts/2025/03/fairy-tale/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/03/fairy-tale/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/03/fairy-tale/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
