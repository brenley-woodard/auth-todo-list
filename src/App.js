import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Switch >
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
