import styles from "./StoreEvaluateCollaborateContai2.module.css";

const StoreEvaluateCollaborateContai2 = () => {
  return (
    <div className={styles.storeEvaluateAndCollaboratParent}>
      <b className={styles.storeEvaluateAndContainer}>
        <span>{`Store, Evaluate and `}</span>
        <span className={styles.collaborate}>Collaborate</span>
        <span>, with your team, all in one place.</span>
      </b>
      <div className={styles.registerCtaParent}>
        <div className={styles.registerCta}>
          <div className={styles.register}>Register</div>
        </div>
        <div className={styles.signUp}>Sign up</div>
      </div>
    </div>
  );
};

export default StoreEvaluateCollaborateContai2;
