import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                This is a cool pokedex made in next js
            </p>
            <Image src='/images/charizard.png' height='300' width='300' alt='charizard'/>
        </div>
    )
}