
var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
        
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            console.log(pos);
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            console.log(this.scrollY);
            $this.css({
                position: 'fixed',
                top: 100
            });
        }
    });
};

$('#infoImg').followTo(900);
$(function() {
    $('.movieBut').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});