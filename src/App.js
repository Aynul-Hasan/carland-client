import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Login from './pages/form/Login';
import Singup from './pages/form/Singup';
import Dashboard from './pages/dashboard/Dashboard';
import AuthProvider from './context/AuthProvider';
import Privateroute from './pages/privateroute/Privateroute';
import Shopping from './pages/shop/Shopping';


function App() {
  return (
    <>
    <AuthProvider> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/singup" component={Singup}/>
          <Privateroute path="/shopping/:id">
               <Shopping/>
          </Privateroute>
          <Privateroute path="/dashboard">
                <Dashboard></Dashboard>
          </Privateroute>
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
