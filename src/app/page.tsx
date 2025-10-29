import { fetchPokemonList } from '@/lib/actions/pokemon'
import PokemonCard from '@/components/pokemon/PokemonCard'

export default async function HomePage() {
  const data = await fetchPokemonList(20, 0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">⚡Pokédex do Cezinha⚡</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.results.map((pokemon) => {
          const id = pokemon.url.split('/').filter(Boolean).pop()
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          return <PokemonCard key={pokemon.name} name={pokemon.name} image={image} />
        })}
      </div>
    </main>
  )
}
