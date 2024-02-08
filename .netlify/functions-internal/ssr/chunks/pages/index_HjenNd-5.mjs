/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, h as renderHead, f as renderSlot, m as maybeRenderHead, s as spreadAttributes, g as addAttribute } from '../astro_9HnFS_Q1.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { a as $$Navbar, $ as $$Footer, c as client } from './_slug__e0HtGs1X.mjs';
import { $ as $$BaseHead, a as $$FormattedDate } from './about_FXk5P0VO.mjs';
import { g as getSession } from './__fpnl3zuy.mjs';
/* empty css                          */

const SITE_TITLE = "Cipote Letra | Letras de canciones";
const SITE_DESCRIPTION = "Aqui encontraras todas las letras de tus canciones favoritas y mucho mas.";

const $$Astro$8 = createAstro("http://localhost:4321");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-mmggtga4> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-mmggtga4": true })}${renderHead()}</head> <body data-astro-cid-mmggtga4> <main data-astro-cid-mmggtga4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-mmggtga4": true })} ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-mmggtga4": true })} <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900|Roboto:300,400,500,700,900|Oswald:300,400,500,600,700,900&display=swap" media="all"> </body></html>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/layouts/layout.astro", void 0);

const $$Astro$7 = createAstro("http://localhost:4321");
const $$Rss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Rss;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="rss"><circle cx="3" cy="13" r="2"></circle><path d="M1 5.667v2.667A6.674 6.674 0 0 1 7.667 15h2.666c0-5.146-4.187-9.333-9.333-9.333z"></path><path d="M1 1v2.667C7.25 3.667 12.334 8.75 12.334 15H15C15 7.28 8.72 1 1 1z"></path></svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/rss.astro", void 0);

const $$Astro$6 = createAstro("http://localhost:4321");
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 512 512"><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path></svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/arrow-right.astro", void 0);

