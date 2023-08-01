import { Action, Payload } from "./interfaces"
import { types } from "./types"

export const loadMovies = (dispatch: React.Dispatch<Action>, payload:Payload) =>{
  dispatch({type: types.TYPE_UPDATE_MOVIE, payload: payload})
}
export const loadArrayMovies = (dispatch: React.Dispatch<Action>, payload:Payload) =>{
  dispatch({type: types.TYPE_UPDATE_MOVIE_ARRAY, payload: payload})
}
export const loadArrayCadeira = (dispatch: React.Dispatch<Action>, payload:Payload) =>{
  dispatch({type: types.TYPE_UPDATE_CADEIRA, payload: payload})
}
export const loadSalaHorario = (dispatch: React.Dispatch<Action>, payload:Payload) =>{
  dispatch({type: types.TYPE_UPDATE_SALA_HORARIO, payload: payload})
}


