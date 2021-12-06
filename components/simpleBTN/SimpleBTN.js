import React from "react";
import styles from "./SimpleBTN.module.css";

export default function SimpleBTN({ title, WIDTH }) {
  return (
    <button style={{ width: WIDTH && WIDTH }} className={styles.myBtn}>
      {title}
    </button>
  );
}
