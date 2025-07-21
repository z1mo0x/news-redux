import React, { type ReactNode } from 'react'
import Header from '../Header/Header'

type Props = {
    children?: ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Header />
            <div className="container">
                {children}
            </div>
        </>
    )
}