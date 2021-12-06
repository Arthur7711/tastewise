import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect({ values, title }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box style={{ border: "none" }} sx={{ width: 150 }}>
      <FormControl fullWidth style={{ border: "none" }}>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={title}
          onChange={handleChange}
          style={{ border: "none" }}
        >
          {values &&
            values.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
