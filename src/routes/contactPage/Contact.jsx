import styles from './Contact.module.css'

function Contact() {
    return (
        <main>
            <div className={`container py-5 ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className={`col-md-6 ${styles.colMd6}`}>
                        <h1 className={`col-mb-3 ${styles.colMd3}`}>Entre em contato conosco</h1>
                        <p>Se você tiver alguma dúvida ou precisar de ajuda, preencha o formulário abaixo e entraremos em contato em breve.</p>
                        <p>Também estamos disponíveis por e-mail ou telefone.</p>
                        <p>E-mail: ibamespmoc@gmail.com</p>
                        <p>Telefone: (xx) xxxx-xxxx</p>
                    </div>
                    <div className={`col-md-6 ${styles.colMd6}`}>
                        <div className={`form ${styles.form}`}>
                            <div class="form-group">
                                <label for="formBasicName">Nome</label>
                                <input type="text" class="form-control" id="formBasicName" placeholder="Digite seu nome" required />
                            </div>
                            <div class="form-group">
                                <label for="formBasicEmail">E-mail</label>
                                <input type="email" class="form-control" id="formBasicEmail" placeholder="Digite seu e-mail" required />
                            </div>
                            <div class="form-group">
                                <label for="formBasicMessage">Mensagem</label>
                                <textarea class="form-control" id="formBasicMessage" rows="5" placeholder="Digite sua mensagem" required></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </div >
        </main>
    );
};

export default Contact;
