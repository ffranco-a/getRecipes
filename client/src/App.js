// import './App.css';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import Pagination from "./components/Pagination.jsx";
import Detail from "./components/Detail.jsx";
import CreateRecipe from "./components/CreateRecipe.jsx"
import Diets from "./components/Diets.jsx"

function App() {
  return (
    <Provider store={store}>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Pagination} />
      <Route exact path="/home/recipe/:id" component={Detail} />
      <Route exact path="/home/create" component={CreateRecipe} />
      <Route exact path="/home/diets" component={Diets} />
    </Provider>
  );
}

export default App;
