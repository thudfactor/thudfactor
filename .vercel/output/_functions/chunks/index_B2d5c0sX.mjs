import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment, d as renderSlot } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$Index$1 } from './index_BWnmU9ZN.mjs';

const $$Astro$1 = createAstro("https://www.thudfactor.com");
const $$Attribution = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Attribution;
  const { link, name: attributeTo, license } = Astro2.props.attribution;
  return renderTemplate`${maybeRenderHead()}<cite>
Source:
${link && renderTemplate`<a${addAttribute(link, "href")}>${attributeTo}</a>`} ${!link && attributeTo} ${license && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
/ <a${addAttribute(license.link, "href")}>${license.name}</a> ` })}`} </cite>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ContentItems/Attribution.astro", void 0);

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { image, alt, variant, position, attribution } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(position, "data-position")}${addAttribute(variant, "data-variant")} class="flow"> ${renderSlot($$result, $$slots["fig"], renderTemplate` ${renderComponent($$result, "ArticleImage", $$Index$1, { "image": image, "alt": alt })} ${attribution && renderTemplate`${renderComponent($$result, "Attribution", $$Attribution, { "attribution": attribution })}`} `)} <figcaption>${renderSlot($$result, $$slots["default"])}</figcaption> </figure>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ContentItems/ArticleFigure/index.astro", void 0);

export { $$Index as $ };
