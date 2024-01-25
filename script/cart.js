$(document).ready(function(){
    updateCartCount();
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var total = 0;
    cart.forEach(function(product, index){
        $('#cartTable tbody').append('<tr><td>' + product.name + '</td><td class="quantity">' + product.quantity + '</td><td>$' + product.price + '</td><td><button class="btn btn-danger remove-from-cart" data-index="' + index + '">Remove</button></td></tr>');
        total += product.quantity * product.price;
    });
    $('#totalPrice').text(total.toFixed(2));

    $('.remove-from-cart').on('click', function(){
        var index = $(this).data('index');
        if(cart[index].quantity > 1){
            cart[index].quantity--;
            $(this).closest('tr').find('.quantity').text(cart[index].quantity);
            $('#totalPrice').text((parseFloat($('#totalPrice').text()) - cart[index].price).toFixed(2));
        } else {
            cart.splice(index, 1);
            $(this).closest('tr').remove();
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
});
function updateCartCount(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    $('#cart-count').text(cart.length);
}

