import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$BlogPost } from '../chunks/BlogPost_CTxqPoOR.mjs';
import { g as getCollection } from '../chunks/_astro_content_RGBQCZHu.mjs';
import { $ as $$TeaserList } from '../chunks/TeaserList_DYFp9WIR.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Welcome to Thudfactor";
  const posts = (await getCollection("posts", (p) => p.data.draft !== true)).sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf()).reverse().slice(0, 8);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": "Thudfactor is the personal blog of J H Williams, web developer" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Recently published</h2> <div class="flow"> ${renderComponent($$result2, "TeaserList", $$TeaserList, { "posts": posts, "h": 3 })} <div class="center"> <a href="/posts/">More posts…</a> </div> </div> ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/index.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
