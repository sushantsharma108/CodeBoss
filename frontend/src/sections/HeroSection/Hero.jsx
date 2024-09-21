import styles from '../HeroSection/Hero.module.css';
import frontImg from '../../assets/front-image.svg'
const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h1>
                        Learn from the <span>Best</span> programming platform in India...
                    </h1>
                    <p>
                        Whether you are an absolute beginner, working or an experienced
                        professional. We&apos;ve got something for everyone. You will learn from
                        the experts in the industry.
                    </p>
                    <button>Explore Now</button>
                </div>
                <div className={styles.right}>
                    <img src={frontImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero


