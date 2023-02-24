// Moment.js
const currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
const currentHour = moment().format('h:mm:ss a');

// Define a function that takes an hour string and returns the jQuery element with the corresponding ID
const getHourElement = (hour) => $(`#${hour.replace(/:/g, "")}`);

// Create an object with the hours as keys and the corresponding HTML elements as values with JQuery elements
const hours = {
  "08:00 am": getHourElement("8am"),
  "09:00 am": getHourElement("9am"),
  "10:00 am": getHourElement("10am"),
  "11:00 am": getHourElement("11am"),
  "12:00 pm": getHourElement("12pm"),
  "01:00 pm": getHourElement("13pm"),
  "02:00 pm": getHourElement("14pm"),
  "03:00 pm": getHourElement("15pm"),
  "04:00 pm": getHourElement("16pm"),
  "05:00 pm": getHourElement("17pm"),
  "06:00 pm": getHourElement("18pm")
};

//  The getHourElement function takes an hour string as input and returns the jQuery element with the corresponding ID. The hours object maps each hour string to its corresponding jQuery element using the getHourElement function.



let hrs = moment().hours();
let userInput;
let hourSpan;
let saveBtn;


// Display the current date and time in the header.This code sets up an interval that updates the content of an HTML element with the id "currentDay" every 100 milliseconds. The updated content consists of the current date and time in a formatted string.
const updateCurrentTime = () => {
  // Get the current moment
  const momentNow = moment();

  // Format the current date with year, month, day, and weekday (abbreviated to 3 letters in uppercase)
  const currentDate = momentNow.format('YYYY MMMM DD ddd').toUpperCase();

  // Format the current time with hour, minute, second, and AM/PM indicator
  const currentTime = momentNow.format('hh:mm:ss A');

  // Set the content of the HTML element with id "currentDay" to the formatted date and time
  $('#currentDay').html(`${currentDate} ${currentTime}`);
};

// Call the updateCurrentTime function every 100ms to update the current date and time
const intervalId = setInterval(updateCurrentTime, 100);


 


// Save function input data in the form

function hrsPage() {
  console.log("Current hrs " + hrs);

  // Retrieve and set values for each time slot using a loop
  // The time slots are stored in an array
  const timeSlots = ["08:00 am", "09:00 am", "10:00 am", "11:00 am", "12:00 pm", "01:00 pm", "02:00 pm", "03:00 pm", "04:00 pm", "05:00 pm", "06:00 pm"];
// The for loop iterates over the timeSlots array and retrieves the corresponding value from local storage using localStorage.getItem(). The value is parsed using JSON.parse() and stored in the value variable.
  for (let i = 0; i < timeSlots.length; i++) {
    const hour = timeSlots[i];
    const value = JSON.parse(localStorage.getItem(hour));

    // The value is then set to the corresponding input field using jQuery's val() method.
    
    $(`#${hour.replace(/:/g, "")}`).val(value);
  }
}


function setBackground() {
  // Iterate over each form control element
  $(".form-control").each(function () {
    // Get the integer value of the element's ID (representing the hour)
    const hour = parseInt($(this).attr("id"));

    // Get the current hour as an integer
    const currentHour = parseInt(hrs);

    // Add appropriate class to the element based on whether the hour is in the past, present or future
    if (currentHour > hour) {
      $(this).addClass("past");
    } else if (currentHour < hour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}




$(document).ready(function(){
  hrsPage()
  setBackground()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function () {
    const userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    const hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });

  // Button for clear the day
  $("#resetBtn").on("click", function(){
    localStorage.clear();
    hrsPage()
  }) 

});