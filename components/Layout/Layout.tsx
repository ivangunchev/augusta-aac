import styles from './styles.module.scss'
import React from 'react'
import Nav from '../Nav/Nav'

export default function Layout({ children }: any) {
    return (
        <div className={styles.layoutContainer}>
            <Nav />
            <>{children}</>
        </div>
    )
}