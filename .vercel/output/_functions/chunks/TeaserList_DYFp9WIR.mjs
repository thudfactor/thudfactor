import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, e as addAttribute } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { b as $$FormattedDate } from './Content_CjvEuKZR.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://www.thudfactor.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    h,
    post: {
      id,
      data: { date, description, title }
    }
  } = Astro2.props;
  const HLevel = h ? `h${h}` : `h2`;
  return renderTemplate`${maybeRenderHead()}<div class="flow" data-astro-cid-hwai6vq3> ${renderComponent($$result, "HLevel", HLevel, { "data-astro-cid-hwai6vq3": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(`/posts/${id}`, "href")} data-astro-cid-hwai6vq3> ${title} </a> ` })} <p data-astro-cid-hwai6vq3>${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date, "data-astro-cid-hwai6vq3": true })} | ${description}</p> </div>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/PageItems/Teaser/index.astro", void 0);

const $$Astro = createAstro("https://www.thudfactor.com");
const $$TeaserList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TeaserList;
  const { posts, h } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="link-list" data-astro-cid-42zmk7fx> ${posts.map((post) => renderTemplate`<li data-astro-cid-42zmk7fx> ${renderComponent($$result, "Teaser", $$Index, { "post": post, "h": h, "data-astro-cid-42zmk7fx": true })} </li>`)} </ul>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/PageItems/TeaserList.astro", void 0);

export { $$TeaserList as $ };
