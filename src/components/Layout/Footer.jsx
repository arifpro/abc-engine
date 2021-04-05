import styles from '../../styles/Layout/FooterStyles.module.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <main className={styles.footer}>
            <h1>Footer | {year}</h1>
        </main>
    );
};

export default Footer;
