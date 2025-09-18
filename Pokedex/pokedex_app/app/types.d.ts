export interface DataPokemon {
    name: string
    imgs: string[]
    pokemonType: string
    weight: number
    abilities: string[]
}

export interface pokemonContext {
    state: InitialState,
    addPokemon: (pokemon: DataPokemon) => void,
    removePokemon: (pokemon: DataPokemon) => void,
    refreshFilterOptions: () => void,
    selectFilter: (string) => void
}
export interface InitialState {
    savedPokemon: DataPokemon[],
    filterOptions: DropDownOptions[],
    filterSelected: string
}

export interface DropDownOptions {
    label: string,
    value: string
}

export type Action  =
    | {type: 'ADD_POKEMON' | 'REMOVE_POKEMON', payload: DataPokemon } 
    | { type: 'REFRESH_FILTER_OPTIONS', payload: {}}
    | { type: 'SELECT_FILTER', payload: string }

export interface StyleButton {
    padding: number,
    backgroundColor: string,
    width: string | number
    margin: number
}