/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_Y5ySfmIQ.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { c as client } from './_slug__W7pNSD-l.mjs';
import { encode } from 'html-entities';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://cipoteletra.netlify.app");
const $$EditPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EditPost;
  let result;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const id = data.get("post_id");
    const title = data.get("post_title");
    const content = encode(data.get("post_content")?.toString(), { level: "html5" });
    const slug = data.get("post_slug");
    const yt_id = data.get("post_yt_id");
    const category = data.get("post_category")?.toString().toLowerCase();
    const tags = data.get("post_tags")?.toString().toLowerCase();
    const date = Date.now();
    const published = data.get("published");
    await client.execute(
      {
        sql: `UPDATE posts 
      SET title = "${title}",
         content = "${content}", 
         slug = "${slug}", 
         yt_id = "${yt_id}", 
         category = "${category}", 
         tags = "${tags}", 
         published_date = "${date}", 
         published = ${published} 
      WHERE id = "${id}";`,
        args: []
      }
    ).catch((error) => console.log(error)).finally(() => {
      result = true;
    });
  }
  return renderTemplate`${result ? renderTemplate(_a || (_a = __template(["<script>window.location.replace(`/dashboard`);<\/script>"], ["<script>window.location.replace(\\`/dashboard\\`);<\/script>"]))) : "ERROR"}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/api/edit_post.astro", void 0);

const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/api/edit_post.astro";
const $$url = "/dashboard/api/edit_post";

export { $$EditPost as default, $$file as file, $$url as url };
