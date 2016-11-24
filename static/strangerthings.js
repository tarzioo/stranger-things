"use strict";

// $('#message-btn').click(function() {
//     console.log("Entered message function");
//     document.getElementById('six').style.backgroundColor = "rgba(7, 90, 223, 0.5)";
//     lightIt();
// });


var on = true;
var selector = "#six";
var selector = ".bulb";
setInterval(function() {
    if(on) { 
        $(".bulb").addClass('dim');
        on = false;
    }
    else {
        $(".bulb").removeClass('dim');
        on = true;
    }
}, 2000);



// $("#button").click(function() {
//     var message =  $("#messagebox").val();
//     // sanitize the input
//     message = message.trim().toLowerCase().replace(/[^a-z ]+/g, "");
//     var letter;
//     var i = 0;
//     var length = message.length;
//     var wait = 2000;
//     var inBetweenWait = 1000;

//     var lightIt = function() {
//         $("#" + message[i]).addClass('dim');
//         setTimeout(function() {
//             $("#" + message[i]).removeClass('dim');
//             setTimeout(function() {
//                 i++;
//                 if(i < length) {
//                     lightIt();
//                 }
//             }, inBetweenWait);
//         }, wait);
//     };
//     lightIt();

//     for (var i=0; i < message.length; i++) {
//         letter = message[i];

//     }


// });



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("message-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}