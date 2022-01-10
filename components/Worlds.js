import { useState } from 'react'

import styles from '../styles/Home.module.css'

const Worlds = () => {

    const [underlined, setUnderlined] = useState(false);

    return (
        <div className={styles.worlds}>
            <p className={styles.worldsTitle}>worlds:</p> 
            <a 
                onClick={() => setUnderlined(false)}
                className={styles.worldsItem} 
                rel="noopener noreferrer" target="_blank" href='https://supercyborgs.io' 
                style={underlined ? {textDecoration: 'underline'} : {}} 
                onMouseEnter={() => setUnderlined(true)} 
                onMouseOut={() => setUnderlined(false)}>Neon City
            </a>
        </div>
    )
}

export default Worlds
