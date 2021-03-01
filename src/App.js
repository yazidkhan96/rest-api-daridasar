import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from './config/Router';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routes.map(route => (
              <Route path={route.path} exact component={route.component} />
            ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
