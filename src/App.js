import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import routes from "./routers/routes";
import history from "./routers/history";
import "./assets/style/style.css";

function App() {
  const RouteWithLayout = ({
    component: Component,
    layout: Layout,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
        )}
      />
    );
  };

  const routeComponents = routes.map(
    ({ path, component, layout }, key) => {
      return (
        <RouteWithLayout
          key={key}
          exact
          path={path}
          layout={layout}
          component={component}
        />
      );
    }
  );

  return (
    <Router history={history}>
      <Suspense fallback={null}>
          <Switch>
            {routeComponents}
          </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
