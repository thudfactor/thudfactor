import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import 'clsx';
import { d as db, C as Comment } from './_astro_db_B_HXa1Yn.mjs';
import { eq, desc } from '@astrojs/db/dist/runtime/virtual.js';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$CommentsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommentsList;
  const { postSlug } = Astro2.props;
  const comments = await db.select().from(Comment).where(eq(Comment.postSlug, postSlug)).orderBy(desc(Comment.createdAt));
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4"> ${comments.map((comment) => renderTemplate`<div class="p-4 bg-gray-50 rounded"> <div class="font-bold">${comment.name}</div> <div class="text-gray-600 text-sm">${comment.createdAt.toLocaleDateString()}</div> <div class="mt-2">${comment.message}</div> </div>`)} </div>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/CommentsList.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/components/CommentsList.astro";
const $$url = undefined;

export { $$CommentsList as default, $$file as file, $$url as url };
