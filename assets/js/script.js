// Moment.js
const currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
const currentHour = moment().format('h:mm:ss a');
// Text hrs let

let eightAm = $("#8am");
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");
let sixPm = $("#18pm");


let hrs = moment().hours();
let userInput;
let hourSpan;
// let hourString = $(".hrs").text().split(" ");

// Date and hrs

const interval = setInterval(function() {
  let momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);


// Save function input data in the form

function hrsPage() {

  console.log("Current hrs " + hrs);
//   8:00 am local storage
    const hrs8= JSON.parse(localStorage.getItem("08:00 am"));
    // Clear the storage
    eightAm.val(hrs8);

//9:00 am  local storage

  const hrs9= JSON.parse(localStorage.getItem("09:00 am"));
   // Clear the storage
  nineAm.val(hrs9);

//10:00 am  local storage

  const hrs10= JSON.parse(localStorage.getItem("09:00 am"));
  tenAm.val(hrs10)
  

//11:00 am  local storage

    const hrs11= JSON.parse(localStorage.getItem("11:00 am"));
    elevenAm.val(hrs11);

//12:00 pm  local storage

    const hrs12= JSON.parse(localStorage.getItem("12:00 pm"));
    twelvePm.val(hrs12);

//1:00 pm  local storage

    const hrs13= JSON.parse(localStorage.getItem("01:00 pm"));
    onePm.val(hrs13);

//2:00 pm  local storage

    const hrs14= JSON.parse(localStorage.getItem("02:00 pm"));
    twoPm.val(hrs14);

//3:00 pm  local storage

    const hrs15= JSON.parse(localStorage.getItem("03:00 pm"));
    threePm.val(hrs15);

//4:00 pm  local storage

    const hrs16= JSON.parse(localStorage.getItem("04:00 pm"));
    fourPm.val(hrs16);

//5:00 pm  local storage

    const hrs17= JSON.parse(localStorage.getItem("05:00 pm"));
    fivePm.val(hrs17);

//6:00 pm  local storage

    const hrs18= JSON.parse(localStorage.getItem("06:00 pm"));
    sixPm.val(hrs18);


} 

function background () {
      
  $(".form-control").each(function () {
      let timeTest = parseInt($(this).attr("id"));
      hrs = parseInt(hrs);
      console.log(timeTest);
      console.log(hrs);
//      console.log(this);
      if (hrs > timeTest) {
          $(this).addClass("past");
      } else if (hrs < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  hrsPage()
  background()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // Button for clear the day
  $("#resetBtn").on("click", function(){
    localStorage.clear();
    hrsPage()
  }) 

});