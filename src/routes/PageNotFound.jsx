import { Link } from 'react-router-dom';
import styles from '../styles/PageNotFoundStyles.module.scss';

const PageNotFound = () => (
    <main className={styles.pageNotFound}>
        <h1>Page Not Found</h1>
        <Link to="/">
            <button type="button" className={styles.pageNotFound__btn}>
                Go back to home page
            </button>
        </Link>
    </main>
);

export default PageNotFound;
