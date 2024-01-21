var time = dayjs().format("dddd D MMM YYYY");
$("#currentDay").text(time);
// Function to update the current time and display it in the first column


function hourUpdate() {
    let currentHour = dayjs().hour();
    $(".time-block").each(function () {
        var hour = ($(this).attr("id").split("-")[1])
        var hourOnDisplay = parseInt(hour)
        if (hourOnDisplay < currentHour) {
            $(this).addClass("past")
        }
        else if (hourOnDisplay === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}
hourUpdate();

$(".saveBtn").on("click",function(){
    var descriptionText = $(this).siblings(".description").val();
    console.log("Input value", descriptionText);

    var hourId = $(this).parent().attr("id");
    localStorage.setItem(hourId,descriptionText);
})

function loadSavedData() {
    $(".time-block").each(function () {
        var hourId = $(this).attr("id");
        var savedDescription = localStorage.getItem(hourId);
        // Check if there's saved data for the specific hour block
        if (savedDescription !== null) {
            // Set the value in the corresponding textarea
            $(this).find(".description").val(savedDescription);
        }
    });
  }
  loadSavedData();
  $(".saveBtn").on ("click", function () {
    var descriptionText = $(this).siblings(".description").val();
    var hourId = $(this).parent().attr("id");
    localStorage.setItem(hourId, descriptionText);
  })

  $(".clearBtn").on("click",function(){
    $(".description").val("");
    localStorage.clear();
  })