/*==================================
  1st function toggling the menu bar
 ==================================*/

const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".overlay");

burger.addEventListener('click', function() {
  console.log('burger clicked');
  if(burger.classList.contains("burger-close")) {
    burger.classList.remove("burger-close");
    menu.classList.remove("open-menu");
    overlay.classList.remove("open-overlay");
  }
  else {
    burger.classList.add("burger-close");
    menu.classList.add("open-menu");
    overlay.classList.add("open-overlay");
  }
})

/*==================================
  2nd function opening the modal
 ==================================*/

const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function() {
  console.log("modal btn");
  if(modal.classList.contains("show-modal")) {
    modal.classList.remove("show-modal");
    modalOverlay.classList.remove("open-overlay");
  }
  else {
    modal.classList.add("show-modal");
    modalOverlay.classList.add("open-overlay");
  }
})

closeBtn.addEventListener('click', function() {
  console.log("close btn");
  modal.classList.remove("show-modal");
  modalOverlay.classList.remove("open-overlay");
})

/*==========================================
  3rd function toggle the content modal buy
 ==========================================*/

const modalExtend = document.querySelectorAll(".modal__buy");
// console.log(modalExtend);

modalExtend.forEach(function(extend) {
  console.log(extend);
  const extendBtn = extend.querySelector(".modal__layout");

  extendBtn.addEventListener('click', function() {
    // console.log("title-btn");
    modalExtend.forEach (function (each) {
      if (each !== extend) {
        each.classList.remove("toggle-modal");
      }

      if (each === continueBtn) {
        each.classList.remove("toggle-modal");
      }
    })
    if (extend.classList.contains("toggle-modal")) {
      extend.classList.remove("toggle-modal");
    } 
    else {
      extend.classList.add("toggle-modal");
    }

    closeBtn.addEventListener('click', function() {
      extend.classList.remove("toggle-modal");
    })

    gotBtn.addEventListener('click', function() {
      extend.classList.remove("toggle-modal");
    })
    
    footBtn.forEach(function(contButton) {
      //  console.log(contButton);
       const continueBtn = contButton.querySelector(".continue-btn");
        // console.log(continueBtn);
        continueBtn.addEventListener('click', function() {
          extend.classList.remove("toggle-modal");
        })
      })
  })
})

//i'll try the traversing the dom because I can't do in normal process
// const titleBtn = document.querySelectorAll(".title-btn");

// titleBtn.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const extend = e.currentTarget.parentElement.parentElement.parentElement;
//     if(extend.classList.contains("toggle-modal")) {
//       extend.classList.remove("toggle-modal");
//     }
//     else {
//       extend.classList.add("toggle-modal");
//     }
//   })
// })

/*==========================================
   4rd opening the last modal in modal 1
 ==========================================*/
const continueModal = document.querySelector(".continue-modal");
const footBtn = document.querySelectorAll(".btns"); 
const continueBtn = document.querySelectorAll(".continue-btn");


footBtn.forEach(function(contButton) {
//  console.log(contButton);
 const continueBtn = contButton.querySelector(".continue-btn");
  // console.log(continueBtn);
  continueBtn.addEventListener('click', function() {
    console.log("continue btn");
    modal.classList.remove("show-modal");
    if(continueModal.classList.contains("show-modal2")) {
      continueModal.classList.remove("show-modal2");
    }
    else {
      continueModal.classList.add("show-modal2");
    }
  })
})

/*==========================================
       5th remove all/ return main page
 ==========================================*/

const gotBtn = document.querySelector(".got-it-btn");

gotBtn.addEventListener('click', function() {
  console.log("got clicked");
  modal.classList.remove("show-modal");
  continueModal.classList.remove("show-modal2");
  modalOverlay.classList.remove("open-overlay");
})