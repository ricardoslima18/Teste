import styles from '../styles/Home.module.css'
export function Home(){
    return (
        <div className={styles.container}>
            <header className={styles.hero}>
            <h1 className={styles.title}>Bem vindo à casa del carajo AKA SPA.</h1>
            <p className={styles.subtitle}>This is an example of render via components.</p>
            </header>

            <section className={styles.features}>
                <div className={styles.card}>
                    <h3>Componentes</h3>
                    <p>Dividindo a interface em reutilizaveis</p>
                </div>
                <div className={styles.card}>
                    <h3>CSS Modules</h3>
                    <p>Estilos que não vazam pra outras paginas</p>
                </div>
            </section>
            </div>           
    );
}