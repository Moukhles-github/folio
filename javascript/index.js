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
    var values = [pname, pemail, psubject, ptext];



    alert(escape(pname));
    // if (checkvalues(values) && checkemail(pemail))
    // {
    //     submitmessage(pname, pemail, psubject, ptext);
    // }
    // else {

      
    // }

  })




  function checkemail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var check = regex.test(email);
    if (check)
    {
      return check; 
    }
    else{
      var emptyfieldsalert = $("#contact-empty-fields");
      emptyfieldsalert.text("Please Set a Correct Address ");
      emptyfieldsalert.css("visibility", "visible");
      return check;
    }
  }


  function checkvalues(values) //takes an array
  {
    var emptyfieldsalert = $("#contact-empty-fields");
    var flag = true;
    for (var i = 0; i < values.length; i++) {
      if (values[i] == "") {
        flag = false;
        var emptyinput = $(".contact-form-container").children().siblings().eq(i).children().eq(0);
        emptyinput.css("color", "red");
        emptyfieldsalert.text("Please fill the empty fields.*");
        emptyfieldsalert.css("visibility", "visible");
      }
      else {
        var emptyinput = $(".contact-form-container").children().siblings().eq(i).children().eq(0);
        emptyinput.css("color", "red");
      }
    }

    if (flag) {
      emptyfieldsalert.css("visibility", "hidden");
      return true;
    }
    else {
      
      return false;
    }

  }



  // Insert the values 
  function submitmessage(pname, pemail, psubject, ptext) {

    values = [pname, pemail, psubject, ptext];

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
          $("#contact-empty-fields").css("visibility", "visible");
          $("#contact-empty-fields").css("color", "black");
          $("#contact-empty-fields").text("Message Sent!");

          setTimeout(() => { emptyvalues(values), $("#contact-empty-fields").css("visibility", "hidden"); }, 500);

        }
        else {
          data = JSON.parse(xhr.responseText);

        }
      },
      error: function (xhr, status, errorThrown) {

        alert(status + errorThrown);
      }
    })

  }


  function emptyvalues(values) {


    for (var i = 0; i < values.length; i++) {
      if (values[i] !== "") {

        var emptyinput = $(".contact-form-container").children().siblings().eq(i).children().eq(1).val("");

      }
      // else {
      //   var emptyinput = $(".contact-form-container").children().siblings().eq(i).children().eq(1);
      //   emptyinput.css("color", "black");
      // }
    }
  }

  ///////////////////////////// /////////////////////////
})



