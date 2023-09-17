import RegisterForm from "./RegisterForm";
import CTACircleSec from "./CTACircleSec";
import styles from "./StudentGuideContainer3.module.css";

const StudentGuideContainer3 = () => {
  return (
    <div className={styles.guideForStudents}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.mvpsOfTheMonthWrapper}>
              <div className={styles.mvpsOfThe}>MVP’s of the Month</div>
            </div>
            <div className={styles.text}>
              <div className={styles.checkOutThe}>
                Check out the Stars of this Month
              </div>
              <div className={styles.getInspiredBy}>
                Get Inspired by their work. They were once student as well.
              </div>
            </div>
          </div>
          <div className={styles.registerParent}>
            <RegisterForm />
            <RegisterForm />
            <RegisterForm />
          </div>
        </div>
        <CTACircleSec
          value="See all"
          cTACircleSecBorder="1.5px solid var(--blue-shades-blueish-shades)"
          cTACircleSecPosition="unset"
          cTACircleSecTop="unset"
          cTACircleSecLeft="unset"
          valueColor="#3c6e71"
        />
      </div>
    </div>
  );
};

export default StudentGuideContainer3;
