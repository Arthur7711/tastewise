import React from "react";
import TextField from "@mui/material/TextField";

const Simplelabel = ({ title }) => {
  return (
    <label>
      <p style={{ color: "#667B98" }}>{title}</p>
      <TextField
        // label={title}
        variant="standard"
        color="info"
        focused
        style={{
          color: "#667B98",
          background: "#F5FBFD",
          borderRadius: 8,
          width: "100%",
          paddingTop:'10px'
        }}
      />
    </label>
  );
};

export default Simplelabel;
