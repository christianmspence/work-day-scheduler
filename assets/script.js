


//Show current day at top of page
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//set up click listener for current time stamp and user input data
$(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //user input data and time stamp saved to local storage
    localStorage.setItem(time, text);
})

//loading saved data from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function hourTracker() {
    //get current hour
    var currentHour = moment().hour();
    console.log(currentHour);

    //create a loop
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        //change block color by comparing blockhour with current hour
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}


hourTracker();

