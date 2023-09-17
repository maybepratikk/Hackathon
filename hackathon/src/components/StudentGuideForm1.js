import ResearchPaperTopicContainer from "./ResearchPaperTopicContainer";
import styles from "./StudentGuideForm1.module.css";

const StudentGuideForm1 = () => {
  return (
    <div className={styles.guideForStudents}>
      <img className={styles.blobIcon} alt="" src="/blob4.svg" />
      <ResearchPaperTopicContainer
        sectionTitle="Are you a "
        researchPaperTopicsMentor="mentor"
        researchPaperTopicDescrip="? Do you want to Guide students?"
        buttonText="Register now"
        propTop="calc(50% - 107.5px)"
        propWidth="610px"
        propTextDecoration="unset"
        propColor="#1e3738"
      />
      <img
        className={styles.webinarRafiki1Icon}
        alt=""
        src="/webinarrafiki-1.svg"
      />
    </div>
  );
};

export default StudentGuideForm1;
