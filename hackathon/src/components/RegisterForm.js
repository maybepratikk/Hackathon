import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <div className={styles.register}>
      <img className={styles.registerIcon} alt="" src="/register@2x.png" />
      <div className={styles.dharmeesh}>Dharmeesh</div>
      <div className={styles.aBlindMan}>A Blind man Stick kinda thing</div>
      <div className={styles.seeDetails}>See details</div>
    </div>
  );
};

export default RegisterForm;
