import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
import Header from "../component/common/Header";
import MovieCard from "../component/MovieCard";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../store/slices/moviesSlice";

const UpcomingMovie = () => {
  const [page, setPage] = useState(1);
  const { upcomingMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUpcomingMovies({ page }));
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
    {upcomingMovies.loading ? (
      <Box
        sx={{ position: "fixed" , top: "50%" , left: "50%" }}
      >
        <CircularProgress color="#34393F" />
      </Box>
    ) : (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#282C34" }}>
      <Header />
      <Box sx={{ flexGrow: 1, width: "100%", my: 4 }}>
        <Grid container spacing={2}>
          {upcomingMovies?.data?.results?.map((item, index) => (
            <Grid
              key={index}
              item
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
              sx={{ cursor: "pointer" }}
            >
              <MovieCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", py: 4 }}
      >
        <Box sx={{ color: "#fff" }}>
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
              },

              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgb(156 39 176)",
              },
            }}
            count={upcomingMovies?.data?.total_pages}
            page={page}
            color="secondary"
            onChange={handlePageChange}
          />
        </Box>
      </Stack>
    </Box>
    )}
    </>
  );
};

export default UpcomingMovie;
