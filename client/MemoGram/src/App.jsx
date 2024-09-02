import useStyles from "./styles/App.js";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import Posts from "./components/Posts/Posts.jsx";
import Form from "./components/Form/Form.jsx";
import { useDispatch } from "react-redux";
import memories from "./assets/icons/icon64.png";
import { useEffect } from "react";
import { getPosts } from "./actions/posts.js";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="left">
          <img
            className={classes.image}
            src={memories}
            alt="icon"
            height="45"
          />
          MemoGram
        </Typography>
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
