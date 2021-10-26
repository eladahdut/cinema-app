import * as React from "react";
import Box from "@mui/material/Box";

export default function MoviesList() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <h1 style={{ margin: "2.8rem 0 0.25rem 0" }}>Movies List</h1>
      </Box>
      <hr style={{ width: "2%" }} />
    </div>
  );
}
