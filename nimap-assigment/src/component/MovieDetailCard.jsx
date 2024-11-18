import { Box, Card } from "@mui/material";
import Text from "../component/common/Text";

const MovieDetail = ({
  title = "",
  duration = "",
  posterPath = "",
  rating = "",
  genres = [],
  date = "",
  overview = "",
  backdropPath = "",
}) => {
  return (
    <Card sx={{ bgcolor: "rgb(2 10 23)", padding: "30px", borderRadius: "16px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens, row on larger
          justifyContent: { xs: "center", md: "space-evenly" },
          alignItems: "center",
        }}
      >
        {/* Poster and Details */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Column on small, row on larger screens
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {/* Poster */}
          <Box>
            <img
              src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
              width={"150px"}
              height={"75%"}
              style={{ borderRadius: "8px" }}
            />
          </Box>

          {/* Details */}
          <Box sx={{ paddingLeft: { xs: "0", sm: "16px" }, textAlign: { xs: "center", sm: "left" } }}>
            <Text sx={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>{title}</Text>
            <h2 style={{ color: "#7fa5d2", fontWeight: "normal" }}>Rating : {rating}</h2>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "8px",
                justifyContent: "space-between",
              }}
            >
              <Text
                sx={{
                  color: "#fff",
                  border: "1px solid grey",
                  borderRadius: "4px",
                  padding: "4px 8px",
                }}
              >
                {duration} min
              </Text>
              <Box>
                <h4 style={{ color: "rgb(190 211 237)", fontWeight: "normal" }}>
                  {genres.map((genre) => genre.name).join(", ")}
                </h4>
              </Box>
            </Box>
            <Box>
              <Text sx={{ color: "#fff" }}>Release Date : {date}</Text>
            </Box>
          </Box>
        </Box>

        {/* Backdrop */}
        <Box
          sx={{
            mt: { xs: "16px", md: "0" },
            width: { xs: "100%", md: "40%" }, // Full width on small screens, fixed width on larger
            textAlign: "center",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdropPath}`}
            width={"100%"}
            height={"auto"}
            style={{ borderRadius: "8px" }}
          />
        </Box>
      </Box>

      {/* Overview */}
      <Box mt={3}>
        <Box>
          <h2 style={{ color: "#fff", fontWeight: "lighter" }}>Overview</h2>
          <Text sx={{ color: "rgb(181 189 200)", textAlign: "justify" }}>{overview}</Text>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieDetail;

