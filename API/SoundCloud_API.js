1. Initialize SDK
//index.html
<!doctype html>
<html>
    <head>
        <script src="//connect.soundcloud.com/sdk.js"> </script>
        <script src="script.js"></script>
    </head>
    <body>
        
    </body>
</html>

// Script.js
SC.initialize( {
    client_id: 'YOUR_CLIENT_ID'
});

2. Making Requests
//index.html
<!doctype html>
<html>
    <head>
        <script src="http://connect.soundcloud.com/sdk.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <ul id="results">
            
        </ul>
    </body>
</html>


// Script.js
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'metal' }, function(tracks) {
    $(tracks).each(function(index, track) {
     $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
   });
  });
});

3. Authentication 

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
  $('a.connect').click(function(e) {
    e.preventDefault();
SC.connect(function() {
      SC.get('/me', function(me) {
        $('#username').html(me.username);
      });
    });
  });
});


4. Create a Target for the Player Widget

<!doctype html>
<html>
    <head>
        <script src="//connect.soundcloud.com/sdk.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <div id="player"> </div>
    </body>
</html>

5. Fetch a Sound to Play!
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
SC.connect(function() {
SC.get('/tracks/293', function(track) {
  $('#player').html(track.title);
        });
    });
  });

6. Creating the Player Widget
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
SC.connect(function() {
SC.get('/tracks/293', function(track) {
  SC.oEmbed(track.permalink_url, document.getElementById('player'));
        });
    });
 });


7. Exploring SoundManager objects
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.stream('/tracks/293', function(sound) {

  });
});

8. Playing Sounds
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.stream('/tracks/293', function(sound) {
  $('#start').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});
});

9. Building recorder HTML
<!doctype html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="//connect.soundcloud.com/sdk.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <ul>
      <li id="startRecording"><a href="#">Start Recording</a></li>
      <li id="stopRecording"><a href="#">Stop Recording</a></li>
      <li id="playBack"><a href="#">Play Recorded Sound</a></li>
      <li id="upload"><a href="#">Upload</a></li>
    </ul>
    <p class="status"></p>
  </body>
</html>

#stopRecording, #playBack, #upload {
  display: none;
}

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {

});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}


10. Recording with JavaScript
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
$('#startRecording a').click(function(e) {
  $('#startRecording').hide();
  $('#stopRecording').show();
  e.preventDefault();
  SC.record({
    progress: function(ms, avgPeak) {
      updateTimer(ms);
    }
  });
});

$('#stopRecording a').click(function(e) {
  e.preventDefault();
  $('#stopRecording').hide();
  $('#playBack').show();
  $('#upload').show();
  SC.recordStop();
});
});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}


11. Adding Playback funcitonality
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
$('#startRecording a').click(function(e) {
  $('#startRecording').hide();
  $('#stopRecording').show();
  e.preventDefault();
  SC.record({
    progress: function(ms, avgPeak) {
      updateTimer(ms);
    }
  });
});

$('#stopRecording a').click(function(e) {
  e.preventDefault();
  $('#stopRecording').hide();
  $('#playBack').show();
  $('#upload').show();
  SC.recordStop();
});
$('#playBack a').click(function(e) {
    e.preventDefault();
    updateTimer(0);
    SC.recordPlay({
        progress: function(ms) {
            updateTimer(ms);
        }
    });
});
});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}


12. Let's Upload What we've Recorded
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
$('#startRecording a').click(function(e) {
  $('#startRecording').hide();
  $('#stopRecording').show();
  e.preventDefault();
  SC.record({
    progress: function(ms, avgPeak) {
      updateTimer(ms);
    }
  });
});

$('#stopRecording a').click(function(e) {
  e.preventDefault();
  $('#stopRecording').hide();
  $('#playBack').show();
  $('#upload').show();
  SC.recordStop();
});
$('#playBack a').click(function(e) {
    e.preventDefault();
    updateTimer(0);
    SC.recordPlay({
        progress: function(ms) {
            updateTimer(ms);
        }
    });

});
$('#upload').click(function(e) {
    e.preventDefault();
    SC.connect({
      connected: function() {
        $('.status').html('Uploading...');
        SC.recordUpload({
          track: {
            title: 'My Codecademy Recording',
            sharing: 'private'
          }
        }, function(track) {
          $('.status').html("Uploaded: <a href='" + track.permalink_url + "'>" + track.permalink_url + "</a>");
        });
      }
    });
});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}

13. Accessing Comments on a Track
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.get('/tracks/293/comments', function(comments) {
    $.each(comments, function(i, comment) {
      $('#comments').append(
        $('<li></li>').html(comment.body)
      );
    });
  });
});

14. Triggering Events with Comments

15. Posting Comments
