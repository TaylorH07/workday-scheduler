$(document).ready(function(){
    var currentDay = $("#currentDay");
    currentDay.text(moment().format("dddd, MMMM Do"));

    var saveButton = $(".saveBtn").on("click",function(){
        console.log($(this))

        var currentBtn = $(this);

        var descriptionDiv = $(this).siblings('.description');
        var descriptionText = descriptionDiv.val();

        var hourId = currentBtn.parent().attr('id');

        saveButton.value = localStorage.getItem("task")

        localStorage.setItem(hourId, descriptionText);

        document.getElementsByClassName("description").innerHTML = localStorage.getItem("descriptionText");

    });

    function hourHandler (){
        var currentHour = moment().hours();

        $(".time-block").each(function(index){
            console.log(index, $(this))

            var block = $(this);
            var blockId = block.attr("id");
            var blockHour = blockId.split("-")[1];

            console.log(blockHour)

            if (currentHour == blockHour) {
                $(this).addClass("present");
            } 
            else if (blockHour < currentHour){
                $(this).addClass("past");
            }
             else if (blockHour > currentHour){
                $(this).addClass("future");
            }
        });
    };

    hourHandler();

});