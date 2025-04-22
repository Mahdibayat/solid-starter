import { Route, Router } from "@solidjs/router";
import MainLayout from "./components/layout/mainLayout";
import DashboardPage from "./components/pages/dashboard";
import PageTwo from "./components/pages/pageTwo";

function App() {
  return (
    <Router>
      <Route path={"/"} component={MainLayout}>
        <Route path={"/"} component={DashboardPage} />
        <Route path={"/two"} component={PageTwo} />
      </Route>
    </Router>
  );
}

export default App;
