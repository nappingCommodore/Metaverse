import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import treeModel from './models/tree.glb';

function Tree2() {
  const loader = new GLTFLoader();
  loader.load(treeModel, (d) => {
    const entity = document.getElementById("tree2");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="tree2" position="20 0.5 10" scale="0.04 0.02 0.02" rotation="0 320 350"></a-entity>
  );
}

export default Tree2;
