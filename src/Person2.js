import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import personModel2 from './models/person2.glb';

function Person2() {
  const loader = new GLTFLoader();
  loader.load(personModel2, (d) => {
    const entity = document.getElementById("person2");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="person2" position="9.5 1.2 -4" rotation="0 160 0"></a-entity>
  );
}

export default Person2;
