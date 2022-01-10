import { motion } from 'framer-motion'

import styles from '../styles/Home.module.css'

const Box = () => {

    const shakeVariants = {
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


    return (
        <div className={styles.box}>
            <motion.span initial='hidden' animate='visible' variants={{
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
            }}>
                <motion.h1 initial='down' animate='up' variants={shakeVariants}>DEMON LABS</motion.h1>
                <p className={styles.desc}>Demon Labs develops stylish and polished games for NFT projects.</p>
            </motion.span>
        </div>
    )
}

export default Box
