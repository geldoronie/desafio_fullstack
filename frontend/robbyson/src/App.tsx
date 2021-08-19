import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;