$(document).ready(function(){
    updateCartCount();
    // Load preferences from local storage
    var preferences = JSON.parse(localStorage.getItem('preferences'));
    if(preferences){
        preferences.forEach(function(preference){
            $('input[value="' + preference + '"]').prop('checked', true);
        });
        $('#organicPreference').val(localStorage.getItem('organicPreference'));
    }

    // Save preferences to local storage when form is submitted
    $('form').on('submit', function(e){
        e.preventDefault();
        preferences = [];
        $('input[type=checkbox]:checked').each(function(){
            preferences.push($(this).val());
        });
        var organicPreference = $('#organicPreference').val();
        if(organicPreference){
            preferences.push(organicPreference);
        }
        localStorage.setItem('preferences', JSON.stringify(preferences));
    });
});
function updateCartCount(){
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    $('#cart-count').text(cart.length);
}
