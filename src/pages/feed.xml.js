import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts';
import { client } from '@/lib/tursoDb.ts';

let posts = [];
try {
  const allPostsResponse = await client.execute({
    sql: "select posts.title, posts.category, posts.slug, posts.content, posts.img, authors.username, authors.slug as author_slug, authors.avatar, posts.content, posts.created_at from posts left join authors on authors.id = posts.author_id where posts.published = '1' order by posts.id desc;",
    args: [],
  });
  posts = allPostsResponse.rows.map((post) => {
    const extraida = post.content.substring(0, 250) + '...';
    return {
      published: false,
      title: post.title,
      description: extraida,
      category: post.category,
      slug: post.slug,
      img: post.img,
      created_at: post.created_at,
      publish_date: post.publish_date,
      author: {
        username: post.username,
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
    stylesheet: '/pretty.xsl',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: (post.publish_date || post.created_at),
      categories: [post.category],
      description: post.description,
      link: `/post/${post.slug}/`,
      source: {title: post.title, url: `${context.site}post/${post.slug}/`},
    })),
    customData: `<language>es-co</language>
    <image>
    <url>/logo.svg</url>
    <title>${SITE_TITLE}</title>
    <link>/</link>
  </image>
  `,
    
  });
 
}