export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  abilities: { ability: { name: string } }[]
  types: { type: { name: string } }[]
  stats: { base_stat: number; stat: { name: string } }[]
  sprites: {
    front_default: string
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
}

types: Array<{
  type: {
    name: string
  }
}>
stats: Array<{
  base_stat: number
  stat: {
    name: string
  }
}>
abilities: Array<{
  ability: {
    name: string
  }
}>

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: Array<{
    name: string
    url: string
  }>
}
