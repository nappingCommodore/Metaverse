import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import busModel from './models/bus.glb';

function Bus() {
  const loader = new GLTFLoader();
  loader.load(busModel, (d) => {
    const entity = document.getElementById("bus");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="bus" position="-2 0 -55" scale="1 1 0.5" rotation="0 0 0" animation="dur:9000;easing:linear; from: 4 1 -50; to: 4 3.5 -75; loop:-1;property: position"></a-entity>
  );
}

export default Bus;
