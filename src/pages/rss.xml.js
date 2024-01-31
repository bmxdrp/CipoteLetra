import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { client } from '../lib/tursoDb.ts';

let posts = [];
try {
  const allPostsResponse = await client.execute({
    sql: "select posts.title, posts.description, posts.slug, posts.img, authors.first_name, authors.last_name, authors.slug as author_slug, authors.avatar, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id order by posts.created_at desc;",
    args: [],
  });
  posts = allPostsResponse.rows.map((post) => {
    return {
      published: false,
      title: post.title,
      description: post.description,
      slug: post.slug,
      img: post.hero,
      created_at: post.created_at,
      publish_date: post.publish_date,
      author: {
        first_name: post.first_name,
        last_name: post.last_name,
        slug: post.slug,
        avatar: post.avatar
      }
    }
  });
} catch (error) {
  // TODO: Handle error and notify user
}

export function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date((post.publish_date || post.created_at) * 1000),
      description: post.description,
      link: '/post/${post.slug}/',
    })),
    customData: '<language>es</language>',
  });
}