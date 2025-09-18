import { useState, useEffect } from "react"
import type { DataPokemon } from "../types.d.ts"

export function usePokemon({ pokemonName }: { pokemonName: string | null }) {
  const API_POKEAPI = "https://pokeapi.co/api/v2/pokemon/"
  const [pokemon, setPokemon] = useState<DataPokemon>()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const getPokemonData = (dataJson: any): DataPokemon => {
    return {
      name: dataJson.forms[0].name,
      imgs: Object.values(dataJson.sprites).filter(
        (img) => typeof img === "string"
      ) as string[],
      pokemonType: dataJson.types[0].type.name,
      weight: dataJson.weight,
      abilities: dataJson.abilities.map(
        (a: any) => a.ability.name
      ),
    }
  }

  useEffect(() => {
    if (!pokemonName) return

    const fetchPokemon = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(API_POKEAPI + pokemonName.toLowerCase())

        if (!res.ok) {
          const text = await res.text()
          throw new Error(`Error ${res.status}: ${text}`)
        }

        const json = await res.json()
        setPokemon(getPokemonData(json))
      } catch (e: any) {
        setError(e.message)
        setPokemon(undefined)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [pokemonName])

  return { pokemon, setPokemon, error, loading }
}
