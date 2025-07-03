import { a as createComponent, m as maybeRenderHead, k as renderScript, b as renderTemplate, r as renderComponent } from '../../../../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$Experiment } from '../../../../chunks/Experiment_C4dYHHaz.mjs';
import 'clsx';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="Target"></div> ${renderScript($$result, "/Users/johnwilliams/projects/thudfactor/src/components/animations/BasicWalker/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/animations/BasicWalker/index.astro", void 0);

const $$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Experiment", $$Experiment, { "title": "Simple P5 Example" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BasicWalker", $$Index, {})} ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/playground/nature-of-code/randomness/1.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/playground/nature-of-code/randomness/1.astro";
const $$url = "/playground/nature-of-code/randomness/1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$1,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
