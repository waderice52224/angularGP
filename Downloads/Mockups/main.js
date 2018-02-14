var audio = ('Rescources/SynthTest copy.mp3');
function musicPlay() {
    $(".playButton").toggle(function() {
        $(".playButton").append("<img src='Rescources/play.png'>");

    }, function() {
        $(".playButton").replace("<img src='Rescources/pause.png'>");

    });
}
