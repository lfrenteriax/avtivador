/*  
// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'ics76K5KvjA',
      loop: 1,
      events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
    });


  }
  var onePlay=0;
  function onPlayerReady(event) {
        event.target.playVideo();
        player.mute();
      }
  function onPlayerStateChange(event) {
    console.log( YT.PlayerState.PLAYING)
    console.log(player.getPlayerState())
    if(!player.getPlayerState())
      onePlay=1;
    if (player.getPlayerState()!=2 && onePlay)
      gnrBtn.style.display='block';
    else{
      gnrBtn.style.display='none';
      if(player.getPlayerState()==2)
        alert('no pause el video...');
    }

  }


var  gnrBtn =document.getElementById('gnrBtn');
*/
function activar() {
    // body...
    alert('Activando');
    document.getElementById('msg').innerHTML= "Activando";
    front.send("hello from front");
  }
alert("hola")
