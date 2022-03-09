import Navbar from "./Navbar";
import Home from "./Home";
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      {/* <Logo /> */}
    </div>
  );
}

export default App;
