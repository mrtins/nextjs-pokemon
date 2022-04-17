import Image from 'next/image';
import Link from 'next/link';

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${name}`} passHref>
      <div className="font-mono bg-emerald-500 flex flex-col items-center p-3 shadow-lg rounded hover:scale-105 hover:cursor-pointer transition duration-200">
        <>
          <Image
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            alt="Pikachu"
            width={52}
            height={52}
          />
          <h3 className="font-semibold">{name}</h3>

          <div className="font-thin text-sm">
            <span className="px-1">20 atk</span>
            <span className="px-1">10 def</span>
          </div>
        </>
      </div>
    </Link>
  );
}
