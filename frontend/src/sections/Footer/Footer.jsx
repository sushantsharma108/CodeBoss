import styles from "../Footer/Footer.module.css";
import React from "react";
const Footer = ({ company, help, courses, social }) => {
    // const companyLinks = props.company || [];
    return (
        <footer className="footer">
            <div className={styles.containerP}>
                <div className={styles.containerC}>
                    <h3 className={styles.animatedUnderline}>Company</h3>
                    <ul className={styles.list}>
                        {company.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <a href={item.href} target="_blank">
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.containerC}>
                    <h3>Get Help</h3>
                    <ul className={styles.list}>
                        {help.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <a href={item.href} target="_blank">
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.containerC}>
                    <h3>Courses</h3>
                    <ul className={styles.list}>
                        {courses.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <a href={item.href} target="_blank">
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.containerC}>
                    <h3>Follow Us</h3>
                    <ul className={styles.list}>
                        {social.map((item, index) => (
                            <li key={index} className={styles.listItem}>
                                <a href={item.href} target="_blank">
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                <p>&copy; 2024 CodeBoss. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
