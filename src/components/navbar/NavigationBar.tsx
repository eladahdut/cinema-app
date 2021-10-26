import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";

type Anchor = "top" | "left" | "bottom" | "right";

function NavigationBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <Box
      // sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {[
          "Add Movie",
          "Movie List",
          "Favorite Movies",
          "Clear Movies List",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? "x" : "y"}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      m={1}
      p={1}>
      <Box p={3}>
        <TheatersOutlinedIcon fontSize="large" color="primary" />
      </Box>
      <Box component="form" sx={{ width: "50%" }} noValidate autoComplete="on">
        <TextField
          id="outlined-basic"
          label="Search movie"
          variant="outlined"
          placeholder="Example: The fast and th furious"
          sx={{ width: "100%" }}
        />
      </Box>
      <Box p={3} display="flex" alignItems="center">
        <Button variant="contained" color="primary">
          Show Movie
        </Button>
        <Button sx={{ marginTop: "0.5rem" }}>
          <div>
            {(["right"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <MoreVertIcon onClick={toggleDrawer(anchor, true)}>
                  {anchor}
                </MoreVertIcon>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Button>
      </Box>
    </Box>
  );
}

export default NavigationBar;
