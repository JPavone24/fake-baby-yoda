
$("#submit-button").on("click", function() {
  event.preventDefault();
  var User = {
    email: $("#email").val().trim(),
    password: $("#password").val().trim(),
  };
  console.log(User)
  

  $.post("http://localhost:4000/chat", User)
  .then(function(data) {
    console.log("add.html", data);
    alert("Adding character...");
  });

});
  


  
//   // Question: What does this code do??
