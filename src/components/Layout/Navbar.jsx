import { Link, NavLink } from 'react-router-dom';
import styles from '../../styles/Layout/NavbarStyles.module.scss';

const Navbar = () => (
    <main className={styles.navbar}>
        <Link exact to="/">
            <img src="logo" alt="logo" height="30px" />
        </Link>

        <section>
            <NavLink exact to="/" activeClassName={styles.selected}>
                Home
            </NavLink>
            <NavLink exact to="/result" activeClassName={styles.selected}>
                Result
            </NavLink>
        </section>
    </main>
);

export default Navbar;
