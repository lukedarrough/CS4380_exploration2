$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

})

function getLukeInfo() {
  $.get("/info", function(data, status){
    $("#infoAboutLukeParagraph").html(data);
  });
}

function getLukeOpinion() {
  var num1 = $("#number1").val();
  var num2 = $("#number2").val();;

  if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2) || !Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2)) ) {
    $("#lukeOpinion").html("Please enter two valid numbers");
    return;
  }

  $.get("/opinion",{number1:num1, number2:num2}, function(data, status){
    $("#lukeOpinion").html("<strong>VERDICT:</strong> " + data);
  });
}