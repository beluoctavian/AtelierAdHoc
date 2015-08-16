jQuery(document).ready(function($) {
    $('[class^="bjqs-slider"]').each(function(i, obj){
        console.log('.' + obj.className)
        $('.' + obj.className).bjqs({
            automatic : false,
            showmarkers: false
        })
    })
    $(".cover").click(function() {
        $(this).siblings('.hide-content').slideToggle("slow");
    });
});