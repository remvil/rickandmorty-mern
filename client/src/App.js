import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authentication";

import Navbar from "./components/Navbar";
import Register from "./components/UserAuth/Register";
import Login from "./components/UserAuth/Login";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import CharacterDetail from "./components/RMCharacters/CharacterDetail"
// import AuthRoute from "./AuthRoute";

if (localStorage.jwtToken) {
  // get the Jwt
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  // Check if jwt is expired
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>  
            <Navbar />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/detail/:id" component={CharacterDetail} />
              {/* <AuthRoute exact path="/detail/:id">
                <CharacterDetail />  
              </AuthRoute> */}
              <Route component={NotFound} />
            </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
