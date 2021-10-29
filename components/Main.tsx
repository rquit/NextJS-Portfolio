import { motion } from 'framer-motion'
import styles from '../styles/Main.module.css'
import Image from 'next/image'
import ThisSite from '../public/img/image_card.png'

type Project = {
    src: string,
    title: string,
    desc: string
}

const Main = () => {
    const sample: Project = {
        src: ThisSite.src,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sin amet"
    }

    const projects: Project[] = [
        sample, sample, sample, sample
    ]
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {projects && projects.map(p => <Project src={p.src} title={p.title} desc={p.desc} />)}
            </ul>
        </div>
    )
}

const Project = ({ src, title, desc }: Project) => {
    return (
        <motion.li 
            whileHover={{ scale:1.02 }}
            whileTap={{ scale: 0.98 }} 
            className={styles.list}>
            <Image src={src} width={1200} height={630} />
            <hr />
            <h2>{title}</h2>
            <p>{desc}</p>
        </motion.li>
    )
}

export default Main;