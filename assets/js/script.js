'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// fetch('./assets/js/images.json')
// .then(response => response.json())
// .then(data => {
//     // Get image gallery container
//     const imageGallery = document.getElementById('image-gallery');
    
//     // Loop through images and create thumbnails
//     for (let i = 0; i < data.images.length; i++) {
//         const imageContainer = document.createElement('div');
//         imageContainer.classList.add('image-container');
        
//         const img = document.createElement('img');
//         img.classList.add('thumbnail');
//         img.src = data.images[i].src;
//         img.alt = data.images[i].alt;
//         img.width = 1000; // Set the width to 400 pixels
//         img.height = 1000;
//         // Apply rounded corners to the thumbnail image
//         img.style.borderRadius = '10%';
        
//         const description = document.createElement('div');
//         description.classList.add('image-description');
//         description.textContent = data.images[i].description;
        
//         // Create view image button
//         const viewImageButton = document.createElement('button');
//         viewImageButton.textContent = 'View Image'; // Set button text
//         viewImageButton.classList.add('view-image-button'); // Add custom class for styling
        
//         // Add click event listener to open image in a new tab
//         viewImageButton.addEventListener('click', function() {
//             window.open(data.images[i].src, '_blank');
//         });
        
//         // Create a div for centering the button
//         const centerDiv = document.createElement('div');
//         centerDiv.classList.add('center-div');
//         centerDiv.appendChild(viewImageButton);
        
//         imageContainer.appendChild(img);
//         imageContainer.appendChild(description);
//         imageContainer.appendChild(centerDiv); // Append centered view image button
        
//         imageGallery.appendChild(imageContainer);
        
//     }
// })
// .catch(error => console.error(error));



let http = new XMLHttpRequest();


http.open('get', './assets/js/images.json', true)

http.send();

http.onload =function(){

  if(this.readyState == 4 && this.status == 200){

    let images = JSON.parse(this.responseText);

    let output = "";


    for(let item of images){
      output += `
      
        <div class="image">
          <a href="${item.image}"><img src="${item.image}" alt="${item.image}"></a>
          <p class="title">${item.title}</p>
          <p class="description">${item.description}</p>
          <p class="btn">${item.button}</p>
        </div>
      `;
    }

    document.querySelector(".images").innerHTML = output;
  }
}


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});