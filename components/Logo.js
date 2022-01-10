import logoImage from '../public/images/demonlabslogoscaled.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/Home.module.css'

const Logo = () => {

    const shakeVariant = {
        down: {
            y: '1.5%',
        },
        up: {
            y: '-1.5%',
            transition: {
                yoyo: Infinity,
                duration: 0.1,
            }
        }
    }


    return (
        <motion.div initial='down' animate='up' variants={shakeVariant} className={styles.logo}>
            <Image className={styles.logo} src={logoImage} width={140} height={145} quality={100}/>
        </motion.div>
    )
}

export default Logo
