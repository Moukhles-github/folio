$( document ).ready(function() {
    

    $('.dropdown-content > li > a').on('click', function(){
      $("html, body").animate({
       scrollTop: $($.attr(this, 'href')).offset().top
     },500);
    }) 
 
    $('.title-arrow-img a').on('click', function(){
      $("html, body").animate({
       scrollTop: $($.attr(this, 'href')).offset().top
     },500);
    }) 
 
 
    $('.title-arrow-img a').on('click', function(){
      $("html, body").animate({
       scrollTop: $($.attr(this, 'href')).offset().top
     },500);
    }) 
    
    $('.btn-container > a').on('click', function(){
     $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },500);
    }) 
 
 // Get the modal
 var modal = document.getElementById("myModal");
 
 // Get the button that opens the modal
 var btn = document.getElementById("btn-resume");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 
 
 
 });
  