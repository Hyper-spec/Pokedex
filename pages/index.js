import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'


export async function getStaticProps() {
  var pokemon_limit = 251

  const api_url = `https://pokeapi.co/api/v2/pokemon`

  const res = await fetch(`${api_url}?limit=${pokemon_limit}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })


  return {
    props: {
      pokemons: data.results,
    }
  }

}

export default function Home( {pokemons} ) {

  return (
    <>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>

    </>
  )
}
