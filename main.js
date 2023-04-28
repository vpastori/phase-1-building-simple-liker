// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('#modal-message');
const likeButtons = document.querySelectorAll('.like-glyph');

document.addEventListener("DOMContentLoaded", () => {

  modal.classList.add("hidden");

  const likeButtons = document.querySelectorAll(".like-glyph");
  for (let button of likeButtons) {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (button.classList.contains("activated-heart")) {
            button.innerHTML = EMPTY_HEART;
            button.classList.remove("activated-heart");
          } else {
            button.innerHTML = FULL_HEART;
            button.classList.add("activated-heart");
          }
        })
        .catch(error => {
          modalMessage.innerHTML = error;
          modal.classList.remove("hidden");
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  }

});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
