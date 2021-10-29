import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ImageProps } from 'next/image'
import GitHub from '../public/svg/github.svg'
import LinkedIn from '../public/svg/linkedin.svg'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar} >
                <h2 className={styles.title}>Nabil Omi</h2>
                <ul className={styles.listContainer}>
                    <NavButton src={GitHub} link="https://github.com/rquit" />
                    <NavButton src={LinkedIn} link="https://www.linkedin.com/in/nabil-omi/" />
                </ul>
            </div>
        </div>
    )
}

type NavbarButton = {
    src: ImageProps,
    link: string
}

const NavButton = ({ src, link }: NavbarButton) => {
    return (
        <motion.li 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.list}
        >
            <a href={link} target='_blank' rel='noreferrer'>
                <Image src={src.src} height={32} width={32} />
            </a>
        </motion.li>
    )
}

export default Navbar;