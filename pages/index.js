import Meta from '../components/Meta'
import Box from '../components/Box'
import styles from '../styles/Home.module.css'


// ? <html lang='en' className='notranslate' translate='no'>

export default function Home() {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Box />
      </div>
    </>
  )
}

