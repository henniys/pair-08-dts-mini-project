import "./App.css";
import Footer from "./components/Footer";

import NavBar from "./components/Navbar";
import Home from "./container/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
