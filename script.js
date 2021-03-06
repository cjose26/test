// grabbing the h2 element where the time and date will be displayed
var timeEl = $('#time')
var today = moment();

// setting the time in said element
setInterval(function(){
    $(timeEl).text(today.format("[Hello, today is] LLLL"))
}, 500)

// grabbing modal button
var modalBtn = $('#modal-btn')

// adding an event listener to the modal button and checking to see it works
modalBtn.on('click', function() {
    alert("It's alive!!!")
})