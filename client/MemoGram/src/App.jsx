import useStyles from "./styles/App.js";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";
import { useDispatch } from "react-redux";
import memories from "./assets/icons/icons8-memories-64.png";
import { useEffect } from "react";
import { getPosts } from "./actions/posts.js";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  let currentId;
  let setCurrentId;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
