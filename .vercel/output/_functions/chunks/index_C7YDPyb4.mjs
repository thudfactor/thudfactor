import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Don’t drive screws with a hammer",
  "date": "Tue Jul  2 07:32:09 EDT 2024",
  "categories": ["Webdev"],
  "tags": "post",
  "description": "Sometimes developers will solve problems with the handy tool, not the right tool, just because it seems like less work. It's probably not.",
  "cover": {
    "src": "not-easy.jpg",
    "alt": "Banner that reads We do this not because it is easy, but because we thought it would be easy.",
    "description": "This is secretly the entire thought process behind many technical decisions.",
    "attribution": {
      "name": "Meme / Unknown source"
    }
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["You should go read Frank Taylor’s ", createVNode(_components.a, {
        href: "https://blog.frankmtaylor.com/2024/06/20/a-rant-about-front-end-development/",
        children: "Rant on Front-End Development"
      }), ". I don’t agree with everything, but he makes good points where we differ and I’ll just have to sit with those for a bit and decide if Frank is right. It is a sweary rant, though. He says:"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Ask your scrummaster if 8 points of profanity is too much to handle today."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["As your scrum master, I have to say that only ", createVNode(_components.em, {
        children: "you"
      }), " know if it’s too much to handle. Consider the risks of being wrong, and if those are tolerable to you then press on ahead. Maybe it’s worth a conversation in the retro."]
    }), "\n", createVNode(_components.p, {
      children: "Like Frank, I find it really confusing when people use JavaScript — or worse, JavaScript frameworks — to solve problems the long way that have already been solved by other areas of the platform. For example, I have never found a situation where using Gatsby or NextJS was superior to using a server-side language like PHP, Ruby, or ASP to do the same thing. Generally speaking, React Server Side Rendering might have some use-cases, but I bet most of the places it’s used more out of (perceived) developer convenience than anything else."
    }), "\n", createVNode(_components.p, {
      children: "“I already know React, and PHP sucks.”"
    }), "\n", createVNode(_components.p, {
      children: "I call this “domain shifting,” and it happens when you move a problem from one area you are unfamiliar with (CSS) to another you are more familiar with (JS) without regard for what gets lost along the way."
    }), "\n", createVNode(_components.p, {
      children: ["Now, I ", createVNode(_components.em, {
        children: "will never argue"
      }), " that CSS in JS is always wrong. Sometimes it is the right thing to do, either for a project architecture or because the CSS actually needs to be rendered more dynamically. CSS-in-JS solutions are ", createVNode(_components.em, {
        children: "best"
      }), " wielded by people who already know CSS pretty well; they can choose how and what to leave to vanilla CSS and what needs the JavaScript touch. But all too often — as Frank points out — it’s just a way for developers to domain-shift their way out of learning a new skill."]
    }), "\n", createVNode(_components.p, {
      children: ["Another reason teams might choose to use an unsuitable tool is because there’s a misguided effort to keep the toolset small. For example, in my day job we have one application that absolutely needs a JavaScript framework because it’s a full-fledged web app. Another uses a JavaScript framework and clients-side rendering when something more along the lines of ", createVNode(_components.a, {
        href: "https://11ty.dev",
        children: "Eleventy"
      }), " would be more appropriate.I suspect the latter, newer project inherited the framework from the older out of a desire to keep the development stacks as similar as possible."]
    }), "\n", createVNode(_components.p, {
      children: ["“But John,” I hear you saying, “Surely we can’t have people choosing tools willy-nilly.” Of course not, and also get out of my house. It makes perfect sense to say “We are a PHP shop” and avoid ASP; the tools are similar, they do similar things, and they fill a similar role. It’s tricker when it comes to frameworks. People say “when all you have is a hammer, everything looks like a nail.” But “we only use React” is like saying “let’s only use nails.” Using React for a small, static, content-heavy website is like using a nail-gun to hang pictures on your wall: the task calls for finesse, not raw power. Likewise, if you have a web application that requires a lot of interactivity and complex state management, you will ", createVNode(_components.em, {
        children: "really"
      }), " wish you had used a framework to manage that… or you will end up writing your own."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "/posts/2024/05/about-rules/",
        children: "Rules are powerful"
      }), " and you should deploy them sparingly. You should also deploy them for better reasons than “I don’t want to learn something new.” For better or worse, the web platform is made up of many different languages. Effectively building on it requires us to be multi-lingual and multidisciplinary. You can’t domain-shift your way out of that. Not without serious consequences."]
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

const url = "src/content/posts/2024/07/domain-shift/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/07/domain-shift/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/07/domain-shift/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
