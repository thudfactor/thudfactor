import { a as createComponent, c as createAstro, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
/* empty css                             */
import 'clsx';
/* empty css                                  */

const $$Astro$1 = createAstro("https://www.thudfactor.com");
const $$ColorBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ColorBar;
  const { numSwatches, style, ...extra } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-element="color-bar"${addAttribute(`--numswatches: ${numSwatches}; ${style || ""}`, "style")}${spreadAttributes(extra)}> ${Array.from({ length: numSwatches }).map((_, i) => renderTemplate`<div class="swatch"${addAttribute(`--index: ${i}`, "style")}></div>`)} </div>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ColorBar.astro", void 0);

const $$Astro = createAstro("https://www.thudfactor.com");
const $$LabeledSwatch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LabeledSwatch;
  const { color, label, style, ...extra } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-element="labeledSwatch"${addAttribute(`--color: ${color}; ${style || ""}`, "style")}${spreadAttributes(extra)}> <div class="swatch"></div> <div class="label">${label}</div> </div>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/LabeledSwatch.astro", void 0);

export { $$LabeledSwatch as $, $$ColorBar as a };
