import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/notes' component={Notes} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;