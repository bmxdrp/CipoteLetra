/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as renderComponent, g as renderHead } from '../astro_Y5ySfmIQ.mjs';
import 'kleur/colors';
import 'cssesc';
import { c as client, a as $$FormattedDate, $ as $$Layout } from './_slug__W7pNSD-l.mjs';
import 'clsx';
import { g as getSession } from './__vXFX2kxr.mjs';
import { d as $$Logo } from './404_GBvCg13E.mjs';

const $$Astro$e = createAstro("https://cipoteletra.netlify.app");
const $$Rss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Rss;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="rss"><circle cx="3" cy="13" r="2"></circle><path d="M1 5.667v2.667A6.674 6.674 0 0 1 7.667 15h2.666c0-5.146-4.187-9.333-9.333-9.333z"></path><path d="M1 1v2.667C7.25 3.667 12.334 8.75 12.334 15H15C15 7.28 8.72 1 1 1z"></path></svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/rss.astro", void 0);

const $$Astro$d = createAstro("https://cipoteletra.netlify.app");
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)} viewBox="0 0 512 512"><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path></svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/arrow-right.astro", void 0);

const $$Astro$c = createAstro("https://cipoteletra.netlify.app");
const $$RecentBlock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$RecentBlock;
  const { category, cla } = Astro2.props;
  let posts = [];
  try {
    const allPostsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, authors.username, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id where posts.category ="${category}" and posts.published = 1 order by posts.id desc limit 4;`,
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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cla, "class")}><div class="flex flex-row justify-between items-center self-center mb-4"><h2 class="text-lg uppercase font-bold tracking-wide"><a${addAttribute(`/category/${category}`, "href")} class="inline-flex gap-x-1">${renderComponent($$result, "RssIcon", $$Rss, { "class": "h-4 self-center" })}${category}</a></h2><a class="float-right text-[13px] font-semibold bg-red-600 text-white py-1 px-3 rounded uppercase top-0 inline-flex gap-x-1 hover:animate-bounce"${addAttribute(`/category/${category}`, "href")}>Ver Todas ${renderComponent($$result, "RightIcon", $$ArrowRight, { "class": "h-3.5 self-center" })}</a></div><ul class="flex flex-wrap lg:flex-nowrap gap-4 justify-stretch overflow-hidden">${posts.map((post) => renderTemplate`<li class="dark:bg-[#fcf0f0] sm:w-[90%] md:w-[31%] lg:w-[23.5%] max-w-[280px] min-w-[175px] dark:text-white  text-black pb-2.5 rounded-xl overflow-hidden transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"><a class="recent-thumb2"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img}) no-repeat center center;background-size: cover`, "style")}></a><div class="recent-content2"><h3 class="hover:text-red-600 text-align-left px-2 text-base line-clamp-2 normal-case font-semibold text-[#151515] text-ellipsis h-[50px] mt-3"><a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a></h3><span class="hidden">${renderComponent($$result, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span><span class="hidden">${post.username}</span></div></li>`)}</ul></div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/recent-block.astro", void 0);

const $$Astro$b = createAstro("https://cipoteletra.netlify.app");
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Articles;
  const { title, cla, page = 0 } = Astro2.props;
  const n = page * 20;
  let posts = [];
  try {
    const allclowsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, authors.username, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id where posts.published = 1 order by posts.id desc limit 20 offset ${n};`,
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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cla, "class")}> <div class="flex flex-row justify-between items-center self-center mb-4"> <h2 class="text-lg uppercase font-bold tracking-wide"> <a href="#" class="inline-flex gap-x-1">${title}</a> </h2> </div> <div class="flex flex-row flex-wrap gap-y-4 justify-between md:w-[90%] lg:w-full mx-auto"> ${posts.map((post) => renderTemplate`<article class="dark:bg-[#fcf0f0] sm:w-[90%] md:w-[31%] lg:w-[23.5%] max-w-[280px] min-w-[175px] dark:text-white  text-black pb-2.5 rounded-xl overflow-hidden transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img.replace("/s1600", "/s300")}) no-repeat center center;background-size: cover;aspect-ratio: 1/1;`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 w-full normal-case font-semibold text-[#151515] text-ellipsis h-[50px] text-pretty mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> <span class="hidden">${renderComponent($$result, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="hidden">${post.username}</span> </div> </article>`)} </div> </div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/articles.astro", void 0);

