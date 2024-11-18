import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/common/Header";
import HomePage from "./pages/HomePage";
import UpcomingMovie from "./pages/UpcomingMoviePage";
import TopRated from "./pages/TopRatedPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
      <Header />
      <Box mt={10}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upcoming" element={<UpcomingMovie />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetailPage />} />
          <Route path="*" element={<>Path Not Found</>} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
