import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import pantryModel from './models/vending.glb';

function Pantry() {
  const loader = new GLTFLoader();
  loader.load(pantryModel, (d) => {
    const entity = document.getElementById("pantry");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="pantry" position="-18 0.4 12" rotation="0 180 0" scale="0.006 0.01 0.009"></a-entity>
  );
}

export default Pantry;
