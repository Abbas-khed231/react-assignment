import Card from "./common/Card";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Text from "./common/Text";

const CastCard = ({ name = "", character_name = "", image = "" }) => {

  return (
    <Box sx={{ paddingBottom: "25px", borderRadius: "0px", textAlign: "center" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        width={"200px"}
        height={"300px"}
      />
      <Text style={{ color: "#fff" }}>{name}</Text>
      <Text style={{ color: "#fff" }}>Character: {character_name}</Text>
    </Box>
  );
};

export default CastCard;
