import './App.css';
import Main from './Main';
import Nav from './Nav';
import Footer from './footer';
import Home from './home';
function App(props) {
  console.log("these are inputs",props.input);
  return (
    <div className="App">
     <div><Nav /></div>
      
    {/* <div><Home /></div> */}
    <div><Main /></div>
      
      <div><Footer /></div>
    </div>
  );
}

export default App;
