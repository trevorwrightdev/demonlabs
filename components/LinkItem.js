import { useState } from 'react'

import styles from '../styles/Home.module.css'

const LinkItem = ({ title, link, linkName }) => {

    const [underlined, setUnderlined] = useState(false);

    return (
        <div className={styles.linkItem}>
            <p className={styles.linkItemTitle}>{title}</p>
            <a onClick={() => setUnderlined(false)} style={underlined ? {textDecoration: 'underline'} : {}} onMouseEnter={() => setUnderlined(true)} onMouseOut={() => setUnderlined(false)} rel="noopener noreferrer" target="_blank" className={styles.linkItemLink} href={link}>{linkName}</a>
        </div>
    )
}

export default LinkItem
