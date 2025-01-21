import styles from "../Navbar/Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <section className={styles.container}>
                <div className="logo">
                    <NavLink to="/">CodeBoss</NavLink>
                </div>
                <div className={styles.navPart2}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
                    <NavLink to="/partners">Partners</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    {/* <button>Sign In</button> */}
                    <i className="ri-menu-3-line"></i>
                </div>
            </section>
        </>
    );
};

export default Navbar;
