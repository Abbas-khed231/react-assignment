import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCastDetail, getMovieDetail } from "../store/slices/moviesSlice";
import { useEffect } from "react";
import MovieDetail from "../component/MovieDetailCard";
import CastCard from "../component/CastImagesCard";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/material";


const MovieDetailPage = () => {
  const params = useParams();
  const { movieId = null } = params;
  const dispatch = useDispatch();
  const { movieDetail, castDetail } = useSelector((state) => state.movies);

  // console.log("params : ", params);

  useEffect(() => {
    dispatch(getMovieDetail({ movieId: movieId || "" }));
    dispatch(getCastDetail({ movieId: movieId || "" }));
  }, [movieId]);

  console.log("=====cast", castDetail.data);

  console.log("=======", movieDetail.data);
  return (
    <>
      <Box sx={{ bgcolor: "#282C34" }}>
        <Box sx={{padding:"15px"}}>

          <MovieDetail
            title={movieDetail?.data?.original_title}
            duration={movieDetail?.data?.runtime}
            posterPath={movieDetail?.data?.poster_path}
            rating={movieDetail?.data?.vote_average}
            genres={movieDetail?.data?.genres}
            date={movieDetail?.data?.release_date}
            overview={movieDetail?.data?.overview}
            backdropPath={movieDetail?.data?.backdrop_path}
          />
        </Box>

        <Box >
            <h1 style={{padding: "1px", color:"#fff", fontWeight:"lighter"}}>Cast</h1>  
        </Box>

        <Box sx={{ flexGrow: 1, width: "100%", my: 4 }}>
          
          <Grid container spacing={0}>
            {castDetail?.data?.cast?.map((item, index) => (
              <Grid key={index} item size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                <CastCard
                  name={item?.original_name}
                  character_name={item?.character}
                  image={item?.profile_path}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Stack sx={{width: "100%"}}></Stack>
      </Box>
    </>
  );
};

export default MovieDetailPage;
