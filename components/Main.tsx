import { motion } from 'framer-motion'
import styles from '../styles/Main.module.css'
import Image from 'next/image'
import type { Project, ProjectProp } from './ProjectInfo'
import {
    awoogadex,
    cifar10,
    faceswap,
    cppserver
} from './ProjectInfo'

const Main = () => {
    const projects: Project[] = [
        awoogadex, 
        cifar10, 
        cppserver,
        faceswap
    ]
    return (
        <div className={styles.container}>
            <div className={styles.listContainer}>
                {projects && projects.map(p => <ProjectDiv key={`${p.title}`} project={p} />)}
            </div>
        </div>
    )
}

const ProjectDiv = ({ project }: ProjectProp) => {
    const { 
        src, 
        title, 
        desc,
        link,
        deployed
    } = project;

    return (
        <motion.a 
            href={link}
            target={'_blank'}
            rel={'noreferrer'}
            whileHover={{ scale:1.02 }}
            whileTap={{ scale: 1.02 }}
            className={styles.list}
        > 
            <Image alt={title} src={src} width={800} height={420} />
            <hr className={styles.hr} />
            <div className={styles.infoContainer}>
                <div>
                    <h2 className={styles.reduceSpace}>{title}</h2>
                    <p className={styles.reduceSpace}>{desc}</p>
                </div>
                {deployed && 
                <motion.a 
                    target={'_blank'}
                    rel={'noreferrer'} 
                    whileHover={{ scale:1.1 }}
                    whileTap={{ scale: 0.9 }} 
                    href={deployed} 
                    className={styles.deployedLink}
                >
                    Site
                </motion.a>}
            </div>
        </motion.a>
    )
}

export default Main;
