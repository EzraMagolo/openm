import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './pages/Login'
import RegistrationForm from './pages/Registration';  
import ProfileComponent from './pages/Profile';
import HomeComponent from './pages/Home';
import NotFoundComponent from './pages/NotFound';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component= {RegistrationForm}/>
          <PrivateRoute path="/profile" component={ProfileComponent} />
          <Route path="/" exact component={HomeComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



