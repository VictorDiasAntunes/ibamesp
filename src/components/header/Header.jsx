import { Link } from "react-router-dom"
import NavBar from "../navBar/NavBar"
import styles from './Header.module.css'
import imgLogoIbasmesp from 'src/imgs/logo/imgLogoIbamesp.png'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.containerLogo}>
                    {<Link to="/" className={styles.link}>
                        <img src={imgLogoIbamesp} alt="Logo do Site" className={styles.imgLogo} />
                            <span className={styles.spanLogoName}>IBAMESP</span>
                    </Link>}
                </div>
                <NavBar />
            </div>
        </header>
    )
}

export default Header
