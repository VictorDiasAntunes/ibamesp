import styles from './Home.module.css'

function Home() {
    return (
        <main>
            <section className={`hero ${styles.hero}`}>
                <div className={`container ${styles.container}`}>
                    <h1 className={`text-center ${styles.titleHome}`}>Seja bem-vindo ao WebSite da <br />Igreja Batista Mananciais do Espírito</h1>
                    <p className={`text-center ${styles.textHome}`}>Aqui você pode conhecer nossa igreja, nossas atividades e como participar de nossos
                        cultos e eventos. Fique à vontade para navegar e descobrir mais sobre nós. Venha nos visitar e participar de
                        nossas atividades presenciais ou online. Estamos sempre prontos para acolhê-lo e juntos crescermos na fé.
                        Esperamos vê-lo em breve!</p>
                    <a href="/sobre" className={`btn btn-primary btn-lg ${styles.btn}`}>Saiba mais</a>
                </div>
            </section>

            <section className={`services ${styles.services}`}>
                <div className={`container ${styles.container}`}>
                    <h2 className="text-center">Conheça a gente</h2>
                    <p className="text-center">Venhar ver um pouco sobre a gente</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>Próximos eventos</h5>
                                    <p className={`card-text ${styles.cardText}`}>Nesta caixa, vamos colocar somente o próximo evento.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>Galeria</h5>
                                    <p className={`card-text ${styles.cardText}`}>Clique aqui para ver fotos e vídeos da IBAMESP.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>Quem somos</h5>
                                    <p className={`card-text ${styles.cardText}`}>Breve resumo da história da igreja.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home