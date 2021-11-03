import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useCont } from "../../context/moviesContext";

export default function MoviesList() {
  const moviesContext = useCont();
  // const [resmovies, setResmovies] = useState([]);
  useEffect(() => {
    if (moviesContext.searchVal.length > 1) {
      console.log(moviesContext.searchVal);
    }
  }, [moviesContext.searchVal]);

  return (
    <div
      style={{
        flex: "1",
        overflow: "hidden auto",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <h1
          style={{ margin: "2.8rem 0 0.25rem 0", color: "rgb(117, 16, 247)" }}>
          Movies List
        </h1>
      </Box>
      <hr style={{ width: "2%", border: "1px solid rgb(117 16 247 / 70%)" }} />
    </div>
  );
}
