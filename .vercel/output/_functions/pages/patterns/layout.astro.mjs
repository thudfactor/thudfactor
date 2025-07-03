import { a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$StaticPage } from '../../chunks/StaticPage_DWKnT2Gz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StaticPage", $$StaticPage, { "title": "Layout" })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/patterns/layout.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/patterns/layout.astro";
const $$url = "/patterns/layout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Layout,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
