import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Detail from "./components/TaskDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/detail" exact component={Detail} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;