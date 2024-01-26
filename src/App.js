import './App.css';
import Ai from './component/Ai/Ai.js';
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
      <Ai/>
    </div>
  );
}

export default App;
