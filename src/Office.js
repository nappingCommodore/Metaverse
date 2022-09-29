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
      <a-entity id="ofc" position="-5 0 6" scale="5 3 5" light="color: #AFA; intensity: 2; type: hemisphere;"></a-entity>
  );
}

export default Ofc;
