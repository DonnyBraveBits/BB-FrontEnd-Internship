const videoPlayer = $('.discover-vid');

if( videoPlayer ) {

  const videoBtn = $('.discover-play');

  const video = $('.control-video');
  videoPlayer.addEventListener('click', function(e)
  {
    video.style.zIndex = '6';
    // video.play();
  })
}


const videoPlayerHis = $('.history-vid');


if( videoPlayerHis ) {

  const videoBtnHis = $('.history-play');

  const videoHis = $('.control-video--his');
  videoPlayerHis.addEventListener('click', function(e)
  {
    videoHis.style.zIndex = '6';
    // video.play();
  })
}


