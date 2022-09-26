import './App.css';
import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './sky1.jpg';
import hills from './models/grass.glb';
import Logo from './Logo.js';
import Ofc from './Office.js';
import Person2 from './Person2.js';
import Person3 from './Person3.js';
import Person4 from './Person4.js';
import PlayVideo from './PlayVideo.js';
import Road from './Road.js';
import Bus from './Bus.js';
import Game1 from './Game1.js'
import Pantry from './Pantry.js';
import Techlink from './TechLink.js';
import Tree from './Tree.js';
import Tree2 from './Tree2.js';

function App() {
  const loader = new GLTFLoader();
  loader.load(hills, (d) => {
    const entity = document.getElementById("hills");
    entity.object3D.add(d.scene);
  });

  return (
    <a-scene>
      <a-assets>
        <img id="sky"src={sky}></img>
      </a-assets>
      <a-sky
        color = "#FFFFFF"
        material="src: #sky"
        rotation="0 0 0">
     </a-sky>
      <a-entity id="hills" position="-85 0 -50" scale="2 2 2"></a-entity>
      <Logo />
      <Ofc />
      <Person2 />
      <Person3 />
      <Person4 />
      <PlayVideo />
      <Road />
      <Bus />
      <Game1 />
      <Pantry />
      <Techlink />
      <Tree />
      <Tree2 />
      </a-scene>
  );
}

export default App;
