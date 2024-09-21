import React from "react";
import styles from "../CompanySection/Company.module.css";
const Company = ({ img1, img2 }) => {
    return (
        <section className={styles.companySection}>
            {/* Tagline Container */}
            <div className={styles.containerP}>
                <div className={styles.containerC}>

                    <div className={styles.tagline}>
                        <h1 className={styles.line1}>
                            Top <span>companies</span> our students
                        </h1>
                    </div>

                    <div className={styles.tagline}>
                        <h1 className={styles.line2}>
                            work with
                        </h1>
                    </div>
                    
                </div>
            </div>

            {/* Companies Name */}
            <div className={styles.companyP}>

                <div className={styles.imgContainer}>
                        <div className={styles.image}>
                        <img src="https://play-lh.googleusercontent.com/8XCwpfWc9YkehwhrhoID6PGhs5SaSJoocS0oTBA8EsGFGLrj32oIYu5UKsIO7wdU1PQZ" className={styles.cImg} />
                        </div>
                </div>

                <div className={styles.imgContainer}>
                    {img1.map((item, index) => (
                        <div key={index} className={styles.image}>
                            <img src={item.image} className={styles.cImg} />
                        </div>
                    ))}
                </div>

                <div className={styles.imgContainer}>
                    {img2.map((item, index) => (
                        <div key={index} className={styles.image}>
                            <img src={item.image} className={styles.cImg} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Company;
