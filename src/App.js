import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<> <FrontPage /> </>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
