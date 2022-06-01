var $messages = $(".messages-content");
var serverResponse = "wala";

var suggession;
//speech reco
try {
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
} catch (e) {
  console.error(e);
  $(".no-browser-support").show();
}

$("#start-record-btn").on("click", function (e) {
  recognition.start();
});

recognition.onresult = (event) => {
  const speechToText = event.results[0][0].transcript;
  document.getElementById("MSG").value = speechToText;
  //console.log(speechToText)
  insertMessage();
};

function listendom(no) {
  console.log(no);
  //console.log(document.getElementById(no))
  document.getElementById("MSG").value = no.innerHTML;
  insertMessage();
}

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    serverMessage("Heyy welcome to DeakinSocial chatbot ...---...");
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

// This is displaying the message typed by the user
function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  fetchmsg();

  $(".message-input").val(null);
  updateScrollbar();
}

// this method will be called when the message needs to be displayed i.e. form is submitted
document.getElementById("mymsg").onsubmit = (e) => {
  e.preventDefault();
  //   insert message will display the message on the screen
  insertMessage();
  //   This is then the response message
  //   serverMessage("hello");
  //   This is tts api we can comment it out if we dont want
  //   speechSynthesis.speak(new SpeechSynthesisUtterance("hello"));
};

function serverMessage(response2) {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new"><figure class="avatar"><img src="css/bot.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="css/bot.png" /></figure>' +
        response2 +
        "</div>"
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    updateScrollbar();
  }, 100 + Math.random() * 20 * 100);
}

function fetchmsg() {
  //   var url = "http://localhost:3000/send-msg";
  var host = req.get("host");
  var url = host + "send-msg";

  //   Appending mymsg and loging it
  const data = new URLSearchParams();
  for (const pair of new FormData(document.getElementById("mymsg"))) {
    data.append(pair[0], pair[1]);
    console.log(pair);
  }

  console.log("abc", data);
  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      //   This will be ther reply from server
      serverMessage(response.Reply);
      //   speechSynthesis.speak(new SpeechSynthesisUtterance(response.Reply));
    })
    .catch((error) => console.error("Error h:", error));
}
