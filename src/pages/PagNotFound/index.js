import Footer from '../../components/Footer';
import Header from '../../components/Header';
import erro404 from './erro404.png';
import styles from "./PagNotFound.module.css"

function PagNotFound() {
    return (
        <>
            <Header />
            <section className={styles.container}>
                <h2>Ops! Pagina não localizada</h2>
                <img src={erro404} alt="Logo Pagina não localizada" />
            </section>
            <Footer />
        </>
    );
}
export default PagNotFound;