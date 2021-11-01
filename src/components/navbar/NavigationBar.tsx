import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import { getData } from "../../lib/api";
import { debounce } from "lodash";
import { useCont } from "../../context/moviesContext";

type Anchor = "right";

function NavigationBar() {
  const [state, setState] = useState({
    right: false,
  });
  const [searchValue, setSearchValue] = useState("");
  const moviesContext = useCont();

  useEffect(() => {
    async function setMovies() {
      const data = await getData(searchValue);
      moviesContext.setMoviesList(data);
    }
    setMovies();
  }, [searchValue]);

  function setMovieName(e: any) {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  function toggleDrawer(anchor: Anchor, open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  }
  const list = (anchor: Anchor) => (
    <Box
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
          onKeyUp={debounce(setMovieName, 1500)}
          id="outlined-search"
          label="Search movie"
          type="search"
          placeholder="Example: The fast and the furious"
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
