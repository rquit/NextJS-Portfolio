import styles from '../styles/Header.module.css'
import Image from 'next/image'
import type { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

// SVG Files for Languages
import CPP from '../public/svg/c.svg'
import CSS from '../public/svg/css.svg'
import HTML from '../public/svg/html.svg'
import JS from '../public/svg/js.svg'
import PYTHON from '../public/svg/python.svg'
import SQL from '../public/svg/sql.svg'
import TS from '../public/svg/ts.svg'

// SVG Files for Technologies
import REACT from '../public/svg/React.svg'
import NEXT from '../public/svg/Next.svg'
import TORCH from '../public/svg/Torch.svg'
import MONGO from '../public/svg/Mongo.svg'
import GIT from '../public/svg/Git.svg'
import LINUX from '../public/svg/Linux.svg'
import EXPRESS from '../public/svg/Express.svg'

const Header = () => {
    const LANGSVGARR = [TS, JS, CPP, PYTHON, HTML, CSS, SQL];
    const TECHSVGARR = [REACT, NEXT, TORCH, GIT, MONGO, LINUX, EXPRESS];
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {LANGSVGARR && LANGSVGARR.map(lang => <IconSVG src={lang} key={`${lang.src}`} />)}
            </ul>
            <hr className={styles.underline} />
            <ul className={styles.listContainer}>
                {TECHSVGARR && TECHSVGARR.map(tech => <IconSVG src={tech} key={`${tech.src}`} />)}
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
                <Image className={styles.color} src={src} width={50} height={50} />
            </div>
        </motion.div>
    )
}

export default Header;