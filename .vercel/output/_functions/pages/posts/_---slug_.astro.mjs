import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent } from '../../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { a as getEntry, r as renderEntry } from '../../chunks/_astro_content_RGBQCZHu.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_CTxqPoOR.mjs';
import 'clsx';
import { a as actions } from '../../chunks/_astro_actions_8Tfj1QoI.mjs';
import { i as isInputError } from '../../chunks/astro-designed-error-pages_BT-6sFHy.mjs';
import $$CommentsList from '../../chunks/CommentsList_DMZXSg9F.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.thudfactor.com");
const $$CommentsForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CommentsForm;
  const { postSlug } = Astro2.props;
  const result = Astro2.getActionResult(actions.addComment);
  const inputErrors = isInputError(result?.error) ? result.error.fields : {};
  return renderTemplate`${maybeRenderHead()}<form method="POST"${addAttribute(actions.addComment, "action")} class="mb-8"> <input type="hidden" name="postSlug"${addAttribute(postSlug, "value")}> <div class="mb-4"> <label for="name">Name:</label> <input type="text" id="name" name="name" required class="w-full p-2 border rounded"> ${inputErrors.name && renderTemplate`<p class="text-red-500">${inputErrors.name}</p>`} </div> <div class="mb-4"> <label for="email">Email:</label> <input type="email" id="email" name="email" required class="w-full p-2 border rounded"> ${inputErrors.email && renderTemplate`<p class="text-red-500">${inputErrors.email}</p>`} </div> <div class="mb-4"> <label for="message">Comment:</label> <textarea id="message" name="message" required class="w-full p-2 border rounded"></textarea> ${inputErrors.message && renderTemplate`<p class="text-red-500">${inputErrors.message}</p>`} </div> <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded"> Add Comment </button> </form>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/CommentsForm.astro", void 0);

const $$Astro$1 = createAstro("https://www.thudfactor.com");
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Comments;
  const { postSlug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="comments-section"> <h3>Comments: ${postSlug}</h3> ${renderComponent($$result, "CommentsList", $$CommentsList, { "server:defer": true, "postSlug": postSlug, "server:component-directive": "defer", "server:component-path": "/Users/johnwilliams/projects/thudfactor/src/components/CommentsList.astro", "server:component-export": "default" })} ${renderComponent($$result, "CommentsForm", $$CommentsForm, { "postSlug": postSlug })} </div>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/Comments.astro", "self");

const $$Astro = createAstro("https://www.thudfactor.com");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const post = await getEntry("posts", slug);
  if (!post) {
    return Astro2.redirect("/404");
  }
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ${renderComponent($$result2, "Comments", $$Comments, { "postSlug": slug })} ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/posts/[...slug].astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
