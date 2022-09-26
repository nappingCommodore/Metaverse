import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import personModel4 from './models/person4.glb';

function Person4() {
  const loader = new GLTFLoader();
  loader.load(personModel4, (d) => {
    const entity = document.getElementById("person4");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="person4" position="-2 0 -8" rotation="0 160 0" scale="0.01 0.01 0.02"></a-entity>
  );
}

export default Person4;
