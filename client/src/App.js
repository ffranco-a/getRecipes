// import './App.css';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
// import Pagination from "./components/Pagination.jsx";
import Detail from "./components/Detail.jsx";
import CreateRecipe from "./components/CreateRecipe.jsx"
import Diets from "./components/Diets.jsx"
import Home from "./components/Home.jsx";

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/recipe/:id" component={Detail} />
      <Route exact path="/create" component={CreateRecipe} />
      <Route exact path="/diets" component={Diets} />
    </Provider>
  );
}

export default App;
