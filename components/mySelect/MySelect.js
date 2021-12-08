import React from "react";
import styles from "./MySelect.module.css";

export default function MySelect({ values }) {
  return (
    <select className={styles.mySelect} name="cars" id="cars">
      {values &&
        values.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
    </select>
  );
}
