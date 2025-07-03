import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_B4EwhNOI.mjs';
import { $ as $$Blockquote } from './Blockquote_B4LU3yrG.mjs';
import { $ as $$Index } from './index_BBPz-tbm.mjs';
import { $ as $$AlertCallout } from './AlertCallout_BPXWUukm.mjs';
import 'clsx';

const frontmatter = {
  "title": "Why scrum fails",
  "description": "Scrum seems like it works. I've seen it work; it's working for me now. Why do so many people think it's a failure?",
  "date": "Fri Apr 30 06:19:30 EDT 2025",
  "cover": {
    "src": "./new-growth.jpg",
    "alt": "A branch of a shrub with a newly sprouted green leaf; the leaf and the branch are encased in ice",
    "description": "New growth cut short by an ice storm, which not only stops the growth but destroys the progress already made.",
    "attribution": {
      "name": "John Williams"
    }
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "scrum-requires-autonomy",
    "text": "Scrum requires autonomy…"
  }, {
    "depth": 2,
    "slug": "that-corporations-arent-willing-to-grant",
    "text": "…that corporations aren’t willing to grant"
  }, {
    "depth": 2,
    "slug": "real-world-capitalism",
    "text": "Real-world capitalism"
  }, {
    "depth": 2,
    "slug": "what-does-this-mean-for-scrum-practitioners",
    "text": "What does this mean for scrum practitioners?"
  }, {
    "depth": 2,
    "slug": "footnotes",
    "text": "Footnotes"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["About five years ago I joined a team of developers who were already pretty advanced in their use of scrum, and in the past five years they have only become better at it. In my opinion, the team has correctly identified some flaws in the scrum framework and found adaptations to work around those. The other engineering team in the company ", createVNode(_components.em, {
        children: "also"
      }), " uses scrum; they have for many years. They are also good at it, and it is very effective for them."]
    }), "\n", createVNode(_components.p, {
      children: ["In theory, scrum can work anywhere the work is primarily analytical and creative. In practice, many organizations struggle and fail to implement scrum. My previous job at a digital agency ", createVNode(_components.em, {
        children: "also"
      }), " tried a scrum transformation; after several years of trying to make the process work I eventually realized that the business was unlikely to ever succeed at it."]
    }), "\n", createVNode(_components.p, {
      children: ["I don’t think this is because scrum doesn’t work. Scrum just optimizes for delivering a quality product rapidly, and that is not a problem most companies are looking to solve. Worse than that, “delivering a quality product rapidly” might actually be ", createVNode(_components.em, {
        children: "contrary"
      }), " to a business’s actual goal. This goal — making boatloads of money for a select few — rewards work that is just good enough to earn another round of funding or get over a specific competitive hump."]
    }), "\n", createVNode($$Index, {
      children: "People should be left alone to do the things they are good at."
    }), "\n", createVNode(_components.p, {
      children: "This puts significant downward pressure on excellence. Instead, it encourages maximizing employee output while minimizing investment. It creates an adversarial relationship between the company and its employees, an environment that cannot tolerate giving scrum teams autonomy or treating engineering teams like partners in an enterprise. But without these, scrum is doomed."
    }), "\n", createVNode(_components.p, {
      children: "That’s why scrum so often fails."
    }), "\n", createVNode($$AlertCallout, {
      children: createVNode(_components.p, {
        children: ["This article was largely inspired by Bubs Meany’s post ", createVNode(_components.a, {
          href: "https://undistinguished.com/?myart=20250308010316_potpourri_4359b0e5878d4672",
          children: "“Weaponization of Scrum? In MY department? It’s more likely than you think…”"
        }), " It’s a good read for a very different perspective."]
      })
    }), "\n", createVNode(_components.h2, {
      id: "scrum-requires-autonomy",
      children: "Scrum requires autonomy…"
    }), "\n", createVNode(_components.p, {
      children: "To understand how and why, we need to revisit scrum values, the parts poor scrum implementations either gloss over or never prioritize. Key to scrum success is the idea that people should mostly be left alone to do the work they are good at. For example, product owners decide what work gets done because they understand the business goals and purpose. But the team doing the work is in control of how work gets done and at what pace."
    }), "\n", createVNode(_components.p, {
      children: ["These three items from ", createVNode(_components.a, {
        href: "https://agilemanifesto.org/principles.html",
        children: "“Principles Behind the Agile Manifesto”"
      }), " come at the notion sideways:"]
    }), "\n", createVNode($$Blockquote, {
      note: "Principles four, seven, and eight",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Business people and developers must work together daily throughout the project."
        }), "\n", createVNode(_components.li, {
          children: "Working software is the primary measure of progress."
        }), "\n", createVNode(_components.li, {
          children: "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely."
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "but are more explicit here (emphasis mine):"
    }), "\n", createVNode($$Blockquote, {
      note: "Principles five, eleven, and twelve",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: ["Build projects around motivated individuals. Give them the environment and support they need, and ", createVNode(_components.em, {
            children: "trust them"
          }), " to get the job done."]
        }), "\n", createVNode(_components.li, {
          children: ["The best architectures, requirements, and designs emerge from ", createVNode(_components.em, {
            children: "self-organizing teams"
          }), "."]
        }), "\n", createVNode(_components.li, {
          children: ["At regular intervals, ", createVNode(_components.em, {
            children: "the team reflects"
          }), " on how to become more effective, then tunes and adjusts its behavior accordingly."]
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Principle four argues against fire-and-forget management (work is not directed, it is cooperative). Seven argues against abstract metrics. Eight is explicit about avoiding overwork and disruption. Principles five, eleven, and twelve state directly that the team should be trusted to ", createVNode(_components.em, {
        children: "manage itself"
      }), ", identifying both problems and solutions on their own."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://scrumguides.org/scrum-guide.html",
        children: "The Scrum Guide"
      }), " interprets these principles this way:"]
    }), "\n", createVNode($$Blockquote, {
      note: "Scrum Values",
      children: createVNode(_components.p, {
        children: "The Scrum Team and its stakeholders are open about the work and the challenges. Scrum Team members respect each other to be capable, independent people, and are respected as such by the people with whom they work… The decisions that are made, the steps taken, and the way Scrum is used should reinforce these values, not diminish or undermine them."
      })
    }), "\n", createVNode(_components.p, {
      children: "Furthermore,"
    }), "\n", createVNode($$Blockquote, {
      note: "The Scrum Team",
      children: createVNode(_components.p, {
        children: "The Scrum Team is responsible for all product-related activities from stakeholder collaboration, verification, maintenance, operation, experimentation, research and development, and anything else that might be required. They are structured and empowered by the organization to manage their own work."
      })
    }), "\n", createVNode(_components.p, {
      children: ["Scrum envisions a largely autonomous production team. They work together with, but ", createVNode(_components.em, {
        children: "crucially not under the control of"
      }), ", the business side of the operation. It is a collaborative culture, not a top-down authoritarian structure.", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "that-corporations-arent-willing-to-grant",
      children: "…that corporations aren’t willing to grant"
    }), "\n", createVNode(_components.p, {
      children: "It seems to me that most scrum failures happen because the organization cannot tolerate this sharing of authority. They refuse to empower and collaborate with the team, retaining command-and-control structures as well as common carrot-and-stick leadership approaches that depersonalize team members and sometimes set them up against each other."
    }), "\n", createVNode($$Index, {
      position: "right",
      children: createVNode(_components.p, {
        children: "Scrum without empowerment is not scrum; agile without autonomy is not agile."
      })
    }), "\n", createVNode(_components.p, {
      children: "Examples of these kinds of behaviors are:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Tracking individual team member’s contributions to velocity"
      }), "\n", createVNode(_components.li, {
        children: "Insisting on steadily increasing velocity (“make the number go up”)"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Assigning"
        }), " specific scrum tasks or velocity goals to team members"]
      }), "\n", createVNode(_components.li, {
        children: "Publicly rewarding “top” individuals while taking punitive action against “low” performers, such as personal improvement plans (PIPs) or culling “low” performers on a predictable basis."
      }), "\n", createVNode(_components.li, {
        children: "Assigning specific stories to a sprint without team input, then mandating all stories be completed"
      }), "\n", createVNode(_components.li, {
        children: "Planning multiple sprints ahead, and committing the team to producing on that schedule"
      }), "\n", createVNode(_components.li, {
        children: ["Frequently re-organizing teams", createVNode(_components.sup, {
          children: createVNode(_components.a, {
            href: "#user-content-fn-2",
            id: "user-content-fnref-2",
            "data-footnote-ref": "",
            "aria-describedby": "footnote-label",
            children: "2"
          })
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Many things about Scrum can be tweaked or adjusted, but the freedom for teams to do the work their way is sacrosanct. Scrum without empowerment is not scrum; agile without autonomy is not agile. This is ", createVNode(_components.em, {
        children: "not"
      }), " a surprise to anyone or any business that has gone through basic scrum training; this principle receives considerable attention in both the Certified Scrum Master and Certified Product Owner training materials. Companies adopting scrum but refusing to adapt to scrum’s most crucial prerequisite has puzzled me for years."]
    }), "\n", createVNode(_components.p, {
      children: ["My CSM training typically framed the cultural shift required as an issue of trust: stakeholders don’t think scrum can actually deliver, so you need to deliver value rapidly and ", createVNode(_components.em, {
        children: "prove"
      }), " the process works. That seems like a reasonable approach if the stakeholders are actually interested in delivering a good product."]
    }), "\n", createVNode(_components.p, {
      children: "But of course they are, right? We are raised to believe this drive is so fundamental to capitalism it hardly seems right to question it."
    }), "\n", createVNode($$Index, {
      position: "left",
      children: "Often the illusion of quality is far more profitable."
    }), "\n", createVNode(_components.p, {
      children: ["But this assumption is not true of many companies. Corporate leadership cannot admit this out loud, though, because much of buying and selling rests on the assumption that “", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=lKMKZ54HDKY",
        children: "quality is job one"
      }), ".”"]
    }), "\n", createVNode(_components.p, {
      children: ["The capitalism we are taught to believe in, and is reflected in most professional training, is ", createVNode(_components.a, {
        href: "https://www.thudfactor.com/posts/2025/03/fairy-tale/",
        children: "fairy-tale capitalism"
      }), ". We assume our business is trying to compete by creating quality goods and services. Everyone on a production team is therefore dedicated to producing that."]
    }), "\n", createVNode(_components.p, {
      children: ["But for many companies, excellence is only useful for a specific circumstance and a limited period of time. Often the ", createVNode(_components.em, {
        children: "illusion"
      }), " of it is far more profitable. At this point, team self-determination is not only less useful, it actively works against the extraction of wealth and its concentration in the investor class."]
    }), "\n", createVNode(_components.h2, {
      id: "real-world-capitalism",
      children: "Real-world capitalism"
    }), "\n", createVNode(_components.p, {
      children: "Fairy-tale capitalism suggests that good products are ensured through the operations of a free market, and competition helps bring prices down. Real-world capitalism, especially when unconstrained, is more complex. There are many paths to profit, largely created through a parallel marketplace where a business’s “customers” aren’t really the customers. Instead, they are an asset that can be exploited and traded just like any other."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Entrepreneurs can get rich by creating a company that is attractive to investors; income can be generated through salaries, bonuses, or other pathways paid out of this investment."
      }), "\n", createVNode(_components.li, {
        children: ["Or they can get rich by ", createVNode(_components.em, {
          children: "selling"
        }), " that company to a competing company, who will often shut it down"]
      }), "\n", createVNode(_components.li, {
        children: "Or by draining the company of all value as rapidly as possible, then liquidating its assets."
      }), "\n", createVNode(_components.li, {
        children: ["Or they can ", createVNode(_components.em, {
          children: "sell"
        }), " customer data and attention through an advertising marketplace"]
      }), "\n", createVNode(_components.li, {
        children: "Or any combination of the above"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["A company’s founders may have ", createVNode(_components.em, {
        children: "once"
      }), " cared about the company they started, but in the hands of competition or investors interests shift to exploitation. The work is sure to suffer — especially if owners are willing to accept the ultimate destruction of the company in exchange for short-term gain."]
    }), "\n", createVNode(_components.p, {
      children: ["These strategies are extractive: the purpose is to squeeze as much extra cash out of the product as possible before exiting entirely. Some small businesses essentially start in an extractive mode, with the founders intending to scale fast, then sell out.", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), " The purpose here is never ", createVNode(_components.em, {
        children: "really"
      }), " to build a product attractive to consumers, it’s to build a product whose consumers are attractive to another investor. Long-term, strategic investments in a product (for example, in code stability) are not as useful to the business’s real purpose as flashy new features."]
    }), "\n", createVNode($$Index, {
      children: createVNode(_components.p, {
        children: ["Authoritarian, top-down scrum is ", createVNode(_components.em, {
          children: "fantastic"
        }), " at creating an atmosphere of paranoia."]
      })
    }), "\n", createVNode(_components.p, {
      children: "In other extractive modes, the employees are only valuable as a means of keeping the company afloat with as minimal investment as possible, so the maximum amount of profits can be siphoned off into investor pockets."
    }), "\n", createVNode(_components.p, {
      children: ["Scrum emphasizes the need for strategic thinking and empowered employees. The former is arguably wasted investment, and the latter is uncomfortably close to unionization. In these circumstances, ", createVNode(_components.em, {
        children: "functioning"
      }), " scrum is not just a waste, it’s a threat."]
    }), "\n", createVNode(_components.p, {
      children: ["Authoritarian, top-down scrum, on the other hand, is ", createVNode(_components.em, {
        children: "fantastic"
      }), " at extracting labor output, discouraging long-term thinking, and creating an atmosphere of paranoia."]
    }), "\n", createVNode(_components.p, {
      children: "Best of all, what gets the blame? Scrum."
    }), "\n", createVNode(_components.h2, {
      id: "what-does-this-mean-for-scrum-practitioners",
      children: "What does this mean for scrum practitioners?"
    }), "\n", createVNode(_components.p, {
      children: ["Scrum practitioners need to come to grips with a few things. The first is that scrum really ", createVNode(_components.em, {
        children: "isn’t"
      }), " going to work for many companies. At least, not the way we would hope. I have some suggestions for how to tell if a company is a good candidate for, but those I’ll have to save for another post."]
    }), "\n", createVNode(_components.p, {
      children: "We also need to recognize that scrum boosterism runs smack up against the lived experience of people who’ve been in bad scrum environments. These concerns are not easily dismissed, and the damage poor implementations have done not just to scrum is significant. If we want to continue working with scrum — at least, under that terminology — we have to find a way to address these people where they are."
    }), "\n", createVNode(_components.p, {
      children: ["We should recognize that scrum is political. Scrum is not just about how to do work well; it’s about how to do work safely, collaboratively, and in a manner that respects people as people. Both the agile values and derived scrum values assume that workers are ", createVNode(_components.em, {
        children: "partners"
      }), " in success and deserve to work reasonable hours for fair pay, while actively discouraging abusive and extractive labor practices. As such it has more in common with ", createVNode(_components.a, {
        href: "https://ethanmarcotte.com/books/you-deserve-a-tech-union/",
        children: "a revitalized labor movement"
      }), " than it does management training."]
    }), "\n", createVNode($$Index, {
      position: "left",
      children: "Scrum is political."
    }), "\n", createVNode(_components.p, {
      children: "Agility also stands in stark contrast to hustle culture and the work hard / lean in culture espoused by places like Google, Amazon, and Facebook. The real-world effect of these cultures is to push people towards burnout but without providing any tangible benefit. Many workers have stories of long nights spent and family sacrifices made in the service of company priorities, only to find themselves escorted out of the door when the business needs to juice its earnings report."
    }), "\n", createVNode(_components.p, {
      children: ["Finally, executives ", createVNode(_components.em, {
        children: "really"
      }), " need to be on board with the process, because they have to loosen their grip on how the work gets done. Instead, too many scrum teams end up with the added ", createVNode(_components.em, {
        children: "responsibility"
      }), " of figuring things out on-the-fly, but lack the autonomy to execute. The crucial culture shift that needs to happen is more often at the management level than the team level."]
    }), "\n", createVNode(_components.p, {
      children: "The agile values are not optional. They are key to making this work, assuming we all agree that quality products delivered in a reasonable time is the definition of “work.”"
    }), "\n", createVNode(_components.p, {
      children: "That’s not always a correct assumption."
    }), "\n", createVNode(_components.h2, {
      id: "footnotes",
      children: "Footnotes"
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
            children: ["There’s an unfortunate ambiguity in scrum jargon here in the title of “scrum master.” Some businesses (not to mention scrum masters) parse the word “master” to be equivalent to “boss,” but the mastery meant here is mastery of scrum principles and processes, not authority over the team members themselves. ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: ["One individual I spoke with who says he’s ", createVNode(_components.em, {
              children: "never"
            }), " seen functional scrum has primarily worked on scrum teams as a contractor, but companies that rely on contract labor in their scrum teams have already failed at scrum implementation. ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: ["If you want to avoid getting entangled in such a business, avoid joining any company founded by a self-proclaimed “serial entrepreneur.” ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
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

const url = "src/content/posts/2025/04/why-scrum-fails/index.mdx";
const file = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/04/why-scrum-fails/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/johnwilliams/projects/thudfactor/src/content/posts/2025/04/why-scrum-fails/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
