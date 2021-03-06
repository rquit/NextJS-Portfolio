import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Meta from '../components/Meta'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'

// COLOR BANK:
// #F7D763 gold
// #5868FC blue
// #4FE077 green
// #323232 grey

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />
      <Navbar />
      <Header />
      <Projects />
    </div>
  )
}

export default Home
