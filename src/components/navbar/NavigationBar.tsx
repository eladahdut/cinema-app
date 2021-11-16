import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import { debounce } from "lodash";
import { useCont } from "../../context/moviesContext";

type Anchor = "right";

function NavigationBar() {
  const [state, setState] = useState({
    right: false,
  });
  const moviesContext = useCont();

  function setMovieName(val: string, event: Event) {
    event.preventDefault();
    moviesContext.setSearchValue(val);
  }

  function handleRandMovie() {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    for (let i = 0; i < 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    moviesContext.setSearchValue(result);
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
            <ListItemIcon>
              {index % 2 === 0 ? <FastForwardIcon /> : <FastRewindIcon />}
            </ListItemIcon>
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
          color="secondary"
          onKeyUp={debounce((e) => setMovieName(e.target.value, e), 1000)}
          onKeyPress={(e) => {
            e.key === "Enter" && e.preventDefault();
          }}
          label="Search movie"
          type="search"
          placeholder="Example: The fast and the furious"
          sx={{ width: "100%" }}
          helperText="Live Search"
        />
      </Box>
      <Box p={3} display="flex" alignItems="center">
        <Button onClick={handleRandMovie} variant="contained" color="secondary">
          Show Movie
        </Button>

        <Button sx={{ marginTop: "0.5rem" }}>
          <div>
            {(["right"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <MoreVertIcon
                  color="secondary"
                  onClick={toggleDrawer(anchor, true)}>
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
