window.speedup = newRate => Array.from(document.querySelectorAll('audio,video')).forEach(n => (n.playbackRate = newRate));
