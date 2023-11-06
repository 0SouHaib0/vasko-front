  import './App.css';
  import 'font-awesome/css/font-awesome.min.css';
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Clients from './pages/Clients';
  import Orders from './pages/Orders';
  import SignupPage from './pages/SignupPage';
  import LoginPage from './pages/LoginPage';
  import { FormClient } from './pages/FormClient';
  import { OrderForm } from './pages/OrderForm';

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage}/>
          <Route path="/clients" component={Clients} />
          <Route path="/addClient" component={FormClient}/>
          <Route path="/orders" component={Orders} />
          <Route path="/new-order/:clientId" ><OrderForm/></Route>

        </Switch>
      </Router>
    );
  }

  export default App;
