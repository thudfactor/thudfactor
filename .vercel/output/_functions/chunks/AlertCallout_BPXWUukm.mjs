import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                    */

const $$Astro = createAstro("https://www.thudfactor.com");
const $$AlertCallout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AlertCallout;
  const { variant = "info" } = Astro2.props;
  const { icon = "\u{1F481}" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(`cluster alert ${variant}`, "class")} data-astro-cid-2mn2hodj> <div class="icon" data-astro-cid-2mn2hodj>${icon}</div> <div class="message" data-astro-cid-2mn2hodj> ${renderSlot($$result, $$slots["default"])} </div> </aside>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/AlertCallout.astro", void 0);

export { $$AlertCallout as $ };
