import "./App.css";
import {Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Create from "./components/Create";
import DogDetails from "./components/DogDetails";

function App() {
  return (
    <div>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/create">
        <Create />
      </Route>
      <Route exact path="/home/:id">
        <DogDetails />
      </Route>
    </div>
  );
}

export default App;
