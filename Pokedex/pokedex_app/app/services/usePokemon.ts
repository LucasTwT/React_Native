import { useState, useEffect } from "react"
import type {  DataPokemon } from "../types.d.ts"

export function usePokemon({ pokemonName }: { pokemonName: string | null }) {
  const API_POKEAPI = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokemon, setPokemon] = useState<DataPokemon>() // -> pokemon buscado
  const getPokemonData = (dataJson): DataPokemon => {
    try {

      return {
        name: dataJson.forms['0'].name,
        imgs: Object.values(dataJson.sprites).filter(img => typeof img == 'string'),
        pokemonType: dataJson.types['0'].type.name,
        weight: dataJson.weight,
        abilities: Object.keys(dataJson.abilities).map(key => dataJson.abilities[key].ability.name)
      }
    } catch (e) {
      throw new Error("Error en la request")
    }
  }

  useEffect(() => {
    if (pokemonName != null) {
      const API = API_POKEAPI + pokemonName
      fetch(API).then(respose => respose.json()).then(res => setPokemon(getPokemonData(res)))

    }
  }, [pokemonName])
  return { pokemon, setPokemon }
}
