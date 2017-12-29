
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("structure-list");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// project checkpoint model script starts here

// Get the modal
var modalp = document.getElementById('project-Modal');

// Get the button that opens the modal
var btnp = document.getElementById("checkpoint");

// Get the <span> element that closes the modal
var spanp = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btnp.onclick = function() {
    modalp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanp.onclick = function() {
    modalp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalp) {
        modalp.style.display = "none";
    }
}


// tbs script starts here
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// tabs script ends here
 

// script for droapdown toggle starts here
$(document).ready(function(){
    $("#profile-button").click(function(){
        $(".profile-dropdown").animate({top: '120%'});
    });
});
$(document).ready(function(){
    $("body").click(function(){
        $(".profile-dropdown").animate({top: '-50%'});
    });
});