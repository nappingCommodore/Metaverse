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
      <a-entity id="logo" position="1.4 7.7 -2" scale="0.5 0.5 0.5" rotation="0 180 0" light="color: #AFA; intensity: 1" material="color: red; opacity: 2;"></a-entity>
  );
}

export default Logo;
