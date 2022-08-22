import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.navContainer}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/scoreboard">Scoreboard</Link></li>
                <li><Link href="/video">Video</Link></li>
            </ul>
        </nav>
    )
}

export default Nav