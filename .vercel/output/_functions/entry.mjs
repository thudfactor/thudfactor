import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DSb_RUC4.mjs';
import { manifest } from './manifest_DI2QJeip.mjs';

const serverIslandMap = new Map([
	['CommentsList', () => import('./chunks/CommentsList_DMZXSg9F.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blogroll.astro.mjs');
const _page4 = () => import('./pages/endmark.astro.mjs');
const _page5 = () => import('./pages/feed.xml.astro.mjs');
const _page6 = () => import('./pages/links.astro.mjs');
const _page7 = () => import('./pages/patterns/kitchen-sink.astro.mjs');
const _page8 = () => import('./pages/patterns/layout.astro.mjs');
const _page9 = () => import('./pages/patterns.astro.mjs');
const _page10 = () => import('./pages/playground/nature-of-code/randomness/1.astro.mjs');
const _page11 = () => import('./pages/posts/_---page_.astro.mjs');
const _page12 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page13 = () => import('./pages/zombies.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/about/index.mdx", _page2],
    ["src/pages/blogroll/index.mdx", _page3],
    ["src/pages/endmark/index.mdx", _page4],
    ["src/pages/feed.xml.js", _page5],
    ["src/pages/links/index.mdx", _page6],
    ["src/pages/patterns/kitchen-sink.astro", _page7],
    ["src/pages/patterns/layout.astro", _page8],
    ["src/pages/patterns/index.astro", _page9],
    ["src/pages/playground/nature-of-code/randomness/1.astro", _page10],
    ["src/pages/posts/[...page].astro", _page11],
    ["src/pages/posts/[...slug].astro", _page12],
    ["src/pages/zombies/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bd5f1ab8-6445-4440-9bb9-f791114ebafc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
