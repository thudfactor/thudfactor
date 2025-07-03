import { c as createAstro, a as createComponent, e as addAttribute, f as renderHead, d as renderSlot, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                     */

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Experiment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experiment;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-gzipz4ga> <head><title>${title} | Thudfactor</title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/anvil-favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body data-astro-cid-gzipz4ga> <div class="cover" data-astro-cid-gzipz4ga> <header data-astro-cid-gzipz4ga> <div data-astro-cid-gzipz4ga>Thudfactor: ${title}</div> ${renderSlot($$result, $$slots["nav"])} </header> <section data-astro-cid-gzipz4ga> ${renderSlot($$result, $$slots["default"])} </section> <footer data-astro-cid-gzipz4ga><a href="/" data-astro-cid-gzipz4ga>Thudfactor</a> &copy; 2025 JH Williams</footer> </div> </body></html>`;
}, "/Users/johnwilliams/projects/thudfactor/src/layouts/Experiment.astro", void 0);

export { $$Experiment as $ };
