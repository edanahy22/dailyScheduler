// Global Variables
var currentDayEl=$('#currentDay');

// function to display day
function displayTime() {
  var todayDate = moment().format('dddd, MMM Do');
  currentDayEl.text(todayDate);
}

displayTime();

// save to local storage
$('.saveBtn').on("click", function(){
  var text=$(this).parent().siblings(".text-row").children(".text-block").val();
  console.log(text);
  var time=$(this).parent().siblings(".text-row").children(".text-block").attr('id');
  // console.log(time);

  localStorage.setItem(time, text);
});

// calling from local storage
// console.log(localStorage.getItem('9'));
$('#hour9').val(localStorage.getItem('hour9'));
$('#hour10').val(localStorage.getItem('hour10'));
$('#hour11').val(localStorage.getItem('hour11'));
$('#hour12').val(localStorage.getItem('hour12'));
$('#hour13').val(localStorage.getItem('hour13'));
$('#hour14').val(localStorage.getItem('hour14'));
$('#hour15').val(localStorage.getItem('hour15'));
$('#hour16').val(localStorage.getItem('hour16'));
$('#hour17').val(localStorage.getItem('hour17'));


var timeColor = function(){
  var hour;
  var prefix = 'hour';

  var currentTime = moment().format('HH').toString();
  console.log(currentTime)  

  for (var i = 9; hour = document.getElementById(prefix + i); i++) {
    
    if (currentTime < hour) {
      $('textarea').addClass("past");
    } else if (currentTime > hour) {
        $("textarea").addClass("future");
    } else {
        $("textarea").addClass("present");
    }

  }
  
}

timeColor();

