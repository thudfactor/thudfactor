import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, e as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_B4EwhNOI.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_C9HKnmlZ.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_CTxqPoOR.mjs';
import 'clsx';
import EleventyFetch from '@11ty/eleventy-fetch';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.thudfactor.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { title, published, genres, openlibrary } = Astro2.props.book.data;
  const apibase = "https://openlibrary.org/";
  const fetchConfig = {
    duration: "365d",
    type: "json",
    verbose: true,
    directory: ".cache/openlibrary",
    fetchOptions: {
      headers: {
        "User-Agent": "Thudfactor-Books (john@thudfactor.com)"
      }
    }
  };
  const getJSON = async (path, duration = "365d") => {
    const url2 = new URL(path, apibase);
    const config = { ...fetchConfig, duration };
    const resp = await EleventyFetch(url2.toString(), config);
    return resp;
  };
  const url = `/books/${openlibrary}.json`;
  const bookData = await getJSON(url);
  const { authors, covers } = bookData;
  let authorDeets = [];
  for (let i = 0; i < authors.length; i++) {
    const thisAuthor = await getJSON(`${authors[i].author.key}.json`);
    if (thisAuthor.name) {
      authorDeets.push(thisAuthor.name);
    }
  }
  const coverBase = covers?.length > 0 ? `https://covers.openlibrary.org/b/id/${covers[0]}` : "";
  const defaultImage = covers?.length > 0 ? `${coverBase}-M.jpg` : coverBase;
  return renderTemplate`${maybeRenderHead()}<section class="book" data-astro-cid-cbfhz2pn> <div class="image-container" data-astro-cid-cbfhz2pn> ${defaultImage && renderTemplate`<img${addAttribute(defaultImage, "src")} alt="" role="presentation" data-astro-cid-cbfhz2pn>`} </div> <header data-astro-cid-cbfhz2pn> <h3 data-astro-cid-cbfhz2pn> ${title} (${published})
</h3> <div data-astro-cid-cbfhz2pn>By: ${authorDeets.join(", ")}, Genres: ${genres.join(", ")}</div> </header> <div class="book-description" data-astro-cid-cbfhz2pn>${unescapeHTML(Astro2.props.book.rendered?.html)}</div> </section>`;
}, "/Users/johnwilliams/projects/thudfactor/src/components/Book/index.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const title = "Books";
  const description = "Books I've Read / Some of My Favorites";
  const books = (await getCollection("books", (p) => p.data.draft !== true)).sort(
    (a, b) => a.data.title.localeCompare(b.data.title)
  );
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
I used to use Goodreads until I discovered how important it was for authors to get five-star
		ratings. My silly ratings don't need to hurt someone else's chance at a writing career.
</p> <p>
In lieu of that, here's a list of some of my favorite (or recent) reads. No links to sources; I
		assume you know where to get books.
</p> <div class="flow"> ${books.map((book) => {
    return renderTemplate`${renderComponent($$result2, "Book", $$Index$1, { "book": book })}`;
  })} </div> ` })}`;
}, "/Users/johnwilliams/projects/thudfactor/src/pages/books/index.astro", void 0);

const $$file = "/Users/johnwilliams/projects/thudfactor/src/pages/books/index.astro";
const $$url = "/books";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
