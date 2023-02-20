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
                    <p className="text-center">Aqui você pode apresentar os serviços oferecidos pelo seu site ou projeto.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>Próximos eventos</h5>
                                    <p className={`card-text ${styles.cardText}`}>Aqui você pode escrever uma pequena descrição sobre o serviço 1.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>Galeria</h5>
                                    <p className={`card-text ${styles.cardText}`}>Aqui você pode escrever uma pequena descrição sobre o serviço 2.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`card ${styles.card}`}>
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>Quem somos</h5>
                                    <p className={`card-text ${styles.cardText}`}>Aqui você pode escrever uma pequena descrição sobre o serviço 3.</p>
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