const $$Astro$5 = createAstro("http://localhost:4321");
const $$RecentBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$RecentBlock;
  const { category, cla } = Astro2.props;
  let posts = [];
  try {
    const allPostsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, authors.username, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id where posts.category ="${category}" and posts.published = 1 limit 4;`,
        args: []
      }
    );
    const allPosts = allPostsResponse.rows;
    posts = allPosts.map((post) => {
      return {
        published: false,
        title: post.title,
        slug: post.slug,
        img: post.img,
        created_at: post.created_at,
        username: post.username
      };
    });
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cla, "class")}> <div class=" flex flex-row justify-between items-center self-center mb-4"> <h2 class="text-lg uppercase font-bold tracking-wide"> <a href="#" class="inline-flex gap-x-1">${renderComponent($$result, "RssIcon", $$Rss, { "class": "h-4 self-center" })}${category}</a> </h2> <a class="float-right text-[13px] font-semibold bg-red-600 text-white py-1 px-3 rounded uppercase top-0 inline-flex gap-x-1 hover:animate-bounce" href="#">Ver Todas ${renderComponent($$result, "RightIcon", $$ArrowRight, { "class": "h-3.5 self-center" })}</a> </div> <ul class="flex flex-wrap lg:flex-nowrap gap-4 justify-stretch overflow-hidden"> ${posts.map((post) => renderTemplate`<li class="dark:bg-[#fcf0f0] dark:text-white max-w-[286px] min-w-[150px] sm:mx-auto lg:w-[40.5%]
                     text-black pb-2.5 rounded overflow-hidden inline-block transition-all 
                     hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] 
                     hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]" style="flex-grow: 1;"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img}) no-repeat center center;background-size: cover`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 normal-case font-semibold text-[#151515] text-ellipsis 
                        h-[50px] mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> <span class="recent-date">${renderComponent($$result, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="recent-author">${post.username}</span> </div> </li>`)} </ul> </div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/recent-block.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Articles;
  const { title, cla } = Astro2.props;
  let posts = [];
  try {
    const allclowsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, authors.username, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id where posts.published = 1 order by posts.created_at desc limit 20;`,
        args: []
      }
    );
    const allclows = allclowsResponse.rows;
    posts = allclows.map((post) => {
      return {
        published: false,
        title: post.title,
        slug: post.slug,
        img: post.img,
        created_at: post.created_at,
        username: post.username
      };
    });
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cla, "class")}> <div class="flex flex-row justify-between items-center self-center mb-4"> <h2 class="text-lg uppercase font-bold tracking-wide"> <a href="#" class="inline-flex gap-x-1">${title}</a> </h2> </div> <div class="flex flex-row flex-wrap gap-y-4 justify-between md:w-[90%] lg:w-full mx-auto"> ${posts.map((post) => renderTemplate`<article class="dark:bg-[#fcf0f0] sm:w-[90%] md:w-[31%] lg:w-[23.5%] max-w-[280px] min-w-[175px] dark:text-white  text-black pb-2.5 rounded overflow-hidden transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img}) no-repeat center center;background-size: cover;aspect-ratio: 4/3;`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 normal-case font-semibold text-[#151515] text-ellipsis h-[50px] text-pretty mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> <span class="recent-date">${renderComponent($$result, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="recent-author">${post.username}</span> </div> </article>`)} </div> </div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/articles.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Reggaeton", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Champeta", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Reggaeton", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Dancehall", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Article", $$Articles, { "title": "Recientes", "cla": "w-full md:w-[90%] sm:w-[90%] max-w-[1200px] min-w-[210px] justify-between bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/BMXDRP/CipoteLetra/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("http://localhost:4321");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const Session = await getSession(Astro2.request);
  const current = Astro2.url.searchParams.get("active") || "index";
  if (Session?.user?.name !== "bmxdrp" && Session?.user?.name !== "null") {
    Astro2.redirect("/");
  }
  return renderTemplate`${Session ? renderTemplate`<html><head>${renderHead()}</head><body><div class="p-4 sm:ml-64"></div>${current === "index" && renderTemplate`<div class="p-4 sm:ml-64"></div>`}${current === "stats" && renderTemplate`<h1>Stats</h1>`}${current === "comments" && renderTemplate`<h1>Comments</h1>`}${current === "pages" && renderTemplate`<h1>Pages</h1>`}${current === "config" ? renderTemplate`<h1>Config</h1>` : null}</body></html>` : renderTemplate`<html><head>${renderHead()}</head><body class="w-screen h-screen flex place-items-center justify-center"><button class="px-4 py-2 bg-black flex rounded-3xl  text-white" id="login">Sign in</button></body></html>`}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/index.astro", void 0);

const $$file$1 = "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/index.astro";
const $$url$1 = "/dashboard";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("http://localhost:4321");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search;
  const { cla, query } = Astro2.props;
  let posts = [];
  try {
    const allPostsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, authors.username, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id where (posts.title LIKE '%${query}%') or (posts.content LIKE '%${query}%') or (posts.category LIKE '%${query}%') and posts.published = 1 order by posts.created_at desc limit 4;`,
        args: []
      }
    );
    const allPosts = allPostsResponse.rows;
    posts = allPosts.map((post) => {
      return {
        published: false,
        title: post.title,
        slug: post.slug,
        img: post.img,
        created_at: post.created_at,
        username: post.username
      };
    });
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cla, "class")}> ${posts.length > 0 && renderTemplate`<div class=" flex flex-row justify-between items-center self-center mb-4"> <h2 class="text-lg uppercase font-bold tracking-wide inline-flex gap-x-2"> <svg class="h-5 self-center text-gray-600 dark:text-white/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span class="text-lg capitalize text-gray-700 dark:text-white/50 ">Resultados para:</span> ${query} </h2> </div>`} <div class="flex flex-row justify-between"> ${posts.length > 0 && posts.map((post) => renderTemplate`<article class="dark:bg-[#fcf0f0] dark:text-white text-black w-[23.5%] pb-2.5 rounded overflow-hidden inline-block transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img}) no-repeat center center;background-size: cover`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 normal-case font-semibold text-[#151515] text-ellipsis h-[50px] text-pretty mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> <span class="recent-date">${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="recent-author">${post.username}</span> </div> </article>`)} ${posts.length === 0 && renderTemplate`<p class="text-center mx-auto">No hay resultados para <strong>${query}</strong></p>`} </div> </div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/search.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const q = Astro2.url.searchParams.get("q");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", $$Search, { "query": q, "cla": "pvid recent-block max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/search/index.astro", void 0);

const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/search/index.astro";
const $$url = "/search";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SITE_TITLE as S, SITE_DESCRIPTION as a, index$1 as b, index as c, index$2 as i };
