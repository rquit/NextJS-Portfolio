import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '../styles/Main.module.css'
import Image from 'next/image'
import type { Project, ProjectProp } from './ProjectInfo'
import {
    awoogadex,
    cifar10,
    slackbot,
    thissite
} from './ProjectInfo'

const Main = () => {
    const projects: Project[] = [
        awoogadex, 
        cifar10, 
        slackbot, 
        thissite
    ]
    return (
        <div className={styles.container}>
            <ul className={styles.listContainer}>
                {projects && projects.map(p => <ProjectDiv key={p.title} project={p} />)}
            </ul>
        </div>
    )
}

const ProjectDiv = ({ project }: ProjectProp) => {
    const { 
        src, 
        title, 
        desc,
        link 
    } = project;

    return (
        <motion.a 
            href={link}
            target={'_blank'}
            rel={'noreferrer'}
            whileHover={{ scale:1.02 }}
            whileTap={{ scale: 0.98 }}
            className={styles.list}
        > 
            <Image src={src} width={800} height={420} />
            <hr className={styles.hr} />
            <h2 className={styles.reduceSpace}>{title}</h2>
            <p className={styles.reduceSpace}>{desc}</p>
        </motion.a>
    )
}

export default Main;
