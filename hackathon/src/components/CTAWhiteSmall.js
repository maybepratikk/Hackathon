import styles from "./CTAWhiteSmall.module.css";

const CTAWhiteSmall = ({ value }) => {
  return (
    <div className={styles.ctawhiteSmall}>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default CTAWhiteSmall;
