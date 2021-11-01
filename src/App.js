import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