const $$Astro$a = createAstro("https://cipoteletra.netlify.app");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Reggaeton", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Champeta", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Recent", $$RecentBlock, { "category": "Dancehall", "cla": "pvid recent-block sm:w-[90%] md:w-[90%] max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${renderComponent($$result2, "Article", $$Articles, { "title": "Recientes", "cla": "w-full md:w-[90%] sm:w-[90%] max-w-[1200px] min-w-[210px] justify-between bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ${maybeRenderHead()}<div class="w-full md:w-[90%] sm:w-[90%] max-w-[1200px] min-w-[210px] x_rgba(0,0,0,0.1)] mx-auto"> <div class="flex flex-col items-end mb-10 -mt-4"><div class="inline-flex mt-2 xs:mt-0"><a${addAttribute(`/page/1`, "href")}><button class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Más Letras<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></button></a> </div> </div></div> ` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/BMXDRP/CipoteLetra/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://cipoteletra.netlify.app");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { username, avatar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 order-1 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"> <div class="px-3 py-3 lg:px-5 lg:pl-3"> <div class="flex items-center justify-between"> <div class="flex items-center justify-start rtl:justify-end"> <button data-drawer-target="logo-sidebar" id="navbar-button" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"> <span class="sr-only">Open sidebar</span> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path> </svg> </button> <a href="/" class="flex ms-2 md:me-24"> ${renderComponent($$result, "Logo", $$Logo, { "alt": "Cipote Letra Logo", "class": "h-8 text-red-700 dark:text-white" })} </a> </div> <div class="flex items-center"> <div class="flex items-center ms-3"> <div> <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" id="navbar-button1"> <span class="sr-only">Open user menu</span> <img loading="lazy" class="w-8 h-8 rounded-full"${addAttribute(avatar, "src")} alt="user photo"> </button> </div> <div class="z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-[60px] right-[10px] hidden" id="dropdown-user"> <div class="px-4 py-3" role="none"> <p class="text-sm text-gray-900 dark:text-white" role="none">${username}</p> </div> <ul class="py-1" role="none"> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Editar Usuario</a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a> </li> <li> <a href="#" id="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Salir</a> </li> </ul> </div> </div> </div> </div> </div> </nav>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/dashboard/navbar.astro", void 0);

const $$Astro$8 = createAstro("https://cipoteletra.netlify.app");
const $$PostCount = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PostCount;
  const allPostsResponse = await client.execute({ sql: `select posts.title from posts;`, args: [] });
  return renderTemplate`${allPostsResponse.rows.length}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/dashboard/post_count.astro", void 0);

const $$Astro$7 = createAstro("https://cipoteletra.netlify.app");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { current } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside id="default-sidebar" class="sticky top-[65px] order-2 z-40 w-64 h-[calc(100vh-65px)]  transition-transform bg-white border-r border-gray-200 sm:hidden dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar"> <div class="h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"> <ul class="space-y-2 font-medium" id="default-tab"> <li> <a href="?active=create"${addAttribute(current === "create" ? "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white  group bg-gradient-to-br transition duration-500 ease-in-out from-purple-600 to-blue-500" : "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", "class")}> <svg${addAttribute(current === "index" ? "flex-shrink-0 ml-4 size-6 self-center text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" : "flex-shrink-0 size-6 self-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.66 122.88" fill="currentColor"> <path d="M81.81,70.82a22.72,22.72,0,0,1,19,35.15l9.83,10.71-6.78,6.2L94.4,112.45A22.72,22.72,0,1,1,81.81,70.82ZM72.38,96.06a2.59,2.59,0,0,1-.32-.42,2.34,2.34,0,0,1-.25-.47,3,3,0,0,1,4.34-3.75,2,2,0,0,1,.47.35h0c.83.79,1.09,1,2,1.77l.79.71,7.37-7.85c2.73-2.8,7.08,1.31,4.36,4.18l-9,9.53-.4.42a3,3,0,0,1-4.21.19l0,0c-.2-.19-.41-.39-.63-.58L75.4,98.79c-1.2-1-1.89-1.61-3-2.73ZM19.78,65.28a2.8,2.8,0,0,1-2.64-2.89,2.74,2.74,0,0,1,2.64-2.89H42.42a2.8,2.8,0,0,1,2.65,2.89,2.76,2.76,0,0,1-2.65,2.89Zm65.1-47.7h9.5a6.66,6.66,0,0,1,4.78,2,6.73,6.73,0,0,1,2,4.78v37c-.21,2.12-5.41,2.15-5.85,0v-37a.94.94,0,0,0-1-1H84.85v38c-.51,1.93-4.84,2.21-5.82,0V6.78a1,1,0,0,0-.27-.69,1,1,0,0,0-.69-.27H6.74a1,1,0,0,0-.68.27.93.93,0,0,0-.28.69V87.36a.94.94,0,0,0,1,1H49.27c2.93.3,3,5.37,0,5.82H22.05v10.8a1,1,0,0,0,.28.69,1,1,0,0,0,.69.27H49.27c2.13.24,2.81,5.07,0,5.82H23.05a6.66,6.66,0,0,1-4.78-2,6.73,6.73,0,0,1-2-4.78V94.14H6.78a6.66,6.66,0,0,1-4.78-2,6.73,6.73,0,0,1-2-4.78V6.78A6.66,6.66,0,0,1,2,2,6.71,6.71,0,0,1,6.78,0H78.1a6.7,6.7,0,0,1,4.79,2,6.74,6.74,0,0,1,2,4.78v10.8ZM19.75,28.78a2.8,2.8,0,0,1-2.65-2.89A2.75,2.75,0,0,1,19.75,23H65a2.8,2.8,0,0,1,2.65,2.89A2.76,2.76,0,0,1,65,28.78Zm0,18.25a2.8,2.8,0,0,1-2.65-2.89,2.75,2.75,0,0,1,2.65-2.89H65a2.8,2.8,0,0,1,2.65,2.89A2.76,2.76,0,0,1,65,47ZM93.89,81.46a17.06,17.06,0,1,0,5,12.07,17,17,0,0,0-5-12.07Z"></path></svg> <span class="flex-1 ms-3 whitespace-nowrap">Crear Entrada</span> </a> </li> <hr> <li> <a href="?active=index"${addAttribute(current === "index" ? "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white  group bg-gradient-to-br transition duration-500 ease-in-out from-purple-600 to-blue-500" : "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", "class")}> <svg${addAttribute(current === "index" ? "flex-shrink-0 ml-4 size-6 self-center text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" : "flex-shrink-0 size-6 self-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "class")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.66 122.88" fill="currentColor"> <path d="M81.81,70.82a22.72,22.72,0,0,1,19,35.15l9.83,10.71-6.78,6.2L94.4,112.45A22.72,22.72,0,1,1,81.81,70.82ZM72.38,96.06a2.59,2.59,0,0,1-.32-.42,2.34,2.34,0,0,1-.25-.47,3,3,0,0,1,4.34-3.75,2,2,0,0,1,.47.35h0c.83.79,1.09,1,2,1.77l.79.71,7.37-7.85c2.73-2.8,7.08,1.31,4.36,4.18l-9,9.53-.4.42a3,3,0,0,1-4.21.19l0,0c-.2-.19-.41-.39-.63-.58L75.4,98.79c-1.2-1-1.89-1.61-3-2.73ZM19.78,65.28a2.8,2.8,0,0,1-2.64-2.89,2.74,2.74,0,0,1,2.64-2.89H42.42a2.8,2.8,0,0,1,2.65,2.89,2.76,2.76,0,0,1-2.65,2.89Zm65.1-47.7h9.5a6.66,6.66,0,0,1,4.78,2,6.73,6.73,0,0,1,2,4.78v37c-.21,2.12-5.41,2.15-5.85,0v-37a.94.94,0,0,0-1-1H84.85v38c-.51,1.93-4.84,2.21-5.82,0V6.78a1,1,0,0,0-.27-.69,1,1,0,0,0-.69-.27H6.74a1,1,0,0,0-.68.27.93.93,0,0,0-.28.69V87.36a.94.94,0,0,0,1,1H49.27c2.93.3,3,5.37,0,5.82H22.05v10.8a1,1,0,0,0,.28.69,1,1,0,0,0,.69.27H49.27c2.13.24,2.81,5.07,0,5.82H23.05a6.66,6.66,0,0,1-4.78-2,6.73,6.73,0,0,1-2-4.78V94.14H6.78a6.66,6.66,0,0,1-4.78-2,6.73,6.73,0,0,1-2-4.78V6.78A6.66,6.66,0,0,1,2,2,6.71,6.71,0,0,1,6.78,0H78.1a6.7,6.7,0,0,1,4.79,2,6.74,6.74,0,0,1,2,4.78v10.8ZM19.75,28.78a2.8,2.8,0,0,1-2.65-2.89A2.75,2.75,0,0,1,19.75,23H65a2.8,2.8,0,0,1,2.65,2.89A2.76,2.76,0,0,1,65,28.78Zm0,18.25a2.8,2.8,0,0,1-2.65-2.89,2.75,2.75,0,0,1,2.65-2.89H65a2.8,2.8,0,0,1,2.65,2.89A2.76,2.76,0,0,1,65,47ZM93.89,81.46a17.06,17.06,0,1,0,5,12.07,17,17,0,0,0-5-12.07Z"></path></svg> <span class="flex-1 ms-3 whitespace-nowrap">Entradas</span> <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800
                 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">${renderComponent($$result, "Count", $$PostCount, {})}</span> </a> </li> <li> <a href="?active=stats"${addAttribute(current === "stats" ? "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white  group bg-gradient-to-br transition duration-500 ease-in-out from-purple-600 to-blue-500" : "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", "class")}> <svg${addAttribute(current === "stats" ? "flex-shrink-0 ml-4 size-7 self-center text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" : "flex-shrink-0 size-7 -ml-1 self-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "class")} fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"> <path d="M5.998 5h-0.987v23h20v-0.963l-18.996-0.049-0.017-21.988zM8.011 25h5v-10.875l-5 5v5.875zM14.011 25h5v-9.875l-2 2-3-3v10.875zM20.011 25h5v-15.187l-5 5v10.187zM13.387 11.067l3.62 3.6 7.148-7.112 1.834 1.844-0.044-4.399-4.415 0.023 1.717 1.722-6.242 6.26-3.689-3.703-5.623 5.604 0.939 0.912 4.755-4.751z"></path> </svg> <span class="flex-1 ms-2 whitespace-nowrap">Estadisticas</span> </a> </li> <li> <a href="?active=comments"${addAttribute(current === "comments" ? "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white  group bg-gradient-to-br transition duration-500 ease-in-out from-purple-600 to-blue-500" : "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", "class")}> <svg${addAttribute(current === "comments" ? "flex-shrink-0 ml-4 size-5 self-center text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" : "flex-shrink-0 size-5 self-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "class")} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"> <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12
              c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4
              V4C64,1.789,62.211,0,60,0z"></path> </svg> <span class="flex-1 ms-3 whitespace-nowrap">Comentarios</span> </a> </li> <li> <a href="?active=pages"${addAttribute(current === "pages" ? "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white  group bg-gradient-to-br transition duration-500 ease-in-out from-purple-600 to-blue-500" : "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", "class")}> <svg${addAttribute(current === "pages" ? "flex-shrink-0 ml-4 size-5 self-center text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" : "flex-shrink-0 size-5 self-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "class")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20"> <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"></path> </svg> <span class="flex-1 ms-3 whitespace-nowrap">Paginas</span> </a> </li> <li> <a href="?active=config"${addAttribute(current === "config" ? "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white  group bg-gradient-to-br transition duration-500 ease-in-out from-purple-600 to-blue-500" : "flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group", "class")}> <svg${addAttribute(current === "config" ? "flex-shrink-0 ml-4 size-5 self-center text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" : "flex-shrink-0 size-5 self-center text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "class")} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M23.265,24.381l.9-.894c4.164.136,4.228-.01,4.411-.438l1.144-2.785L29.805,20l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89,2.936-3.038,2.765-3.461L28.538,9.225c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166,20.166,0,0,0-.141-4.106l-.116-.263-2.974-1.3c-.438-.2-.592-.272-3.4,2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149,3.182c-.433.175-.586.237-.418,4.437l-.893.89c-4.162-.136-4.226.012-4.407.438L2.285,11.733,2.195,12l.094.232c.049.12.194.48,2.8,2.962l0,1.3c-3,2.89-2.935,3.038-2.763,3.462l1.138,2.817c.174.431.236.584,4.369.476l.9.935a20.243,20.243,0,0,0,.137,4.1l.116.265,2.993,1.308c.435.182.586.247,3.386-2.8l1.262.016c2.895,3.09,3.043,3.03,3.466,2.859l2.759-1.115C23.288,28.644,23.44,28.583,23.265,24.381ZM11.407,17.857a4.957,4.957,0,1,1,6.488,2.824A5.014,5.014,0,0,1,11.407,17.857Z"></path></svg> <span class="flex-1 ms-3 whitespace-nowrap">Configuracion</span> </a> </li> <hr> <li> <a href="/" target="_blank" class="flex items-center p-2 pl-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"> <svg class="size-4 " viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -959.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M15.732,809.137 L21.547,803.322 C21.859,803.01 22.393,803.222 22.406,803.663 L22.444,805.029 C22.46,805.581 22.92,806 23.472,806 L23.25,806 C23.802,806 24,805.524 24,804.972 L24,801 C24,799.9 23.1,799 22,799 L18.483,799 C17.93,799 17,799.425 17,799.977 L17,799.98 C17,800.532 17.647,800.994 18.199,801.009 L19.733,801.05 C20.174,801.061 20.387,801.595 20.076,801.907 L14.289,807.723 C13.899,808.113 13.913,808.746 14.304,809.137 C14.694,809.527 15.341,809.528 15.732,809.137 M24,812.011 L24,817.015 C24,818.117 23.55,819 22.448,819 L6.44,819 C5.338,819 4,818.117 4,817.015 L4,801.007 C4,799.904 5.338,799 6.44,799 L11.444,799 C11.996,799 12.444,799.448 12.444,800 C12.444,800.553 11.996,801 11.444,801 L7.444,801 C6.892,801 6,801.458 6,802.011 L6,815.015 C6,816.117 7.338,817 8.44,817 L21.444,817 C21.996,817 22,816.563 22,816.011 L22,812.011 C22,811.458 22.447,811.011 23,811.011 C23.552,811.011 24,811.458 24,812.011" id="send_round-[#1569]"></path> </g> </g> </g> </svg> <span class="flex-1 ms-3 whitespace-nowrap">Ver pagina</span> </a> </li> </ul> </div> </aside>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/dashboard/sidebar.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://cipoteletra.netlify.app");
const $$NewPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$NewPost;
  const Session = await getSession(Astro2.request);
  if (Session?.user?.name !== "bmxdrp" && Session?.user?.name !== "null") {
    Astro2.redirect("/");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<form action="/dashboard/api/create_post" method="post" enctype="multipart/form-data" class="text-gray-950 flex flex-row flex-wrap justify-between pb-10 text-center w-full max-w-[1200px] mx-auto"> <div class="mt-8 w-full flex flex-col max-w-[800px]"> <label for="title" class="inline-block mb-2 text-left">Titulo</label> <input type="text" id="title" name="post_title" placeholder="Titulo" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required> <!-- Text editor --> <div class="mb-6"> <label for="texteditor" class="inline-block mb-2 text-left">Content</label> <textarea id="texteditor" name="post_content" class="texteditor w-full leading-5 relative py-3 px-5 rounded text-slate-800 bg-white border border-slate-300 focus:outline-none focus:border-slate-400 focus:ring-0 dark:text-slate-300 dark:bg-slate-700 dark:border-slate-700 dark:focus:border-slate-600" rows="3"></textarea> </div> </div> <div class="mt-8 w-full flex flex-col max-w-[349px]"> <label for="ytid" class="inline-block mb-2 text-left">Youtube ID</label> <input type="text" id="ytid" name="post_yt_id" placeholder="dsWdsdsS3" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required> <label for="category" class="inline-block mb-2 text-left">Genero</label> <input type="text" id="category" name="post_category" placeholder="Champeta, Dancehall, etc" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required> <label for="tags" class="inline-block mb-2 text-left">Artistas</label> <input type="text" id="tags" name="post_tags" placeholder="Champeta, Dancehall, etc" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required> <label for="img" class="inline-block mb-2 text-left">Imagen Cover</label> <input type="file" id="img" name="file" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required> <label for="published" class="inline-block mb-2 text-left">Publicar?</label> <select id="published" name="published" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required> <option value="" selected>Seleccionar</option> <option value="1">Si</option> <option value="0">No</option> </select> <button type="submit" class="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 focus:outline-none">Agregar Letra</button> </div> </form> <link rel="stylesheet" href=""> <script src="https://cdn.tiny.cloud/1/oaiulh6namhb2yh1iqvuygvjtj64l6k6i7flqph6ucjz2xy4/tinymce/6/tinymce.min.js" referrerpolicy="origin"><\/script> <script type="text/javascript">
        tinymce.init({
  selector: 'textarea'
});
        <\/script>`])), maybeRenderHead());
}, "C:/Users/BMXDRP/CipoteLetra/src/components/dashboard/new_post.astro", void 0);

