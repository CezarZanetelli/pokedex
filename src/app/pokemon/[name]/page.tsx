import Image from "next/image";
import Link from "next/link";
import { getPokemonByName } from "../../../lib/api/pokemon";

type Props = {
  params: Promise<{ name: string }>;
};

export default async function PokemonPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await getPokemonByName(name);

  const artwork =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto text-white">
      <Link href="/" className="text-blue-400 underline">
        ← Voltar
      </Link>

      <div className="flex flex-col items-center mt-6">
        <Image
          src={artwork}
          alt={pokemon.name}
          width={240}
          height={240}
          priority
        />
        <h1 className="text-3xl font-bold mt-4 capitalize">
          #{pokemon.id} {pokemon.name}
        </h1>
        <p className="mt-2 text-gray-300">Peso: {pokemon.weight / 10} kg</p>
      </div>
    </main>
  );
}
