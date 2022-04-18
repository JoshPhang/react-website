import Navbar from "./Navbar";
import Home from "./Home";
import Versle from "./Versle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      {/* <Versle /> */}
    </div>
  );
}

export default App;
