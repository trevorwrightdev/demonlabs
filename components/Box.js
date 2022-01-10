import { motion } from 'framer-motion'

import styles from '../styles/Home.module.css'

const Box = () => {
    return (
        <div className={styles.box}>
            <motion.div className={styles.motionDiv} initial='hidden' animate='visible' variants={{
                hidden: {
                    scale: .8,
                    opacity: 0,
                },

                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        delay: 0.4,
                        stiffness: 60,
                    },
                }
            }}>
                <h1 className={styles.boxHeader}>DEMON LABS</h1>
            </motion.div>
            <motion.div initial='hidden' animate='visible' variants={{
                hidden: {
                    opacity: 0,
                    
                }
            }}>
                <h2>Loading worlds...</h2>
            </motion.div>
        </div>
    )
}

export default Box
