import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_C9HKnmlZ.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_CiewhkkH.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
	const posts = await getCollection("posts", (p) => p.data.draft !== true);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts
			.map((post) => ({
				pubDate: post.data.date,
				link: `/posts/${post.id}/`,
				...post.data,
			}))
			.sort((pa, pb) => pb.pubDate.getTime() - pa.pubDate.getTime()),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
