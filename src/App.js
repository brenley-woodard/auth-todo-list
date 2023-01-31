import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import { useUser } from './context/UserContext';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/tasks" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
