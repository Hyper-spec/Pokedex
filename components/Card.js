import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

export default function Card({pokemon}) {

    function addZero(num, len) {
        var numberWithZeroes = String(num);
        var counter = numberWithZeroes.length;
    
        while(counter < len) {
          numberWithZeroes = "0" + numberWithZeroes
    
          counter++      
        }
        
        return numberWithZeroes
      }
    

    return (
        <Link href={`/pokemon/${pokemon.id}`}>
             <div className={styles.card}>
                <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} height="130" width="130" alt="pokeImage"/>
                <p className={styles.id}>#{addZero(pokemon.id, 3)}</p>
           
                <a className={styles.title}>{pokemon.name}</a>
            </div>
        </Link>
    )
}