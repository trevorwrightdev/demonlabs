import styles from '../styles/Home.module.css'

const LinkItem = () => {
    return (
        <div className={styles.linkItem}>
            <p className={styles.linkItemTitle}>twitter:</p>
            <a className={styles.linkItemLink} href="">@demonlabsio</a>
        </div>
    )
}

export default LinkItem
