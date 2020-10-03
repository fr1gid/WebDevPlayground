import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withAuthenticator } from "aws-amplify-react";
import {
  SettingsPage,
  InsightsPage,
  ClientDetailsPage,
  DashboardPage,
  LandingPage,
} from "pages";
import { GlobalStyle } from "utils";

// TODO set this routes private
const Routes = (
  <Switch>
    <Route exact path="/dashboard" component={DashboardPage} />
    <Route exact path="/clients/:clientId" component={ClientDetailsPage} />
    <Route exact path="/settings" component={SettingsPage} />
    <Route exact path="/insights" component={InsightsPage} />
  </Switch>
);
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <GlobalStyle />
        {Routes}
      </div>
    );
  }
}

export default App;
