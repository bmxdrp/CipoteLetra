/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead, e as addAttribute, u as unescapeHTML } from '../astro_Y5ySfmIQ.mjs';
import 'kleur/colors';
import 'cssesc';
import 'clsx';
import { g as getSession } from './__vXFX2kxr.mjs';
import { decode } from 'html-entities';
import { $ as $$BaseHead, a as $$Navbar, b as $$Footer, S as SITE_TITLE, c as SITE_DESCRIPTION } from './404_GBvCg13E.mjs';
/* empty css                           */
import { createClient } from '@libsql/client/web';
/* empty css                           */
import { createMarkdownProcessor } from '@astrojs/markdown-remark';

const $$Astro$7 = createAstro("https://cipoteletra.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> <main> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900|Roboto:300,400,500,700,900|Oswald:300,400,500,600,700,900&display=swap" media="all"> </body></html>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/layouts/layout.astro", void 0);

const client = createClient({
  url: "libsql://cuantaletradb-bmxdrp.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTMxVDA4OjE0OjU3LjE2Mzk5MjQ5NloiLCJpZCI6ImRmMDAxZjFhLWMwMGUtMTFlZS04OTdmLTgyMmIxNWEwYmQ4YyJ9.K4D-lxdMNHXihJDJ_9nNGh2NmG5lvNeM0A4eUHZTkr70T5rL8rjCBHdBhic1FqOuUCvSegJRcAf1tWRK1X2FDA"
});

const $$Astro$6 = createAstro("https://cipoteletra.netlify.app");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  const d = new Date(date).toLocaleDateString("en-US");
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toString(), "datetime")}> ${d} </time>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/FormattedDate.astro", void 0);

