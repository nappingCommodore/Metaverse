import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import personModel3 from './models/person3.glb';

function Person3() {
  const loader = new GLTFLoader();
  loader.load(personModel3, (d) => {
    const entity = document.getElementById("person3");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="person3" position="10.5 1.2 -4" rotation="350 270 0"></a-entity>
  );
}

export default Person3;
