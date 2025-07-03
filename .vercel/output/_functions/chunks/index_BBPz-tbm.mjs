import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { variant, position } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(position || "right", "data-position")}${addAttribute(variant, "data-variant")} class="pullquote box"> ${renderSlot($$result, $$slots["default"])} </aside>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ContentItems/Pullquote/index.astro", void 0);

export { $$Index as $ };
