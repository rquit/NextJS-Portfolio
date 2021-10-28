import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

export default Home
