export interface Author {
    id?: number;
    first_name: string;
    last_name: string;
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
    description: string;
    category: string;
    slug: string;
    content?: string;
    img: string;
    author?: Author;
    created_at: number;
    publish_date?: number;
    published?: boolean;
  }
  
  export interface Recent {
    id?: number;
    title: string;
    category?: string;
    slug: string;
    img: string;
    first_name: string;
    last_name: string;
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
    first_name: string;
    last_name: string;
    created_at: number;
    publish_date?: number;
    published?: boolean;
  }

  export interface Socials {
    twitter?: string;
    website?: string;
  }