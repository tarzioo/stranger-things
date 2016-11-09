"use strict";

$('#message-btn').click(function() {
    console.log("Entered message function");
    document.getElementById('six').style.backgroundColor = "rgba(7, 90, 223, 0.5)";
});


// var on = true;
// var selector = "#six";
// var selector = ".bulb";
// setInterval(function() {
//     if(on) { 
//         $(".bulb").addClass('dim');
//         on = false;
//     }
//     else {
//         $(".bulb").removeClass('dim');
//         on = true;
//     }
// }, 2000);



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
