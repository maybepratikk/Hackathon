import { useMemo } from "react";
import styles from "./MenuDefault.module.css";

const MenuDefault = ({ menu = "Menu", menuColor }) => {
  const menuStyle = useMemo(() => {
    return {
      color: menuColor,
    };
  }, [menuColor]);

  return (
    <div className={styles.menudefault}>
      <div className={styles.menu} style={menuStyle}>
        {menu}
      </div>
    </div>
  );
};

export default MenuDefault;
