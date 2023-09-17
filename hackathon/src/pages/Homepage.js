import CTACircleSec from "../components/CTACircleSec";
import Property1Default from "../components/Property1Default";
import StudentGuideContainer from "../components/StudentGuideContainer";
import ContainerGuideForExternalMento from "../components/ContainerGuideForExternalMento";
import ResearchPaperTopicContainer from "../components/ResearchPaperTopicContainer";
import StudentGuideContainer1 from "../components/StudentGuideContainer1";
import StudentGuideContainer3 from "../components/StudentGuideContainer3";
import StudentGuideForm1 from "../components/StudentGuideForm1";
import StoreEvaluateCollaborateContai from "../components/StoreEvaluateCollaborateContai";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <img className={styles.blobIcon} alt="" src="/blob.svg" />
      <div className={styles.topNav}>
        <div className={styles.logo} />
        <CTACircleSec
          value="Login"
          cTACircleSecBorder="1.5px solid var(--dark-blue-shades-dark-blue-shades)"
          cTACircleSecPosition="absolute"
          cTACircleSecTop="calc(50% - 24.75px)"
          cTACircleSecLeft="1261.25px"
          valueColor="#284b63"
        />
        <Property1Default
          property1DefaultPosition="absolute"
          property1DefaultTop="calc(50% - 22.5px)"
          property1DefaultLeft="calc(50% - 395px)"
        />
      </div>
      <div className={styles.aboutUs}>
        <div className={styles.text}>
          <div className={styles.aboutUs1}>About us</div>
          <div className={styles.weAreXyzContainer}>
            <p className={styles.weAreXyz}>
              We are XYZ. Making the Process of PG Dissertation shorter, we have
              built this website
            </p>
            <p className={styles.weAreXyz}>
              to help improve the current evaluation technique. We solved the
              problem of Plagiarism,
            </p>
            <p className={styles.weAreXyz}>
              Duplicacy, Security and Student-Guide Ratio.
            </p>
          </div>
        </div>
      </div>
      <StudentGuideContainer />
      <ContainerGuideForExternalMento />
      <div className={styles.guideForExternalMentors}>
        <ResearchPaperTopicContainer
          sectionTitle="Check out all the "
          researchPaperTopicsMentor="Problem statements"
          researchPaperTopicDescrip=" to decide your Research Paper Topic."
          buttonText="See all"
        />
        <img
          className={styles.dizzyFaceRafiki1}
          alt=""
          src="/dizzy-facerafiki-1.svg"
        />
      </div>
      <StudentGuideContainer1 />
      <StudentGuideContainer3 />
      <StudentGuideForm1 />
      <div className={styles.features}>
        <div className={styles.featuresParent}>
          <div className={styles.aboutUs1}>Features</div>
          <div className={styles.frameParent}>
            <div className={styles.studentGuideParent}>
              <div className={styles.studentGuide}>
                <img
                  className={styles.teacherStudentRafiki1}
                  alt=""
                  src="/teacher-studentrafiki-14.svg"
                />
                <div className={styles.pialgrism} />
                <div className={styles.maintainingStudentGuideRati}>
                  Maintaining Student-Guide Ratio.
                </div>
              </div>
              <div className={styles.studentGuide}>
                <div className={styles.pialgrism} />
                <div className={styles.detectPlagiarismEasilyContainer}>
                  <p className={styles.weAreXyz}>Detect Plagiarism easily</p>
                  <p className={styles.weAreXyz}>with built in technique</p>
                </div>
                <img
                  className={styles.teacherStudentRafiki1}
                  alt=""
                  src="/phishing-accountrafiki-14.svg"
                />
              </div>
              <div className={styles.studentGuide}>
                <div className={styles.pialgrism} />
                <div className={styles.detectPlagiarismEasilyContainer}>
                  <p className={styles.weAreXyz}>Easy collaboration with</p>
                  <p className={styles.weAreXyz}>your mentors/Students.</p>
                </div>
                <img
                  className={styles.teacherStudentRafiki1}
                  alt=""
                  src="/live-collaborationrafiki-14.svg"
                />
              </div>
            </div>
            <div className={styles.studentGuideParent}>
              <div className={styles.studentGuide}>
                <img
                  className={styles.teacherStudentRafiki1}
                  alt=""
                  src="/progress-overviewrafiki-13.svg"
                />
                <div className={styles.pialgrism} />
                <div className={styles.maintainingStudentGuideRati}>
                  <p className={styles.weAreXyz}>Keep tab on the progress</p>
                  <p className={styles.weAreXyz}>made.</p>
                </div>
              </div>
              <div className={styles.studentGuide}>
                <img
                  className={styles.teacherStudentRafiki1}
                  alt=""
                  src="/dropdown-menurafiki-13.svg"
                />
                <div className={styles.pialgrism} />
                <div className={styles.maintainingStudentGuideRati}>
                  <p className={styles.weAreXyz}>Categorization made</p>
                  <p className={styles.weAreXyz}>easy peasy.</p>
                </div>
              </div>
              <div className={styles.studentGuide}>
                <img
                  className={styles.teacherStudentRafiki1}
                  alt=""
                  src="/date-pickerrafiki-13.svg"
                />
                <div className={styles.pialgrism} />
                <div className={styles.maintainingStudentGuideRati}>
                  <p className={styles.weAreXyz}> Be updated with your</p>
                  <p className={styles.weAreXyz}>deadlines 🤐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoreEvaluateCollaborateContai />
    </div>
  );
};

export default Homepage;
