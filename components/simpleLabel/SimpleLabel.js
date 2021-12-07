import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./SimpleLabel.module.css";

const Simplelabel = ({ title }) => {
  return (
    <label>
      <p className={styles.par}>{title}</p>
      <TextField
        variant="standard"
        color="info"
        focused
        style={{
          color: "#667B98",
          background: "#F5FBFD",
          borderRadius: 8,
          width: "100%",
          paddingTop: "10px",
        }}
      />
    </label>
  );
};

export default Simplelabel;
