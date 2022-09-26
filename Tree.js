import 'aframe';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import treeModel from './models/tree.glb';

function Tree() {
  const loader = new GLTFLoader();
  loader.load(treeModel, (d) => {
    const entity = document.getElementById("tree");
    entity.object3D.add(d.scene);
  });

  return (
      <a-entity id="tree" position="28 0.5 -8" scale="0.04 0.02 0.02" rotation="0 20 350"></a-entity>
  );
}

export default Tree;
