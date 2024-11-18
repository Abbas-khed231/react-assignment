import React from "react";
import { Button } from "@mui/material";

const button = (props) => {
    return <Button {...props}/>
}

export default React.memo(button);