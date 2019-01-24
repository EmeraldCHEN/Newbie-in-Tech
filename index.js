// For the home page

let myIndex = 0;

function carousel() {
  let x = document.getElementsByClassName("happyCoding");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
// Retrieved from  https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr


// For the responsive navigation

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}


// Show / hide answers for Q&A
$(document).ready(function(){
    $(".flip1").click(function(){
        $(".panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".flip2").click(function(){
        $(".panel2").slideToggle("slow");
    });
});