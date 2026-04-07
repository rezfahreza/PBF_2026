import styles from "../../pages/about/about.module.scss";

const HalamanAbout = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.about__title}>Tentang Kami</h1>

            <div className={styles.about__description}>
                <p>
                    Website ini dibuat untuk menampilkan berbagai produk dan
                    informasi secara modern menggunakan Next.js.
                </p>
            </div>

            <div className={styles.about__content}>
                <div className={styles.about__content__item}>
                    <h4 className={styles.about__content__item__name}>
                        Muhammad Fahreza
                    </h4>
                    <p className={styles.about__content__item__role}>
                        Frontend Developer
                    </p>
                </div>

                <div className={styles.about__content__item}>
                    <h4 className={styles.about__content__item__name}>
                        Tim Developer
                    </h4>
                    <p className={styles.about__content__item__role}>
                        Backend Developer
                    </p>
                </div>

                <div className={styles.about__content__item}>
                    <h4 className={styles.about__content__item__name}>
                        UI Designer
                    </h4>
                    <p className={styles.about__content__item__role}>
                        Designer
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HalamanAbout;