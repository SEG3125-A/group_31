$(document).ready(function(){
    updateCartCount();

    $('.add-to-cart').on('click', function(e){
        // Your existing code to add an item to the cart...
        updateCartCount();
    });

    $('.remove-from-cart').on('click', function(){
        // Your existing code to remove an item from the cart...
        updateCartCount();
    });
});

function updateCartCount(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    $('#cart-count').text(cart.length);
}
