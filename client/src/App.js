// import './App.css';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import Recipes from "./components/Recipes.jsx";

function App() {
  return (
    <Provider store={store}>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={Recipes} />
    </Provider>
  );
}

export default App;
