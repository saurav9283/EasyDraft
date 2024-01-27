import './App.css';
import Ai from './component/Ai/Ai.js';
import Animate from './component/Animate/Animate.js';
import Avatars from './component/Avatars/Avatars.js';
import Home from './component/Home/Home.js';
import Nav from './component/Navbar/Nav.js';
import Voice from './component/Voices/Voice.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Avatars/>
      <Animate/>
      <Ai/>
      <Voice/>
      <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c4edf1c49ad5ab27cd37b_blur-purple.svg" className='blur_bg_purple' alt="" />
    </div>
  );
}

export default App;
