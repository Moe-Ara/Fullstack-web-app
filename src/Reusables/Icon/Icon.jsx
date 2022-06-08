import React from 'react'
import './Icon.css'
const SIZES = ['icon--large', 'icon--small']
export const Icon = ({ size, src, onclick }) => {
    const checkSize = SIZES.includes(size) ? size : SIZES[1];
    return (
        <img className={`icon ${checkSize}`} src={src} onClick={onclick} />
    )
}
