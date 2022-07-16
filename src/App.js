import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Media from "react-media";

import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import RollPage from "./pages/RollPage";
import SetUpPage from "./pages/SetUpPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/setup" component={SetUpPage} />
      <Media query="(max-width: 599px)">
        {(matches) =>
          matches ? (
            <Switch>
              <Route exact path="/overview" component={OverviewPage} />
              <Route exact path="/roll" component={RollPage} />
              <Redirect from="/dashboard" to="/roll" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/dashboard" component={DashboardPage} />
              <Redirect from="/overview" to="/dashboard" />
              <Redirect from="/roll" to="/dashboard" />
            </Switch>
          )
        }
      </Media>
    </div>
  );
}

export default App;
