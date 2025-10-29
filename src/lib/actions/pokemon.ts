// src/lib/actions/pokemon.ts
'use server'

import { getPokemonList, getPokemonByName } from '@/lib/api/pokemon'

export async function fetchPokemonList(limit = 20, offset = 0) {
  return await getPokemonList(limit, offset)
}

export async function fetchPokemonDetails(name: string) {
  return await getPokemonByName(name)
}
