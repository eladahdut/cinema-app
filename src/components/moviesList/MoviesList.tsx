import Box from "@mui/material/Box";

export default function MoviesList() {
  return (
    <div
      style={{
          flex:'1',
          overflow:'hidden auto'
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