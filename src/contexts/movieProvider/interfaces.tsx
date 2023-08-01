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
    runtime?: string;
  }
  export interface Payload {
    movieSelect?:Movie;
      arrayMovies?:Movie[];
     cadeiras?:String[];
     ingresso?:{
      sala:String | null;
      horario: String | null;
      cadeiras:String[]  ;
     },
  }
  export interface Action{
    type:string;
    payload: Payload
  }

    
    
    export  interface PropsUserContextState  {
      movieSelect:Movie;
      arrayMovies: Movie[];
      ingresso:{
        sala:String | null;
        horario: String | null;
        cadeiras:String[] ;
       },
    }