import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "./App.scss";
import Loading from "./components/Loading";

const Layout = React.lazy(() => import("./containers/Layout"));
const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={props => <Layout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
