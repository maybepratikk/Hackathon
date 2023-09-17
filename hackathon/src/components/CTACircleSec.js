import { useMemo } from "react";
import styles from "./CTACircleSec.module.css";

const CTACircleSec = ({
  value,
  cTACircleSecBorder,
  cTACircleSecPosition,
  cTACircleSecTop,
  cTACircleSecLeft,
  valueColor,
}) => {
  const cTACircleSecStyle = useMemo(() => {
    return {
      border: cTACircleSecBorder,
      position: cTACircleSecPosition,
      top: cTACircleSecTop,
      left: cTACircleSecLeft,
    };
  }, [
    cTACircleSecBorder,
    cTACircleSecPosition,
    cTACircleSecTop,
    cTACircleSecLeft,
  ]);

  const value1Style = useMemo(() => {
    return {
      color: valueColor,
    };
  }, [valueColor]);

  return (
    <div className={styles.ctacircleSec} style={cTACircleSecStyle}>
      <div className={styles.value} style={value1Style}>
        {value}
      </div>
    </div>
  );
};

export default CTACircleSec;
