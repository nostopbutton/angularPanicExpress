
$(document).ready(function(){
//    $('.PETE').hide(function(){
//        alert("hidden");
//    });
//    $('.PETE').click(function(){
//        alert("hidden");
//    });

    var bootstrapButton = $.fn.button.noConflict(); // return $.fn.button to previously assigned value
    $.fn.bootstrapBtn = bootstrapButton;            // give $().bootstrapBtn the bootstrap functionality

});
