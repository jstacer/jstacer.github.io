
/* Evaluate Query String params on page load */

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
var day  = document.getElementById("sel1");
var time = document.getElementById("sel2");
var button = document.getElementById("mainButton");
var btnEnabled = false;
if(token == 'xhs7e98jhs2621bncjd94h5y39fjf9'){
    day.disabled = false;
    time.disabled = false;
    button.disabled = false;
    btnEnabled = true;
}

/* Functions */

function btnWasEnabled(){
    return btnEnabled;
}

function fadeOut(){
	$("#before").fadeOut(2000);
	$("#after").delay(3000).fadeIn(2500);
	page.classList.toggle("bg_heart");
	$('#top').delay(5000).queue(function(){
	  $(this).removeClass("bg_heart");
	});
}

function otherFadeOut(){
	$("#before").fadeOut(2000);
	$("#other").delay(3000).fadeIn(2500);
}

function sendPost(d,t) {
	$.get("https://tzhluzazh0.execute-api.us-east-1.amazonaws.com/confirm/yes");
	$.ajax({
        type: "POST",
        url: "https://hookb.in/MqpNbld2pPC0zYjl06we",
        data: JSON.stringify({
            "date": d,
            "time" : t
        }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("done.");
        }
    });
}

function sendPostNoText() {
	$.ajax({
        type: "POST",
        url: "https://hookb.in/MqpNbld2pPC0zYjl06we",
        data: JSON.stringify({
            "response": "Sorry, none of those dates will work for us"
        }),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log("done.");
        }
    });
}

function heartClick() {
    $.get("https://tzhluzazh0.execute-api.us-east-1.amazonaws.com/confirm/heartclick");
}
 
function custConfirm(title, msg) { /*change*/
        var $content =  "<div class='dialog-ovelay'>" +
                        "<div class='dialog'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='fa fa-close'></i>" +
                     "</header>" +
                     "<div class='dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='controls'>" +
                             " <button class='button button-danger doAction'>Yes</button> " +
                             " <button class='button button-default cancelAction'>Cancel</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
    $('body').prepend($content);

	$('.doAction').click(function () {
	    $(this).parents('.dialog-ovelay').fadeOut(5, function () {
	    	$(this).remove();
	    });
        custConfirmCereal("", "Are you cereal?");
	});

    $('.cancelAction, .fa-close').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(5, function () {
        	$(this).remove();
        });
    });
}

function custConfirmCereal(title, msg) { /*change*/
        var $content =  "<div class='dialog-ovelay'>" +
                        "<div class='dialog'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='fa fa-close'></i>" +
                     "</header>" +
                     "<div class='dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='controls'>" +
                             " <button class='button button-danger doAction'>Yes</button> " +
                             " <button class='button button-default cancelAction'>Cancel</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
    $('body').prepend($content);

    $('.doAction').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(5, function () {
            $(this).remove();
        });
        custConfirmSuperCereal("", "Super cereal?");
    });

    $('.cancelAction, .fa-close').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(5, function () {
            $(this).remove();
        });
    });
}

function custConfirmSuperCereal(title, msg) { /*change*/
        var $content =  "<div class='dialog-ovelay'>" +
                        "<div class='dialog'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='fa fa-close'></i>" +
                     "</header>" +
                     "<div class='dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='controls'>" +
                             " <button class='button button-danger doAction'>Yes</button> " +
                             " <button class='button button-default cancelAction'>Cancel</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
    $('body').prepend($content);

    $('.doAction').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(500, function () {
            $(this).remove();
        });
        sendPostNoText();
        otherFadeOut();
    });

    $('.cancelAction, .fa-close').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(5, function () {
            $(this).remove();
        });
    });
}

function finalConfirm(title, msg, date, time) { /*change*/
        var $content =  "<div class='dialog-ovelay'>" +
                        "<div class='dialog'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='fa fa-close'></i>" +
                     "</header>" +
                     "<div class='dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='controls'>" +
                             " <button class='button button-danger doAction'>Yes</button> " +
                             " <button class='button button-default cancelAction'>Cancel</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
    $('body').prepend($content);

    $('.doAction').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(500, function () {
            $(this).remove();
        });
        sendPost(date, time);
        confirmation.innerHTML = time + " on " + date + "!";
        fadeOut();
    });

    $('.cancelAction, .fa-close').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(5, function () {
            $(this).remove();
        });
    });
}

function custAlert(title, msg) { /*change*/
        var $content =  "<div class='dialog-ovelay'>" +
                        "<div class='dialog'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='fa fa-close'></i>" +
                     "</header>" +
                     "<div class='dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='controls'>" +
                             " <button class='button button-danger doAction'>OK</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
    $('body').prepend($content);

    $('.doAction').click(function () {
        $(this).parents('.dialog-ovelay').fadeOut(5, function () {
            $(this).remove();
        });
    });
}
