"use strict";


//randomize lights

var randomize = function () {
    console.log("Entered randomize");
    var num = Math.floor(Math.random() * (21)) + 1;
    console.log(num);

};

//place dim class on all lights 
var setAllDim = function () {
    console.log("entered setAllDim");

    var list = document.getElementsByClassName("bulb");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.add('dim');
    }
};

var setAllOn = function () {
    console.log("entered setAllOn");

    var list = document.getElementsByClassName("bulb");
    for (var i = 0; i < list.length; ++i) {
        list[i].classList.remove('dim');
    }
};

// $('#message-btn').click(function() {
//     console.log("Entered message function");
//     document.getElementById('six').style.backgroundColor = "rgba(7, 90, 223, 0.5)";
//     lightIt();
// });


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



/************** Modal *******************************/

// Click function for show the Modal

$(".show").on("click", function(){
  $(".mask").addClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

/*****************END OF MODAL ************************/

/*********************Get message *******************/


// $('#send-message-btn').on('click', function (evt) {
//     var message = $(':input[name=message]').val();
//     console.log(message);
//     closeModal();
//     // sanitize the input
//     message = message.trim().toLowerCase().replace(/[^a-z ]+/g, "");
//     console.log(message);
//     lightIt(message);
// });
    


// var lightIt = function(message) {
//     var letter;
//     var length = message.length;
//     for (var i=0; i < message.length; i++) {
//         letter = message[i];

    

//         $("#" + message[i]).removeClass('dim');
//         console.log(message[i]);
//         setTimeout(function() {
//             $("#" + message[i]).addClass('dim');
//         });

//     }
        

    

// };

var lightIt = function(message) {
    var length = message.length;
    var i = 0;
    while(i < length) {
        setInterval(function(){
            $("#" + message[i]).addClass('dim');
            }, 2000);
        
        i++;
    }
};





var count = function (num) {
    if(num < 10){
    setTimeout(function(){
        num++;
        console.log(num);
        count(num);
    }, 1000);
}

}



$('#send-message-btn').on('click', function (evt) {
    setAllDim();
    var message = $(':input[name=message]').val();
    // sanitize the input
    message = message.trim().toLowerCase().replace(/[^a-z ]+/g, "");
    console.log(message);
   writing(message);
   closeModal();

});



var writing = function (message) {
    console.log("entered writing function");
    console.log(message);
    
    var letter;
    var i = 0;
    var length = message.length;
    var wait = 2000;
    var inBetweenWait = 1000;

    var lightIt = function() {
        $("#" + message[i]).removeClass('dim');
        console.log(message[i]);
        setTimeout(function() {
            $("#" + message[i]).addClass('dim');
            setTimeout(function() {
                i++;
                if(i < length) {
                    lightIt();
                }
            }, inBetweenWait);
        }, wait);
    };
    lightIt();

  
};


