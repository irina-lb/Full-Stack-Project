import "./styles/app.scss";
import { Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import Faq from "./pages/Faq";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/faq" component={Faq} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
