import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

// SVG Files
import CPP from '../public/svg/c.svg'
import CSS from '../public/svg/css.svg'
import HTML from '../public/svg/html.svg'
import JS from '../public/svg/js.svg'
import PYTHON from '../public/svg/python.svg'
import SQL from '../public/svg/sql.svg'
import TS from '../public/svg/ts.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {/* TODO: Make icons show name on click and hover. Possibly draggable? */}
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={TS} />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={JS} />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={HTML} />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={CSS} />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={PYTHON} />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={CPP} />
                    </div>
                </motion.div>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    dragConstraints={{
                        top: -100,
                        bottom: 50,
                        left: -200,
                        right: 200
                    }}
                    className={styles.list}>
                    <div className={styles.noSelect}> 
                        <Image src={SQL} />
                    </div>
                </motion.div>
            </ul>
            <hr className={styles.underline} />
        </div>
    )
}

export default Header;