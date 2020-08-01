import React from 'react'
import Simplebutton from './StyledHero'
export default function Hero({children,hero}) {
    return (
        <header className={hero}>
        {children}
       
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
};
