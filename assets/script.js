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
$('#9').val(localStorage.getItem('9'));
$('#10').val(localStorage.getItem('10'));
$('#11').val(localStorage.getItem('11'));
$('#12').val(localStorage.getItem('12'));
$('#13').val(localStorage.getItem('13'));
$('#14').val(localStorage.getItem('14'));
$('#15').val(localStorage.getItem('15'));
$('#16').val(localStorage.getItem('16'));
$('#17').val(localStorage.getItem('17'));




var timeColor = function(){
  
  var currentTime = moment().format('HH').toString();
  console.log(currentTime)  
  
  var hour=$(this).children(".text-block").attr('id');


$("text-block").each(function(){

  if (currentTime < hour) {
    $('textarea').addClass("past");
  } else if (currentTime > hour) {
      $("textarea").addClass("future");
  } else {
      $("textarea").addClass("present");
  }

 
})

}

 timeColor ();

// var timeColor = function(){

  
//   var hour;
//   var prefix = 'hour';

//   var currentTime = moment().format('HH').toString();
//   console.log(currentTime)  

//   for (var i = 9; hour = document.getElementById(prefix + i); i++) {
    
//     if (currentTime < hour) {
//       $('textarea').addClass("past");
//     } else if (currentTime > hour) {
//         $("textarea").addClass("future");
//     } else {
//         $("textarea").addClass("present");
//     }

//   }
  
// }


