var stripe = Stripe('pk_test_F1OxKzGHEXtFb42X5iFOGG7F00XEbBOkIU');
var elements = stripe.elements();


// Custom styling can be passed to options when creating an Element.
var style = {
    base: {
      // Add your base input styles here. For example:
      fontSize: '16px',
      color: "#32325d",
    }
  };
  
  // Create an instance of the card Element.
  var card = elements.create('card', {style: style});
  
  // Add an instance of the card Element into the `card-element` <div>.
  card.mount('#card-element');
  
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      console.log(result.token)
      // Send the token to your server.
        xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/chat", true);
        // xhr.setRequestHeader("Content-type", "application/json");
        // xhr.onreadystatechange = function () { 
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         var json = JSON.parse(xhr.responseText);
        //         console.log(json)
        //     }
        // }  
        var data = JSON.stringify(result.token);
        xhr.send(data);
        }   
      // stripeTokenHandler(result.token);
    });
  
  });
// function stripeTokenHandler(token) {
//   // Insert the token ID into the form so it gets submitted to the server
//   var form = document.getElementById('payment-form');
//   var hiddenInput = document.createElement('input');
//   hiddenInput.setAttribute('type', 'hidden');
//   hiddenInput.setAttribute('name', 'stripeToken');
//   hiddenInput.setAttribute('value', token.id);
//   form.appendChild(hiddenInput);

