
$(document).ready(function(){
//    $('.PETE').hide(function(){
//        alert("hidden");
//    });
//    $('.PETE').click(function(){
//        alert("hidden");
//    });

    //    alert("ready");
    //    $(".clickRadio").mouseenter(function(){
    //        alert("mouseenter");
    //        _gaq.push(['_trackEvent', 'onClick', 'Click']);
    //    });
    //    $(".clickRadio").click(function(){
    //        alert("click");
    //        _gaq.push(['_trackEvent', 'onClick', 'Click']);
    //    });
    //    $(":radio").click(function(){
    //        alert(":radio click");
    //        _gaq.push(['_trackEvent', 'onClick', 'Click']);
    //    });

    var bootstrapButton = $.fn.button.noConflict(); // return $.fn.button to previously assigned value
    $.fn.bootstrapBtn = bootstrapButton;            // give $().bootstrapBtn the bootstrap functionality



});
