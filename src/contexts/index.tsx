import {useReducer} from "react"
import { MovieContext, defaultValue } from "./movieProvider/context";
import { reducer } from "./movieProvider/reducer";

interface Props {
   
    children: JSX.Element,
  };


export const MovieProvider = ({children}:Props) =>{
    const [state, setState] = useReducer(reducer, defaultValue.state)
    return<MovieContext.Provider value={{state, setState}}>{children}</MovieContext.Provider>
}