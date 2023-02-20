import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.uList}>
                <li className={styles.listItem}><Link to="/" className={styles.link}>Home</Link></li>
                <li className={styles.listItem}><Link to="/eventos" className={styles.link}>Eventos</Link></li>
                <li className={styles.listItem}><Link to="/galeria" className={styles.link}>Galeria</Link></li>
                <li className={styles.listItem}><Link to="/sobre" className={styles.link}>Sobre</Link></li>
                <li className={styles.listItem}><Link to="/contato" className={styles.link}>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar