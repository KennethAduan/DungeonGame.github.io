document.getElementById("strBtn").onclick = function () {
  document.getElementById("frame1").style.display = "none";
  document.getElementById("frame2").style.display = "block";
};

function showImage() {
  var userPick = document.getElementById("pickHere").value;
  if (userPick == "PICK HERE") {
    document.getElementById("parrot").style.display = "none";
    document.getElementById("convict").style.display = "none";
    document.getElementById("fool").style.display = "none";
    document.getElementById("guard").style.display = "none";
    document.getElementById("quesBox").value = "";
    document.getElementById("resBox").value = "";
  }
  if (userPick == "Parrot") {
    document.getElementById("parrot").style.display = "block";
    document.getElementById("convict").style.display = "none";
    document.getElementById("fool").style.display = "none";
    document.getElementById("guard").style.display = "none";
    document.getElementById("quesBox").value = "";
    document.getElementById("resBox").value = "";
  }

  if (userPick == "Convict") {
    document.getElementById("convict").style.display = "block";
    document.getElementById("parrot").style.display = "none";
    document.getElementById("fool").style.display = "none";
    document.getElementById("guard").style.display = "none";
    document.getElementById("quesBox").value = "";
    document.getElementById("resBox").value = "";
  }

  if (userPick == "Fool") {
    document.getElementById("fool").style.display = "block";
    document.getElementById("parrot").style.display = "none";
    document.getElementById("convict").style.display = "none";
    document.getElementById("guard").style.display = "none";
    document.getElementById("quesBox").value = "";
    document.getElementById("resBox").value = "";
    alert("CLUE: ASK FOOL ONE BY ONE (FIRST, SECOND, THIRD)");
  }

  if (userPick == "Guard") {
    document.getElementById("guard").style.display = "block";
    document.getElementById("parrot").style.display = "none";
    document.getElementById("convict").style.display = "none";
    document.getElementById("fool").style.display = "none";
    document.getElementById("quesBox").value = "What is the Password?";
    document.getElementById("resBox").value = "";
  }
}

document.getElementById("enterBtn").onclick = function () {
  let userPick = document.getElementById("pickHere").value;
  if (userPick == "Parrot") {
    let parrotQuestion = document.getElementById("quesBox").value;
    document.getElementById("resBox").value = parrotQuestion;
  }

  if (userPick == "Convict") {
    let convictResponse = [
      "Come again, I did not understand",
      "Leave me alone!",
      "Until when you will stop bothering me?",
      "Excuse me, am i talking to you?",
    ];
    let randResponse =
      convictResponse[Math.floor(Math.random() * convictResponse.length)];
    document.getElementById("resBox").value = randResponse;
  }

  if (userPick == "Fool") {
    let foolAsk = document.getElementById("quesBox").value;
    let foolResponse = [
      "The first part stings.",
      "The second part is never-ending.",
      "The last part is a question.",
    ];
    let askConvert = foolAsk.toLowerCase();
    switch (askConvert) {
      case "first":
        document.getElementById("resBox").value = foolResponse[0];
        break;
      case "second":
        document.getElementById("resBox").value = foolResponse[1];
        break;
      case "third":
        document.getElementById("resBox").value = foolResponse[2];
        break;
      default:
        document.getElementById("resBox").value =
          "The right question will be rewarded.";
    }
  }
  if (userPick == "Guard") {
    let userResponse = document.getElementById("resBox").value;
    let userConvert = userResponse.toLowerCase();
    if (userConvert == "boy") {
      alert("YOU ARE NOW FREE!! THANKS FOR PLAYING");
    } else {
      alert("WRONG ANSWER TRY AGAIN!!!");
    }
  }
};

document.getElementById("clearBtn").onclick = function () {
  document.getElementById("quesBox").value = "";
  document.getElementById("resBox").value = "";
};

document.getElementById("fnsBtn").onclick = function () {
  alert("THANK YOU FOR PLAYING!");
  document.getElementById("frame1").style.display = "block";
  document.getElementById("frame2").style.display = "none";
};
