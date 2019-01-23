function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


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