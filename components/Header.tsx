import styles from '../styles/Header.module.css'
import Image from 'next/image'
import type { ImageProps } from 'next/image'
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
    const SVGARR = [TS, JS, CPP, PYTHON, HTML, CSS, SQL];
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {SVGARR && SVGARR.map(lang => <IconSVG src={lang} key={`${lang}`} />)}
            </ul>
            <hr className={styles.underline} />
        </div>
    )
}

const IconSVG = ({ src }: ImageProps) => {
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            drag
            dragElastic={0.2}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 100 }}
            className={styles.list}>
            <div className={styles.noSelect}> 
                <Image className={styles.color} src={src} />
            </div>
        </motion.div>
    )
}

export default Header;