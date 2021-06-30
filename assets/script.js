
//Current date and updating the current time every second
var dateNow = moment().format('MMM DDDo, YYYY')
$('#currentDate').text('The current date is ' + dateNow + '\;'); //displays current date (doesn't update if midnight is passed!)

var updateTime = function () {
    var currentTime = moment().format('h:mm:ss');
    $("#time").text(currentTime) //displays the currentTime on the #time element
}
setInterval(updateTime, 1000); //updates the clock on the webpage