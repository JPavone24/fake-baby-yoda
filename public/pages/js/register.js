
$("#submit-button").on("click", function() {
    event.preventDefault();
    var User = {
      name: $("#name").val().trim(),
      username: $("#username").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
    };
    console.log(User)

    $.post("http://localhost:4002/api/register")
    .then(function(data) {
      console.log("add.html", data);
      alert("Adding character...");
    });
  });  