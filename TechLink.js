import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import techlinkModel from './models/techlink.glb';

function Techlink() {
  const loader = new GLTFLoader();
  loader.load(techlinkModel, (d) => {
    const entity = document.getElementById("techlink");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="techlink" position="9.5 1 3" rotation="0 180 0" scale="0.5 0.5 0.5"></a-entity>
  );
}

export default Techlink;
