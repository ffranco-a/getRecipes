// import './App.css';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { Route } from "react-router-dom";
import Recipes from "./components/Recipes.jsx";

function App() {
  return (
    <Provider store={store}>
      <Route path="/" component={Recipes} />
    </Provider>
  );
}

export default App;
