import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_9HnFS_Q1.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.X5n-2KGX.css"},{"type":"external","src":"/_astro/_slug_.9ZPYviFH.css"},{"type":"inline","content":"main[data-astro-cid-cc2hrsk6]{width:calc(100% - 2em);max-width:100%;margin:0}.hero-image[data-astro-cid-cc2hrsk6]{width:100%}.hero-image[data-astro-cid-cc2hrsk6] img[data-astro-cid-cc2hrsk6]{display:block;margin:0 auto;border-radius:12px;box-shadow:var(--box-shadow)}.prose[data-astro-cid-cc2hrsk6]{width:720px;max-width:calc(100% - 2em);margin:auto;padding:1em;color:rgb(var(--gray-dark))}.title[data-astro-cid-cc2hrsk6]{margin-bottom:1em;padding:1em 0;text-align:center;line-height:1}.title[data-astro-cid-cc2hrsk6] h1[data-astro-cid-cc2hrsk6]{margin:0 0 .5em}.date[data-astro-cid-cc2hrsk6]{margin-bottom:.5em;color:rgb(var(--gray))}.last-updated-on[data-astro-cid-cc2hrsk6]{font-style:italic}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.X5n-2KGX.css"}],"routeData":{"route":"/dashboard/new/[slug]","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/new\\/([^/]+?)\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}],[{"content":"new","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/dashboard/new/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/post/rss_json","isIndex":false,"type":"endpoint","pattern":"^\\/post\\/rss_json\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"rss_json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/rss_json.ts","pathname":"/post/rss_json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.X5n-2KGX.css"},{"type":"external","src":"/_astro/_slug_.9ZPYviFH.css"},{"type":"external","src":"/_astro/index.uBc0Y5NX.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Y9xNmwqC.js"}],"styles":[{"type":"external","src":"/_astro/about.X5n-2KGX.css"}],"routeData":{"route":"/dashboard","isIndex":true,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/index.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.X5n-2KGX.css"},{"type":"external","src":"/_astro/_slug_.9ZPYviFH.css"},{"type":"inline","content":".image[data-astro-cid-bvzihdzo]{width:100%}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.X5n-2KGX.css"},{"type":"external","src":"/_astro/_slug_.9ZPYviFH.css"},{"type":"external","src":"/_astro/index.uBc0Y5NX.css"}],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:4321","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/BMXDRP/CipoteLetra/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/BMXDRP/CipoteLetra/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/BMXDRP/CipoteLetra/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/BMXDRP/CipoteLetra/src/pages/search/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_ejeJrqLl.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_BRxQVGHK.mjs","/src/pages/post/rss_json.ts":"chunks/pages/rss_json_w40geAFS.mjs","\u0000@astrojs-manifest":"manifest_cXLQ_OJD.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_nvtb8Ev8.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"chunks/_.._DECaKbN8.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_iuW_DCAu.mjs","\u0000@astro-page:src/pages/dashboard/new/[slug]@_@astro":"chunks/_slug__ntU4qqps.mjs","\u0000@astro-page:src/pages/post/rss_json@_@ts":"chunks/rss_json_nt4sWT58.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_KDkqBu5k.mjs","\u0000@astro-page:src/pages/dashboard/index@_@astro":"chunks/index_SDAtFHiN.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"chunks/_slug__cYjiwvrw.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_UzrWSFkE.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"chunks/index_KcvPhKon.mjs","C:/Users/BMXDRP/CipoteLetra/node_modules/auth-astro/client.ts":"_astro/client.zqlkSgw6.js","/astro/hoisted.js?q=0":"_astro/hoisted.Y9xNmwqC.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_slug_.9ZPYviFH.css","/_astro/about.X5n-2KGX.css","/_astro/index.uBc0Y5NX.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/pretty.xsl","/robots.txt","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/_astro/client.zqlkSgw6.js","/_astro/hoisted.Y9xNmwqC.js"],"buildFormat":"directory"});

export { manifest };
