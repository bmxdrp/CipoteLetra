/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_Y5ySfmIQ.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { c as client, $ as $$Layout } from './_slug__W7pNSD-l.mjs';

const $$Astro$1 = createAstro("https://cipoteletra.netlify.app");
const $$Search$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Search$1;
  const { cla, query } = Astro2.props;
  let posts = [];
  try {
    const allPostsResponse = await client.execute(
      {
        sql: `select posts.title, posts.slug, posts.img, posts.content, posts.created_at from posts where (posts.category like '%${query}%' or posts.title like '%${query}%' or posts.content like '%${query}%') and (posts.published = 1) order by posts.id desc;`,
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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cla, "class")}> ${posts.length > 0 && renderTemplate`<div class=" flex flex-row justify-between items-center self-center mb-4"> <h2 class="text-lg uppercase font-bold tracking-wide inline-flex gap-x-2"> <svg class="h-5 self-center text-gray-600 dark:text-white/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span class="text-lg capitalize text-gray-700 dark:text-white/50 ">Resultados para:</span> ${query} </h2> </div>`} <div class="inline-flex flex-wrap gap-5 justify-stretch md:w-[90%] lg:w-full mx-auto"> ${posts.length > 0 && posts.map((post) => renderTemplate`<article class="dark:bg-[#fcf0f0] sm:w-[90%] md:w-[31%] lg:w-[23.5%] max-w-[280px] min-w-[175px] dark:text-white  text-black pb-2.5 rounded-xl overflow-hidden transition-all hover:dark:shadow-[0_5px_20px_rgba(255,255,255,0.14),0_6px_6px_rgba(255,255,255,0.06)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.14),0_6px_6px_rgba(0,0,0,0.06)]"> <a class="recent-thumb"${addAttribute(`/post/${post.slug}/`, "href")}${addAttribute(`background:url(${post.img}) no-repeat center center;background-size: cover`, "style")}></a> <div class="recent-content"> <h3 class="hover:text-red-600 text-align-left text-base line-clamp-2 normal-case font-semibold text-[#151515] text-ellipsis h-[50px] text-pretty mt-3"> <a${addAttribute(`/post/${post.slug}/`, "href")}>${post.title}</a> </h3> </div> </article>`)} ${posts.length === 0 && renderTemplate`<p class="text-center mx-auto">No hay resultados para <strong>${query}</strong></p>`} </div> </div>`;
}, "C:/Users/BMXDRP/CipoteLetra/src/components/search.astro", void 0);

const $$Astro = createAstro("https://cipoteletra.netlify.app");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const q = Astro2.url.searchParams.get("q");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sear", $$Search$1, { "query": q, "cla": "pvid recent-block max-w-[1200px] bg-white dark:bg-[#010101]/40 dark:text-white text-[#2b2b2b] p-4 shadow-[0_2px_3px_rgba(0,0,0,0.06),0_3px_10px_rgba(0,0,0,0.1)] mx-auto my-10 rounded-md " })} ` })}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/search.astro", void 0);

const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
