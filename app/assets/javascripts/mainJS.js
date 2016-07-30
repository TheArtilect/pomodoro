
function startPage(){


  
  function customAlert() {
    var winH = ($(window).height()).toString();
    var diagOverlay = $("#diag-overlay");
    var diagBox = $("#diag-box");
    diagOverlay.css("display", "block");
    diagOverlay.css("height", winH + "px");
    diagBox.css("margin-top", "150px");
    diagBox.css('display', "block");
    $("#diag-box-head").text("END OF BREAK");
    $("#restart").on('click', function() {
      original();
    })
    $("#diag-box-body").text("Let's Get Back To Work!");
  };
  

  function timerStart() {
    setInterval(function() {
      secTimer()
    }, 1000);
    setInterval(function() {
      minTimer();
      breakStart();
    }, 60000);
  }
  
  var min = 24;
  var sec = 60;
  var operator = "";
  
  $("#displayMin").text((min + 1).toString(10));
  $("#displaySec").text('00');
  
  function secTimer() {
    sec -= 1;
    if (sec <= 0) {
      sec = 0;
    };
    $("#displaySec").text(sec.toString(10));
    $("#displayMin").text(min.toString(10));
    if ((min == 0) && (sec == 0)) {
      clearInterval(seconds);
      clearInterval(minutes);
      breakStart();
    };
  }
  
  function minTimer() {
    min -= 1;
    sec = 60;
    if (min <= 0) {
      min = 0;
      sec = 0;
      clearInterval(seconds);
      $("#displayMin").text((min).toString(10));
      $("#displaySec").text('00');
    };
    if ((min == 0) && (sec == 0)) {
      clearInterval(seconds);
      clearInterval(minutes);
      breakStart();
    };
  }
  
  $(".timer-buttons").click(function() {
    operator = $(this).attr("id");
  
    if (operator === "addTimer") {
      min += 1;
      if (sec == 60) {
        sec = 0;
      }
      $("#displayMin").text((min + 1).toString(10));
      $("#displaySec").text(sec.toString(10));
    };
    if (operator === "subTimer") {
      clearInterval(minutes);
      min -= 1;
      sec = 60;
      $("#displayMin").text((min + 1).toString(10));
      $("#displaySec").text("00");
      if (min <= 0) {
        min = 0; /* By Ian Agpawa */
        sec = 60;
        $("#displaySec").text(sec.toString(10));
        $("#displayMin").text("0");
      }
  
    };
  
    if (operator === "addBreak") {
      minBreak += 1;
      $("#displayMin-break").text(minBreak.toString(10));
    };
  
    if (operator === "subBreak") {
      minBreak -= 1;
      $("#displayMin-break").text((minBreak + 1).toString(10));
      if (minBreak <= 0) {
        minBreak = 0;
        minSec = 60;
        $("#displaySec-break").text(secBreak.toString(10));
      }
  
    };
  });
  
  var minBreak = 4;
  var secBreak = 60;
  
  $("#displayMin-break").text((minBreak + 1).toString(10));
  $("#displaySec-break").text('00');
  
  function secBreakTimer() {
    secBreak -= 1;
    if (secBreak <= 0) {
      secBreak = 0;
    };
    $("#displaySec-break").text(secBreak.toString(10));
    $("#displayMin-break").text(minBreak.toString(10));
    if ((minBreak == 0) && (secBreak == 0)) {
      $("#displaySec-break").text(secBreak.toString(10));
      customAlert();
    };
  }
  
  function minBreakTimer() {
    minBreak -= 1;
    secBreak = 60;
    if (minBreak <= 0) {
      minBreak = 0;
      secBreak = 0;
    };
  };
  
  function breakStart() {
    $("body").css("background-color", "#CC9900");
    secondsBreak = setInterval(secBreakTimer, 1000);
    minutesBreak = setInterval(minBreakTimer, 60000);
    $("#displayMin-break").text((minBreak + 1).toString(10));
    $("#start").css('display', 'none');
    $("#pause").css("display", "none");
    $("#display").css('display', "none");
    $("body").css("color", "black");
    $("#break-display").show();
  
  }
  
  var seconds;
  var minutes;
  var secondsBreak;
  var minutesBreak;
  
  $("#start").click(function() {
    seconds = setInterval(secTimer, 1000);
    minutes = setInterval(minTimer, 60000);
  
  });
  
  $("#pause").click(function() {
    clearInterval(seconds);
    clearInterval(minutes);
  })
  
  $("#reset").click(function() {
    original();
  });
  
  function original() {
    clearInterval(seconds);
    clearInterval(minutes);
    clearInterval(secondsBreak);
    clearInterval(minutesBreak);
    min = 24;
    sec = 60;
    minBreak = 4;
    secBreak = 60;
    $("#displayMin").text((min + 1).toString(10));
    $("#displaySec").text('00');
    $("#break-display").css("display", "none");
    $("#display").show();
    $("#start").show();
    $("#pause").show();
    $("body").css("color", "white");
    $("body").css("background-color", "#000d1a");
    $("#diag-overlay").css("display", "none");
    $("#diag-box").css("display", "none")
  };
  
  

}

$(document).ready(startPage);
$(document).on('page:load', startPage);
