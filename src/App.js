import './App.css';
import Animate from './component/Animate/Animate.js';
import Avatars from './component/Avatars/Avatars.js';
import Home from './component/Home/Home.js';
import Nav from './component/Navbar/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Avatars/>
      <Animate/>
    </div>
  );
}

export default App;
