


const videos = document.querySelector('#video');
playVideo = ()=> { 
    if (videos.paused) 
      videos.play(); 
    else 
      videos.pause(); 
  };
  const videos2 = document.querySelector('#video2');
playVideo2 = ()=> { 
    if (videos2.paused) 
      videos2.play(); 
    else 
      videos2.pause(); 
  };
  const videos3 = document.querySelector('#video3');
playVideo3 = ()=> { 
    if (videos3.paused) 
      videos3.play(); 
    else 
      videos3.pause(); 
  };
  const videos4 = document.querySelector('#video4');
playVideo4= ()=> { 
    if (videos4.paused) 
      videos4.play(); 
    else 
      videos4.pause(); 
  };

  const play = document.querySelector('#play');
play.addEventListener('click', () =>{
  play.classList.toggle('fa-pause')
});
const play2 = document.querySelector('#play2');
play2.addEventListener('click', () =>{
  play2.classList.toggle('fa-pause')
});
const play3 = document.querySelector('#play3');
play3.addEventListener('click', () =>{
  play3.classList.toggle('fa-pause')
});
const play4 = document.querySelector('#play4');
play4.addEventListener('click', () =>{
  play4.classList.toggle('fa-pause')
});