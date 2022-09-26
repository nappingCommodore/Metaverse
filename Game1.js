import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import game1Model from './models/game1.glb';

function Game1() {
  const loader = new GLTFLoader();
  loader.load(game1Model, (d) => {
    const entity = document.getElementById("game1");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="game1" position="24 0 4" rotation="0 180 0"></a-entity>
  );
}

export default Game1;
