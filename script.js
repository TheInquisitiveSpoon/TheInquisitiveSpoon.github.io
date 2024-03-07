let slideIndex = 1;
showSlides(slideIndex);

window.onload = function() {
    openSkill(event, 'Programming')
    document.getElementById("programming-tab").className += " active";
    
    showSlides(slideIndex);
    
    // Call the function on page load
    moveElementOnResize();
};

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// function resizeGallery() {
//     let gallery = document.getElementById('gallery');
//     let slides = document.getElementsByClassName("gallery-slide")
//     let activeslide
//    
//     for (i = 0; i < slides.length; i++) {
//         if (window.getComputedStyle(slides[i]).getPropertyValue('display') === "block") {
//             activeslide = slides[i];
//         }
//     }
//    
//     gallery.style.height = activeslide.offsetHeight + 'px';
// }

function myFunction() {
    console.log("myFunction called");
    document.getElementById("drp-content").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.drpbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;

      console.log(dropdowns.length)
      for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              console.log("show removed");
          }
      }
  }
}

let prevScrollpos = window.scrollY;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

function showScrollbar() {
    prevScrollpos = 10000
    document.getElementById("header").style.top = "0";
}

function openSkill(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("skill-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log("hidden")
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("skills-tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        console.log("removed active")
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    console.log("shown active")
}

///////////////////////////////////////////////////
function moveElementOnResize() {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    let threshold = 768;
    
    let elementToMove = document.getElementById("lv-bar");
    let targetLocation = document.getElementById("stats");
    
    if (viewportWidth <= threshold) {
        targetLocation.insertBefore(elementToMove, targetLocation.children[2]);
    } else {
        document.getElementById("stats-right").appendChild(elementToMove);
    }
}

// Call the function on window resize
window.addEventListener('resize', moveElementOnResize);