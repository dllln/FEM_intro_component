$(document).ready(function() {
    $("#basic_form").validate({
        //puts error message
        messages: {
            fname: {
                required: "First name cannot be empty"
            },
            lname: {
                required: "Last name cannot be empty"
            },
            email: {
              email: "Looks like this is not an email"
            },
            pword: {
                required: "Password cannot be empty"
            }
          }
        });
  });