import 'aframe';
import sampleVideo from './models/video3.mp4';

function PlayVideo() {

  return (
    <a-video id="penguin-sledding" autoplay loop={true} src={sampleVideo} position="-30 10 -6" width="12" height="9" rotation="0 160 0"></a-video>
    );
}

export default PlayVideo;
