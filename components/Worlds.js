import { useState } from 'react'

import styles from '../styles/Home.module.css'

const Worlds = () => {

    const [underlined, setUnderlined] = useState(false);



    return (
        <div className={styles.worlds}>
            <p>worlds:</p>
            <a className={styles.neonCity} rel="noopener noreferrer" target="_blank" href='https://supercyborgs.io' style={underlined ? {textDecoration: 'underline'} : {}} onMouseEnter={() => setUnderlined(true)} onMouseOut={() => setUnderlined(false)}>Neon City</a>
        </div>
    )
}

export default Worlds
