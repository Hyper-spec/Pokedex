import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.logo}>
                    <Image src='/images/pokeball.png' width='50' height='50' alt='pokeball image'/>
                    <h1>PokeDex</h1>
                </a>
            </Link>
            <ul className={styles.link_item}>
                <Link href='https://github.com/Hyper-spec'>
                    <a>
                        <Image src="/images/github.svg" style={{filter: 'saturate(2)'}} height='40' width='40' alt="github"/>
                    </a>
                </Link>
            </ul>
        </nav>
    )
}