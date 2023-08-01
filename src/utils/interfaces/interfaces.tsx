export interface Movie {
    id?: number;
    title?: string;
    overview?: string;
    poster_path?: string | null;
    release_date?: string;
    genre_ids?: number[];
    vote_average?: number;
    vote_count?: number;
    backdrop_path?: string;
    actors?:[{profile_path?:string}];
    directors?:[{name?:string}];
  
    // Outras propriedades que você desejar adicionar
  }

  export interface Credits {
    actors:[{ profile_path: string; name:string;}];
    directors:[]
   
  }