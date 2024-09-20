let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good afternoon sir");
  } else {
    speak("Good Evening sir");
  }
}

window.addEventListener("load", () => {
  wishMe();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript.toUpperCase();
  console.log(transcript);
  takeCommand(transcript);
};
btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  message = message.toLowerCase();
  if (message.includes("hello") || message.includes("hey")) {
    speak("Hello Sir, What Can I help You?");
  } else if (
    message.includes("about yourself") ||
    message.includes("who are you")
  ) {
    speak(
      "I am Jimmy, A virtual assistance,creted by aditya sir, built to assist with a variety of task."
    );
  } else if (message.includes("open youtube")) {
    speak("Opening Youtube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("Opening google");
    window.open("https://www.google.com/", "_blank");
  } else if (message.includes("open facebook")) {
    speak("Opening facebook");
    window.open("https://www.facebook.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("Opening instagram");
    window.open("https://www.instagram.com/", "_blank");
  } else if (message.includes("open calculator")) {
    speak("Opening calculator");
    window.open("calculator://");
  } else if (message.includes("open aditya")) {
    speak("Opening whatsapp");
    window.open("WhatsApp://");
  } else if (message.includes("open github")) {
    speak("Opening git hub");
    window.open("https://github.com/", "_blank");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("open linkedin")) {
    speak("Opening Linkdin");
    window.open("https://in.linkedin.com/", "_blank");
  } else if (message.includes("open my linkedin")) {
    speak("Opening your Linkdin");
    window.open("https://www.linkedin.com/in/adityakumarshaw/", "_blank");
  } else if (message.includes("open my facebook")) {
    speak("Opening your facebook");
    window.open("https://www.facebook.com/aditya.shaw.77377692", "_blank");
  } else if (message.includes("thankyou")) {
    speak("You're welcome sir! Let me know if you need anything else!");
  } else if (message.includes("open my github")) {
    speak("Opening your github");
    window.open("https://github.com/Itadi02", "_blank");
  } else if (message.includes("open my instagram")) {
    speak("Opening your instagram");
    window.open("https://www.instagram.com/its___adi02/", "_blank");
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(date);
  } else {
    let final_text =
      "This is what i found on internet regarding " +
      message.replace("jimmy", "");
    speak(final_text);
    window.open(
      `https://www.google.com/search?q=${message.replace("jimmy", "")}`
    );
  }
}
