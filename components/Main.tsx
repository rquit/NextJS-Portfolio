import { motion } from 'framer-motion'
import styles from '../styles/Main.module.css'
import Image from 'next/image'
import ThisSite from '../public/img/image_card.png'

const Main = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Projects</h1>
            <ul className={styles.listContainer}>
                <motion.li 
                    whileHover={{ scale:1.05 }}
                    whileTap={{ scale: 0.95 }} 
                    className={styles.list}>
                        <Image src={ThisSite} />
                        <hr />
                        <h2>Heading</h2>
                        <p>Lorem Ipsum dolor sin amet</p>
                </motion.li>

                <motion.li 
                    whileHover={{ scale:1.05 }}
                    whileTap={{ scale: 0.95 }} 
                    className={styles.list}>
                        <Image src={ThisSite} />
                        <hr />
                        <h2>Heading</h2>
                        <p>Lorem Ipsum dolor sin amet</p>
                </motion.li>
            </ul>
        </div>
    )
}

export default Main;