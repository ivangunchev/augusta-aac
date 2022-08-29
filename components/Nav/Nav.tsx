import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/scoreboard"><a>Scoreboard</a></Link></li>
                <li><Link href="/video"><a>Video</a></Link></li>
                <li><Link href="/registration"><a>Registration</a></Link></li>
            </ul>
        </nav>
    )
}

export default Nav