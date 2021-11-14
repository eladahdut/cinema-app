import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { Button, FormControlLabel } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  border: "2px solid #7510F7",
  boxShadow: 24,
  p: 4,
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard(props: any) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [movieName, setMovieName] = React.useState("");
  const [overview, setOverview] = React.useState("");

  function toggleModal() {
    setOpen(!open);
  }
  function handleEdit() {
    console.log(movieName, overview);
  }

  function setEditedMovieName(val: string) {
    setMovieName(val);
  }
  function setEditedOverview(val: string) {
    setOverview(val);
  }

  const noImg =
    "https://kfcb.go.ke/sites/default/files/styles/film/public/2021-03/500x735_0_0_64.png?itok=9OY_x7fE";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: 300,
        marginBottom: 4,
        flexBasis: 400,
        backgroundColor: "#0000008f",
        color: "white",
      }}>
      <CardHeader
        sx={{ minHeight: 180 }}
        action={
          <IconButton
            onClick={toggleModal}
            aria-label="settings"
            sx={{ color: "white" }}>
            <EditIcon />
          </IconButton>
        }
        title={props.card.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          props.card.poster_path
            ? "https://image.tmdb.org/t/p/w200" + props.card.poster_path
            : noImg
        }
        alt="Paella dish"
      />
      <CardContent>{"release date: " + props.card.release_date}</CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <FormControlLabel
        sx={{ marginLeft: 1 }}
        control={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        }
        label="Read more"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.card.overview}</Typography>
        </CardContent>
      </Collapse>

      <Dialog open={open} onClose={toggleModal}>
        <DialogTitle>Edit Movie</DialogTitle>
        <br />
        <DialogContent>
          <FormControl sx={{ width: "25ch" }}>
            <TextField
              focused
              label="Movie Name"
              placeholder={props.card.title}
              color="secondary"
              onKeyUp={(e) =>
                setEditedMovieName((e.target as HTMLInputElement).value)
              }
            />
          </FormControl>
          <br />
          <br />
          <FormControl sx={{ width: "25ch" }}>
            <TextField
              color="secondary"
              id="outlined-multiline-static"
              label="Overview"
              multiline
              rows={8}
              defaultValue={props.card.overview}
              onKeyUp={(e) =>
                setEditedOverview((e.target as HTMLInputElement).value)
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button color="secondary" onClick={handleEdit}>
            Edit
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