const $$Astro$5 = createAstro("https://cipoteletra.netlify.app");
const $$slug$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$slug$3;
  const query = Astro2.params.slug;
  const pag = Number(Astro2.url.searchParams.get("page")) || 0;
  const n = pag * 20;
  const allPosts = await client.execute({ sql: `select posts.title from posts where (posts.category like '${query}') or (posts.tags like '%${query}%') and (posts.published = 1) order by posts.id desc;`, args: [] });
  const Count = allPosts.rows.length;
  let prev;
  let next;
  let posts = [];
  if (Count < 20) {
    prev = "<a title='Regresar a Inicio' href='/'><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg> Inicio </button></a>";
  } else if (pag == 0 || pag - 1 == 0) {
    prev = "<a title='Regresar Inicio' href='/'><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg> Inicio </button></a>";
    next = "<a title='Entradas Antiguas' href=?page=" + (pag + 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Siguiente<svg class='w-3.5 h-3.5 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></button></a>";
  } else if ((pag + 1) * 20 > Count) {
    prev = "<a title='Entradas Recientes' href=?page=" + (pag - 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg>Anterior</button></a>";
    next = "<button class='opacity-70 cursor-default flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'>Ultima Pagina</button>";
  } else {
    prev = "<a title='Entradas Recientes' href=?page=" + (pag - 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg>Anterior</button></a>";
    next = "<a title='Entradas Antiguas' href=?page=" + (pag + 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Siguiente<svg class='w-3.5 h-3.5 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></button></a>";
  }
  try {
    const allclowsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, posts.content, posts.created_at from posts where (posts.category like '${query}') or (posts.tags like '%${query}%') and posts.published = 1 order by posts.id desc limit 20 offset ${n};`,
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
    return console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full md:w-[90%] sm:w-[90%] max-w-[1200px] min-w-[210px] justify-between bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md "> <div class="flex flex-row justify-between items-center self-center mb-4 mx-auto"> <h1 class="text-xl text-white/70 uppercase font-semibold tracking-wide">
Categoria: <strong class="text-white capitalize">${query}</strong> </h1> </div> <div class="inline-flex flex-wrap gap-5 justify-stretch md:w-[90%] lg:w-full mx-auto"> ${Count == 0 ? "No hay entradas" : posts.map((post) => renderTemplate`<article class="dark:bg-[#fcf0f0] sm:w-[90%] md:w-[31%] lg:w-[23.5%] max-w-[280px] min-w-[175px] dark:text-white  text-black pb-2.5 rounded-xl overflow-hidden transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img.replace("/s1600", "/s300")}) no-repeat center center;background-size: cover;`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 w-full normal-case font-semibold text-[#151515] text-ellipsis h-[50px] text-pretty mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> <span class="hidden">${renderComponent($$result2, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="hidden">${post.username}</span> </div> </article>`)} </div> <!-- Pagination --> <div class="flex flex-col items-center justify-between mt-6 mb-4 w-[90%] mx-auto"> <div class="inline-flex justify-between w-full"> <!-- Button Prev --> <div class="flex">${unescapeHTML(prev)}</div> <!-- Button Next --> <div class="flex">${unescapeHTML(next)}</div> </div> </div> </div>` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/category/[slug].astro", void 0);

const $$file$3 = "C:/Users/BMXDRP/CipoteLetra/src/pages/category/[slug].astro";
const $$url$3 = "/category/[slug]";

const _slug_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro("https://cipoteletra.netlify.app");
const $$slug$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$slug$2;
  const Session = await getSession(Astro2.request);
  if (Session?.user?.name !== "bmxdrp" && Session?.user?.name !== "null") {
    Astro2.redirect("/");
  }
  const query = Astro2.params.slug;
  let posts = [];
  try {
    const allclowsResponse = await client.execute(
      {
        sql: `select * from posts where posts.slug = '${query}';`,
        args: []
      }
    );
    const allclows = allclowsResponse.rows;
    posts = allclows.map((post) => {
      return {
        id: post.id,
        title: post.title,
        yt_id: post.yt_id,
        category: post.category,
        slug: post.slug,
        content: post.content,
        tags: post.tags,
        img: post.img,
        publish_date: post.publish_date,
        published: post.published
      };
    });
  } catch (error) {
    return console.log(error);
  }
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<script src="https://cdn.tiny.cloud/1/oaiulh6namhb2yh1iqvuygvjtj64l6k6i7flqph6ucjz2xy4/tinymce/6/tinymce.min.js" referrerpolicy="origin"><\/script><script type="text/javascript">
tinymce.init({
selector: 'textarea'
});
<\/script>`])), posts.map((post) => renderTemplate`${maybeRenderHead()}<form action="/dashboard/api/edit_post" method="post" enctype="multipart/form-data" class="text-gray-950 flex flex-row flex-wrap justify-between pb-10 text-center w-full max-w-[1200px] mx-auto"><div class="mt-8 w-full flex flex-col max-w-[800px]"><input type="text" id="title" name="post_title"${addAttribute(post.title, "value")} class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4"><!-- Text editor --><div class="mb-6 w-full"><textarea id="texteditor" name="post_content" class="texteditor w-full leading-5 relative py-3 px-5 rounded text-slate-800 bg-white border border-slate-300 focus:outline-none focus:border-slate-400 focus:ring-0 dark:text-slate-300 dark:bg-slate-700 dark:border-slate-700 dark:focus:border-slate-600" rows="3">${decode(post.content, { level: "html5" })}</textarea></div></div><div class="mt-8 w-full flex flex-col max-w-[349px]"><input type="hidden" id="id" name="post_id"${addAttribute(post.id, "value")}><label for="slug" class="inline-block mb-2 text-left">Slug</label><input type="text" id="slug" name="post_slug"${addAttribute(post.slug, "value")} class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required><label for="ytid" class="inline-block mb-2 text-left">Youtube ID</label><input type="text" id="ytid" name="post_yt_id"${addAttribute(post.yt_id, "value")} class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required><label for="category" class="inline-block mb-2 text-left">Genero</label><input type="text" id="category" name="post_category"${addAttribute(post.category, "value")} class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required><label for="tags" class="inline-block mb-2 text-left">Artistas</label><input type="text" id="tags" name="post_tags"${addAttribute(post.tags, "value")} class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required><label for="img" class="inline-block mb-2 text-left">Imagen Cover</label><input type="hidden" id="img" name="post_img"${addAttribute(post.img, "value")}><img loading="lazy"${addAttribute(post.img, "src")} class="w-full h-40 object-cover mb-4"><input type="file" id="img" name="file" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4"><label for="published" class="inline-block mb-2 text-left">Publicar?</label><select id="published" name="published" class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4" required>${post.published === true ? renderTemplate`<option value="1" selected>Si</option><option value="0">No</option>` : renderTemplate`<option value="1">Si</option><option value="0" selected>No</option>`}</select><button type="submit" class="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 focus:outline-none">Editar Letra</button></div></form>`));
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/edit/[slug].astro", void 0);

const $$file$2 = "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/edit/[slug].astro";
const $$url$2 = "/dashboard/edit/[slug]";

const _slug_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://cipoteletra.netlify.app");
const $$slug$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$slug$1;
  const pag = Number(Astro2.params.slug) || 0;
  const n = pag * 20;
  const allPosts = await client.execute({ sql: `select posts.title from posts where posts.published = 1;`, args: [] });
  const Count = allPosts.rows.length;
  let prev;
  let next;
  let posts = [];
  if (pag == 0 || pag - 1 == 0) {
    prev = "<a title='Entradas Recientes' href='/'><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg> Inicio </button></a>";
    next = "<a title='Entradas Antiguas' href=/page/" + (pag + 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Siguiente<svg class='w-3.5 h-3.5 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></button></a>";
  } else if ((pag + 1) * 20 > Count) {
    prev = "<a title='Entradas Recientes' href=/page/" + (pag - 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg>Anterior</button></a>";
    next = "<button class='opacity-70 cursor-default flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'>Ultima Pagina</button>";
  } else {
    prev = "<a title='Entradas Recientes' href=/page/" + (pag - 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'><svg class='w-3.5 h-3.5 me-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 5H1m0 0 4 4M1 5l4-4'/></svg>Anterior</button></a>";
    next = "<a title='Entradas Antiguas' href=/page/" + (pag + 1) + "><button class='flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>Siguiente<svg class='w-3.5 h-3.5 ms-2 rtl:rotate-180' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/></svg></button></a>";
  }
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
    return console.log(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full md:w-[90%] sm:w-[90%] max-w-[1200px] min-w-[210px] justify-between bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md "> <div class="flex flex-row justify-between items-center self-center mb-4 mx-auto"> <h1 class="text-xl uppercase font-bold tracking-wide"> <a href="#" class="inline-flex gap-x-1">Ultimas Entradas</a> </h1> </div> <div class="inline-flex flex-wrap gap-5 justify-stretch md:w-[90%] lg:w-full mx-auto"> ${posts.map((post) => renderTemplate`<article class="dark:bg-[#fcf0f0] sm:w-[90%] md:w-[31%] lg:w-[23.5%] max-w-[280px] min-w-[175px] dark:text-white  text-black pb-2.5 rounded-xl overflow-hidden transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img.replace("/s1600", "/s300")}) no-repeat center center;background-size: cover;`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 w-full normal-case font-semibold text-[#151515] text-ellipsis h-[50px] text-pretty mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> <span class="hidden">${renderComponent($$result2, "Date", $$FormattedDate, { "date": post.publish_date || post.created_at })}</span> <span class="hidden">${post.username}</span> </div> </article>`)} </div> <!-- Pagination --> <div class="flex flex-col items-center justify-between mt-6 mb-4 w-[90%] mx-auto"> <div class="inline-flex justify-between w-full"> <!-- Button Prev --> <div class="flex">${unescapeHTML(prev)}</div> <!-- Button Next --> <div class="flex">${unescapeHTML(next)}</div> </div> </div> </div>` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/page/[slug].astro", void 0);

const $$file$1 = "C:/Users/BMXDRP/CipoteLetra/src/pages/page/[slug].astro";
const $$url$1 = "/page/[slug]";

const _slug_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const symbol = Symbol.for('@astropub/md');

const shared = /** @type {Shared} */ (
	globalThis[symbol] || (
		globalThis[symbol] = {
			markdownConfig: {},
		}
	)
);

/** @typedef {import('./shared').Shared} Shared */

class HTMLString extends String {
	get [Symbol.toStringTag]() {
		return 'HTMLString'
	}
}

async function markdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const processor = await createMarkdownProcessor({
		...shared.markdownConfig,
		...Object(options),
	});

	const result = await processor.render(content);
	return new HTMLString(result.code);
}

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const processor = await createMarkdownProcessor({
		...shared.markdownConfig,
		...Object(options),
	});

	const result = await processor.render(content);

	return new HTMLString(
		result.code.indexOf("<p>") === 0 &&
		result.code.indexOf("</p>") === result.code.length - 4
			? result.code.slice(3, -4)
			: result.code,
	);
};

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */

const Markdown = Object.assign(
	function Markdown(result, attributes, slots) {
		return {
			get [Symbol.toStringTag]() {
				return 'AstroComponent'
			},
			async *[Symbol.asyncIterator]() {
				const mdl = attributes.of;

				if (typeof mdl === 'string') {
					yield await markdown(mdl, {
						fileURL: new URL(import.meta.url),
						contentDir: new URL('./', import.meta.url),
					});
				} else {
					yield renderSlot(result, slots.default);
				}
			},
		}
	},
	{
		isAstroComponentFactory: true,
		Inline: Object.assign(
			function MarkdownInline(result, attributes, slots) {
				return {
					get [Symbol.toStringTag]() {
						return 'AstroComponent'
					},
					async *[Symbol.asyncIterator]() {
						const mdl = attributes.of;

						if (typeof mdl === 'string') {
							yield await markdown.inline(mdl, {
								fileURL: new URL(import.meta.url),
								contentDir: new URL('./', import.meta.url),
							});
						} else {
							yield renderSlot(result, slots.default);
						}
					},
				}
			},
			{
				isAstroComponentFactory: true,
			}
		)
	}
);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://cipoteletra.netlify.app");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Base;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, pub, type, image } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": Astro2.url
    },
    "headline": title,
    "description": description,
    "image": image ? new URL(image, Astro2.url) : null,
    "author": {
      "@type": "Person",
      "name": "Cipote Letra",
      "url": "https://twitter.com/CuantaLetraCo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cipote Letra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/8xJF3H8/logo-cipote-letra.webp"
      }
    },
    "datePublished": pub
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="google-site-verification" content="MHWjcRAE35UhKYCm2-vZ4ynRXqvDalutZ2oowDaqDBI"><!-- Font preloads --><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", ' | Cipote Letra</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="fb:app_id" content="231604150229564"><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:locale" content="es_co"><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:creator" content="@CuantaLetraCo"><!-- LinkedIn --><meta name="author" content="CuantaLetraCo"><script type="application/ld+json">', "<\/script>"])), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(type, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), unescapeHTML(JSON.stringify(schema)));
}, "C:/Users/BMXDRP/CipoteLetra/src/components/Base.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://cipoteletra.netlify.app");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { id, title, content, category, yt_id, tags, created_at, img } = Astro2.props;
  let posts = [];
  try {
    const postResponse = await client.execute({
      sql: `select posts.title, posts.slug from posts left join authors on authors.id = posts.author_id where posts.id IN(${id} - 1, ${id} + 1) AND posts.published = 1;`,
      args: []
    });
    const allPosts = postResponse.rows;
    posts = allPosts.map((post) => {
      return {
        title: post.title,
        slug: post.slug
      };
    });
  } catch (error) {
  }
  const skills = tags.split(",");
  const strac = content.substring(0, 250) + "...";
  const prev = posts[0];
  const next = posts[1];
  const url = new URL(Astro2.url);
  const contentE = decode(content);
  return renderTemplate(_a || (_a = __template(['<html lang="es" prefix="og:http://ogp.me/ns#" data-astro-cid-bvzihdzo> <head>', "", "</head> <body data-astro-cid-bvzihdzo> ", ' <div class="w-full bg-black mb-8" data-astro-cid-bvzihdzo> <div class="w-full flex sm:flex-col md:flex-row justify-between mx-auto sm:px-4 md:px-0 sm:py-10 md:py-16 max-w-[1300px]" data-astro-cid-bvzihdzo> <div class="sm:flex sm:mx-auto md:inline-flex flex-col sm:order-1 md:order-2 sm:max-w-[640px] md:max-w-[330px] ml-2.5 sm:w-full md:w-[20%] " data-astro-cid-bvzihdzo> <span class="flex text-alink uppercase font-bold text-sm font-Roboto" data-astro-cid-bvzihdzo><a', " data-astro-cid-bvzihdzo>", '</a></span> <br data-astro-cid-bvzihdzo> <br data-astro-cid-bvzihdzo> <div class="flex text-white font-Oswald tracking-tight font-extrabold text-[2.1rem] leading-10" data-astro-cid-bvzihdzo> <span data-astro-cid-bvzihdzo> ', ' </span> <br data-astro-cid-bvzihdzo> <br data-astro-cid-bvzihdzo> </div> <span class="flex text-white font-Oswald tracking-wide font-semibold text-lg mt-10" data-astro-cid-bvzihdzo>\n!Letra Disponible Ya!\n</span> </div> ', ' </div> </div> <div class="flex sm:flex-col md:flex-row justify-between w-[90%] max-w-[1300px] mx-auto" data-astro-cid-bvzihdzo> <div class="sm:w-[95%] md:w-[69%] sm:mx-auto" data-astro-cid-bvzihdzo> <div class="p-2.5 relative overflow-hidden text-lg text-[#555] w-[90%] bg-white shadow-[4px_4px_15px_rgba(0,0,0,0.1)] mx-auto text-center rounded -mb-[80px]" data-astro-cid-bvzihdzo> <h1 class="text-3xl p-1 font-normal font-Roboto text-pretty text-center" data-astro-cid-bvzihdzo> ', ' </h1> <div class="font-semibold text-center capitalize text-sm py-1 " data-astro-cid-bvzihdzo> <span class="label-info" data-astro-cid-bvzihdzo> <i class="fa fa-tags fa-xs" data-astro-cid-bvzihdzo></i> ', ' </span> </div> </div> <div class="bg-white mt-10 mb-5 px-4 py-10 border-t-white font-normal text-gray-600 rounded-lg" itemprop="description articleBody" data-astro-cid-bvzihdzo> <br data-astro-cid-bvzihdzo> <div data-astro-cid-bvzihdzo>', '</div> </div> <div class="w-full overflow-hidden max-h-[120px] mx-auto bg-white px-4 py-6 rounded-md border-[#eee]  leading-normal mb-10" data-astro-cid-bvzihdzo> <ul class="flex flex-row justify-between" data-astro-cid-bvzihdzo> <li class="group text-left w-[49.5%] text-pretty p-[0.25em_0]" data-astro-cid-bvzihdzo> ', ' </li> <div class="sm:hidden md:flex w-0.5 bg-[#fff] shadow-2" data-astro-cid-bvzihdzo></div> <li class="group text-right border-r-[#ececec] w-[49.5%] text-pretty p-[0.25em_0]" data-astro-cid-bvzihdzo> ', ' </li> </ul> </div> <div class="bg-white my-2.5 py-5 border-t-white font-normal text-gray-600 rounded-lg" data-astro-cid-bvzihdzo> <h2 class="text-xl text-center" data-astro-cid-bvzihdzo>Si te pareci\xF3 interesante esta letra,\n<strong data-astro-cid-bvzihdzo>Comp\xE1rtela con tus Amigos!</strong><br data-astro-cid-bvzihdzo><br data-astro-cid-bvzihdzo>\u2014\u2014 COMPARTE EN LAS REDES SOCIALES \u2014\u2014\n</h2> <div class="compartir-post" data-astro-cid-bvzihdzo> <div class="share-wrapper" data-astro-cid-bvzihdzo> <ul class="p-[0 2.5em] mx-auto table text-center text-lg font-Roboto text-white h-10 font-normal" data-astro-cid-bvzihdzo> <li class="mb-1 float-left" data-astro-cid-bvzihdzo> <a', "", ' rel="nofollow" target="_blank" data-astro-cid-bvzihdzo> <span class="relative block p-[5px_8px] mb-2.5 transition-all ease-in-out duration-300 rounded-[5px_0_0_5px] bg-blue-700" data-astro-cid-bvzihdzo><i class="fa fa-facebook-f" data-astro-cid-bvzihdzo></i> Facebook</span></a> </li> <li class="mb-1 float-left" data-astro-cid-bvzihdzo> <a', "", ' rel="nofollow" target="_blank" data-astro-cid-bvzihdzo> <span class="relative block p-[5px_8px] mb-2.5 transition-all ease-in-out duration-300 bg-blue-500" data-astro-cid-bvzihdzo><i aria-hidden="true" class="fa fa-twitter" data-astro-cid-bvzihdzo></i> Twitter</span></a> </li> <li class="mb-1 float-left md:hidden" data-astro-cid-bvzihdzo> <a data-action="share/whatsapp/share"', "", ' rel="nofollow" target="_blank" title="Share this on Whatsapp" data-astro-cid-bvzihdzo> <span class="relative block p-[5px_8px] mb-2.5 transition-all ease-in-out duration-300 bg-green-600" data-astro-cid-bvzihdzo><i class="fa fa-whatsapp" data-astro-cid-bvzihdzo></i> Whatsapp</span></a> </li> <li class="mb-1 float-left" data-astro-cid-bvzihdzo> <a', "", ' rel="nofollow" target="_blank" data-astro-cid-bvzihdzo> <span class="relative block p-[5px_8px] mb-2.5 transition-all ease-in-out duration-300 bg-blue-600" data-astro-cid-bvzihdzo><i class="fa fa-linkedin" data-astro-cid-bvzihdzo></i> Linkedin</span></a> </li> <li class="mb-1 float-left" data-astro-cid-bvzihdzo> <a', "", ` rel="nofollow" data-astro-cid-bvzihdzo> <span class="relative block p-[5px_8px] mb-2.5 transition-all ease-in-out duration-300 rounded-[0_5px_5px_0] bg-red-700" data-astro-cid-bvzihdzo><i class="fa fa-pinterest" data-astro-cid-bvzihdzo></i> Pin It</span></a> </li> </ul> </div> </div> </div> <div class="relative shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] bg-[#ededed] bg-[url('https://i.ibb.co/NK17nG5/Pattern.webp')] bg-center bg-no-repeat my-5 py-5 border-t-white font-normal text-gray-600 rounded-lg" id="sub-wrap-wrapper" data-astro-cid-bvzihdzo> <div id="subscribe-css" data-astro-cid-bvzihdzo> <div id="subscribe-note-wrap" data-astro-cid-bvzihdzo> <p class="subscribe-note" data-astro-cid-bvzihdzo><span data-astro-cid-bvzihdzo>\xBFNo quieres esperar?</span> <span class="itatu" data-astro-cid-bvzihdzo>\xA1No hay problema!</span> </p> </div> <p class="group m-6 text-gray-900 text-[16px] leading-5 tracking-wide font-normal text-pretty" data-astro-cid-bvzihdzo>Suscr\xEDbete a <strong data-astro-cid-bvzihdzo>Cuanta Letra</strong> y recibe directamente en tu correo electr\xF3nico, las \xFAltimas publicaciones antes que los demas.</p> <div class="text-black text-[16px] leading-normal text-center transform-none font-normal w-full relative " data-astro-cid-bvzihdzo> <div class="clear-both block overflow-hidden m-[25px_auto]" data-astro-cid-bvzihdzo> <form action="https://feedburner.google.com/fb/a/mailverify?uri=cuantaletra" class="clear-both inline-block sm:w-[90%] md:w-full max-w-[680px] overflow-hidden border-2 border-black rounded-lg" id="subscribe-form" method="post" onsubmit="window.open ('https://feedburner.google.com/fb/a/mailverify?uri=cuantaletra', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true" target="popupwindow" data-astro-cid-bvzihdzo> <input name="uri" type="hidden" value="cuantaletra" data-astro-cid-bvzihdzo> <input name="loc" type="hidden" value="es_LA" data-astro-cid-bvzihdzo> <input autocomplete="off" class="bg-transparent text-black italic font-Oswald tracking-wider text-[17px] m-[10px_0] p-[15px_20px] w-[65%] border-none focus:outline-none " id="subscribe-css-email" name="email" placeholder="Ingresa tu correo" required="required" data-astro-cid-bvzihdzo> <input class="bg-black text-white cursor-pointer font-bold uppercase tracking-wider ml-[15px] transform-none text-[16px] border-none rounded-lg p-[18px_35px] h-full transition-all duration-700 hover:bg-alink hover:animate-pulse" title="" type="button" value="Subscribir" data-astro-cid-bvzihdzo></form> </div> </div> </div> </div></div> <aside class="flex order-2 sm:w-[90%] sm:mx-auto md:w-[29%] " data-astro-cid-bvzihdzo> <div class="sidebar-inner" data-astro-cid-bvzihdzo> <div class="sidebar section section" id="sidebar" data-astro-cid-bvzihdzo><div class="widget HTML" data-version="1" id="HTML1" data-astro-cid-bvzihdzo> <h2 class="title" data-astro-cid-bvzihdzo>Siguenos</h2> <div class="widget-content" data-astro-cid-bvzihdzo> <div id="___ytsubscribe_0" style="text-indent: 0px; margin: 0px; padding: 0px; background: transparent; border-style: none; float: none;
			 line-height: normal; font-size: 1px; vertical-align: baseline; display: inline-block; width: 171px; height: 48px;" data-astro-cid-bvzihdzo> <iframe ng-non-bindable="" style="position: static; top: 0px; width: 171px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 48px;" tabindex="0" width="100%" id="I0_1706669530212" name="I0_1706669530212" src="https://www.youtube.com/subscribe_embed?usegapi=1&channelid=UCB99FkL0JO9PI9yFeZXSOYw&layout=full&count=default&origin=https%3A%2F%2Fcuantaletra.blogspot.com&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.es.IhidRqNI7zc.O%2Fd%3D1%2Frs%3DAHpOoo-J5gm9VeiPOTqB-j7baT8zv-26Rg%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I0_1706669530212&_gfid=I0_1706669530212&parent=https%3A%2F%2Fcuantaletra.blogspot.com&pfname=&rpctoken=55145261" data-gapiattached="true" data-astro-cid-bvzihdzo></iframe></div> <hr data-astro-cid-bvzihdzo> <div class="fb-page" data-href="https://www.facebook.com/cuantaletra.co" data-width="" data-height="" data-small-header="yes" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-astro-cid-bvzihdzo><blockquote cite="https://www.facebook.com/cuantaletra.co" class="fb-xfbml-parse-ignore" data-astro-cid-bvzihdzo><a href="https://www.facebook.com/cuantaletra.co" data-astro-cid-bvzihdzo>CuantaLetra.Co</a></blockquote></div><hr data-astro-cid-bvzihdzo><iframe id="twitter-widget-0" allowtransparency="true" allowfullscreen="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 183px; height: 20px;" title="Twitter Follow Button" src="https://platform.twitter.com/widgets/follow_button.2f70fb173b9000da126c79afe2098f02.es.html#dnt=false&id=twitter-widget-0&lang=es&screen_name=CuantaLetraCo&show_count=false&show_screen_name=true&size=m&time=1706669531122" data-screen-name="CuantaLetraCo" data-astro-cid-bvzihdzo></iframe><script async="async" src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script> </div> <div class="clear" data-astro-cid-bvzihdzo></div> </div><div class="widget FeaturedPost" data-version="1" id="FeaturedPost1" data-astro-cid-bvzihdzo> <h2 class="title" data-astro-cid-bvzihdzo>Entrada destacada</h2> <div class="post-summary" data-astro-cid-bvzihdzo> <h3 data-astro-cid-bvzihdzo><a href="https://cuantaletra.blogspot.com/2020/08/letra-papas-de-mau-ricky.html" data-astro-cid-bvzihdzo>Letra - Pap\xE1s de Mau &amp; Ricky</a></h3> <img loading="lazy" class="image" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" data-astro-cid-bvzihdzo> </div>  <div class="clear" data-astro-cid-bvzihdzo></div> </div><div class="widget PopularPosts" data-version="1" id="PopularPosts1" data-astro-cid-bvzihdzo> <h2 data-astro-cid-bvzihdzo>Top 5 Semanal</h2> <div class="widget-content popular-posts" data-astro-cid-bvzihdzo> <ul data-astro-cid-bvzihdzo> <li data-astro-cid-bvzihdzo> <div class="item-content" data-astro-cid-bvzihdzo> <div class="item-thumbnail" data-astro-cid-bvzihdzo> <a href="https://cuantaletra.blogspot.com/2019/11/letra-salud-por-el-de-paola-jara.html" target="_blank" data-astro-cid-bvzihdzo> <img loading="lazy" alt="" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" width="80" height="60" data-astro-cid-bvzihdzo> </a> </div> <div class="item-title" data-astro-cid-bvzihdzo><a href="https://cuantaletra.blogspot.com/2019/11/letra-salud-por-el-de-paola-jara.html" data-astro-cid-bvzihdzo>Letra - Salud Por El de Paola Jara</a></div> <div class="item-snippet" data-astro-cid-bvzihdzo> Salud por el   por los ...</div> </div> </li> <li data-astro-cid-bvzihdzo> <div class="item-content" data-astro-cid-bvzihdzo> <div class="item-thumbnail" data-astro-cid-bvzihdzo> <a href="https://cuantaletra.blogspot.com/2016/09/letra-el-tambor-de-koffe-el-kafetero.html" target="_blank" data-astro-cid-bvzihdzo> <img loading="lazy" alt="" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" width="80" height="60" data-astro-cid-bvzihdzo> </a> </div> <div class="item-title" data-astro-cid-bvzihdzo><a href="https://cuantaletra.blogspot.com/2016/09/letra-el-tambor-de-koffe-el-kafetero.html" data-astro-cid-bvzihdzo>Letra - El Tambor de Koffe el Kafetero</a></div> <div class="item-snippet" data-astro-cid-bvzihdzo> Me quedo contigo una ...</div> </div> </li> <li data-astro-cid-bvzihdzo> <div class="item-content" data-astro-cid-bvzihdzo> <div class="item-thumbnail" data-astro-cid-bvzihdzo> <a href="https://cuantaletra.blogspot.com/2019/12/letra-el-conteo-de-dandy-bway.html" target="_blank" data-astro-cid-bvzihdzo> <img loading="lazy" alt="" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" width="80" height="60" data-astro-cid-bvzihdzo> </a> </div> <div class="item-title" data-astro-cid-bvzihdzo><a href="https://cuantaletra.blogspot.com/2019/12/letra-el-conteo-de-dandy-bway.html" data-astro-cid-bvzihdzo>Letra - El Conteo de Dandy Bway</a></div> <div class="item-snippet" data-astro-cid-bvzihdzo> Cinco son mis dedos y a ...</div> </div> </li> <li data-astro-cid-bvzihdzo> <div class="item-content" data-astro-cid-bvzihdzo> <div class="item-thumbnail" data-astro-cid-bvzihdzo> <a href="https://cuantaletra.blogspot.com/2016/10/letra-besame-de-luister-la-voz.html" target="_blank" data-astro-cid-bvzihdzo> <img loading="lazy" alt="" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" width="80" height="60" data-astro-cid-bvzihdzo> </a> </div> <div class="item-title" data-astro-cid-bvzihdzo><a href="https://cuantaletra.blogspot.com/2016/10/letra-besame-de-luister-la-voz.html" data-astro-cid-bvzihdzo>Letra - Besame de Luister la Voz</a></div> <div class="item-snippet" data-astro-cid-bvzihdzo> Besame despacio y ...</div> </div> </li> <li data-astro-cid-bvzihdzo> <div class="item-content" data-astro-cid-bvzihdzo> <div class="item-thumbnail" data-astro-cid-bvzihdzo> <a href="https://cuantaletra.blogspot.com/2015/03/letra-el-dilema-de-zaider.html" target="_blank" data-astro-cid-bvzihdzo> <img loading="lazy" alt="" src="https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png" width="80" height="60" data-astro-cid-bvzihdzo> </a> </div> <div class="item-title" data-astro-cid-bvzihdzo><a href="https://cuantaletra.blogspot.com/2015/03/letra-el-dilema-de-zaider.html" data-astro-cid-bvzihdzo>Letra - El Dilema de Zaider</a></div> <div class="item-snippet" data-astro-cid-bvzihdzo> Me hablo mi ...</div> </div> </li> </ul> </div> </div><div class="widget HTML" data-version="1" id="HTML3" data-astro-cid-bvzihdzo> <h2 class="title" data-astro-cid-bvzihdzo>Random</h2> <div class="widget-content" data-astro-cid-bvzihdzo> <div id="abt-random" data-astro-cid-bvzihdzo> <a href="#random" id="luckyNum" rel="203" style="background: url(&quot;https://3.bp.blogspot.com/-YcM4gHFmC9I/VtQiPmamGMI/AAAAAAAAQOA/HIOgzbUPQts/s1600/random-post-link.png&quot;); max-width: 300px; width: 100%; max-height: 100px; height: 100px; display: flex;" data-astro-cid-bvzihdzo></a></div> </div> <div class="clear" data-astro-cid-bvzihdzo></div> </div><div class="widget LinkList" data-version="2" id="LinkList70" data-astro-cid-bvzihdzo></div><div class="widget LinkList" data-version="2" id="LinkList71" data-astro-cid-bvzihdzo></div></div> </div></aside> </div> `, ' <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"> <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900|Roboto:300,400,500,700,900|Oswald:300,400,500,600,700,900&display=swap" media="all"> <script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js"><\/script> </body> </html>'])), renderComponent($$result, "Base", $$Base, { "title": title, "description": strac, "image": img, "pub": created_at, "type": "article", "data-astro-cid-bvzihdzo": true }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-bvzihdzo": true }), addAttribute(`/category/${category}`, "href"), category, title, renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": yt_id, "videotitle": title, "class": "sm:order-2 md:order-1 sm:flex md:inline-flex sm:w-[100%] md:max-w-[960px] sm:h-[400px] md:w-[77%] md:h-[540px]", "data-astro-cid-bvzihdzo": true }), title, skills.map((tag) => renderTemplate`<a class="text-alink p-0.5 me-2 hover:text-hlink"${addAttribute(`/category/${tag}`, "href")} rel="tag" data-astro-cid-bvzihdzo>${tag}</a>`), unescapeHTML(contentE), !next ? renderTemplate`<span class="text-hlink tracking-normal font-semibold p-[5px_8px] mb-2.5 no-underline transition-all duration-300 ease-in-out" data-astro-cid-bvzihdzo>Esta es la ultima Publicacion</span>` : renderTemplate`<a class="text-[#cfcfcf] font-bold tracking-wider decoration-transparent outline-none transition-all duration-300"${addAttribute(`/post/${next.slug}`, "href")} title="Entrada más reciente" data-astro-cid-bvzihdzo><strong data-astro-cid-bvzihdzo><i class="fa fa-chevron-left" data-astro-cid-bvzihdzo></i> Siguiente </strong><br data-astro-cid-bvzihdzo> <span class="text-alink group-hover:text-hlink tracking-normal font-semibold p-[5px_8px] mb-2.5 no-underline transition-all duration-300 ease-in-out" data-astro-cid-bvzihdzo> ${next.title}</span> </a>`, !prev ? renderTemplate`<span class="text-hlink tracking-normal font-semibold p-[5px_8px] mb-2.5 no-underline transition-all duration-300 ease-in-out" data-astro-cid-bvzihdzo>Esta es la ultima Publicacion</span>` : renderTemplate`<a class="text-[#cfcfcf] font-bold tracking-wider decoration-transparent outline-none transition-all duration-300"${addAttribute(`/post/${prev.slug}`, "href")} title="Entrada más reciente" data-astro-cid-bvzihdzo><strong data-astro-cid-bvzihdzo>Anterior <i class="fa fa-chevron-right" data-astro-cid-bvzihdzo></i></strong><br data-astro-cid-bvzihdzo> <span class="text-alink group-hover:text-hlink tracking-normal font-semibold p-[5px_8px] mb-2.5 no-underline transition-all duration-300 ease-in-out" data-astro-cid-bvzihdzo> ${prev.title}</span> </a>`, addAttribute(`//www.facebook.com/sharer.php?u=${url}&t=${title}`, "href"), addAttribute(`window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;`, "onclick"), addAttribute(`//twitter.com/share?url=${url}&title=${title}`, "href"), addAttribute(`window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;`, "onclick"), addAttribute(`whatsapp://send?text=${title} en ${url}`, "href"), addAttribute(`window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;`, "onclick"), addAttribute(`//www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, "href"), addAttribute(`window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;`, "onclick"), addAttribute(`//pinterest.com/pin/create/button/?url=${url}&description=${title}`, "href"), addAttribute(`window.open(this.href, 'windowName', 'width=550, height=600, left=24, top=24, scrollbars, resizable'); return false;`, "onclick"), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true }));
}, "C:/Users/BMXDRP/CipoteLetra/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://cipoteletra.netlify.app");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let post = null;
  if (!slug) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  try {
    const postResponse = await client.execute({
      sql: "select posts.id, posts.content, posts.published, posts.title, posts.yt_id, posts.category, posts.slug, posts.img, posts.tags, posts.created_at, authors.username, authors.slug, authors.avatar, authors.twitter from posts left join authors on authors.id = posts.author_id where posts.slug = ? and posts.published = 1;",
      args: [slug]
    });
    if (!postResponse.rows.length) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    const blogPostData = postResponse.rows[0];
    if (!blogPostData) {
      return new Response(null, {
        status: 404,
        statusText: "Not found"
      });
    }
    post = {
      id: blogPostData.id,
      content: blogPostData.content,
      published: blogPostData.published,
      title: blogPostData.title,
      yt_id: blogPostData.yt_id,
      category: blogPostData.category,
      slug: blogPostData.slug,
      img: blogPostData.img,
      tags: blogPostData.tags,
      created_at: blogPostData.created_at,
      author: {
        username: blogPostData.username,
        slug: blogPostData.slug,
        avatar: blogPostData.avatar,
        email: blogPostData.email,
        socials: {
          twitter: blogPostData.twitter
        },
        created_at: blogPostData.created_at
      }
    };
  } catch (error) {
  }
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Markdown", Markdown, { "of": post?.content || "" })} ` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/post/[slug].astro", void 0);

const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_$3 as _, $$FormattedDate as a, _slug_$2 as b, client as c, _slug_$1 as d, _slug_ as e };
