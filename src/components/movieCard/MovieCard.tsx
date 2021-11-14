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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormControlLabel } from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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
          <IconButton aria-label="settings" sx={{ color: "white" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.card.title}
        // subheader={}
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
    </Card>
  );
}
