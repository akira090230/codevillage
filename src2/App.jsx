import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Room from './pages/Room';
import Login from './pages/Login';
const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Room />
        </Route>
      </Switch>
    </BrowserRouter>
  );

  };
export default App;