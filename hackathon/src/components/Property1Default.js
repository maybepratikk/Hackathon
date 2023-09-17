import { useMemo } from "react";
import MenuDefault from "./MenuDefault";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <MenuDefault menu="Home" menuColor="#191919" />
      <MenuDefault menu="University" menuColor="#b2b2b2" />
      <MenuDefault menu="Students" menuColor="#b2b2b2" />
      <MenuDefault menu="External Mentor" menuColor="#b2b2b2" />
      <MenuDefault menu="Problem Statements" menuColor="#b2b2b2" />
      <MenuDefault menu="More" menuColor="#b2b2b2" />
    </div>
  );
};

export default Property1Default;
