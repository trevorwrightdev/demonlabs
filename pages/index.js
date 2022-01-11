import Meta from '../components/Meta'
import Box from '../components/Box'
import Worlds from '../components/Worlds'
import LinkItem from '../components/LinkItem'
import Logo from '../components/Logo'

import styles from '../styles/Home.module.css'


// ? <html lang='en' className='notranslate' translate='no'>

export default function Home() {

  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Box>
            <Logo />
            <h1><span className={styles.small}>name: </span>DEMON LABS</h1>
            <p className={styles.desc}>desc: Born as indie developers. Building games for the metaverse.</p>
            <Worlds />
            <LinkItem link={'https://twitter.com/demon_labs'} title={'twitter:'} linkName={'@demon_labs'}/>
            <LinkItem link={'mailto: devs@demonlabs.io'} title={'contact:'} linkName={'devs@demonlabs.io'}/>
        </Box>  
      </div>
    </>
  )
}

