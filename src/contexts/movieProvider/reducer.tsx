import { Action, PropsUserContextState } from "./interfaces";
import { types } from "./types";

export const reducer = (state: PropsUserContextState, action: Action) => {
 

  switch (action.type) {
    case types.TYPE_UPDATE_MOVIE:
      if (!action.payload.movieSelect) {
        return { ...state };
      }
      return { ...state, movieSelect: action.payload.movieSelect };
    case types.TYPE_UPDATE_MOVIE_ARRAY:
      if (Array.isArray(action.payload.arrayMovies)) {
        return { ...state, arrayMovies: action.payload.arrayMovies  };
      }
      return { ...state };
      case types.TYPE_UPDATE_CADEIRA:
      if (!!action.payload.ingresso?.cadeiras) {
        return { ...state, ingresso:{
          ...action.payload.ingresso,
          cadeiras:action.payload.ingresso.cadeiras
        }    };
      }
      return { ...state };
      case types.TYPE_UPDATE_SALA_HORARIO:
        if (!!action.payload?.ingresso?.sala) {
          return { ...state, ingresso:{
            ...action.payload.ingresso,
            horario:action.payload.ingresso.horario,
            sala: action.payload.ingresso.sala}
          }   };
        
        return { ...state };
        
       

    default:
      break;
  }
  return { ...state };
};
