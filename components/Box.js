import { motion } from 'framer-motion'

import styles from '../styles/Home.module.css'

const Box = ({ children }) => {

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
            {children}
        </motion.div>
    )
}

export default Box
