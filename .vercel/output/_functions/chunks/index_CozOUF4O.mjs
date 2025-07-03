import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import './index_DfOMS8cV.mjs';
import { $ as $$Image } from './_astro_assets_Cs7KOCx6.mjs';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { image, alt, align, width } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": width || 2400, "src": image, "alt": alt, "class": align })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ContentItems/ArticleImage/index.astro", void 0);

export { $$Index as $ };
