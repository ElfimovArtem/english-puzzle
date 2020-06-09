export const addSound = (data, stringNumber) => {
  const voiceBtn = document.getElementById('voice');
  const audio = document.createElement('audio');
  const audioSrc = document.createElement('source');
  const soundUrl = data[stringNumber]['audioExample'];
  audioSrc.setAttribute('src', `${soundUrl}`);

  while (voiceBtn.children[1]) {
    voiceBtn.children[1].remove();
  }

  voiceBtn.onclick = () => {
    voiceBtn.children[1].play();
  };

  audio.append(audioSrc);
  voiceBtn.append(audio);
};
