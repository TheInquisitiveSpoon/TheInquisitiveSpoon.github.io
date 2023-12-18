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

window.onload = function() {
    openCity(event, 'London')
    document.getElementById("programming").className += " active";
};
function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log("hidden")
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
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

// Call the function on page load
moveElementOnResize();

// Call the function on window resize
window.addEventListener('resize', moveElementOnResize);