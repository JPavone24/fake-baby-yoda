

    var productArray = ["cute", "sweet", "awesome", "excellent"]
    var nameArray = ["Jessica", "Cassie", "Tyson", "Bob"]
    var priceArray = ["5.99", "6.99", "7.99", "8.99", "9.99", "10.99", "11.99", "12.99"]
    var deptArray = ["toys", "mugs", "fashion", "art"]
    var quantityArray = ["1", "2", "3", "4","5", "6", "7", "8"]
    var descArray = ["guarenteed to melt your heart!", "one of a kind!", "made with love!", "for the Baby Yoda Fan In Your Life!",]
    var num = 15
    
    function MakeMerch(array1){
      return array1 [Math.floor(Math.random() * array1.length)]
    }

$("#submit").on("click", function() {
    event.preventDefault();
    // var Merch = {
    //     nameOfProduct: $("#nameOfProduct").val().trim(),
    //     nameOfSeller: $("#nameOfSeller").val().trim(),
    //     price: $("#price").val().trim(),
    //     department: $("#department").val().trim(),
    //     quantity: $("#quantity").val().trim(),
    //     img: $("#img").val().trim(),
    //     description: $("#description").val().trim(),
    // };
    // console.log(Merch)

    num++
    var dept =  "fashion"
    var adjective = MakeMerch(productArray)
    var adjective2 = MakeMerch(productArray)
    var price = MakeMerch(priceArray)
    var quantity = MakeMerch(quantityArray)
    var seller = MakeMerch(nameArray)
    var desc = MakeMerch(descArray)
  
       var Merch2 = {
        nameOfProduct: adjective + " "  +dept,
        nameOfSeller: seller,
        price: price,
        department: dept,
        quantity: quantity,
        img: "/img/" + dept + "/" + dept + num + ".jpg",
        description: adjective2 + " Baby Yoda " + dept + ", " + desc
    };
    
  console.log(Merch2)
    
    $.post("http://localhost:8080/api/merch", Merch2)
    .then(function(data) {
      console.log("adding data", data);
      alert("Adding Merch...");
    });
  });   