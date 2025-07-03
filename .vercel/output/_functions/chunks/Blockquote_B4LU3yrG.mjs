import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Blockquote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blockquote;
  const { variant, note, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote${addAttribute(variant, "data-variant")} class="flow"> ${renderSlot($$result, $$slots["default"])} ${note && renderTemplate`<footer> ${!link && note} ${link && renderTemplate`<a${addAttribute(link, "href")}>${note}</a>`} </footer>`} </blockquote>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ContentItems/Blockquote.astro", void 0);

export { $$Blockquote as $ };
