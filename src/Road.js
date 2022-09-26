import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import roadModel from './models/road.glb';

function Road() {
  const loader = new GLTFLoader();
  loader.load(roadModel, (d) => {
    const entity = document.getElementById("road");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="road" position="-4 -4 0" scale="0.02 0.02 0.02"></a-entity>
  );
}

export default Road;
