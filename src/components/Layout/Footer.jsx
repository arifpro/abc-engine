import styles from '../../styles/Layout/FooterStyles.module.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <main className={styles.footer}>
            <div className={styles.footer_primary}>
                <section className={styles.footer_logoSection}>
                    <img src="/logo192.png" alt="logo" />
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus
                        egestas elit, at eleifend elit ornare ut.
                    </p>
                </section>
                <section className={styles.footer_itemSection}>
                    <aside className={styles.footer_item}>
                        <ul>
                            <li>Company</li>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>The Team</li>
                            <li>Investor</li>
                        </ul>
                    </aside>
                    <aside className={styles.footer_item}>
                        <ul>
                            <li>Resources</li>
                            <li>About</li>
                            <li>Our Services</li>
                            <li>The Team</li>
                            <li>Investor</li>
                        </ul>
                    </aside>
                    <aside className={styles.footer_item}>
                        <ul>
                            <li>Support</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Live Chat</li>
                        </ul>
                    </aside>
                </section>
            </div>

            <div className={styles.footer_secondarySection}>
                <div className={styles.footer_secondary}>
                    <section>
                        <p>Copyright © {year} TheTechDevs. All rights reserved.</p>
                    </section>
                    <section className={styles.footer_secondary2}>
                        <p>
                            <span style={{ marginRight: '2rem' }}>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Footer;
