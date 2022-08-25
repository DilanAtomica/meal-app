import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FrontPage from "./Pages/FrontPage/FrontPage";
import IngredientsPage from "./Pages/IngredientsPage/IngredientsPage";
import NutrientsPage from "./Pages/NutrientsPage/NutrientsPage";
import RecipesPage from "./Pages/RecipesPage/RecipesPage";
import RecipeInfoPage from "./Pages/RecipeInfoPage/RecipeInfoPage";
import NavBar from "./Components/NavBar/NavBar";
import {Oval} from "react-loader-spinner";
import {createContext, useState} from "react";

export const AppContext = createContext();

function App() {

    const [loading, setLoading] = useState(false);

    const activateLoader = () => {
        setLoading(true);
    };

    const deActiveLoader = () => {
        setLoading(false);
    };

  return (
  <AppContext.Provider value={{loading, activateLoader, deActiveLoader}}>
      <div className="App">
            <div className="loadingSpinner" style={{visibility: loading && "visible"}}>
                <Oval
                    height={80}
                    width={80}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={loading}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>

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
  </AppContext.Provider>
  );
}

export default App;
