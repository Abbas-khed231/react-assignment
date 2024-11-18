import { Box, Stack } from "@mui/material";
import Header from "../component/common/Header";
import MovieCard from "../component/MovieCard";
import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPopularMovies, getSearchedMovies } from "../store/slices/moviesSlice";
import Pagination from "@mui/material/Pagination";


const HomePage = () => {
  const [page, setPage] = useState(1);
  const [search ,setSearch] = useState(null);
  const [isSearch, setIsSearch] = useState(false)
  const { popularMovies , searchedMovies } = useSelector((state) => state.movies);
  console.log({ popularMovies });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovies({ page }));
  }, [page]);

  const handlePageChange = (event, value) => {
    console.log("page change called : ",value)
    setPage(value);
  };
  
  const handleSearchChange = (e) => {
     const { value } = e.target;
     console.log("value:", value);
     
     if(value === ""){
      setIsSearch(false);
      setSearch(null);
      dispatch(getPopularMovies({ page: 1 }));
      return
     }
     setSearch(value)
     setIsSearch(false);
     handleSearchApiCall
  }

  const handleSearchApiCall = () => {
    dispatch(getSearchedMovies({ page, searchQuery: search }));
  }
  
  const moviesData = isSearch ? searchedMovies.data: popularMovies.data || [];
  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#282C34" }}>
      <Header search={search} handleSearchChange={handleSearchChange} />
      <Box sx={{ flexGrow: 1, width: "100%", height: "100%", my: 4 }}>
        <Grid container spacing={2} >
          {moviesData.results?.map((item, index) => (
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
        sx={{ width: "100%" }}
      >
        <Box sx={{color: "#fff"}}>
          <Pagination 
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white", 
              },
              
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgb(156 39 176)",
              },
            }}
            count={popularMovies?.data?.total_pages} 
            page={page} color="secondary" 
            onChange={handlePageChange} />
        </Box>
      </Stack>
    </Box>
  );
};

export default HomePage;
