import { Provider } from "react-redux";
import store from "./store/index.js";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import Detail from "./components/Detail.jsx";
import CreateRecipe from "./components/CreateRecipe.jsx"
import Diets from "./components/Diets.jsx"
import Home from "./components/Home.jsx";
import Favorites from "./components/Favorites.jsx";

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/recipe/:id" component={Detail} />
      <Route path="/create" component={CreateRecipe} />
      <Route path="/diets" component={Diets} />
      <Route path="/favorites" component={Favorites} />
    </Provider>
  );
}

export default App;
