import CTADefault from "./CTADefault";
import styles from "./StoreEvaluateCollaborateContai.module.css";

const StoreEvaluateCollaborateContai = () => {
  return (
    <div className={styles.heroSectionText}>
      <div className={styles.heroSectionTextAndCta}>
        <b className={styles.storeEvaluateAndContainer}>
          <span
            className={styles.storeEvaluateAnd}
          >{`Store, Evaluate and `}</span>
          <span className={styles.collaborate}>Collaborate</span>
          <span>{`, with your team, all in `}</span>
          <span>
            <span className={styles.onePlace}>one place</span>.
          </span>
        </b>
        <div className={styles.ctas}>
          <CTADefault
            value="Register"
            cTADefaultBackgroundColor="#284b63"
            cTADefaultBoxSizing="border-box"
            cTADefaultCursor="pointer"
            cTADefaultBorder="none"
            valueDisplay="inline-block"
          />
          <button className={styles.signUp}>Sign up</button>
        </div>
      </div>
      <img
        className={styles.seoAnalyticsTeamRafiki1}
        alt=""
        src="/seo-analytics-teamrafiki-1-1.svg"
      />
    </div>
  );
};

export default StoreEvaluateCollaborateContai;
