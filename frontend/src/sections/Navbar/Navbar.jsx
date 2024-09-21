import styles from '../Navbar/Navbar.module.css';
const Navbar = () => {
    return (<>
        <section className={styles.container}>
            <h2>CodeBoss</h2>
            <div className={styles.navPart2}>
                <h4>Store</h4>
                <h4>Pricing</h4>
                <h4>Blog</h4>
                <h4>Career</h4>
                <button>Sign In</button>
                <i className="ri-menu-3-line"></i>
            </div>
        </section>
    </>
    )
}

export default Navbar