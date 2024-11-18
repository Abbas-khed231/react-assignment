import React from "react";
import { Typography } from "@mui/material";

const Text = (props) => {
    return <Typography {...props}/>
}

export default React.memo(Text);