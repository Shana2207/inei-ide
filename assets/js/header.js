window.onscroll = function() {
    var y = window.scrollY;
    if(y > 1000){
        $('#nav1').addClass('fixed');
        $('#nav1').show(); // OCULTAR
    }
    else{
        $('#nav1').hide(); // OCULTAR
    }
    console.log(y);
};
