import react from 'react';
import {Howl, Howler} from 'howler';

const SoundPlay = (src) =>{
    const sound = new Howl({
        src,
        html5: true
    })
    sound.play();
};

export default SoundPlay;