import React from "react";
import { Paper } from "@mui/material";

const Card = ({children,...restProps}) => {
    return (
        <Paper sx={{p:2}} {...restProps}> 
            {children}
        </Paper>
    )
}

export default React.memo(Card);