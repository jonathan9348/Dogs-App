import "./App.css";
import {Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Route path="/">
        <LandingPage />
      </Route>
    </div>
  );
}

export default App;
