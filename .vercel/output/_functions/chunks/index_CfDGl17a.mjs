import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adventures in VIM part 2",
  "subtitle": "Why am I doing this, anyway?",
  "date": "Wed May 29 07:13:33 EDT 2024",
  "categories": ["Editors", "Neovim"],
  "tags": "post",
  "description": "The continuing story of migrating my brain from VSCode to vim",
  "cover": {
    "src": "./reflections.png",
    "alt": "A sunny day at Pandapas pond, with the bright blue sky and scattered clouds reflected perfectly in the water.",
    "description": "All of us need a quiet place to think and reflect sometimes, but that's getting increasingly more difficult to do.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "we-are-in-silly-season-for-commercial-products",
    "text": "We are in silly season for commercial products"
  }, {
    "depth": 2,
    "slug": "the-open-source-hope",
    "text": "The open-source hope"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Today I have some more thoughts on moving from VSCode to Neovim. If you want to read from the beginning, ", createVNode(_components.a, {
        href: "https://thudfactor.com/posts/2024/05/vim-1/",
        children: "here is the first post"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "It didn’t take me too long to realize that trying to switch entirely from VSCode to Neovim was risky both to my effectiveness and my mental health, so I am continuing to use Neovim inside VSCode. I am focusing on the few keystrokes I’ve learned before moving on."
    }), "\n", createVNode(_components.p, {
      children: "Fortunately it’s my day job to write code, so I have plenty of opportunity to practice. I appreciate being able to delete whole words at a time without having to do much more than move the cursor in place and hit two keys. I don’t know if that makes me faster, but I certainly feel faster."
    }), "\n", createVNode(_components.p, {
      children: "I’ve been asking myself, though: why am I putting in all of this effort? Hasn’t VSCode been good enough for me until now? Is it just boredom that’s driving me to learn an obscure skill? (It wouldn’t be the first time for sure.) But I think I understand now."
    }), "\n", createVNode(_components.h2, {
      id: "we-are-in-silly-season-for-commercial-products",
      children: "We are in silly season for commercial products"
    }), "\n", createVNode(_components.p, {
      children: "The AI fad is entirely out of control despite increasing evidence that AI replaces the labor of creation with the labor of revision. A lot of us feel like AI is being forced on us, but — to be fair — a lot of businesses have bought into the hype that they better board the LLM train or be the last ones standing on the platform."
    }), "\n", createVNode(_components.p, {
      children: "The silliness is not just AI, however. It has become common for businesses to “innovate” new features which they then market after-the-fact, trying to push them on unwilling users. The more dominant the product, the more likely it is that you will have features forced on you whether you are interested or not."
    }), "\n", createVNode(_components.p, {
      children: "Often it feels like these features are there to serve the business more than you."
    }), "\n", createVNode(_components.p, {
      children: "One example I can think of here is the use of digital car dashboards. There’s very little benefit to drivers, for making this change, but it seems like everyone’s decided to do this anyway — without considerations for safety. Those digital displays certainly do make it easy to change all sorts of stuff around on you with an over-the-air update. What your car does tomorrow might not be the same thing your car does today."
    }), "\n", createVNode(_components.p, {
      children: ["We are also seeing paying customers being sold for market data to other companies. I am not only thinking here of Reddit licensing its archives to AI engines. Automakers have started using the connected, digital interfaces to the cars to collect and sell information about the drivers to ", createVNode(_components.a, {
        href: "https://theconversation.com/cars-are-a-privacy-nightmare-on-wheels-heres-how-they-get-away-with-collecting-and-sharing-your-data-214386",
        children: "marketers and insurance companies"
      }), " while ", createVNode(_components.em, {
        children: "at the same time"
      }), " turning things like ", createVNode(_components.a, {
        href: "https://www.theverge.com/2022/7/13/23206999/car-subscription-nightmare-heated-seats-remote-start",
        children: "heated seats and keyless fobs"
      }), " into features that require a monthly subscription. It’s one thing to have the free Facebook track you and sell your data, it’s quite another to pay upwards of $50,000 for a car and have all that data sold anyway."]
    }), "\n", createVNode(_components.p, {
      children: "Both of my cars are too old for this sort of nonsense, but I can easily imagine a feature where every time you start up your car you have to dismiss a chat bubble or watch an ad for these subscription services before you can hit the road."
    }), "\n", createVNode(_components.p, {
      children: ["While I was thinking about writing this update, ", createVNode(_components.a, {
        href: "https://9to5mac.com/2024/06/06/change-to-adobe-terms-amp-conditions/",
        children: "Adobe changed their terms of service"
      }), ", implying that they could see, and use, anything you created with their software. The backlash was loud and immediate, so now Adobe is ", createVNode(_components.a, {
        href: "https://9to5mac.com/2024/06/07/adobe-terms-clarified/",
        children: "“clarifying” the terms"
      }), ", although I don’t think anyone can be blamed for thinking they were trying to pull a fast one on us."]
    }), "\n", createVNode(_components.h2, {
      id: "the-open-source-hope",
      children: "The open-source hope"
    }), "\n", createVNode(_components.p, {
      children: ["When looking for an alternative text editor, it was ", createVNode(_components.em, {
        children: "absolutely"
      }), " in the back of my mind that Microsoft was beginning to leverage VSCode and Github’s market dominance to monetize their users through multiple vectors, while at the same time trying to ", createVNode(_components.a, {
        href: "https://github.blog/2024-04-29-github-copilot-workspace/",
        children: "force an AI-centered developer experience"
      }), " that, at best, is simply not ready for us. AI-based development as it stands now is absolutely a way to take the coding we can all do for free and convert it into a token-based, per-instruction sales model… and I don’t like it."]
    }), "\n", createVNode(_components.p, {
      children: "That’s setting aside the fact that so-called “natural language” is not, and never will be, precise enough to write non-trivial software."
    }), "\n", createVNode(_components.p, {
      children: ["VSCode’s core is open source to be sure, but it’s open source the same way Chrome or Safari is open-source: the code is mostly open, but the projects are tied very tightly to corporate interests. So Google can leverage Chrome to ", createVNode(_components.a, {
        href: "https://arstechnica.com/gadgets/2023/11/google-chrome-will-limit-ad-blockers-starting-june-2024/",
        children: "shut down ad blockers"
      }), " that threaten their main product (your eyeballs). What will happen to VSCode? Microsoft certainly does not have a stellar reputation for centering customer interests over advertising at them."]
    }), "\n", createVNode(_components.p, {
      children: ["Concerns about being constantly marketed at is what led me to dismiss ", createVNode(_components.a, {
        href: "https://zed.dev/",
        children: "Zed"
      }), " as an editor. It is nominally open-source, but the creators have expressed an intention to make subscription-based features a significant part of the product. When your income depends on customers converting from a free tier to a subscription, it is impossible to resist incessantly prodding them."]
    }), "\n", createVNode(_components.p, {
      children: ["My developer tools are too important to me on a daily basis for them to become subject to the kind of nonsense-squishing I have to do on ", createVNode(_components.em, {
        children: "practically every website I visit"
      }), ". And I can’t afford to have writing code subject to token-based fees. I also don’t want to open my editor and be forced to take a tour of features I won’t use, or having all of my work broadcast to a central location for AI training and marketing analysis. I want a peaceful place where I can do my work ", createVNode(_components.em, {
        children: "and"
      }), " enjoy my hobby without feeling like I am both a target of and tool for advertising."]
    }), "\n", createVNode(_components.p, {
      children: ["This is a change for me. Once upon a time my argument for paying for products when open source versions were readily available was that paid products were higher quality and that developers ought to be compensated for their work. Since customers are now also products, the first is no longer true. The second is a thing that seems to be happening considerably less. Already profitable businesses are now ", createVNode(_components.a, {
        href: "https://www.calcalistech.com/ctechnews/article/wffo5u4am",
        children: "regularly laying off"
      }), " the people who made them profitable. I feel like the trust between customer and vendor has been breached, and it will take a lot of effort to restore that. Companies don’t seem too bothered by it, though."]
    }), "\n", createVNode(_components.p, {
      children: "And so Vim / Neovim, with their decades of developer-centered development and a large community of enthusiasts, seems like a much better choice. It is more aligned with my values and needs, and (I hope) developer-driven instead of investor-driven."
    }), "\n", createVNode(_components.p, {
      children: ["Stepping into Neovim proper, as unfamiliar and clumsy with it as I am, just ", createVNode(_components.em, {
        children: "feels"
      }), " better. It feels like a respite."]
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

const url = "src/content/posts/2024/06/vim-2/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/06/vim-2/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2024/06/vim-2/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
