function myFunction() {
    document.getElementById("drp-content").classList.toggle("show");
    console.log("show added")
}

window.onclick = function (event) {
  if (!event.target.matches('.drpbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;

      console.log(dropdowns.length)
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              console.log("show removed");
          }
      }
  }
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}