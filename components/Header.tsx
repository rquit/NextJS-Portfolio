import styles from '../styles/Header.module.css'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import type { HeaderIcon } from './HeaderIcons'

// Lang Array
import { LangArray } from './HeaderIcons'

// Tech Array
import { TechArray } from './HeaderIcons'

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {LangArray && LangArray.map(lang => <IconSVG headerIcon={lang} key={`${lang.src}`} />)}
            </ul>
            <hr className={styles.underline} />
            <ul className={styles.listContainer}>
                {TechArray && TechArray.map(tech => <IconSVG headerIcon={tech} key={`${tech.src}`} />)}
            </ul>
            <hr className={styles.underline} />
        </div>
    )
}

type HeaderIconProps = {
    headerIcon: HeaderIcon
}

const IconSVG = ({ headerIcon }: HeaderIconProps) => {
    const [tapped, setTapped] = useState(true);
    const {
        src,
        name
    } = headerIcon;
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            dragTransition={{ bounceStiffness: 100 }}
            className={styles.list}>
                <AnimatePresence>
                    {tapped &&
                    <motion.div 
                        className={styles.tooltip}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {name}
                    </motion.div>
                    }
                </AnimatePresence>
            <div className={styles.noSelect} >
                <Image className={styles.color} src={src.src} width={50} height={50} />
            </div>
        </motion.div>
    )
}

export default Header;