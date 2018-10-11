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