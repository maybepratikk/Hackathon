import styles from "./FeaturesContainer.module.css";

const FeaturesContainer = ({
  dimensionCode,
  imageDimensionCode,
  dimensionCodeImageUrl,
}) => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresParent}>
        <div className={styles.features1}>Features</div>
        <div className={styles.frameParent}>
          <div className={styles.studentGuideParent}>
            <div className={styles.studentGuide}>
              <img
                className={styles.teacherStudentRafiki1}
                alt=""
                src={dimensionCode}
              />
              <div className={styles.pialgrism} />
              <div className={styles.maintainingStudentGuideRati}>
                Maintaining Student-Guide Ratio.
              </div>
            </div>
            <div className={styles.studentGuide}>
              <div className={styles.pialgrism} />
              <div className={styles.detectPlagiarismEasilyContainer}>
                <p className={styles.detectPlagiarismEasily}>
                  Detect Plagiarism easily
                </p>
                <p className={styles.detectPlagiarismEasily}>
                  with built in technique
                </p>
              </div>
              <img
                className={styles.teacherStudentRafiki1}
                alt=""
                src={imageDimensionCode}
              />
            </div>
            <div className={styles.studentGuide}>
              <div className={styles.pialgrism} />
              <div className={styles.detectPlagiarismEasilyContainer}>
                <p className={styles.detectPlagiarismEasily}>
                  Easy collaboration with
                </p>
                <p className={styles.detectPlagiarismEasily}>
                  your mentors/Students.
                </p>
              </div>
              <img
                className={styles.teacherStudentRafiki1}
                alt=""
                src={dimensionCodeImageUrl}
              />
            </div>
          </div>
          <div className={styles.studentGuideParent}>
            <div className={styles.studentGuide}>
              <img
                className={styles.teacherStudentRafiki1}
                alt=""
                src="/progress-overviewrafiki-11.svg"
              />
              <div className={styles.pialgrism} />
              <div className={styles.maintainingStudentGuideRati}>
                <p className={styles.detectPlagiarismEasily}>
                  Keep tab on the progress
                </p>
                <p className={styles.detectPlagiarismEasily}>made.</p>
              </div>
            </div>
            <div className={styles.studentGuide}>
              <img
                className={styles.teacherStudentRafiki1}
                alt=""
                src="/dropdown-menurafiki-11.svg"
              />
              <div className={styles.pialgrism} />
              <div className={styles.maintainingStudentGuideRati}>
                <p className={styles.detectPlagiarismEasily}>
                  Categorization made
                </p>
                <p className={styles.detectPlagiarismEasily}>easy peasy.</p>
              </div>
            </div>
            <div className={styles.studentGuide}>
              <img
                className={styles.teacherStudentRafiki1}
                alt=""
                src="/date-pickerrafiki-11.svg"
              />
              <div className={styles.pialgrism} />
              <div className={styles.maintainingStudentGuideRati}>
                <p className={styles.detectPlagiarismEasily}>
                  {" "}
                  Be updated with your
                </p>
                <p className={styles.detectPlagiarismEasily}>deadlines 🤐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;
