// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$('#currentDay').text(dayjs().format('MMM D, YYYY'));


$(document).ready(function () {

  $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log(text, time);

    localStorage.setItem(time, text);
    localStorage.getItem(time, text);


  });
  function timeTracker() {
    var timeNow = dayjs().format('H');



    $('.time-block').each(function (event) {


      var blockTime = parseInt($(this).attr("id").split("-")[1]);


      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime == timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }

    });
  };




  // $("#clearFieldsButton").on("click", function () {
  //   ("#clearFieldsBtn").click(function (event) {
  //     event.preventDefault;
  //     $("textArea").val("");
  //     localStorage.clear();


      $("hour8 .description").val(localStorage.getItem("hour8"));
      $("hour9 .description").val(localStorage.getItem("hour9"));
      $("hour10 .description").val(localStorage.getItem("hour10"));
      $("hour11 .description").val(localStorage.getItem("hour11"));
      $("hour12 .description").val(localStorage.getItem("hour12"));
      $("hour13 .description").val(localStorage.getItem("hour13"));
      $("hour14 .description").val(localStorage.getItem("hour14"));
      $("hour15 .description").val(localStorage.getItem("hour15"));
      $("hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));


      timeTracker();



    });

  // });

  