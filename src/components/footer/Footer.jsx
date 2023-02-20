import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className="col-md-4">
                        <h5>Sobre Nós</h5>
                        <p>Escrever um breve resumo sobre a ibamesp.</p>
                    </div>
                    <div className={`col-md-4 ${styles.colMd4}`}>
                        <h5>Páginas</h5>
                        <ul>
                            <li><a href="#">Próximos eventos</a></li>
                            <li><a href="#">Galeria</a></li>
                            <li><a href="/sobre">Sobre nós</a></li>
                        </ul>
                    </div>
                    <div className={`col-md-4 ${styles.colMd4}`}>
                        <h5>Contato</h5>
                        <p style={styles.pContact}>Rua G, nº 31, Canelas II — Montes Claros, MG</p>
                        <p style={styles.pContact}>Telefone: (xx) xxxx-xxxx</p>
                        <p style={styles.pContact}>Email: ibamespmoc@gmail.com</p>
                    </div>
                </div>
                <hr />
                <p className="text-center">Copyright &copy;IBAMESP 2023</p>
            </div>
        </footer>
    )
}

export default Footer