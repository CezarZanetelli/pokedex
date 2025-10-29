'use client'

import Image from 'next/image'
import Link from 'next/link'

interface PokemonCardProps {
  name: string
  image: string
}

export default function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <Link
      href={`/pokemon/${name}`}
      className="flex flex-col items-center bg-white/10 p-4 rounded-2xl shadow-lg hover:scale-105 transition"
    >
      <Image src={image} alt={name} width={100} height={100} />
      <p className="capitalize mt-2 text-white text-lg font-semibold">{name}</p>
    </Link>
  )
}
