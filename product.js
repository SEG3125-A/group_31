$(document).ready(function(){
    updateCartCount();
    var preferences = JSON.parse(localStorage.getItem('preferences'));
    if(preferences && preferences.length > 0){
        $('.col-sm-4').each(function(){
            var productCategories = $(this).find('.card-text').last().text().split(', ');
            var showProduct = false;
            for(var i = 0; i < preferences.length; i++){
                if(productCategories.includes(preferences[i])){
                    showProduct = true;
                    break;
                }
            }
            if(!showProduct){
                $(this).detach();
            }
        });
    }
});
function updateCartCount(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    $('#cart-count').text(cart.length);
}
