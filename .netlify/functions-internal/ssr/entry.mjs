import { renderers } from './renderers.mjs';
import { manifest } from './manifest_5mBmHFTg.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_dyACpVgi.mjs');
const _page1 = () => import('./chunks/_.._j-niIVlJ.mjs');
const _page2 = () => import('./chunks/404_MAEsWU-S.mjs');
const _page3 = () => import('./chunks/_slug__q_qz_c0s.mjs');
const _page4 = () => import('./chunks/contacto_J5_g3Grd.mjs');
const _page5 = () => import('./chunks/create_post_UGsiSZUu.mjs');
const _page6 = () => import('./chunks/delete_post_vIYO241e.mjs');
const _page7 = () => import('./chunks/edit_post_9Wfj2Skw.mjs');
const _page8 = () => import('./chunks/sender_5UvlSV37.mjs');
const _page9 = () => import('./chunks/update_post_9DXhPiu2.mjs');
const _page10 = () => import('./chunks/_slug__bhyfuEzP.mjs');
const _page11 = () => import('./chunks/index_UmaoNk1z.mjs');
const _page12 = () => import('./chunks/index_MNlzwgm3.mjs');
const _page13 = () => import('./chunks/donar_TbgFj0BN.mjs');
const _page14 = () => import('./chunks/enviar_D5IIhuTO.mjs');
const _page15 = () => import('./chunks/feed_l93FtzFf.mjs');
const _page16 = () => import('./chunks/_slug__t9m10yD-.mjs');
const _page17 = () => import('./chunks/_slug__RngFz0aS.mjs');
const _page18 = () => import('./chunks/search_b134zwiE.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/category/[slug].astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/dashboard/api/create_post.astro", _page5],
    ["src/pages/dashboard/api/delete_post.astro", _page6],
    ["src/pages/dashboard/api/edit_post.astro", _page7],
    ["src/pages/dashboard/api/sender.astro", _page8],
    ["src/pages/dashboard/api/update_post.astro", _page9],
    ["src/pages/dashboard/edit/[slug].astro", _page10],
    ["src/pages/index.astro", _page11],
    ["src/pages/dashboard/index.astro", _page12],
    ["src/pages/donar.astro", _page13],
    ["src/pages/enviar.astro", _page14],
    ["src/pages/feed.xml.js", _page15],
    ["src/pages/page/[slug].astro", _page16],
    ["src/pages/post/[slug].astro", _page17],
    ["src/pages/search.astro", _page18]
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
