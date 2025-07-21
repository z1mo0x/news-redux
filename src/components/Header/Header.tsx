import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router'

type Props = {}

const links = [
    {
        title: 'Главная',
        link: '/',
    },
    {
        title: 'Посты',
        link: '/posts',
    }
]

export default function Header({ }: Props) {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                {links.map((item, index) => {
                    return <NavLink key={index} to={item.link}>{item.title}</NavLink>
                })}
            </nav>
        </header>
    )
}