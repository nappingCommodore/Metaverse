import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import officeModel from './models/office_building.glb';

function Ofc() {
  const loader = new GLTFLoader();
  loader.load(officeModel, (d) => {
    const entity = document.getElementById("ofc");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="ofc" position="0 10 0" scale="0.07 0.05 0.07" light="color: #AFA; intensity: 2; type: hemisphere;"></a-entity>
  );
}

export default Ofc;
