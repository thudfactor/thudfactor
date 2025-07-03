import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "What studying the humanities taught me about software development",
  "date": "2019-05-11T22:56:35.000Z",
  "description": "At its heart, “Agile” is just the technology industry learning how to work like artists.",
  "categories": ["Agile"],
  "tags": "post",
  "cover": {
    "src": "patrick-tomasso-books.jpg",
    "alt": "Open books spread out on a table.",
    "description": "Some application development has more in common with artistic creative work than it does engineering.",
    "attribution": {
      "name": "Patrick Tomasso",
      "link": "https://unsplash.com/photos/open-book-lot-Oaqk7qqNh_c",
      "license": {
        "name": "Unsplash",
        "link": "https://unsplash.com/license"
      }
    }
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["This article was originally published on the ", createVNode(_components.a, {
          href: "https://www.insidenewcity.com/blog",
          children: "NewCity weblog"
        }), "."]
      })
    }), "\n", createVNode(_components.p, {
      children: "Back in my computer science days, I took a programming class where the professor decided to assign us a project to show us how real-world programming gets done (or ought to get done)."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "We discussed the problem we were trying to solve in extreme detail"
      }), "\n", createVNode(_components.li, {
        children: "The professor dictated the precise toolset we were supposed to use"
      }), "\n", createVNode(_components.li, {
        children: "We were required to create and turn in a series of planning documents before we ever wrote any code."
      }), "\n", createVNode(_components.li, {
        children: "Then we were supposed to use those planning documents to write the program"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "…which should be super easy because we’d done all the planning up front — so it should just be a mechanical process from there, right?"
    }), "\n", createVNode(_components.p, {
      children: "Friends, I didn’t just fail that project. I failed that class."
    }), "\n", createVNode(_components.p, {
      children: "A semester later I changed my major to English, and the coursework had a different approach for projects:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "I’d decide what my writing project would be."
      }), "\n", createVNode(_components.li, {
        children: "I’d go research the topic to get a better understanding of what I was supposed to address."
      }), "\n", createVNode(_components.li, {
        children: "Then I’d write a rough draft, and …"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "OK, here’s a funny thing about writing. You have this idea in your head, but the task of putting it on paper forces you to think slowly and carefully about it. Sometimes I never got past the first draft before I changed my mind about what I was trying to say. Thinking in detail about a problem often changes our understanding of it."
    }), "\n", createVNode(_components.p, {
      children: "But once I was comfortable with what I was trying to say, the work was still not mechanical. Every word you write is a decision. So for most writers, the process is always:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Write"
      }), "\n", createVNode(_components.li, {
        children: "Revise"
      }), "\n", createVNode(_components.li, {
        children: "Repeat"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Up until the deadline. (There has to be a deadline. Otherwise, you don’t know when to stop.)"
    }), "\n", createVNode(_components.p, {
      children: "I was much more comfortable with this way of working. This felt natural to me. I could get ideas out of my head, see they were wrong, fix them, and move on."
    }), "\n", createVNode(_components.p, {
      children: "Almost any writing advice you read will say the same thing: Get your ideas on paper first. Get the words out where you can stare at them, glare at them, and throw them away if they don’t work. Don’t care if it’s graceless; grace can come later. Write the perfect sentence in the next draft."
    }), "\n", createVNode(_components.p, {
      children: "Here’s the thing about that computer science class: not many people passed it, and one of the problems we had was no matter how hard we looked at the problem space or made plans, the project kept changing underneath us. The professor “forgot” details, or made decisions in one week that contradicted the previous week’s decisions, throwing all the plans into disarray. It was frustrating and discouraging, but we were assured that’s what the “real world” was like."
    }), "\n", createVNode(_components.p, {
      children: "But as much as I was distressed by the changing requirements, I was frustrated by my own lack of understanding. Was my own plan solid? Would it work? All these tools, all these processes, all these ideas — they were new to me. How did I know my plan would work before I did it?"
    }), "\n", createVNode(_components.p, {
      children: "There was no way."
    }), "\n", createVNode(_components.p, {
      children: "But a paper — I might not have known before I started writing precisely what words I was going to use (and how many of each). Or even which sources I was going to cite. But I knew in broad strokes what I needed to accomplish. And it was just a matter of wrestling each project into shape, one revision at a time."
    }), "\n", createVNode(_components.p, {
      children: "And when I graduated with an English degree and found myself in the technology industry anyway, I took that exploratory, write/revise process with me to work. That was 1996, the Web was brand new as a communications medium, and we were all figuring everything out on the fly. So I could get away with that."
    }), "\n", createVNode(_components.p, {
      children: "My computer science professor was right, though — real-world programming, full of specification documents and entity relationship diagrams and UML charts — often involved a significant amount of planning up front, and then the expectation that this planning would make the execution easy-peasy."
    }), "\n", createVNode(_components.p, {
      children: "But that process is only as good as the plan. When you forget details, or have new thoughts, or change your mind, or even the problem-space changes mid-execution, it can be tough to recover unless you have a lot of skill and the liberty to make use of it."
    }), "\n", createVNode(_components.p, {
      children: "In fact, I’d say every project I’ve been involved in that was planned exhaustively up-front came out quite a bit different in the end than anyone expected — and it got there through a last-minute mad scramble to get everything merely functional. In other words, it ended up “write/revise” anyway — but with everyone working in crisis mode, just trying to get the project done."
    }), "\n", createVNode(_components.p, {
      children: "I am not the only person to have noticed this. In the intervening years, programmers have come to understand that while there’s a significant degree of engineering in code, there’s also a lot of creative work and exploration. Plans work great when you know the problem, you know the tools, you can describe everything clearly, and you know nothing will change."
    }), "\n", createVNode(_components.p, {
      children: "Most programming work isn’t like that. Any interesting software project involves a continuous process of transmuting the unknown into the known. You can’t do that with plans; plans only tell you what you think might happen. You can only find the truth by doing the work."
    }), "\n", createVNode(_components.p, {
      children: "Craftspeople, musicians, artists, and writers have known this for millennia. It’s no surprise to me that we’re learning this about software as well."
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

const url = "src/content/posts/2019/11/humanities/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2019/11/humanities/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2019/11/humanities/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
