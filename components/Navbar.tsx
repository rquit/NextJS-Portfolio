import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import GitHub from '../public/svg/github.svg'
import LinkedIn from '../public/svg/linkedin.svg'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar} >
                <h2 className={styles.title}>Nabil Omi</h2>
                <ul className={styles.listContainer}>
                    <li className={styles.list}>
                        <a href='https://github.com/rquit' target='_blank' rel='noreferrer'>
                            <Image src={GitHub} height={32} width={32} />
                        </a>
                    </li>
                    <li className={styles.list}>
                        <a href='https://github.com/rquit' target='_blank' rel='noreferrer'>
                            <Image src={LinkedIn} height={32} width={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;