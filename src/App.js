import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clients from './pages/Clients';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/clients" component={Clients} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </Router>
  );
}

export default App;
