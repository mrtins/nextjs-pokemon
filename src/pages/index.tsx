import PokemonCard from '@/components/PokemonCard/PokemonCard';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = ({ pokemonList }: any) => {
  console.log({ pokemonList });
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs Pokemon</title>
      </Head>

      <main className="container p-5 mx-auto">
        <h1 className="text-4xl text-center mb-8">Pokedex</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {pokemonList.map(({ name }: any) => (
            <PokemonCard key={name} name={name} />
          ))}
        </div>
      </main>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  console.log('getServerSideProps');
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { pokemonList: data.results } };
}

// export async function getStaticProps() {
//   console.log('getStaticProps');
//   // Fetch data from external API

//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { pokemonList: data.results } };
// }

export default Home;
