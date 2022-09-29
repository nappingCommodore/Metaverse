import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import logoModel from './models/microsoft_logo1.glb';

function Logo() {
  const loader = new GLTFLoader();
  loader.load(logoModel, (d) => {
    const entity = document.getElementById("logo");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="logo" position="6 5 -4" scale="1 1 1" rotation="0 180 0" light="color: #AFA; intensity: 1" material="color: red; opacity: 2;"></a-entity>
  );
}

export default Logo;
