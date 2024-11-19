import { Box, Stack } from "@mui/material";
import Header from "../component/common/Header";
import MovieCard from "../component/MovieCard";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getSearchedMovies,
} from "../store/slices/moviesSlice";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const { popularMovies, searchedMovies } = useSelector(
    (state) => state.movies
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (isSearch) {
      dispatch(getSearchedMovies({ page, searchQuery: search }));
    } else {
      dispatch(getPopularMovies({ page }));
    }
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setIsSearch(false);
      setSearch(null);
      setPage(1);
      dispatch(getPopularMovies({ page: 1 }));
      return;
    }
    setSearch(value);
  };

  const handleSearchApiCall = () => {
    setIsSearch(true);
    dispatch(getSearchedMovies({ page: 1, searchQuery: search }));
  };

  const moviesData = isSearch ? searchedMovies : popularMovies || [];
  return (
    <>
      {moviesData.loading ? (
        <Box
          sx={{ position: "fixed" , top: "50%" , left: "50%" }}
        >
          <CircularProgress color="#34393F" />
        </Box>
      ) : (
        <Box sx={{ width: "100%", height: "100%", bgcolor: "#282C34" }}>
          <Header
            search={search}
            handleSearchChange={handleSearchChange}
            onSearchClick={handleSearchApiCall}
            isHomePage
          />
          <Box sx={{ flexGrow: 1, width: "100%", height: "100%", my: 4 }}>
            <Grid container spacing={2}>
              {moviesData?.data?.results?.map((item, index) => (
                <Grid
                  key={index}
                  item
                  size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                  sx={{ cursor: "pointer", my: "20px" }}
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
                count={moviesData?.data?.total_pages || 1}
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

export default HomePage;
