export interface Author {
    id?: number;
    username: string;
    bio?: string;
    slug: string;
    email?: string;
    socials?: Socials;
    youtube?: string;
    avatar: string;
    created_at?: number;
    posts?: Blog[];
  }
  
  export interface Blog {
    id?: number;
    title: string;
    yt_id: string;
    category: string;
    slug: string;
    content?: string;
    img: string;
    tags: string;
    author?: Author;
    created_at: number;
    publish_date?: number;
    published?: boolean;
  }

  export interface CreatePost {
    id?: number;
    title: string;
    yt_id: string;
    category: string;
    slug: string;
    content?: string;
    img: string;
    tags: string;
    author?: Author;
    created_at?: number;
    publish_date?: string;
    published?: boolean;
  }

  export interface prev {
    id?: number;
    title: string;
    slug: string;
  }
  
  export interface Recent {
    id?: number;
    title: string;
    category?: string;
    slug: string;
    img: string;
    username: string;
    created_at: number;
    publish_date?: number;
    published?: boolean;
  }

  export interface All {
    id?: number;
    title: string;
    category?: string;
    slug: string;
    img: string;
    username: string;
    created_at: number;
    publish_date?: number;
    published?: boolean;
  }

  export interface Socials {
    twitter?: string;
    website?: string;
  }