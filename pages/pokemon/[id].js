import Image from "next/image"
import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {
    var pokemon_limit = 251

    const api_url = `https://pokeapi.co/api/v2/pokemon`

    const res = await fetch(`${api_url}?limit=${pokemon_limit}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: {id: (index+1).toString()}, 
        }
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()


    const pokemonSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const speciesData = await pokemonSpecies.json()

   

    return {
       props: {
        pokemon: data,
        species: speciesData
       }
    }
}


export default function pokemon({pokemon, species}) {
    console.log(pokemon.abilities)

    function addZero(num, len) {
        var numberWithZeroes = String(num)
        var counter = numberWithZeroes.length

        while(counter < len) {
            numberWithZeroes = "0" + numberWithZeroes
            counter++
        }

        return numberWithZeroes
    }

    return (
       <>
           <div className={styles.pokemon_container}>
                <h1 className={styles.title}>{pokemon.name}<span> N°{addZero(pokemon.id, 3)}</span></h1>
                <div  className={styles.main_container}>
                    <div className={`${styles.pokemon_image} ${styles['type_' + pokemon.types[0].type.name]}`}>
                        <Image
                            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                            width="350"
                            height="350"
                            alt={pokemon.name}
                        />
                    </div>
                    <div className={styles.data_container}>
                        <div className={styles.data_size}>
                            <p className={styles.pokemon_detail}>
                                {species.flavor_text_entries[1].flavor_text}
                            </p>
                            <h4>Type:</h4>
                            <div className={styles.types_container}>
                            {pokemon.types.map((item, index) => (
                                <span
                                key={index}
                                className={`${styles.type} ${styles['type_' + item.type.name]}`}
                                >
                                {item.type.name}
                                </span>
                            ))}
                            </div>
                            <h4>Height:</h4>
                            <p>{pokemon.height * 10} cm</p>
                            <h4>Weight:</h4>
                            <p>{pokemon.weight / 10} kg</p>
                            <h4>Abilities:</h4>
                            <div className={styles.ability_container}>
                                <p>{pokemon.abilities[0].ability.name}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}