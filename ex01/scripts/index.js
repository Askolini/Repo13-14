var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("btn-modal");
var span = document.getElementsByClassName("btn-close")[0];

function myFunction(id) {
    modal.style.display = "block";
    var response = id;
    var frame = document.getElementById("setSrc");
    frame.src = setSrc(response);
}

span.onclick = function() {
    modal.style.display = "none";
};


function setSrc(response) {
    if (response == "image1") {
        return "image01.html";
    }
    if (response == "image2") {
        return "image02.html";
    }
    if (response == "image3") {
        return "image03.html";
    }
    if (response == "image4") {
        return "image04.html";
    }
    if (response == "image5") {
        return "image05.html";
    }
    if (response == "image6") {
        return "image06.html";
    }
    if (response == "image7") {
        return "image07.html";
    }
    if (response == "image8") {
        return "image08.html";
    }
    if (response == "image9") {
        return "image09.html";
    } else {
        return "image10.html";
    }
}