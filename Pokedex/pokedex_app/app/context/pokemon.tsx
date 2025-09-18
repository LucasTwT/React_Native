import { createContext, useReducer } from "react";
import { DataPokemon, pokemonContext } from "../types";
import { initialState, reducer } from "../reducers/useListFavorite";

export const PokemonFavoriteContext = createContext<pokemonContext | undefined>(undefined)

function useListFavoriteReducer () {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const addPokemon = (pokemon: DataPokemon) => dispatch({type: 'ADD_POKEMON', payload: pokemon})
    const removePokemon = (pokemon: DataPokemon) => dispatch({type: 'REMOVE_POKEMON', payload: pokemon})
    const refreshFilterOptions = () => dispatch({type: 'REFRESH_FILTER_OPTIONS', payload: {}})
    const selectFilter = (type: string) => dispatch({ type: 'SELECT_FILTER', payload: type})
    return { state, addPokemon, removePokemon, refreshFilterOptions, selectFilter }
}

export function PokemonFavorite ({ children } : { children : React.ReactNode}) {
    return (
        <PokemonFavoriteContext.Provider value={useListFavoriteReducer()}>
            {children}
        </PokemonFavoriteContext.Provider>
    )
}