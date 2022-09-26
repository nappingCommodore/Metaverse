import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import personModel from './models/person.glb';

function Person() {
  const loader = new GLTFLoader();
  loader.load(personModel, (d) => {
    const entity = document.getElementById("person");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="person" position="-4 0.8 -8" rotation="-20 150 0"></a-entity>
  );
}

export default Person;
