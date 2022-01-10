import Meta from '../components/Meta'
import Box from '../components/Box'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <html lang='en' class='notranslate' translate='no'>
    <Meta />
    <div className={styles.container}>
      <Box />
    </div>
    </html>
  )
}

