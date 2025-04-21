import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
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
