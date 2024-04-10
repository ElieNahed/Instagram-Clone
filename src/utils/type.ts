export interface iUserData {
    name: string;
    avatar: string;
    followers: number;
    following: number;
    bio: string;
    posts: iPostData[];
  }
  
  export interface iPostData {
    id: string;
    image: string;
    caption: string;
  }