/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Text from "./common/Text";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/movie-detail/${data.id}`,);
  };
  return (
    <Box sx={{ textAlign: "center", width: "100%" }} onClick={handleCardClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        style={{ borderRadius: "8px" }}
        height={"350px"}
      />
      <Text sx={{ color: "#fff" }}>{data.original_title}</Text>
      <Text color="#fff" >Rating: {data.vote_average}/10 </Text>
    </Box>
  );
};

export default MovieCard;
