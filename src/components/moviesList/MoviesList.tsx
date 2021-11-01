import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useCont } from "../../context/moviesContext";

export default function MoviesList() {

  const moviesContext = useCont();
  // useEffect(() => {
      console.log(moviesContext.moviesData);
    
  // }, [moviesContext.moviesData])  




  return (
    <div
      style={{
        backgroundColor: "rgb(117, 16, 247)",
        backgroundImage: "linear-gradient(white, rgb(117, 16, 247))",
        minHeight: "100vh",
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
