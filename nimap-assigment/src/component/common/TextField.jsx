import React from "react";
import { TextField } from "@mui/material";

const SearchField = (props) => {
  return (
    <TextField
      placeholder="Search Movies Name"
      sx={{ backgroundColor: "#fff", mx: "15px" }}
      {...props}
    ></TextField>
  );
};

export default React.memo(SearchField);
