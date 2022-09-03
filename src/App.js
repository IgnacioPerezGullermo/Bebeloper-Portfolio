import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { Main } from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/home" component={Main}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
