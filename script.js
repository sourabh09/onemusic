 var src = "";
 var arr = [];

function getData() {

        $.ajax({
            url: 'https://api.quotable.io/random',
            
            success: function(data) {

              console.log(data);             
              $('.dummy').css("display","none");
            
              

              //$('#facebooklink').attr("href","https://www.facebook.com/sharer/sharer.php?u="+data.content+" - "+data.author);
            }
         
     })

    }

$( document ).ready(function() {
    var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "pause";
  } else {
    audio.pause();
    button.innerHTML = "play_arrow";
  }
});

});

$( document ).ready(function() {

  $.ajax({ 
    type: 'GET', 
    url: 'links.json',
    dataType: 'json',
    success: function (data) { 
     
        console.log(data)

        for (var i=0; i<=data.length-1; i++) {
          
            //alert(data[i].category);         
            arr.push(data[i].link);

        }


      /* $('.item_inner:first-child').click();*/

    }
        });        

/*
    var arr = ['http://192.99.8.192:5032/stream', 'http://66.85.88.174/hitlist', 'http://144.217.203.184:9056/stream',
     'http://stream.joyhits.online:8880/joyhits.mp3'];*/

  var i = 0;

function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we've gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
   
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = arr.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return arr[i]; // give us back the item of where we are now
    
}

window.addEventListener('load', function () {
    document.getElementById('output').textContent = arr[0]; // initial value
    document.getElementById('prev_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('output').textContent = prevItem();
            $("#player").attr("src", arr[i]);
        }
    );
    
    document.getElementById('next_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('output').textContent = nextItem();
            $("#player").attr("src", arr[i]);
        }
    );
});

});

