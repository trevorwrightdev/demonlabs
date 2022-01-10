import logoImage from '../public/images/demonlabslogoscaled.png'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image className={styles.logo} src={logoImage} width={140} height={145} quality={100}/>
        </div>
    )
}

export default Logo
