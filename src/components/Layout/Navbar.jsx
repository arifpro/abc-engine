import styles from '../../styles/Layout/NavbarStyles.module.scss';

const Navbar = () => {
    const name = 'Navbar';

    return (
        <main className={styles.navbar}>
            <h1>{name}</h1>
        </main>
    );
};

export default Navbar;
