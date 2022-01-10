import { motion } from 'framer-motion'
import Worlds from './Worlds'

import styles from '../styles/Home.module.css'

const Box = () => {

    const shakeVariant = {
        down: {
            y: '3%',
        },
        up: {
            y: '-3%',
            transition: {
                yoyo: Infinity,
                duration: 0.1,
            }
        }
    }

    const fadeVariant = {
        hidden: {
            scale: .8,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4,
                duration: 1
            }
        }
    }


    return (
        <motion.div initial='hidden' animate='visible' variants={fadeVariant} className={styles.box}>
            <motion.h1 initial='down' animate='up' variants={shakeVariant}>DEMON LABS</motion.h1>
            <p className={styles.desc}>Demon Labs develops stylish and polished games for NFT projects.</p>
            <Worlds />
        </motion.div>
    )
}

export default Box
