import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PostListCard = ({ title, body, handleDelete, isPending, onEdit, onDetail }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onDetail}>
        <CardMedia
          className={classes.media}
          image="https://placeimg.com/200/200/any.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ width: 300, whiteSpace: "pre" }}>
            <Box
              component="div"
              my={2}
              textOverflow="ellipsis"
              overflow="hidden"
            >
              <Typography gutterBottom variant="h5" component="h2">
                {title}...
              </Typography>
            </Box>
          </div>
          <div style={{ whiteSpace: "pre" }}>
            <Box
              component="div"
              my={2}
              textOverflow="ellipsis"
              overflow="hidden"
            >
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </Box>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onEdit}>
          Edit
        </Button>
        {isPending === true ? (
          <CircularProgress color="primary" size={20} />
        ) : (
            <Button size="small" color="primary" onClick={handleDelete}>
              Delete
            </Button>
          )}
      </CardActions>
    </Card>
  );
};

export default PostListCard;
