import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/footer';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App(props) {
  console.log("these are inputs",props.input);
  return (
    <Router>
      <div className="App">
      <div><Nav /></div>
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div><Footer /></div>
    </Router>
  );
}
export default App;