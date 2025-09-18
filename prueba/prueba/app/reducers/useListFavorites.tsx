import { useCallback } from "react";
import { Action, DropDownOptions, InitialState } from "../types.d";

export const initialState: InitialState = { savedPokemon: [], filterOptions: [], filterSelected: ''}

export function reducer (state: InitialState, action: Action): InitialState {
    const {savedPokemon} = state 
    switch (action.type){
        case "ADD_POKEMON":
            if (savedPokemon.some((pokemon) => pokemon.name === action.payload.name) ) return state
            return {
                ...state, 
                savedPokemon: savedPokemon.concat(action.payload)
            }
        case "REMOVE_POKEMON":
            if (savedPokemon.length === 0) return state
            return {
                ...state,
                savedPokemon: savedPokemon.filter((pokemon) => pokemon.name !== action.payload.name)
            }
        case "REFRESH_FILTER_OPTIONS":
            if (savedPokemon.length === 0) return state
            const uniqueTypes = new Set(savedPokemon.map((pokemon) => pokemon.pokemonType))
            const options: DropDownOptions[] = []
            uniqueTypes.forEach((opt) => {
                options.push({label: opt, value: opt})
            }
            )
            return {
                ...state,
                filterOptions: options 
            }
        case "SELECT_FILTER":
            return {
                ...state,
                filterSelected: action.payload
            }

        default:
            return state
    }
}
