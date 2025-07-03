import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { $ as $$Page, a as $$Content } from './Content_CjvEuKZR.mjs';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, cover } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": title, "description": description, "cover": cover }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", $$Content, { ...Astro2.props }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
