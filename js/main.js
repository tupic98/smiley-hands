var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
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
      var slideIndex2 = 1;
      showDivs(slideIndex2);

      function plusDivs(n) {
        showDivs(slideIndex2 += n);
      }

      function currentDiv(n) {
        showDivs(slideIndex2 = n);
      }

      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides2");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) {slideIndex2 = 1}    
        if (n < 1) {slideIndex2 = x.length}
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" w3-red", "");
        }
        x[slideIndex2-1].style.display = "block";  
        dots[slideIndex2-1].className += " w3-red";
      }

      $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });
      function chbg() {
        document.getElementsByClassName('protocol_container').style.backgroundColor = "#465da7ad";
    }   
      var startPosition =  document.getElementById("Inicio");
var home_btn =  document.getElementById("HomeBtn");

home_btn.addEventListener("click", scrollToStart);
window.addEventListener("scroll", homeBtnControl);

function scrollToStart(){
    window.scroll({
        top: startPosition,
        behavior:"smooth"
    });
}

function homeBtnControl(){
    var posY = window.pageYOffset;

    if(posY <= startPosition){
        home_btn.style.visibility = "hidden";
    }else{
        home_btn.style.visibility = "visible";
    }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

