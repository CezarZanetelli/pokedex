// src/lib/api/pokemon.ts
import { PokemonListResponse, Pokemon } from '@/lib/types/pokemon'

const BASE_URL = 'https://pokeapi.co/api/v2'

export async function getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
  const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
  if (!res.ok) throw new Error('Erro ao buscar lista de Pokémon')
  return res.json()
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`)
  if (!res.ok) throw new Error(`Erro ao buscar Pokémon: ${name}`)
  return res.json()
}
