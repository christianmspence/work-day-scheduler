
//Show current day at top of page
$("#currentDay").text(moment().format("MMMM Do YYYY"));

//set up click listener for current time stamp and user input data
$(".saveBtn").on("click", function () {
    
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);

})

