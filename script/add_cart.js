$(document).ready(function(){
    updateCartCount();
    $('.add-to-cart').on('click', function(e){
        e.preventDefault();
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        var product = { name: $(this).data('name'), price: $(this).data('price'), quantity: 1 };
        var existingProduct = cart.find(function(p){ return p.name === product.name; });
        if(existingProduct){
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
});
function updateCartCount(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    $('#cart-count').text(cart.length);
}