$(document).ready(function () {


  ////////////////////////////////////////// Navigation bar on click animation //////////////////////

  $('.dropdown-content > li > a').on('click', function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  })

  $('.title-arrow-img a').on('click', function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  })


  $('.title-arrow-img a').on('click', function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  })

  $('.btn-container > a').on('click', function () {
    $("html, body").animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  })
  ////////////////////////////////////////////////////////////////////////////////////


  ////////////////////////// Resume Modal on click ////////////////////////////////////

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("btn-resume");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////


  ///////////////////////////// Submit Contact form ////////////////////////////////////////


  // Get all values 
  $(".form-btn").on('click', function () {
    var pname = $("#input-name").val();
    var pemail = $("#input-email").val();
    var psubject = $("#input-subject").val();
    var ptext = $("#input-message").val();

    submitmessage(pname, pemail, psubject, ptext);
  })


  // Insert the values 
  function submitmessage(pname, pemail, psubject, ptext) {
    $.ajax({
      type: 'GET',
      url: "./ws/message.ws.php",
      data: ({
        op: 2,
        person_name: pname,
        person_email: pemail,
        person_subject: psubject,
        person_text: ptext,

      }),

      dataType: 'json',
      timeout: 5000,
      success: function (data, textStatus, xhr) {

        if (data != -1) {
          alert("Successful");
          window.location.reload();
        }
        else {
          data = JSON.parse(xhr.responseText);

        }
      },
      error: function (xhr, status, errorThrown) {
   		  
        alert(status + errorThrown);
      }
    }
    )
  }

})
