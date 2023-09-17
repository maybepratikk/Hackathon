import { useMemo } from "react";
import CTAWhiteSmall from "./CTAWhiteSmall";
import styles from "./ResearchPaperTopicContainer.module.css";

const ResearchPaperTopicContainer = ({
  sectionTitle,
  researchPaperTopicsMentor,
  researchPaperTopicDescrip,
  buttonText,
  propTop,
  propWidth,
  propTextDecoration,
  propColor,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const checkOutAllContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const problemStatementsStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      color: propColor,
    };
  }, [propTextDecoration, propColor]);

  return (
    <div
      className={styles.checkOutAllTheProblemStatParent}
      style={frameDiv2Style}
    >
      <b
        className={styles.checkOutAllContainer}
        style={checkOutAllContainerStyle}
      >
        <span>{sectionTitle}</span>
        <span
          className={styles.problemStatements}
          style={problemStatementsStyle}
        >
          {researchPaperTopicsMentor}
        </span>
        <span>{researchPaperTopicDescrip}</span>
      </b>
      <div className={styles.registerCtaWrapper}>
        <CTAWhiteSmall value="See all" />
      </div>
    </div>
  );
};

export default ResearchPaperTopicContainer;
