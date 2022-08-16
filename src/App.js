import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import IngredientsPage from "./Pages/IngredientsPage/IngredientsPage";
import NutrientsPage from "./Pages/NutrientsPage/NutrientsPage";
import RecipesPage from "./Pages/RecipesPage/RecipesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <FrontPage /> </>} />
          <Route path="/ingredients" element={<> <IngredientsPage /> </>} />
          <Route path="/nutrients" element={<> <NutrientsPage /> </>} />
          <Route path="/recipes/:apiUrl" element={<> <RecipesPage /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
