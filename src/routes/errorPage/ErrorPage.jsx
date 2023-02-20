import React from "react"

// Style

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '60px 0'
    },

    h1: {
        fontSize: '120px',
        color: '#333',
        margin: '0',
        lineHeight: '1'
    },

    h2: {
        fontSize: '36px',
        color: '#333',
        margin: '20px 0',
        fontWeight: '700'
    },

    p: {
        fontSize: '18px',
        color: '#555',
        marginBottom: '30px'
    },

    button: {
        display: 'inline-block',
        padding: '10px 20px',
        background: '#333',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background 0.3s ease'
    },

    buttonHover: {
        background: '#669'
    }
};

// Page

const ErrorPage = () => {
    return (
        <div className="container" style={styles.container}>
            <h1 style={styles.h1}>404</h1>
            <h2 style={styles.h2}>Oops! Página não encontrada</h2>
            <p style={styles.p}>A página que você está procurando pode ter sido removida, renomeada ou pode estar temporariamente indisponível.</p>
            <a href="/" className="button" style={{...styles.button, ...styles.buttonHover}}>Voltar à página inicial</a>
        </div>
    )
}

export default ErrorPage