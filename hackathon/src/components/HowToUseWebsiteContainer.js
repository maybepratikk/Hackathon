import { useMemo } from "react";
import styles from "./HowToUseWebsiteContainer.module.css";

const HowToUseWebsiteContainer = ({
  purpose,
  websiteDescription,
  studentCollaborationDescr,
  propLeft,
  propBorder,
  propColor,
  propColor1,
  propColor2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const forStudentsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const howToUseStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const studentsCanUseContainerStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.forStudentsWrapper} style={frameDiv1Style}>
        <div className={styles.forStudents} style={forStudentsStyle}>
          {purpose}
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.howToUse} style={howToUseStyle}>
          How to use this website?
        </div>
        <div
          className={styles.studentsCanUseContainer}
          style={studentsCanUseContainerStyle}
        >
          <p className={styles.studentsCanUse}>{websiteDescription}</p>
          <p className={styles.studentsCanUse}>{studentCollaborationDescr}</p>
        </div>
      </div>
    </div>
  );
};

export default HowToUseWebsiteContainer;
