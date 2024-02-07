var Data;
var cart = 0;
var cartArray = []

$("#mugs").click(function(){
$.get("/api/mugs", function(data) {
        console.log(data)
       Data = data;

        function myfunction(){
            alert("hello")
        }
        function makeStrings(i){
        var nameOfProduct= JSON.stringify(data[i].nameOfProduct)
        var price= JSON.stringify(data[i].price)
        var img= JSON.stringify(data[i].img)
        var productId= JSON.stringify(data[i]._id)

        $("#forth").append('<div class="col-lg-3 col-md-6 sm-col-12"><h3 class = "merch-heading">'+ nameOfProduct+'</h3><img id = "bob" class="img-fluid img-thumbnail" src= '+ img +'  alt=""><p class = "price">'+ price +'<button id = '+ productId +' >add to cart</button></p></div>')
    } 
    makeStrings(0)
    makeStrings(1)
    makeStrings(3)
    makeStrings(4)    

    console.log(Data[3]._id)
})
})


function addToCart(int){
    document.addEventListener('click',function(e){
        if(e.target && e.target.id== Data[int]._id){
            console.log(Data[int]._id)
            cart++
            $('#cart-total').html(cart)
            cartArray.push(Data[int]._id)
            console.log("cartArray : " + cartArray)
        }
    }); 
}
addToCart(0)
addToCart(1)
addToCart(2)
addToCart(3)


$('#checkout').click(function(req, res){
    $.post("/cart", {cart:cartArray})
    .then(function(data) {
      console.log("adding data", data);
      alert("on to checkout...");
      var string = JSON.stringify(req.body)
      res.send(string)
    });
});