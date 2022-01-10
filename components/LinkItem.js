

import styles from '../styles/Home.module.css'

const LinkItem = ({ title, link, linkName }) => {



    return (
        <div className={styles.linkItem}>
            <p className={styles.linkItemTitle}>{title}</p>
            <a rel="noopener noreferrer" target="_blank" className={styles.linkItemLink} href={link}>{linkName}</a>
        </div>
    )
}

export default LinkItem
