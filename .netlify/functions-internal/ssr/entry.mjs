import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cXLQ_OJD.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_nvtb8Ev8.mjs');
const _page1 = () => import('./chunks/_.._DECaKbN8.mjs');
const _page2 = () => import('./chunks/about_iuW_DCAu.mjs');
const _page3 = () => import('./chunks/_slug__ntU4qqps.mjs');
const _page4 = () => import('./chunks/rss_json_nt4sWT58.mjs');
const _page5 = () => import('./chunks/index_KDkqBu5k.mjs');
const _page6 = () => import('./chunks/index_SDAtFHiN.mjs');
const _page7 = () => import('./chunks/_slug__cYjiwvrw.mjs');
const _page8 = () => import('./chunks/rss_UzrWSFkE.mjs');
const _page9 = () => import('./chunks/index_KcvPhKon.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/dashboard/new/[slug].astro", _page3],
    ["src/pages/post/rss_json.ts", _page4],
    ["src/pages/index.astro", _page5],
    ["src/pages/dashboard/index.astro", _page6],
    ["src/pages/post/[slug].astro", _page7],
    ["src/pages/rss.xml.js", _page8],
    ["src/pages/search/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
serverEntrypointModule.start?.(_manifest, _args);

export { __astrojsSsrVirtualEntry as default, pageMap };
