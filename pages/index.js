import Meta from '../components/Meta'
import Box from '../components/Box'
import Worlds from '../components/Worlds'
import LinkItem from '../components/LinkItem'
import Logo from '../components/Logo'

import { motion } from 'framer-motion'

import styles from '../styles/Home.module.css'


// ? <html lang='en' className='notranslate' translate='no'>

export default function Home() {

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

  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Box>
            <Logo />
            <motion.h1 initial='down' animate='up' variants={shakeVariant}><span className={styles.small}>name: </span>DEMON LABS</motion.h1>
            <p className={styles.desc}>desc: Demon Labs develops stylish and polished games for NFT projects.</p>
            <Worlds />
            <LinkItem link={'https://twitter.com/demon_labs'} title={'twitter:'} linkName={'@demonlabsio'}/>
            <LinkItem link={'mailto: devs@demonlabs.io'} title={'contact:'} linkName={'devs@demonlabs.io'}/>
        </Box>  
      </div>
    </>
  )
}

