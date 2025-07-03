import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$StaticPage } from '../chunks/StaticPage_DWKnT2Gz.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StaticPage", $$StaticPage, { "title": "Patterns" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Font styles</h2> <p class="font-sans">This is a sans-serif font</p> <p class="font-serif">This is a serif font</p> <p class="font-mono">This is a monospaced font</p> ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/patterns/index.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/patterns/index.astro";
const $$url = "/patterns";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
