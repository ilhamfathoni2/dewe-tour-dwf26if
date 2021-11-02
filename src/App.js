import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home";
import Detail from "./pages/detail";
import Pay from "./pages/pay";
import AfterPay from "./pages/afterPay";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/payment" component={Pay} />
          <Route exact path="/status-payment" component={AfterPay} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
