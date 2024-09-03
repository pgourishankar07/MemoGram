import { Container } from "@mui/material";
import { Switch, Route, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Auth from "./components/Auth/Auth.jsx";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const userProfile = JSON.parse(localStorage.getItem("profile"));
    setUser(userProfile);
    if (user == null) {
      history.push("/auth");
    }
  }, [history]);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
      </Switch>
    </Container>
  );
}

export default App;
