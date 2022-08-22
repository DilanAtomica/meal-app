import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import IngredientsPage from "./Pages/IngredientsPage/IngredientsPage";
import NutrientsPage from "./Pages/NutrientsPage/NutrientsPage";
import RecipesPage from "./Pages/RecipesPage/RecipesPage";
import RecipeInfoPage from "./Pages/RecipeInfoPage/RecipeInfoPage";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <NavBar />  <FrontPage /> </>} />
          <Route path="/ingredients" element={<> <NavBar /> <IngredientsPage /> </>} />
          <Route path="/nutrients" element={<> <NavBar /> <NutrientsPage /> </>} />
          <Route path="/recipes/:apiUrl" element={<> <NavBar /> <RecipesPage /> </>} />
          <Route path="/recipe/:recipeID" element={<> <NavBar /> <RecipeInfoPage /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
