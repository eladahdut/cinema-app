import React from "react";
import Box from "@material-ui/core/Box";

function NavigationBar() {
  return (
    <div>
      <Box display="flex" justifyContent="space-between" m={1} p={1}>
        <Box p={3} bgcolor="error.main">
          Item 1
        </Box>
        <Box p={3} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={3} bgcolor="grey.300">
          Item 1
        </Box>
      </Box>
    </div>
  );
}

export default NavigationBar;
