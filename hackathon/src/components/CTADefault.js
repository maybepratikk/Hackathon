import { useMemo } from "react";
import styles from "./CTADefault.module.css";

const CTADefault = ({
  value,
  cTADefaultBackgroundColor,
  cTADefaultBoxSizing,
  cTADefaultCursor,
  cTADefaultBorder,
  valueDisplay,
}) => {
  const cTADefaultStyle = useMemo(() => {
    return {
      backgroundColor: cTADefaultBackgroundColor,
      boxSizing: cTADefaultBoxSizing,
      cursor: cTADefaultCursor,
      border: cTADefaultBorder,
    };
  }, [
    cTADefaultBackgroundColor,
    cTADefaultBoxSizing,
    cTADefaultCursor,
    cTADefaultBorder,
  ]);

  const valueStyle = useMemo(() => {
    return {
      display: valueDisplay,
    };
  }, [valueDisplay]);

  return (
    <div className={styles.ctadefault} style={cTADefaultStyle}>
      <div className={styles.value} style={valueStyle}>
        {value}
      </div>
    </div>
  );
};

export default CTADefault;
