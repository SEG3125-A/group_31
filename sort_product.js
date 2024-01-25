$(document).ready(function(){
    var $productRow = $('.d-flex.flex-wrap');
    var $products = $('.col-sm-4', $productRow);
    $products.sort(function(a, b){
        var priceA = parseFloat($(a).find('.card-text').first().text().replace(/[^0-9.]/g, ''));
        var priceB = parseFloat($(b).find('.card-text').first().text().replace(/[^0-9.]/g, ''));
        return priceA - priceB;
    });
    $products.detach().appendTo($productRow);
});

