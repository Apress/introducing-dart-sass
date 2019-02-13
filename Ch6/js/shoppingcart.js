$(document).ready(function() {
  
  var check = false;

  function changeVal(el) {
    var qt = parseFloat(el.parent().children(".qt").html());
    var price = parseFloat(el.parent().children(".price").html());
    var eq = Math.round(price * qt * 100) / 100;
    
    el.parent().children(".full-price").html(eq.toFixed(2));
    
    changeTotal();  

    var cartQty = 0
    $(".qt").each(function(index){
      cartQty += parseFloat($(".qt").eq(index).html());
    });

    $(".carttotal span").html(cartQty + " items");      
  }

  function changeTotal() {   
    var price = 0;
    
    $(".full-price").each(function(index){
      price += parseFloat($(".full-price").eq(index).html());
    });
    
    price = Math.round(price * 100) / 100;
    var tax = Math.round(price * 0.05 * 100) / 100;
    var shipping = parseFloat($(".shipping span").html());
    var fullPrice = Math.round((price + tax + shipping) *100) / 100;
    
    if(price == 0) {
      fullPrice = 0;
    }
    
    $(".subtotal span").html(price.toFixed(2));
    $(".tax span").html(tax.toFixed(2));
    $(".total span").html(fullPrice.toFixed(2));  
  }

  $(".remove, .removebtn").on("click", function(){
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(function(){
      el.parent().parent().slideUp('fast', function() { 
        el.parent().parent().remove(); 
        if($(".product").length == 0) {
          if(check) {
            $("#cart").html("<h1>Checkout does not function yet</h1>");
          } else {
            $("#cart").html("<h1>There are no products in your cart.</h1>");
          }
        }
        changeTotal();
        changeVal(el);
      });
    }, 200);
  });
    
  $(".qt-plus").on("click", function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    
    var el = $(this);
    changeVal(el);
  });
    
  $(".qt-minus").click(function(){
    child = $(this).parent().children(".qt");
      
    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }
      
    $(this).parent().children(".full-price").addClass("minus");
      
    var el = $(this);
    el.parent().children(".full-price").removeClass("minus"); 
    changeVal(el);
  });
        
  $(".btn").on("click", function(){
    check = true;
    $(".remove").trigger("click");
  });
});