const $$Astro$5 = createAstro("https://cipoteletra.netlify.app");
const $$Edit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Edit;
  return renderTemplate`<!--?xml version="1.0" ?-->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/edit.astro", void 0);

const $$Astro$4 = createAstro("https://cipoteletra.netlify.app");
const $$Delete = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Delete;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?-->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/delete.astro", void 0);

const $$Astro$3 = createAstro("https://cipoteletra.netlify.app");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Stats;
  return renderTemplate`<!--?xml version="1.0" encoding="utf-8"?-->${maybeRenderHead()}<svg fill="currentColor"${spreadAttributes(Astro2.props)} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 13.25V1.5H.5v12a1.24 1.24 0 0 0 1.22 1H15.5v-1.25z"></path><path d="M3.15 8H4.4v3.9H3.15zm3.26-4h1.26v7.9H6.41zm3.27 2h1.25v5.9H9.68zm3.27-3.5h1.25v9.4h-1.25z"></path></svg>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/icons/stats.astro", void 0);

const $$Astro$2 = createAstro("https://cipoteletra.netlify.app");
const $$AllArticlesCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AllArticlesCopy;
  let posts = [];
  try {
    const allclowsResponse = await client.execute({ sql: `SELECT * FROM posts FULL JOIN visitas ON posts.id = visitas.post_id ORDER BY posts.id DESC`, args: [] });
    const allclows = allclowsResponse.rows;
    posts = allclows.map((post) => {
      return {
        id: post.id,
        published: post.published,
        title: post.title,
        slug: post.slug,
        content: post.content,
        yt_id: post.yt_id,
        category: post.category,
        tags: post.tags,
        img: post.img,
        created_at: post.created_at,
        count: post.count
      };
    });
  } catch (error) {
  }
  return renderTemplate`${maybeRenderHead()}<div class="text-gray-950 flex flex-col flex-wrap justify-center items-center pb-10 text-center w-full max-w-[1200px] mx-auto"> <ul> ${posts.map((post) => renderTemplate`<li class="relative my-2"> <div class="flex flex-row h-24 max-w-5xl flex-wrap items-center border text-black rounded-lg shadow-lg shadow-black/20 border-gray-400 bg-gray-200 hover:bg-white hover:border-green-700"> <img loading="lazy" class="absolute left-0 top-0 bottom-0 object-cover rounded-l-lg h-24 w-24"${addAttribute(post.img, "src")}${addAttribute(post.title, "alt")}> <div class="relative mt-0 ml-28 flex justify-between leading-normal w-full mx-auto"> <h5 class="mb-2 text-left text-lg font-normal w-3/4 leading-none tracking-tight text-gray-900 text-wrap overflow-hidden">${post.title}</h5> <span class="mb-2 text-md font-normal w-1/4 tracking-tight text-gray-900 overflow-hidden capitalize text-right mr-4">${post.category}</span> </div> <div class="relative mb-0 ml-28 flex justify-start items-center leading-normal w-full mx-auto"> <span class="text-left font-normal text-gray-700 w-44">${post.published ? "Publicado" : "Borrador"} • ${renderComponent($$result, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="font-normal text-gray-700 w-60 h-6 text-left overflow-hidden">${post.tags}</span> </div> <div class="absolute right-4 bottom-2 gap-x-2 text-right font-normal text-gray-700 w-24 inline-flex items-center justify-end"> <a${addAttribute(`/dashboard/edit/${post.slug}`, "href")} title="Editar entrada">${renderComponent($$result, "Edit", $$Edit, { "class": "size-4 inline-flex" })}</a> <a onclick="return confirm('¿Seguro que quieres borrar esta entrada?')"${addAttribute(`/dashboard/delete?slug=${post.slug}`, "href")} title="Eliminar entrada">${renderComponent($$result, "Delete", $$Delete, { "class": "size-4 inline-flex" })}</a> <span class="font-normal text-gray-700 text-left inline-flex items-center justify-center overflow-hidden">${post.count ? `${post.count} ` : "0 "} ${renderComponent($$result, "Stats", $$Stats, { "class": "size-4 ml-1" })}</span> </div> </div> </li>`)}</ul></div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/dashboard/all_articles_copy.astro", void 0);

const $$Astro$1 = createAstro("https://cipoteletra.netlify.app");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { current, username, avatar } = Astro2.props;
  return renderTemplate`<html lang="es" prefix="og: http://ogp.me/ns#"> <head>${current === "create" && renderTemplate`<title>Nueva Entrada | Cipote Letra</title>`}${current === "index" && renderTemplate`<title>Dashboard | Cipote Letra</title>`}${current === "stats" && renderTemplate`<title>Estadisticas | Cipote Letra</title>`}${current === "comments" && renderTemplate`<title>Comentarios | Cipote Letra</title>`}${current === "pages" && renderTemplate`<title>Paginas | Cipote Letra</title>`}${current === "config" ? renderTemplate`<title>Configuracion | Cipote Letra</title>` : null}<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="flex flex-row flex-wrap items-stretch justify-start overflow-hidden"> ${renderComponent($$result, "Navbar_dash", $$Navbar, { "username": username, "avatar": avatar })} ${renderComponent($$result, "Sidebar_dash", $$Sidebar, { "current": current })} ${current === "create" && renderTemplate`<main id="main" class="absolute top-[65px] left-[255px] bottom-0 right-0 inline-block order-3 transition-transform mx-auto overflow-y-scroll"> ${renderComponent($$result, "NewPost", $$NewPost, {})} </main>`}${current === "index" && renderTemplate`<main id="main" class="absolute top-[65px] left-[255px] bottom-0 right-0 inline-block order-3 transition-transform mx-auto overflow-y-scroll"> ${renderComponent($$result, "AllArticles", $$AllArticlesCopy, {})} </main>`}${current === "stats" && renderTemplate`<main id="main" class="block order-3 transition-transform p-4"> <h1>Index</h1> </main>`}${current === "comments" && renderTemplate`<main id="main" class="block order-3 transition-transform p-4"> <h1>Index</h1> </main>`}${current === "pages" && renderTemplate`<main id="main" class="block order-3 transition-transform p-4"> <h1>Index</h1> </main>`}${current === "config" ? renderTemplate`<main id="main" class="block order-3 transition-transform p-4"> <h1>Index</h1> </main>` : null} </body></html>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/layouts/Dashboard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://cipoteletra.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const Session = await getSession(Astro2.request);
  const user = Session?.user?.name || "";
  const ava = Session?.user?.image || "";
  const cur = Astro2.url.searchParams.get("active") || "index";
  return renderTemplate(_a || (_a = __template(["", '<script type="text/javascript">\n    var mainListDiv = document.getElementById("default-sidebar"),\n        mainListDiv1 = document.getElementById("dropdown-user"),\n        mainListDiv2 = document.getElementById("main"),\n        mediaButton = document.getElementById("navbar-button"),\n        mediaButton1 = document.getElementById("navbar-button1");\n mediaButton.onclick = function () {\n  mainListDiv.classList.toggle("hidden");\n  mainListDiv2.classList.toggle("");\n };\n mediaButton1.onclick = function () {\n     mainListDiv1.classList.toggle("hidden");\n    \n };\n  <\/script>'])), Session ? renderTemplate`${renderComponent($$result, "Dashboard", $$Dashboard, { "username": user, "avatar": ava, "current": cur })}` : renderTemplate`<html><head>${renderHead()}</head><body class="w-screen h-screen flex place-items-center justify-center"><button class="px-4 py-2 bg-black flex rounded-3xl  text-white" id="login">Sign in</button></body></html>`);
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/index.astro", void 0);

const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
