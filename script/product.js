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
                $(this).hide();
            }
        });
    }

    // Price Filter
    var priceFilter = $('#price-filter');
    var priceFilterValue = $('#price-filter-value');

    priceFilter.on('input', function() {
        priceFilterValue.text($(this).val());
    });

    // Validate Button
    $('#validate-button').click(function() {
        var selectedCategories = [];
        $('#fruits:checked, #vegetarian:checked, #dairy:checked, #sweets:checked, #bakery:checked, #meat:checked, #seafood:checked').each(function() {
            selectedCategories.push(this.id);
        });
        var maxPrice = $('#price-filter').val();
        var sortOrder = $('#price-sort').val();

        console.log(selectedCategories);

        $('.col-sm-4').each(function(){
            var productCategories = $(this).find('.card-text').last().text().toLowerCase().split(', ');
            var productPrice = parseFloat($(this).find('.card-text').first().text().replace('$', ''));
            var showProduct = selectedCategories.length === 0 || selectedCategories.some(category => productCategories.includes(category));

            if(productPrice > maxPrice){
                showProduct = false;
            }

            if(!showProduct){
                $(this).hide();
            } else {
                $(this).show();
            }
        });

        if(sortOrder === 'asc' || sortOrder === 'desc'){
            var sortedElements = $('.col-sm-4:visible').sort(function(a, b){
                var priceA = parseFloat($(a).find('.card-text').first().text().replace('$', ''));
                var priceB = parseFloat($(b).find('.card-text').first().text().replace('$', ''));
                return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
            });
            
            $('#products').empty().append(sortedElements);
        }

        // Reset the price sorting to "None"
        $('#price-sort').val('');
    });
});

function updateCartCount(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    $('#cart-count').text(cart.length);
}
