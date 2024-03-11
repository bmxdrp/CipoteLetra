/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate } from '../astro_Y5ySfmIQ.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { v2 } from 'cloudinary';
import { c as client } from './_slug__W7pNSD-l.mjs';
import { encode } from 'html-entities';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://cipoteletra.netlify.app");
const $$CreatePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreatePost;
  v2.config({
    cloud_name: "cipoteletra",
    api_key: "373999983319195",
    api_secret: "zPY5RJzG1wKBveoxON0zFtXB51c"
  });
  const uploadStream = async (buffer, options) => {
    return new Promise((resolve, reject) => {
      v2.uploader.upload_stream(options, (error, result2) => {
        if (error)
          return reject(error);
        resolve(result2);
      }).end(buffer);
    });
  };
  let result;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const file = data.get("file");
    const arrayBuffer = await file.arrayBuffer();
    const uit8Array = new Uint8Array(arrayBuffer);
    const response = await uploadStream(uit8Array, {
      folder: "imagenes"
    });
    const slugEncode = function(input) {
      return input.replace(/ - /g, "-").replace(/[^\w]/gi, " ").replace(/  /g, " ").replace(/ /g, "-");
    };
    result = response;
    const post_title = data.get("post_title");
    const post_content = encode(data.get("post_content")?.toString(), { level: "html5" });
    const post_slug = slugEncode(post_title).toLowerCase();
    const post_yt_id = data.get("post_yt_id");
    const post_category = data.get("post_category")?.toString().toLowerCase();
    const post_tags = data.get("post_tags")?.toString().toLowerCase();
    const date = Date.now();
    const published = data.get("published");
    await client.execute(
      {
        sql: `INSERT INTO posts (title, content, slug, yt_id, category, tags, img, author_id, created_at, published_date, published) 
      VALUES ("${post_title}", "${post_content}", "${post_slug}", "${post_yt_id}", "${post_category}", "${post_tags}", "${result.secure_url}", "1", "${date}", "${date}", ${published});`,
        args: []
      }
    );
  }
  return renderTemplate`${result ? renderTemplate(_a || (_a = __template(["<script>\n    window.location.replace(`/dashboard/`);\n    </script>"], ["<script>\n    window.location.replace(\\`/dashboard/\\`);\n    </script>"]))) : ""}`;
}, "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/api/create_post.astro", void 0);
const $$file = "C:/Users/BMXDRP/CipoteLetra/src/pages/dashboard/api/create_post.astro";
const $$url = "/dashboard/api/create_post";

export { $$CreatePost as default, $$file as file, $$url as url };
