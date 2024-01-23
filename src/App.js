import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserNew from "./UserNew";
import Home from "./Home";
import NoMatch from "./NoMatch";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/user/new">New User</Link>
      </div>
      <Link to="/user/:userId">User Profile</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
        <GoHomeButton/>
        <BackButton/>
        <ForwardButton/>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/user/new">
          <UserNew />
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
