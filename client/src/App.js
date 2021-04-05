//import styles
import "./styles/app.scss";
//import components
import NavBar from "./components/NavBar";
//import routes
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
