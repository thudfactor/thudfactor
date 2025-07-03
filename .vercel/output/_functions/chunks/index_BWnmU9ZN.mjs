import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { image, alt, align } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image, "src")}${addAttribute(alt, "alt")}${addAttribute(align, "class")}> <!--Image width={width || 2400} src={image} alt={alt} class={align} /-->`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/ContentItems/ArticleImage/index.astro", void 0);

export { $$Index as $ };
