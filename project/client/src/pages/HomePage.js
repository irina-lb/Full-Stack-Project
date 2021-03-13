//components import
import Header from "../components/homePage/Header";
import About from "../components/homePage/About";
import Popular from "../components/homePage/Popular";

function HomePage() {
  return (
    <div>
      <div className="container">
        <Header />
        <About />
        <Popular />
      </div>
    </div>
  );
}

export default HomePage;
