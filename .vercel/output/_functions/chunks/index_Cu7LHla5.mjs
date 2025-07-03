import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adventures in VIM part 1",
  "date": "Wed May 29 07:13:33 EDT 2024",
  "categories": ["Editors", "Neovim"],
  "tags": "post",
  "description": "Some thoughts on the first view days using neovim",
  "cover": {
    "src": "./pier.jpg",
    "alt": "A weathered pier stretches out across a calm water in an overcast sky.",
    "description": "A pier stretching out across the Roanoke sound in the Outer Banks, North Carolina.",
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
    code: "code",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["After I wrote ", createVNode(_components.a, {
        href: "https://thudfactor.com/posts/2024/05/editor/",
        children: "my last post"
      }), " about changing text editors, I dove back into some books and trying a few more things out."]
    }), "\n", createVNode(_components.p, {
      children: "My initial concern that I might not recover the time I spent learning VIM in efficiency improvements is a reasonable one but also probably wrong. I am still far faster at using a mouse and cursor keys in VSCode, but it is easy to see how proficiency with modal editors can save a great deal of time."
    }), "\n", createVNode(_components.p, {
      children: ["I’ve started by adding the ", createVNode(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim",
        children: "VSCode Neovim"
      }), " plugin to VSCode and getting used to the ", createVNode(_components.code, {
        children: "hjkl"
      }), " navigation keys, and used it for a significant amount of my coding work yesterday."]
    }), "\n", createVNode(_components.p, {
      children: ["I am already a big fan of ", createVNode(_components.code, {
        children: "^"
      }), " and ", createVNode(_components.code, {
        children: "$"
      }), " to get me to the beginning and end of text on a line. I also use ", createVNode(_components.code, {
        children: "d$"
      }), " a lot, which deletes from the cursor to the end of the line."]
    }), "\n", createVNode(_components.p, {
      children: "At least initially the effort has made everything significantly more difficult, since thinking about what I need to write next has to compete with being hyper-vigilant about how I am using my tools. I am alread developing some of that muscle-memory though; I’ve caught myself trying to edit the address bar in browsers with vim commmands."
    }), "\n", createVNode(_components.p, {
      children: "Muscle-memory, though, is not to be taken lightly, and I have a lot of command key sequences carried over from my BBEdit days in the late 90s, as well as a long-standing relationship with the arrow keys. But it’s not going to take quite as much effort to switch as I thought."
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

const url = "src/content/posts/2024/05/vim-1/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/05/vim-1/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/05/vim-1/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
