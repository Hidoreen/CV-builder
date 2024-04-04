import CreateCv from "./components/create";
import "./index.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>CV BUILDER</h1>
      </nav>
      <div className="page">
          <CreateCv/>
        </div>
    </div>
  );
}

export default App;
