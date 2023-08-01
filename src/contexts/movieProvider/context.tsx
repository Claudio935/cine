import { createContext} from 'react'
import { Action, PropsUserContextState } from './interfaces';


 export  interface PropsUserContext  {
    state: PropsUserContextState;
    setState: React.Dispatch<Action>;
    
  }
export const defaultValue = {
    state:{
      movieSelect:{
    
      },
      arrayMovies:[],
     ingresso:{
      sala: null,
      horario: null,
      cadeiras:[]
     },
    
    },
   
    setState: ()=>{}
}
export const MovieContext = createContext<PropsUserContext >(defaultValue)