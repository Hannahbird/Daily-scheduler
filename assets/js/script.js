// display time in military time and current day
setInterval(function () {
    $("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do H:mm:ss"));
  }, 1);
  // check current time
  var today = parseInt(moment().format("HH"));
  var timeCompare = function () {
    var hourBlockEl = $(".container").children(".hourBlock");
    for (var i = 0; i < hourBlockEl.length; i++) {
      var time = hourBlockEl[i].getAttribute("id").replace("", "");
      time = parseInt(time);
      // compare time to current time and set background color depending on past, present, and future
      if (time > today) {
        $("#" + time).css("backgroundColor", "green");
      }
      else if (time === today) {
        $("#" + time).css("backgroundColor", "red");
      }
      else {
        $("#" + time).css("backgroundColor", "gray");
      }
    }
  }
  // once button is clicked notify client of time and note being saved
  $(".hourBlock").on("click", ".saveBtn", function () {

    var hour = $(this).parent(".hourBlock").attr("id");
    var text = $("#" + hour)
      .children(".textInput")
      .val()
      .trim();
    
    // save to local storage
    localStorage.setItem(hour, text);
  
    save();
  });
  var saveText = function () {
    var pTextEl = $("<span>")
      .addClass("save")
      .html(
        "This has been added to<span class='past'> localStorage</span><i class='bi bi-check2-all'></i>"
      );
    $(".container").prepend(pTextEl);
    var saveInterval = setTimeout(function () {
      $(pTextEl).remove();
    }, 5000) 
  }
  $("#9")
    .children(".textInput")
    .val(localStorage.getItem("9", "input"));
  $("#10")
    .children(".textInput")
    .val(localStorage.getItem("10", "input"));
  $("#11")
    .children(".textInput")
    .val(localStorage.getItem("11", "input"));
  $("#12")
    .children(".textInput")
    .val(localStorage.getItem("12", "input"));
  $("#13")
    .children(".textInput")
    .val(localStorage.getItem("13", "input"));
  $("#14")
    .children(".textInput")
    .val(localStorage.getItem("14", "input"));
  $("#15")
    .children(".textInput")
    .val(localStorage.getItem("15", "input"));
  $("#16")
    .children(".textInput")
    .val(localStorage.getItem("16", "input"));
  $("#17")
    .children(".textInput")
    .val(localStorage.getItem("17", "input"));
  $("#18")
    .children(".textInput")
    .val(localStorage.getItem("18", "input"));
  $("#19")
    .children(".textInput")
    .val(localStorage.getItem("19", "input"));
  $("#20")
    .children(".textInput")
    .val(localStorage.getItem("20", "input"));
  $("#21")
    .children(".textInput")
    .val(localStorage.getItem("21", "input"));
  $("#22")
    .children(".textInput")
    .val(localStorage.getItem("22", "input"));
  timeCompare();